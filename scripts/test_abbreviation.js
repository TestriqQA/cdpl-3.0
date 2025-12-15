// Mock abbreviation logic to test if it works as expected (copy-paste from logic in metadata-generator)
function abbreviateTitle(title) {
    const MAX_LENGTH = 60;
    // 1. Try removing "Best " prefix
    let newTitle = title.replace(/^Best /, '');

    // 2. Try removing suffix
    newTitle = newTitle.replace(/ \| CDPL - Cinute Digital$/, ' | CDPL');

    let suffix = ' | CDPL';
    if (newTitle.endsWith(' | CDPL Blog')) {
        suffix = ' | CDPL Blog';
    } else if (newTitle.endsWith(' - CDPL')) {
        suffix = ' - CDPL';
    }

    if (newTitle.length <= MAX_LENGTH) return newTitle;

    // 3. Truncate
    const targetLength = MAX_LENGTH - suffix.length;
    const words = newTitle.replace(suffix, '').split(' ');
    let reduced = '';
    for (const word of words) {
        if ((reduced + (reduced ? ' ' : '') + word).length <= targetLength) {
            reduced += (reduced ? ' ' : '') + word;
        } else {
            break;
        }
    }

    if (reduced.length === 0) return newTitle.substring(0, MAX_LENGTH - 3) + '...';
    return reduced + suffix;
}

const testCases = [
    "2025 Digital Marketing Strategy: Proven Frameworks to Grow Traffic & Revenue | CDPL Blog",
    "1 Day Program at Universal College of Engineering on IT Trends and Opportunities - Workshop | CDPL",
    "Artificial Intelligence Course in Chhatrapati Shivaji Maharaj Terminus (CSMT) | CDPL", // Should be fixed in data, but testing function robustness
    "Top Data Science Course in Mumbai | CDPL - Cinute Digital"
];

testCases.forEach(t => {
    const res = abbreviateTitle(t);
    console.log(`Input:  (${t.length}) ${t}`);
    console.log(`Output: (${res.length}) ${res}`);
    console.log(res.length <= 60 ? "PASS" : "FAIL");
    console.log('---');
});
