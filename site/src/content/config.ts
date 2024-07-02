import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      priority: z.number(),
    }),
  }),
  instants: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      priority: z.number(),
    }),
  }),
  pages: defineCollection({
    type: "content",
  }),
  settings: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        metaDescription: z.string(),
        favicon: z.string().optional(),
        imageMenu: image(),
        navigation: z.object({
          home: z.object({
            label: z.string(),
          }),
          projects: z.object({
            label: z.string(),
            url: z.string(),
          }),
          instants: z.object({
            label: z.string(),
            url: z.string(),
          }),
          about: z.object({
            label: z.string(),
            url: z.string(),
          }),
        }),
      }),
  }),
};
