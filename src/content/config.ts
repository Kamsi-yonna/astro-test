import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      title: z.string(),
      date: z.string(),
      image: image(),
    }),
});

export const collections = {
  posts: postsCollection,
};
