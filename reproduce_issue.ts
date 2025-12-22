
import { validatePhone } from './src/lib/formValidation';

const testNumbers = [
    '9999999999',
    '8888888888',
    '1111111111',
    '+919999999999',
    '1234567890',
];

testNumbers.forEach(num => {
    console.log(`Testing ${num}: ${validatePhone(num)}`);
});
