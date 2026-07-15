import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/author'
import category from './schemas/category'
import post from './schemas/post'
import certificate from './schemas/certificate'
import job from './schemas/job'
import liveJob from './schemas/liveJob'
// BLG-133: v1 scaffolding for 7 doc types that currently live as TS data
// files. Schemas only — site components still read from src/data/* until
// a follow-up sprint migrates them.
import course from './schemas/course'
import mentor from './schemas/mentor'
import event from './schemas/event'
import testimonial from './schemas/testimonial'
import hiringPartner from './schemas/hiringPartner'
import service from './schemas/service'
import city from './schemas/city'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        post,
        author,
        category,
        certificate,
        job,
        liveJob,
        course,
        mentor,
        event,
        testimonial,
        hiringPartner,
        service,
        city,
    ],
}
