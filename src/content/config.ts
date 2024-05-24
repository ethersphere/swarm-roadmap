import { z, reference, defineCollection } from "astro:content";

const milestones = defineCollection({
  type: "content",
  schema: z.object({
    percentage: z.number().optional(),
    index: z.number(),
    order: z.number().optional(),
    title: z.string(),
    items: z.array(reference("items")),
  }),
});

const items = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(["done", "in-progress", "to-do"]),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { items, milestones };
