const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env.local');

console.log('Checking environment configuration...');
console.log('Looking for file at:', envPath);

if (!fs.existsSync(envPath)) {
    console.error('ERROR: .env.local file NOT found!');
    process.exit(1);
}

console.log('File found. Loading...');
const result = dotenv.config({ path: envPath });

if (result.error) {
    console.error('Error parsing .env.local:', result.error);
    process.exit(1);
}

const env = result.parsed;

console.log('----------------------------------------');
console.log('Variable Check:');
console.log('EMAIL_USER:', env.EMAIL_USER ? '✅ Found' : '❌ Missing');
console.log('EMAIL_PASS:', env.EMAIL_PASS ? '✅ Found' : '❌ Missing');
console.log('ADMIN_EMAIL:', env.ADMIN_EMAIL ? '✅ Found' : '❌ Missing');
console.log('----------------------------------------');

if (env.EMAIL_USER && env.EMAIL_PASS) {
    console.log('SUCCESS: Credentials appear to be present.');
} else {
    console.error('FAILURE: Missing required credentials.');
}
