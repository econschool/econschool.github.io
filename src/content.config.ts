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
    draft: z.boolean().default(false),
  }),
});

const problems = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/problems' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		type: z.enum(['solved', 'exercise', 'tool']),
		topics: z.array(z.string()).default([]),
		level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
		embed: z.string().url().optional(),
		embedHeight: z.number().optional(),
		date: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { workshops, problems };