const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public/services/events_servies-hero.png');
const tempPath = path.join(__dirname, 'public/services/events_servies-hero-optimized.png');

async function optimize() {
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
        return;
    }

    try {
        const originalStats = fs.statSync(filePath);
        console.log(`Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);

        // Compress PNG: palette-based if possible or just lossy compression
        await sharp(filePath)
            .resize(800, 800, { // Resize to max 800x800 if it's larger, preserving aspect ratio
                fit: 'inside',
                withoutEnlargement: true
            })
            .png({
                quality: 80,
                compressionLevel: 9,
                palette: true // Attempt to use a palette for smaller size
            })
            .toFile(tempPath);

        const newStats = fs.statSync(tempPath);
        console.log(`New size: ${(newStats.size / 1024).toFixed(2)} KB`);

        if (newStats.size < originalStats.size) {
            fs.renameSync(tempPath, filePath);
            console.log('Optimized file replaced original.');
        } else {
            fs.unlinkSync(tempPath);
            console.log('Optimization did not reduce size. Keeping original.');
        }
    } catch (err) {
        console.error('Error optimizing image:', err);
    }
}

optimize();
