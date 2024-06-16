import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      priority: z.number().optional(),
    }),
  }),
  instants: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      priority: z.number().optional(),
    }),
  }),
  pages: defineCollection({
    type: "content",
  }),
};
