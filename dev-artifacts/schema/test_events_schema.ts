// Writes the events page JSON-LD next to this script, for checking.
// Run from the repo root: npx tsx dev-artifacts/schema/test_events_schema.ts
import { generateEventsPageAllSchemas } from '../../src/lib/schema-generators';
import { pastEvents } from '../../src/data/events';
import { PAST_EVENTS_FAQS } from '../../src/data/faqs/events';
import fs from 'fs';
import path from 'path';

try {
    const schemas = generateEventsPageAllSchemas(
        pastEvents.map(e => ({
            title: e.title,
            subtitle: e.subtitle,
            purpose: e.purpose,
            slug: e.slug,
            heroImageUrl: e.heroImageUrl,
            date: e.date,
            location: e.location
        })),
        PAST_EVENTS_FAQS
    );

    fs.writeFileSync(path.join(__dirname, 'events_page_schema_verified.json'), JSON.stringify(schemas, null, 2), 'utf-8');
    console.log('Successfully generated events page schema!');
} catch (error) {
    console.error('Error generating events page schema:', error);
}
