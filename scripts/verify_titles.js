const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/types/courseData.ts');

console.log('Reading file...');
const content = fs.readFileSync(filePath, 'utf8');

// Extract all title strings
const titleRegex = /title:\s*"(.*?)"/g;
let match;
let count = 0;
let longCount = 0;

console.log('Checking title lengths...');
while ((match = titleRegex.exec(content)) !== null) {
    const title = match[1];
    // Filter out irrelevant titles (like section titles "Course Modules", "Why Choose Our Course?", etc)
    // Real metadata titles usually contain "Course" or "|"
    if (!title.includes('|') && !title.includes('Course') && !title.includes('Training')) continue;

    // Skip likely section headers
    if (title === 'Course Modules' || title === 'Detailed Curriculum' || title === 'Hands-On Projects' || title === "Frequently Asked Questions") continue;

    count++;
    if (title.length > 60) {
        fs.appendFileSync('scripts/failures.txt', `[LONG] (${title.length}) ${title}\n`);
        longCount++;
    }
}

console.log(`\nchecked ${count} relevant titles.`);
console.log(`found ${longCount} titles > 60 characters.`);

if (longCount > 0) {
    console.log('FAIL: Some titles are still too long.');
    process.exit(1);
} else {
    console.log('PASS: All titles are optimized.');
}
