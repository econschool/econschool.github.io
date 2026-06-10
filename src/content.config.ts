// Content collections — defined at the root of src/, per Astro's Content Layer API.
// One collection per *repeated* content type; one-off pages stay in src/pages/.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    topics: z.array(z.string()),
    date: z.coerce.date().optional(),
    /** Set when registration is open; renders a sign-up button. */
    registration: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

// Problems & Tools: one collection with a `type` discriminator —
// solved problems, exercises, and interactive tools share a listing,
// a URL space, and the detail-page shell.
const problems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/problems' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['solved', 'exercise', 'tool']),
    topics: z.array(z.string()),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    /** For research-to-problem entries: the paper this problem is built from. */
    source: z.string().optional(),
    /** Tools only: URL of the self-contained page embedded via iframe. */
    embed: z.string().url().optional(),
    embedHeight: z.number().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

// Announcements: short, dated notes — course dates, new videos, site news.
const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    category: z.enum(['program', 'workshop', 'video', 'site']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { workshops, problems, announcements };
