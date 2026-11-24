/**
 * Indian-rupee price formatting.
 *
 * `Intl.NumberFormat("en-IN")` groups lakh/crore style, so 100000 renders as
 * ₹1,00,000 rather than ₹100,000. The locale is pinned instead of relying on
 * the runtime default so the server and the client always produce the same
 * string (a locale mismatch would otherwise break hydration).
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Whole-percent discount, e.g. 30000 → 24000 = 20. Returns 0 when not a discount. */
export function discountPercent(price?: number, listPrice?: number): number {
  if (price == null || listPrice == null || listPrice <= price) return 0;
  return Math.round((1 - price / listPrice) * 100);
}
