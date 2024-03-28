import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    title: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
