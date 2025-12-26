const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'public/authors/teshoo-rai.png');
const temp = path.join(__dirname, 'public/authors/teshoo-rai_opt.png');

if (fs.existsSync(target)) {
    const stats = fs.statSync(target);
    console.log(`Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    sharp(target)
        .resize(200) // Author avatar in blog is usually small
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(temp)
        .then(async (info) => {
            console.log(`Optimized size: ${(info.size / 1024).toFixed(2)} KB`);
            fs.unlinkSync(target);
            fs.renameSync(temp, target);
            console.log('Replaced original file.');
        })
        .catch(err => {
            console.error('Error optimizing:', err);
        });
} else {
    console.error('File not found: ' + target);
}
