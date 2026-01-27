import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import category from './schemas/category'
import post from './schemas/post'
import certificate from './schemas/certificate'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, author, category, certificate],
}
