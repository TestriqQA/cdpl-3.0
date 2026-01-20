
const fs = require('fs');
const readline = require('readline');

const filePath = process.argv[2];
const searchString = process.argv[3];

if (!filePath || !searchString) {
    console.log("Usage: node find_string.js <file_path> <search_string>");
    process.exit(1);
}

const fileStream = fs.createReadStream(filePath);
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

let lineNum = 0;
let matches = 0;

rl.on('line', (line) => {
    lineNum++;
    if (line.includes(searchString)) {
        console.log(`Line ${lineNum}: ${line.trim()}`);
        matches++;
        if (matches >= 20) {
            process.exit(0);
        }
    }
});
