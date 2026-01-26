import { getCertificateById } from '../src/data/certificates/registry';

const testIds = [
    "CD263MLA", "CD530TAB", "CD539API", "CD539JP", "CD58ATJ",
    "CD596DBMS", "CD591PB", "CD568DBMS", "CD568DVE", "CD568PB",
    "CD593PB", "CD276MLA", "CD570PB", "CD570TAB", "CD548PB",
    "CD548TAB", "CD564PB", "CD564TAB", "CD571DA", "CD571DM",
    "CD571SMS", "CD264MLA"
];

console.log('--- Certificate Registration Verification ---');
testIds.forEach(id => {
    const cert = getCertificateById(id);
    if (cert) {
        console.log(`✅ ID: ${id} -> Found (Holder: ${cert.holder})`);
    } else {
        console.log(`❌ ID: ${id} -> NOT FOUND`);
    }
});
