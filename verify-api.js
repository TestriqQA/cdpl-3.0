const { google } = require('googleapis');

console.log('Checking googleapis services...');
const services = Object.keys(google).filter(k => k.startsWith('mybusiness'));
console.log('Found services:', services);

if (google.mybusinessreviews) {
    console.log('google.mybusinessreviews is AVAILABLE');
} else {
    console.log('google.mybusinessreviews is NOT available');
}
