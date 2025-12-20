import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('ELEMATT'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const faqsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  faqs: faqsCollection,
};

