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
    home: singleton({
      label: "Home",
      path: "src/content/pages/home",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/home",
              publicPath: "src/assets/images/home/",
            },
          },
        }),
      },
    }),
    about: singleton({
      label: "À propos",
      path: "src/content/pages/about",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/about",
              publicPath: "src/assets/images/about/",
            },
          },
        }),
      },
    }),
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
        imageMenu: fields.image({
          label: "Image Menu",
          directory: "src/assets/config",
          publicPath: "src/assets/config",
        }),
        navigation: fields.object(
          {
            home: fields.object(
              {
                label: fields.text({
                  label: "Label",
                  validation: { isRequired: true },
                }),
              },
              { label: "Home" }
            ),
            projects: fields.object(
              {
                label: fields.text({
                  label: "Label",
                  validation: { isRequired: true },
                }),
                url: fields.text({
                  label: "Url",
                  validation: { isRequired: true },
                }),
              },
              { label: "Projets" }
            ),
            instants: fields.object(
              {
                label: fields.text({
                  label: "Label",
                  validation: { isRequired: true },
                }),
                url: fields.text({
                  label: "Url",
                  validation: { isRequired: true },
                }),
              },
              { label: "Instants" }
            ),
            about: fields.object(
              {
                label: fields.text({
                  label: "Label",
                  validation: { isRequired: true },
                }),
                url: fields.text({
                  label: "Url",
                  validation: { isRequired: true },
                }),
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
