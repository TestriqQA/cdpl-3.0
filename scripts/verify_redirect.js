// Mocking Next.js request/response for logic verification
const testCases = [
    { host: 'validate.cinutedigital.com', path: '/', expected: 'https://www.cinutedigital.com/cdpl-certificate-validation' },
    { host: 'www.validate.cinutedigital.com', path: '/XYZ', expected: 'https://www.cinutedigital.com/cdpl-certificate-validation?id=XYZ' },
    { host: 'validate.cinutedigital.com', path: '/abc-123', expected: 'https://www.cinutedigital.com/cdpl-certificate-validation?id=abc-123' },
    { host: 'cinutedigital.com', path: '/courses', expected: null }, // Should not redirect
];

function testMiddleware(host, path) {
    if (host.includes('validate.cinutedigital.com')) {
        const targetUrl = new URL('https://www.cinutedigital.com/cdpl-certificate-validation');
        const cleanPath = path.replace(/^\//, '');

        if (cleanPath && cleanPath !== '') {
            targetUrl.searchParams.set('id', cleanPath);
        }
        return targetUrl.toString();
    }
    return null;
}

console.log('--- Middleware Logic Verification ---');
testCases.forEach((tc, i) => {
    const result = testMiddleware(tc.host, tc.path);
    const status = result === tc.expected ? '✅ PASS' : `❌ FAIL (Expected: ${tc.expected}, Got: ${result})`;
    console.log(`Test ${i + 1}: ${tc.host}${tc.path} -> ${status}`);
});
