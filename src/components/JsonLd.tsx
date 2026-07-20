/**
 * ============================================================================
 * JSON-LD SCHEMA INJECTION COMPONENT
 * ============================================================================
 * 
 * This component safely injects JSON-LD structured data into the <head>
 * of a page. It should be used to render the output of the schema generators.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import React from 'react';

interface JsonLdProps {
  schema: object;
  id: string;
}

/**
 * A React component to inject JSON-LD schema into the page head.
 * 
 * @param {JsonLdProps} props - The component props.
 * @param {object} props.schema - The JSON-LD schema object.
 * @param {string} props.id - A unique key for the script tag.
 * @returns {React.ReactElement} A script tag with the JSON-LD schema.
 *
 * The schema is serialized compact rather than pretty-printed. Consumers parse
 * this as JSON, so indentation carries no meaning to search engines or AI
 * crawlers, but it was adding ~27% to every JSON-LD block — and these blocks
 * render in the document head, ahead of the page content.
 */
const JsonLd: React.FC<JsonLdProps> = ({ schema, id }) => {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
