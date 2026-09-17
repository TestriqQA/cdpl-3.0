import { google } from 'googleapis';
import { Readable } from 'stream';

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
];

const formatPrivateKey = (key: string) => {
    // 1. Remove any surrounding quotes if they somehow got included
    let cleanKey = key.replace(/^"|"$/g, '');

    // 2. Handle escaped newlines (common in .env files)
    if (cleanKey.includes('\\n')) {
        cleanKey = cleanKey.replace(/\\n/g, '\n');
    }

    // 3. Check if it's a one-liner without proper newlines for headers
    // If it has spaces instead of newlines between header/footer and body
    if (!cleanKey.includes('\n') && cleanKey.includes('-----BEGIN PRIVATE KEY-----')) {
        cleanKey = cleanKey
            .replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n')
            .replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');
    }

    return cleanKey;
};

export async function uploadResumeToDrive(fileBuffer: Buffer, fileName: string, mimeType: string) {
    try {
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

        if (!clientEmail || !rawPrivateKey) {
            console.warn('Google Credentials missing for Drive upload.');
            return null;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const drive = google.drive({ version: 'v3', auth });

        const fileMetadata: { name: string; parents?: string[] } = {
            name: fileName,
        };

        if (folderId) {
            fileMetadata.parents = [folderId];
        } else {
            console.warn('GOOGLE_DRIVE_FOLDER_ID is not set. Uploading to root folder.');
        }

        const media = {
            mimeType: mimeType,
            body: Readable.from(fileBuffer),
        };

        const file = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, webViewLink, webContentLink',
            supportsAllDrives: true,
        });

        const fileId = file.data.id;

        // Make the file publicly readable
        if (fileId) {
            await drive.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone',
                },
                supportsAllDrives: true,
            });
        }

        console.log('File uploaded to Drive:', file.data.webViewLink);
        return file.data.webViewLink;

    } catch (error: any) {
        console.error('Drive upload error:', error.message);
        if (error.code === 404) {
            console.error('Possible cause: Folder ID not found or Service Account does not have access.');
        }
        return null;
    }
}

export async function appendRowToSheet(data: {
    date: string;
    fullName: string;
    email: string;
    phone: string;
    source: string;
    type: string;
    interest?: string;
    message?: string;
    /**
     * Retired: the contact form's "What's your goal?" select was replaced by
     * `timeline` + `currentStatus` (step 2 of the two-step hero form). The
     * column is kept so the thousands of historical rows in column I keep
     * their meaning — reusing it for a different question would leave one
     * column holding two different answers.
     */
    goal?: string;
    /** Contact form step 2: "When are you planning to start your course?" */
    timeline?: string;
    /** Contact form step 2: "What best describes you right now?" */
    currentStatus?: string;
}) {
    try {
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!sheetId || !clientEmail || !rawPrivateKey) {
            console.warn('Google Sheets credentials missing. Skipping sheet update.');
            return;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                data.date,
                data.fullName,
                data.email,
                data.phone,
                data.source,
                data.type,
                data.interest || '',
                data.message || '',
                data.goal || '',
                data.timeline || '',
                data.currentStatus || '',
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            // A-K. The two new columns are appended after `goal` rather than
            // replacing it, so every existing column keeps its position and
            // historical rows stay readable.
            range: 'Sheet1!A:K',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Google Sheet updated successfully.');
    } catch (error: any) {
        console.error('Error updating Google Sheet:', {
            message: error.message,
            stack: error.stack,
            data: { fullName: data.fullName, email: data.email }
        });
        // Don't throw, so we don't block the main response, but we've logged the detail
    }
}

export async function appendJobApplicationToSheet(data: {
    date: string;
    position: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    skills: string;
    experienceLevel: string;
    currentCtc: string;
    expectedCtc: string;
    noticePeriod: string;
    resumeLink: string;
    source?: string;
}) {
    try {
        const sheetId = process.env.GOOGLE_SHEET_ID_JOBS || process.env.GOOGLE_SHEET_ID;



        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!sheetId || !clientEmail || !rawPrivateKey) {
            console.warn('Google Sheets credentials missing for Job Application. Skipping sheet update.');
            return;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                data.date,
                data.position,
                data.fullName,
                data.email,
                data.phone,
                data.location,
                data.skills,
                data.experienceLevel,
                data.currentCtc,
                data.expectedCtc,
                data.noticePeriod,
                data.resumeLink.startsWith('http') ? `=HYPERLINK("${data.resumeLink}", "View Resume")` : data.resumeLink,
                data.source || ''
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:M', // columns A-M
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Job Application Google Sheet updated successfully.');
    } catch (error) {
        console.error('Error updating Job Application Google Sheet:', error);
    }
}
