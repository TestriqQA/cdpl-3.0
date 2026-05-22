import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { table } from '@sanity/table'
import { schema } from './src/sanity/schema'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
    basePath: '/cms',
    projectId: projectId!,
    dataset: dataset!,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        structureTool(),
        // BLG-139 — Presentation tool: a side-by-side preview pane that lets
        // editors see unpublished drafts before publishing. It loads the live
        // site in an iframe and turns on Next.js draft mode via the
        // secret-validated `/api/draft` route handler.
        presentationTool({
            previewUrl: {
                previewMode: {
                    enable: '/api/draft',
                },
            },
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        codeInput(),
        table(),
    ],
})
