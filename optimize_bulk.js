const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const publicDir = path.join(__dirname, 'public');
console.log('Scanning ' + publicDir + ' for large images...');

walkDir(publicDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const stats = fs.statSync(filePath);
        if (stats.size > 500 * 1024) { // > 500KB
            console.log(`Optimizing: ${path.relative(__dirname, filePath)} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

            let width = 1200;
            const name = path.basename(filePath).toLowerCase();

            if (name.includes('hero') || name.includes('banner')) {
                width = 1600;
            } else if (name.includes('avatar') || name.includes('icon') || name.includes('sujay') || name.includes('teshoo') || filePath.toLowerCase().includes('authors') || filePath.toLowerCase().includes('team')) {
                width = 400;
            } else if (name.includes('aaa') || name.includes('cert')) {
                width = 800;
            }

            // Temporary output file
            const temp = filePath + '.tmp_opt' + ext;

            const pipeline = sharp(filePath).resize({ width: width, withoutEnlargement: true });

            if (ext === '.png') {
                pipeline.png({ quality: 80, compressionLevel: 8 });
            } else {
                pipeline.jpeg({ quality: 80, mozjpeg: true });
            }

            pipeline.toFile(temp)
                .then(info => {
                    console.log(`  -> Optimized to: ${(info.size / 1024).toFixed(2)} KB (Width: ${info.width})`);
                    // Create backup just in case? No, user wants performance. Overwrite.
                    fs.unlinkSync(filePath);
                    fs.renameSync(temp, filePath);
                })
                .catch(err => {
                    console.error(`  Error optimizing ${filePath}:`, err);
                    if (fs.existsSync(temp)) fs.unlinkSync(temp);
                });
        }
    }
});
