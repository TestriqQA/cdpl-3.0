const { generateBusinessIntelligenceCategoryPageSchema } = require('./src/lib/schema-generators');
// Mocking since we are running in node
global.getFullUrl = (url) => `https://www.cinutedigital.com${url}`;
global.getImageUrl = (url) => `https://www.cinutedigital.com${url}`;
global.getOrganizationId = () => `https://www.cinutedigital.com/#organization`;
global.getWebsiteId = () => `https://www.cinutedigital.com/#website`;
global.SITE_CONFIG = { name: 'CDPL', url: 'https://www.cinutedigital.com' };
global.BUSINESS_INFO = { address: { streetAddress: '...', addressLocality: '...', addressRegion: '...', postalCode: '...', addressCountry: 'IN' } };
global.STATISTICS = { rating: 4.9, reviewCount: 425 };
global.CERTIFICATIONS = [];

const faqs = [{ question: 'Q1', answer: 'A1' }];
const breadcrumbs = [{ name: 'Home', url: '/' }];
const courseInput = {
    name: "Business Intelligence Master Course",
    description: "Desc",
    url: "/courses/bi-courses",
    slug: "bi-courses"
};

try {
    const schemas = generateBusinessIntelligenceCategoryPageSchema(courseInput, faqs, breadcrumbs);
    schemas.forEach((schema, index) => {
        const json = JSON.stringify(schema);
        // Check for duplicate keys using a regex on the JSON string
        // This is tricky for nested objects, but let's check top-level and first-level nesting
        const matches = json.match(/"name":/g);
        console.log(`Schema ${index} (${schema['@type']}) has ${matches ? matches.length : 0} "name" occurrences.`);
        
        // Literal check for duplicate keys in any object in the hierarchy
        function check(obj, path = '') {
            if (typeof obj !== 'object' || obj === null) return;
            if (Array.isArray(obj)) {
                obj.forEach((item, i) => check(item, `${path}[${i}]`));
                return;
            }
            const keys = Object.keys(obj);
            const seen = new Set();
            for (const key of keys) {
                if (seen.has(key)) {
                    console.error(`DUPLICATE KEY "${key}" FOUND AT ${path}`);
                }
                seen.add(key);
                check(obj[key], `${path}.${key}`);
            }
        }
        check(schema);
    });
} catch (e) {
    console.error(e);
}
