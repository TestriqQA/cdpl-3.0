import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import category from './schemas/category'
import post from './schemas/post'
import certificate from './schemas/certificate'
import job from './schemas/job'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, author, category, certificate, job],
}
