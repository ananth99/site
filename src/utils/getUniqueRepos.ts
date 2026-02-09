import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

interface Repo {
  repo: string;
  repoName: string;
}

const getUniqueRepos = (posts: CollectionEntry<"blog">[]) => {
  const repos: Repo[] = posts
    .filter(postFilter)
    .filter(post => post.data.repo) // Only include posts with a repo field
    .map(post => ({
      repo: slugifyStr(post.data.repo!),
      repoName: post.data.repo!,
    }))
    .filter(
      (value, index, self) =>
        self.findIndex(repo => repo.repo === value.repo) === index
    )
    .sort((repoA, repoB) => repoA.repo.localeCompare(repoB.repo));
  return repos;
};

export default getUniqueRepos;
