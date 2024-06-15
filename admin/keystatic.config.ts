import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
    pathPrefix: "site",
  },
  cloud: {
    project: "lena/lena",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      columns: ["priority", "date"],
      path: "src/content/projects/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        priority: fields.number({
          label: "Priorité",
          validation: { isRequired: true },
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/projects",
              publicPath: "src/assets/images/projects/",
            },
          },
        }),
      },
    }),
    instants: collection({
      label: "Instants",
      slugField: "title",
      columns: ["priority", "date"],
      path: "src/content/instants/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        priority: fields.number({
          label: "Priorité",
          validation: { isRequired: true },
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/instants",
              publicPath: "src/assets/images/instants/",
            },
          },
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: "Réglages",
      path: "/config",
      format: "json",
      schema: {
        title: fields.text({
          label: "Titre",
          validation: { isRequired: true },
        }),
        metaDescription: fields.text({
          label: "Description du site",
          validation: { isRequired: true },
          multiline: true,
        }),
        favicon: fields.image({
          label: "Favicon",
          directory: "/public",
          publicPath: "/",
        }),
        navigation: fields.object(
          {
            home: fields.object(
              {
                label: fields.text({ label: "Label" }),
              },
              { label: "Home" }
            ),
            projects: fields.object(
              {
                label: fields.text({ label: "Label" }),
                url: fields.text({ label: "Url" }),
              },
              { label: "Projets" }
            ),
            instants: fields.object(
              {
                label: fields.text({ label: "Label" }),
                url: fields.text({ label: "Url" }),
              },
              { label: "Instants" }
            ),
            about: fields.object(
              {
                label: fields.text({ label: "Label" }),
                url: fields.text({ label: "Url" }),
              },
              { label: "about" }
            ),
          },
          { label: "Navigation" }
        ),
      },
    }),
  },
});
