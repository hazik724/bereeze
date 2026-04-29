import { type SchemaTypeDefinition } from 'sanity'
import { jobType } from "./JobTypes";
import { applicationType } from './applicationType';
import { generalApplicationType } from './generalApplicationTypes';
import { contactType } from './contactTypes';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobType, applicationType, generalApplicationType, contactType],
}
