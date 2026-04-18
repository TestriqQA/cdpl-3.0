const { generateBusinessIntelligenceCategoryPageSchema } = require('./src/lib/schema-generators');
const { biFaqs } = require('./src/components/BI-Courses/faqData');

// Mock necessary parts or use actual code if possible
// Since It's TS, I might need to use ts-node or just check the source for duplication.

function hasDuplicateKeys(obj) {
    const keys = new Set();
    const json = JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            const innerKeys = Object.keys(value);
            const duplicates = innerKeys.filter(k => innerKeys.indexOf(k) !== innerKeys.lastIndexOf(k));
            if (duplicates.length > 0) {
                console.log('Duplicate keys found in object:', duplicates, value);
            }
        }
        return value;
    });
}

// Since I can't easily run the TS code without setup, I'll use a regex on the file instead.
