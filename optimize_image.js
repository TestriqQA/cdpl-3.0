const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'public/Trainers_image/TeshooRai.png');
const temp = path.join(__dirname, 'public/Trainers_image/TeshooRai_opt.png');

if (fs.existsSync(target)) {
    const stats = fs.statSync(target);
    console.log(`Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    sharp(target)
        .resize(400) // 400px width is sufficient for avatar
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
    console.error('File not found: ' + target);
    // Try lowercase if case sensitive issue or different name
    const target2 = path.join(__dirname, 'public/Trainers_image/teshoo-rai.png');
    if (fs.existsSync(target2)) {
        console.log('Found lowercase file: ' + target2);
        // ... repeat logic or just update target variable if I could structure better, but simple copy for now:
        const stats = fs.statSync(target2);
        console.log(`Original size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
        sharp(target2)
            .resize(400)
            .png({ quality: 80 })
            .toFile(temp)
            .then(async (info) => {
                console.log(`Optimized size: ${(info.size / 1024).toFixed(2)} KB`);
                fs.unlinkSync(target2);
                fs.renameSync(temp, target2); // Keep original name
                console.log('Replaced original file.');
            })
            .catch(err => console.error(err));
    } else {
        console.error('LowerCase file also not found.');
    }
}
