const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/types/courseData.ts');

console.log('Reading file...');
let content = fs.readFileSync(filePath, 'utf8');
const originalLength = content.length;

// Pattern 1: "Artificial Intelligence Course in Ambernath Station, Mumbai | Best AI Training"
// Regex: title: "(.*?) Course in (.*?) Station, Mumbai \| Best .*?"
// Target: title: "$1 Course in $2 | CDPL"
console.log('Applying Pattern 1 (Station, Mumbai)...');
content = content.replace(
    /title:\s*"(.*?) Course in (.*?) Station, Mumbai \| Best .*?"/g,
    'title: "$1 Course in $2 | CDPL"'
);

// Pattern 2: "Best Business Intelligence Course in Agra | Business Intelligence Certification"
// Regex: title: "Best (.*?) Course in (.*?) \| .*?"
// Target: title: "$1 Course in $2 | CDPL"
console.log('Applying Pattern 2 (Best ... | ...)...');
content = content.replace(
    /title:\s*"Best (.*?) Course in (.*?) \| .*?"/g,
    'title: "$1 Course in $2 | CDPL"'
);

// Pattern 3: "Top Business Intelligence Training near Ambivli, Mumbai | Job-Ready BI Analyst"
// Regex: title: "Top (.*?) Training near (.*?), Mumbai \| .*?"
// Target: title: "$1 Course in $2 | CDPL"
// Note: transforming "Training near" to "Course in" based on user preference for shorter titles? 
// User URL: business-intelligence-course-in-ambivli
// So keeping "Course in" makes sense to match the URL slug style even if original said "Training near".
// Let's stick to "Course in" as it's standard.
console.log('Applying Pattern 3 (Top ... Training near ...)...');
content = content.replace(
    /title:\s*"Top (.*?) Training near (.*?), Mumbai \| .*?"/g,
    'title: "$1 Course in $2 | CDPL"'
);

// Pattern 4: "Software Testing Course in [City] | Learn QA Testing"
// Regex: title: "Software Testing Course in (.*?) \| Learn QA Testing"
// Target: title: "Software Testing Course in $1 | CDPL"
console.log('Applying Pattern 4 (Software Testing ... | Learn QA Testing)...');
content = content.replace(
    /title:\s*"Software Testing Course in (.*?) \| Learn QA Testing"/g,
    'title: "Software Testing Course in $1 | CDPL"'
);

// Pattern 5: "Advanced Manual & Automation Testing - Master Program"
// This exact string is 51 chars. Wait.
// "Advanced Manual & Automation Testing - Master Program Course in Mumbai | CDPL" => 75 chars
// Regex: title: "Advanced Manual & Automation Testing - Master Program Course in (.*?) \| .*?"
// Target: title: "Manual & Automation Master Program in $1 | CDPL" (46+ chars)
console.log('Applying Pattern 5 (Master Program)...');
content = content.replace(
    /title:\s*"Advanced Manual & Automation Testing - Master Program Course in (.*?) \| .*?"/g,
    'title: "Manual & Automation Master Program in $1 | CDPL"'
);

// Pattern 6: "Digital Marketing Course in [City] | Learn SEO, PPC & Analytics"
// Regex: title: "Digital Marketing Course in (.*?) \| Learn SEO, PPC & Analytics"
// Target: title: "Digital Marketing Course in $1 | CDPL"
console.log('Applying Pattern 6 (Digital Marketing ... | Learn SEO...)...');
content = content.replace(
    /title:\s*"Digital Marketing Course in (.*?) \| Learn SEO, PPC & Analytics"/g,
    'title: "Digital Marketing Course in $1 | CDPL"'
);

// Pattern 7: "Business Intelligence Course in [Long Place] | CDPL"
// Strategy: Replace "Business Intelligence Course in" with "BI Course in" for long ones?
// Or just apply it globally for consistency? User might prefer "Business Intelligence".
// Only doing it if the total length is > 60 is hard with simple regex. 
// But "Business Intelligence Course in Central Line Stations (Main Line) | CDPL" is 72 chars.
// "BI Course in Central Line Stations (Main Line) | CDPL" is 53 chars.
// "Business Intelligence" is 21 chars. "BI" is 2 chars. Savings: 19 chars. Perfect.
console.log('Applying Pattern 7 (Business Intelligence -> BI)...');
content = content.replace(
    /title:\s*"Business Intelligence Course in (.*?) \| CDPL"/g,
    'title: "BI Course in $1 | CDPL"'
);

// Pattern 8: "Programming Courses in [City] | Learn Python & Java"
console.log('Applying Pattern 8 (Programming ... | Learn Python...)...');
content = content.replace(
    /title:\s*"Programming Courses in (.*?) \| Learn Python & Java"/g,
    'title: "Programming Courses in $1 | CDPL"'
);

// Pattern 9: Specific long location replacements
console.log('Applying Pattern 9 (Location Acronyms)...');
// CSMT
content = content.replace(
    /Chhatrapati Shivaji Maharaj Terminus \(CSMT\)/g,
    'CSMT'
);

// Harbour Line
content = content.replace(
    /Harbour Line Stations \(CSMT to Panvel\/Goregaon\)/g,
    'Harbour Line Stations'
);

// Pattern 10: "About Business Intelligence Training in [Place]"
// These seem to be metadata titles in this file, so we must shorten them.
// "About Business Intelligence Training in" -> "About BI Training in"
console.log('Applying Pattern 10 (About BI Training)...');
content = content.replace(
    /title:\s*"About Business Intelligence Training in (.*?)"/g,
    'title: "About BI Training in $1"'
);

// Any other specific manual fixes if needed (like the specific CSMT ones if regex failed)
// The verify script says: "BI Course in Chhatrapati Shivaji Maharaj Terminus (CSMT) | CDPL"
// My previous fix used /Chhatrapati Shivaji Maharaj Terminus \(CSMT\)/g -> 'CSMT'
// Maybe regex characters `( )` were not escaped correctly in the pattern content string?
// Ah, in `replace(/.../g, ...)` I used regex literal. `(` and `)` need escaping in regex literal if I want to match literalParens.
// Reference Step 313: `/Chhatrapati Shivaji Maharaj Terminus \(CSMT\)/g`. This is correct.
// Why did it fail? "BI Course in Chhatrapati Shivaji Maharaj Terminus (CSMT) | CDPL"
// Maybe the previous run didn't apply because I ran `node scripts/fix_titles.js` while build was running?
// No, file edit usually works.
// Maybe the string is slightly different.
// I will try to use a string replace for safety or verify the exact string from failures.txt.
// "BI Course in Chhatrapati Shivaji Maharaj Terminus (CSMT) | CDPL"

// Pattern 11: Artificial Intelligence & Data Science City Pages
// "Artificial Intelligence Course in [City] | ..." -> "AI Course in [City] | CDPL"
console.log('Applying Pattern 11 (AI/DS City Pages)...');
// Artificial Intelligence
content = content.replace(
    /title:\s*"Artificial Intelligence Course in (.*?) \| .*?"/g,
    'title: "AI Course in $1 | CDPL"'
);
content = content.replace(
    /title:\s*"Artificial Intelligence Course in (.*?)"/g, // Case without pipe if any
    (match, city) => {
        if (match.includes('|')) return match; // Skip if handled above
        return `title: "AI Course in ${city} | CDPL"`;
    }
);

// Data Science (keep Data Science, it's a strong keyword, but ensure | CDPL and no "Best")
content = content.replace(
    /title:\s*"Data Science Course in (.*?) \| .*?"/g,
    'title: "Data Science Course in $1 | CDPL"'
);

// Fix "Course in [City] Station" for ALL types (general sweep)
// Currently I have specific ones. Let's add a generic one for any "Course in ... Station" just in case.
content = content.replace(
    /Course in (.*?) (Station|Junction|Terminus)\s?,?\s?Mumbai \|/g,
    'Course in $1 |'
);

console.log('Writing file...');
fs.writeFileSync(filePath, content, 'utf8');

console.log('Done.');
console.log(`Original size: ${originalLength}`);
console.log(`New size: ${content.length}`);
