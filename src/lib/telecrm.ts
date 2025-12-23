import axios from 'axios';

interface TeleCRMField {
    name?: string;
    email?: string;
    phone: string;
    source?: string;
    [key: string]: any;
}

interface TeleCRMPayload {
    fields: TeleCRMField;
    actions: any[];
}

export async function pushLeadToTeleCRM(leadData: {
    fullName: string;
    email: string;
    phone: string;
    source: string;
}) {
    const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
    const apiToken = process.env.TELECRM_API_TOKEN;

    if (!enterpriseId || !apiToken) {
        console.warn('TeleCRM credentials missing. Skipping lead push.');
        return;
    }

    // Clean phone number: remove any non-digit characters except leading '+'
    const cleanPhone = leadData.phone.replace(/[^\d+]/g, '');

    const url = `${process.env.TELECRM_API_URL}/enterprise/${enterpriseId}/autoupdatelead`;

    const payload: TeleCRMPayload = {
        fields: {
            name: leadData.fullName,
            email: leadData.email,
            phone: cleanPhone,
            source: leadData.source,
            status: 'Fresh', // Recommended for new leads to show up in the dashboard
        },
        actions: [],
    };

    try {
        console.log('--- TeleCRM Push Started ---');
        console.log('URL:', url);
        console.log('Payload:', JSON.stringify(payload, null, 2));

        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiToken}`,
            },
        });

        console.log('TeleCRM push successful. Status:', response.status);
        console.log('Response Data:', response.data);
        console.log('--- TeleCRM Push Completed ---');

        return response.data;
    } catch (error: any) {
        console.error('--- TeleCRM Push Failed ---');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Message:', error.message);
        }
        console.error('---------------------------');
        return null;
    }
}
