import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyStr } from "./slugify";

const getPostsByRepo = (posts: CollectionEntry<"blog">[], repo: string) =>
  getSortedPosts(
    posts.filter(post => post.data.repo && slugifyStr(post.data.repo) === repo)
  );

export default getPostsByRepo;
