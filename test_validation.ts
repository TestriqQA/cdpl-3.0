
import { validatePhone } from './src/lib/formValidation';

const testNumbers = [
    "+91 9999999999",
    "+91 1111111111",
    "+91 1234567890",
    "+91 9876543210",
    "+91 9820098200", // Valid
    "9999999999",
    "1111111111",
    "1212121212", // Repeating pattern but not single digit
];

testNumbers.forEach(num => {
    const result = validatePhone(num);
    console.log(`Number: ${num} -> Result: ${result}`);
});
