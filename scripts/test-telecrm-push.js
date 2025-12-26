const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testTeleCRM() {
    const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
    const apiToken = process.env.TELECRM_API_TOKEN;
    const apiUrl = process.env.TELECRM_API_URL;

    console.log('--- TeleCRM Test Script ---');
    console.log('Enterprise ID:', enterpriseId);
    console.log('API URL:', apiUrl);

    if (!enterpriseId || !apiToken || !apiUrl) {
        console.error('Error: Credentials or URL missing in .env.local');
        return;
    }

    const leadData = {
        fullName: 'Antigravity Test',
        email: 'test@example.com',
        phone: '+91 99999 88888',
        source: 'Automated Test Script'
    };

    const cleanPhone = leadData.phone.replace(/[^\d+]/g, '');
    const url = `${apiUrl}/enterprise/${enterpriseId}/autoupdatelead`;

    const payload = {
        fields: {
            name: leadData.fullName,
            email: leadData.email,
            phone: cleanPhone,
            source: leadData.source,
            status: 'Fresh',
        },
        actions: [],
    };

    try {
        console.log('Pushing payload:', JSON.stringify(payload, null, 2));
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
        });

        console.log('Success! Status:', response.status);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Failed!');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Message:', error.message);
        }
    }
}

testTeleCRM();
