'use client';

/**
 * BLG-009: single entry point for `react-phone-number-input`.
 *
 * The library's stylesheet is imported here instead of in the root layout,
 * so it is bundled only with routes that actually render a phone field.
 *
 * Code-splitting: `react-phone-number-input` + its `libphonenumber-js`
 * metadata is a heavy dependency that was previously statically bundled into
 * every form-bearing page's initial JS (a real Total Blocking Time cost). It
 * is now loaded via next/dynamic so it lands in its own chunk, fetched after
 * hydration rather than on the critical path. A same-height skeleton stands in
 * while the chunk loads, so there is no layout shift, and every call site keeps
 * passing the exact same props — this is a transparent drop-in, so the
 * react-hook-form value/onChange wiring on all forms is unchanged.
 */
import dynamic from 'next/dynamic';
import 'react-phone-number-input/style.css';

// Preserve the library's exact component type so every call site keeps its
// prop typing (onChange value, defaultCountry, flagComponent, etc.).
type PhoneInputComponent = typeof import('react-phone-number-input')['default'];

/** Matches the real input's height/padding so the swap causes no CLS. */
function PhoneInputSkeleton() {
    return (
        <div aria-hidden="true" className="PhoneInput" style={{ minHeight: '1.5rem' }}>
            <span
                className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
                style={{ visibility: 'hidden' }}
            />
            <input type="tel" inputMode="tel" disabled placeholder="Loading…" className="PhoneInputInput" />
        </div>
    );
}

// ssr:false — the phone widget is interactive-only and below the primary
// content on every form, so server-rendering it buys nothing and would keep
// the heavy lib on the critical path. The skeleton reserves its space.
const PhoneInput = dynamic(() => import('react-phone-number-input'), {
    ssr: false,
    loading: () => <PhoneInputSkeleton />,
}) as unknown as PhoneInputComponent;

export default PhoneInput;
