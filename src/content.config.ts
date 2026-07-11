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

// Courses: the structured learning ladder, one collection across all four
// pillars. Each entry here is course-level metadata; individual lesson pages
// will live in a separate `lessons` collection (added next) that references a
// course. `modes` is the delivery maturity path — everything starts self-paced.
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    pillar: z.enum(['mathematics', 'probability-stats', 'economics', 'computational-ai']),
    summary: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    topics: z.array(z.string()),
    /** Delivery modes offered so far; grows as a course matures. */
    modes: z.array(z.enum(['self-paced', 'live-online', 'in-person'])).default(['self-paced']),
    /** What a student should already know before starting. */
    prerequisites: z.array(z.string()).optional(),
    /** Sequence within a pillar on the catalog page (lower = earlier). */
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

// Lessons: the atoms of a course. Each lesson lives in a subfolder named after
// its course (src/content/lessons/<course-slug>/<lesson>.md), so the folder is
// the link between a lesson and its course — no separate "which course" field
// to keep in sync. `order` sequences them; `youtube` is the video ID (added
// when a lesson has a video).
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string().optional(),
    /** YouTube video ID only (the part after v=), not the whole URL. */
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { workshops, problems, announcements, courses, lessons };
