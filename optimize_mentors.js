const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/mentors_images';

// Convert PNG hero images to WebP
async function convertHeroImages() {
    const heroImages = ['mentors-hero2.png', 'mentors-hero.png'];

    for (const file of heroImages) {
        try {
            const input = path.join(dir, file);
            const baseName = path.basename(file, '.png');
            const output = path.join(dir, `${baseName}.webp`);

            if (!fs.existsSync(input)) {
                console.log(`⚠ ${file} not found, skipping...`);
                continue;
            }

            const stats = fs.statSync(input);
            const sizeBefore = stats.size;

            await sharp(input)
                .webp({ quality: 85, effort: 6 })
                .toFile(output);

            const statsAfter = fs.statSync(output);
            const sizeAfter = statsAfter.size;
            const savings = sizeBefore - sizeAfter;
            const percent = ((savings / sizeBefore) * 100).toFixed(1);

            console.log(`✓ ${file} → ${baseName}.webp: ${sizeBefore} → ${sizeAfter} bytes (${percent}% reduction)`);
        } catch (error) {
            console.error(`✗ Error converting ${file}:`, error.message);
        }
    }
}

// Optimize mentor avatar images
async function optimizeAvatars() {
    const files = fs.readdirSync(dir);
    const avatars = files.filter(f => /\.(jpg|jpeg)$/i.test(f) && !f.includes('_optimized'));

    console.log(`\nFound ${avatars.length} avatar images to optimize`);

    for (const file of avatars) {
        try {
            const input = path.join(dir, file);
            const ext = path.extname(file).toLowerCase();
            const baseName = path.basename(file, ext);
            const webpOutput = path.join(dir, `${baseName}.webp`);

            const stats = fs.statSync(input);
            const sizeBefore = stats.size;

            // Create WebP version
            await sharp(input)
                .resize(108, 108, { fit: 'cover', position: 'top' })
                .webp({ quality: 85, effort: 6 })
                .toFile(webpOutput);

            const statsAfter = fs.statSync(webpOutput);
            const sizeAfter = statsAfter.size;
            const savings = sizeBefore - sizeAfter;
            const percent = ((savings / sizeBefore) * 100).toFixed(1);

            console.log(`✓ ${file} → ${baseName}.webp: ${sizeBefore} → ${sizeAfter} bytes (${percent}% reduction)`);
        } catch (error) {
            console.error(`✗ Error optimizing ${file}:`, error.message);
        }
    }
}

async function main() {
    console.log('Starting image optimization for /mentors page...\n');
    await convertHeroImages();
    await optimizeAvatars();
    console.log('\n✅ All images optimized!');
}

main();
