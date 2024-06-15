import { navigation } from "config.json";
import { slugify } from "./string.ts";
import { getCollection, type CollectionEntry } from "astro:content";

export const mainRoutes = {
  home: "/",
  about: `/${slugify(navigation.about.url)}`,
  projects: `/${slugify(navigation.projects.url)}/${
    (await getCollection("projects"))[0].slug
  }`,
  instants: `/${slugify(navigation.instants.url)}/${
    (await getCollection("instants"))[0].slug
  }`,
};

export const subRoutes = {
  instantsItem: (slug: string) =>
    `/${slugify(navigation.instants.url)}/${slugify(slug)}`,
  projectsItem: (slug: string) =>
    `/${slugify(navigation.projects.url)}/${slugify(slug)}`,
};
