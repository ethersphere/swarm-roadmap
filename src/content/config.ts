import { z, reference, defineCollection } from "astro:content";

const milestones = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["done", "in-progress", "to-do"]).optional(),
    sortOrder: z.number().optional(),
    items: z.array(reference("items")),
  }),
});

const items = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(["done", "in-progress", "to-do"]),
    sortOrder: z.number().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { items, milestones };
