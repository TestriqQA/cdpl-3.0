
// Mocking libphonenumber-js for the sake of testing logic if possible, 
// or just testing the regex part which is the custom logic.
// However, the validatePhone relies on isValidPhoneNumber first.

// Let's assume isValidPhoneNumber returns true for these for a moment, or we just test the regex.
// But we should really test the whole function.

const validatePhoneRegexCheck = (digits) => {
    // Check for repeating digits (e.g., 9999999999)
    if (/^(\d)\1+$/.test(digits)) {
        return 'Phone number cannot consist of repeating digits.';
    }
    return null;
}

const numbers = [
    '9999999999',
    '99999999999',
    '1111111111',
    '1234567890'
];

numbers.forEach(n => {
    console.log(`${n}: ${validatePhoneRegexCheck(n)}`);
});
