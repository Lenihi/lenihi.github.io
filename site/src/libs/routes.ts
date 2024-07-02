import { sort } from "./collections.ts";
import { slugify } from "./string";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

const { data: config } = await getEntry("settings", "config");
const navigation = config.navigation;

export const mainRoutes = {
  home: "/",
  about: `/${slugify(navigation.about.url)}`,
  projects: `/${slugify(navigation.projects.url)}/${
    sort(await getCollection("projects"))[0].slug
  }`,
  instants: `/${slugify(navigation.instants.url)}/${
    sort(await getCollection("instants"))[0].slug
  }`,
};

export const subRoutes = {
  instantsItem: (slug: string) =>
    `/${slugify(navigation.instants.url)}/${slugify(slug)}`,
  projectsItem: (slug: string) =>
    `/${slugify(navigation.projects.url)}/${slugify(slug)}`,
};
