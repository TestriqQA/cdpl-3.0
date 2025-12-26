const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'public/blog/authors/teshoo-rai.png');
const temp = path.join(__dirname, 'public/blog/authors/teshoo-rai_opt.png');

if (fs.existsSync(target)) {
    const stats = fs.statSync(target);
    console.log(`Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    sharp(target)
        .resize(200) // Author avatar in blog is usually small (e.g. 50x50 or 100x100)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(temp)
        .then(async (info) => {
            console.log(`Optimized size: ${(info.size / 1024).toFixed(2)} KB`);
            // Replace original
            fs.unlinkSync(target);
            fs.renameSync(temp, target);
            console.log('Replaced original file.');
        })
        .catch(err => {
            console.error('Error optimizing:', err);
        });
} else {
    console.error('File not found at: ' + target);
    // Check if it's in public/authors (without blog prefix) just in case
    const target2 = path.join(__dirname, 'public/authors/teshoo-rai.png');
    if (fs.existsSync(target2)) {
        console.log('Found file at: ' + target2);
        const stats = fs.statSync(target2);
        console.log(`Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
        sharp(target2)
            .resize(200)
            .png({ quality: 80 })
            .toFile(temp)
            .then(async (info) => {
                console.log(`Optimized size: ${(info.size / 1024).toFixed(2)} KB`);
                fs.unlinkSync(target2);
                fs.renameSync(temp, target2);
                console.log('Replaced original file.');
            })
            .catch(err => console.error(err));
    }
}
