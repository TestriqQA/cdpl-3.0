import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';

// Configuration constants
const MAX_NAME_LENGTH = 35;
const MIN_NAME_LENGTH = 2;
const MAX_COMPANY_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 1000;

/**
 * Validates a full name.
 * - Must be between 2 and 50 characters.
 * - Allowed: Alphabets, spaces, dots, and hyphens.
 * - No numbers, special characters (@, !, etc.), or emojis.
 * - No repeated characters (e.g., "aaaaa") > 3 times.
 */
export const validateFullName = (name: string): string | null => {
    if (!name || name.trim() === '') {
        return 'Full Name is required.';
    }

    const trimmedName = name.trim();

    if (trimmedName.length < MIN_NAME_LENGTH) {
        return `Full Name must be at least ${MIN_NAME_LENGTH} characters.`;
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
        return `Full Name cannot exceed ${MAX_NAME_LENGTH} characters.`;
    }

    // Regex: Allow letters, spaces, dots, hyphens.
    // Reject numbers and other special chars.
    const nameRegex = /^[a-zA-Z\s\.\'-]+$/;
    if (!nameRegex.test(trimmedName)) {
        return 'Name can only contain letters, spaces, dots, and hyphens.';
    }

    // Check for repeated characters (e.g., "Jaaaaames") - limit to 3 repeats
    if (/(.)\1{3,}/.test(trimmedName)) {
        return 'Name contains invalid character patterns.';
    }

    // Check for obvious bad words or placeholder text if needed (extensible)
    const badPatterns = ['test', 'demo', 'xyz', 'abc'];
    if (badPatterns.includes(trimmedName.toLowerCase())) {
        return 'Please enter a valid name.';
    }

    return null;
};

/**
 * Validates an email address.
 * - Standard regex check.
 * - Length check.
 */
export const validateEmail = (email: string): string | null => {
    if (!email || email.trim() === '') {
        return 'Email Address is required.';
    }

    const trimmedEmail = email.trim();

    if (trimmedEmail.length > 100) {
        return 'Email is too long.';
    }

    // Simple but effective email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
        return 'Invalid email format.';
    }

    return null;
};

/**
 * Validates a phone number.
 * - Uses libphonenumber-js for format.
 * - Checks for sequential digits (12345678).
 * - Checks for repeating digits (11111111).
 * - Checks for all zeros.
 */
export const validatePhone = (phone: string | undefined): string | null => {
    if (!phone || phone.trim() === '') {
        return 'Mobile Number is required.';
    }

    if (!isValidPhoneNumber(phone)) {
        return 'Invalid phone number format.';
    }

    console.log('[Validation] Checking phone:', phone);
    const parsed = parsePhoneNumber(phone);
    console.log('[Validation] Parsed:', parsed ? parsed.nationalNumber : 'null');

    if (!parsed) return 'Invalid phone number.';

    const digits = parsed.nationalNumber as string;

    if (digits.length < 10) {
        return 'Phone number is too short.';
    }

    // Check for all zeros
    if (/^0+$/.test(digits)) {
        return 'Phone number cannot be all zeros.';
    }

    // Check for repeating digits (e.g., 9999999999)
    if (/^(\d)\1+$/.test(digits)) {
        return 'Phone number cannot consist of repeating digits.';
    }

    // Check for sequential digits (e.g., 1234567890 or 9876543210)
    // Simple check for 123456, 987654 etc.
    const isSequential = (num: string) => {
        const seqAsc = "01234567890123456789";
        const seqDesc = "98765432109876543210";
        return seqAsc.includes(num) || seqDesc.includes(num);
    };

    if (isSequential(digits)) {
        return 'Phone number cannot consist of sequential digits.';
    }

    return null;
};

/**
 * Validates a company or organization name.
 * - Checks for code injection patterns (SQL, script tags).
 * - Length check.
 */
export const validateCompany = (company: string): string | null => {
    if (!company || company.trim() === '') {
        return 'Company/Organization Name is required.';
    }

    const trimmedCompany = company.trim();

    if (trimmedCompany.length < 2) {
        return 'Company Name is too short.';
    }

    if (trimmedCompany.length > MAX_COMPANY_LENGTH) {
        return `Company Name cannot exceed ${MAX_COMPANY_LENGTH} characters.`;
    }

    // Code injection / bad pattern check
    const badPatterns = [
        'select ', 'insert ', 'update ', 'delete ', 'drop ', 'union ', '--', ';', // SQL
        '<script', 'javascript:', 'vbscript:', 'onload=', 'onerror=' // XSS
    ];

    const lowerCompany = trimmedCompany.toLowerCase();
    if (badPatterns.some(pattern => lowerCompany.includes(pattern))) {
        return 'Invalid characters or patterns detected in Company Name.';
    }

    // Basic character check - allowing some special chars for company names like '&', '-', '.'
    // but disallowing things that look like code blocks usually don't have
    if (/[<>\{\}\[\]]/.test(trimmedCompany)) {
        return 'Company Name contains invalid characters.';
    }

    return null;
};

/**
 * Validates a message / text area.
 * - Length limits.
 * - Code injection check.
 */
export const validateMessage = (message: string): string | null => {
    if (!message) return null; // Optional usually

    const trimmedMessage = message.trim();

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
        return `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    // Code injection checks
    const lowerMessage = trimmedMessage.toLowerCase();
    // We can be a bit more lenient here, but still block obvious XSS
    if (lowerMessage.includes('<script') || lowerMessage.includes('javascript:')) {
        return 'Invalid content detected in message.';
    }

    return null;
};

/**
 * Validates numeric input like participants.
 */
export const validateParticipants = (count: string | number): string | null => {
    if (!count) return 'Required';
    const num = Number(count);
    if (isNaN(num)) return 'Must be a number';
    if (num < 1) return 'Must be at least 1';
    if (num > 10000) return 'Invalid number';
    return null;
}
