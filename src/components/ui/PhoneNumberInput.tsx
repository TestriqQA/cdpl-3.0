'use client';

/**
 * BLG-009: single entry point for `react-phone-number-input`.
 *
 * The library's stylesheet is imported here instead of in the root layout,
 * so it is bundled only with routes that actually render a phone field —
 * previously `react-phone-number-input/style.css` shipped on every page.
 *
 * All form components import the phone input from this module.
 */
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default PhoneInput;
