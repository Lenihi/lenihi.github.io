import toSlug from "slugify";

export const slugify = (text: string) =>
  toSlug(text, { lower: true, locale: "fr" });
