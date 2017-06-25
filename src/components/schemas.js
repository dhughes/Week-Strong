import { schema } from 'normalizr';

// schema for exercises
const exercise = new schema.Entity('exercises');
const exercises = [exercise];

export { exercises };
