// Runs `fn` at most once at a time per server process, so the pages a build
// worker renders in parallel share one request instead of each making their own.
//
// - Concurrent callers get the same in-flight promise.
// - A success is reused for `reuseForMs`, covering the gap before the result
//   lands in the Next.js data cache.
// - A failure makes callers fail fast for `retryAfterMs` instead of each retrying.
// - Each attempt is abandoned after `timeoutMs`.
//
// State lives on globalThis (keyed by `key`) because the bundler can load the
// same module more than once in a process; this keeps it to one request.

type FlightState<T> = {
  inflight: Promise<T> | null;
  value: { data: T; at: number } | null;
  failedAt: number;
};

type FlightOptions = {
  timeoutMs: number;
  reuseForMs: number;
  retryAfterMs: number;
};

// Thrown while a recent failure is being backed off; callers can stay quiet on it.
class SingleFlightSkip extends Error {
  name = 'SingleFlightSkip';
}

export function isSingleFlightSkip(error: unknown): boolean {
  return error instanceof Error && error.name === 'SingleFlightSkip';
}

const store = globalThis as typeof globalThis & {
  __singleFlight?: Record<string, FlightState<unknown>>;
};

export function singleFlight<T>(
  key: string,
  fn: () => Promise<T>,
  { timeoutMs, reuseForMs, retryAfterMs }: FlightOptions,
): () => Promise<T> {
  const states = (store.__singleFlight ??= {});
  const state = (states[key] ??= { inflight: null, value: null, failedAt: 0 }) as FlightState<T>;

  return () => {
    const now = Date.now();
    if (state.value && now - state.value.at < reuseForMs) return Promise.resolve(state.value.data);
    if (state.inflight) return state.inflight;
    if (now - state.failedAt < retryAfterMs) {
      return Promise.reject(new SingleFlightSkip(`${key}: skipped, last attempt failed ${Math.round((now - state.failedAt) / 1000)}s ago`));
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error(`${key}: timed out after ${timeoutMs}ms`)), timeoutMs);
    });

    state.inflight = Promise.race([fn(), timeout])
      .then((data) => {
        state.value = { data, at: Date.now() };
        return data;
      })
      .catch((error: unknown) => {
        state.failedAt = Date.now();
        throw error;
      })
      .finally(() => {
        clearTimeout(timer);
        state.inflight = null;
      });

    return state.inflight;
  };
}
