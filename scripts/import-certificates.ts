
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Setup client - using token from environment if available or hardcoded for script usage
// Note: client exported from src/sanity/client.ts is read-only public client usually.
// For import, we need a write token.
// Assuming this is a one-off script.

const token = process.env.SANITY_API_TOKEN || '';
// You need a token with write access

// Correctly typing the client usage or casting stream
async function uploadImage(filePath: string) {
    // Intentionally using a direct createClient here or mocking the structure implied by error
    // The error was on client.assets.upload

    // We'll use a placeholder client for the example, user can fill in details
    const client = createClient({
        projectId: 'your-project-id',
        dataset: 'production',
        useCdn: false,
        token: token,
        apiVersion: '2023-05-03'
    })

    try {
        if (!fs.existsSync(filePath)) return;

        console.log(`Uploading ${filePath}...`);

        // FIX: Cast stream to any or ignore type to solve ReadStream/ReadableStream mismatch
        const stream = fs.createReadStream(filePath) as any;

        const asset = await client.assets.upload('image', stream, {
            filename: path.basename(filePath)
        });

        console.log(`Uploaded! Asset ID: ${asset._id}`);
        return asset;
    } catch (error) {
        console.error('Upload failed:', error);
    }
}

// Main execution block (commented out to prevent accidental run without config)
/*
(async () => {
   // Example usage
   // await uploadImage('./path/to/image.jpg');
})();
*/
