import { generateEventsPageAllSchemas } from './src/lib/schema-generators';
import { pastEvents } from './src/data/eventsData';
import { PAST_EVENTS_FAQS } from './src/data/pastEventsData';
import fs from 'fs';

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

    fs.writeFileSync('events_page_schema_verified.json', JSON.stringify(schemas, null, 2), 'utf-8');
    console.log('Successfully generated events page schema!');
} catch (error) {
    console.error('Error generating events page schema:', error);
}
