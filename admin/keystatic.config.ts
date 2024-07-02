import { config, fields, collection, singleton } from "@keystatic/core";
import { inline, mark } from "@keystatic/core/content-components";

export default config({
  storage: {
    kind: "cloud",
    pathPrefix: "site",
  },
  cloud: {
    project: "lenihi/site",
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
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/projects",
              publicPath: "src/assets/images/projects/",
            },
          },
          components: {
            PdfLink: inline({
              label: "Lien pdf",
              schema: {
                label: fields.text({
                  label: "label",
                  validation: { isRequired: true },
                }),
                file: fields.file({
                  directory: "/public/files/projects",
                  publicPath: "/files/projects",
                  label: "Fichier",
                  validation: { isRequired: true },
                }),
              },
            }),
            VimeoEmbed: inline({
              label: "Vidéo Vimeo",
              schema: {
                videoId: fields.number({
                  label: "Id de la vidéo",
                  defaultValue: 0,
                }),
              },
            }),
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
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/instants",
              publicPath: "src/assets/images/instants/",
            },
          },
          components: {
            PdfLink: inline({
              label: "Lien pdf",
              schema: {
                label: fields.text({
                  label: "label",
                  validation: { isRequired: true },
                }),
                file: fields.file({
                  directory: "/public/files/instants",
                  publicPath: "/files/instants",
                  label: "Fichier",
                  validation: { isRequired: true },
                }),
              },
            }),
            VimeoEmbed: inline({
              label: "Vidéo Vimeo",
              schema: {
                videoId: fields.number({
                  label: "Id de la vidéo",
                  defaultValue: 0,
                }),
              },
            }),
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
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/home",
              publicPath: "src/assets/images/home/",
            },
          },
          components: {
            PdfLink: inline({
              label: "Lien pdf",
              schema: {
                label: fields.text({
                  label: "label",
                  validation: { isRequired: true },
                }),
                file: fields.file({
                  directory: "/public/files/home",
                  publicPath: "/files/home",
                  label: "Fichier",
                  validation: { isRequired: true },
                }),
              },
            }),
            VimeoEmbed: inline({
              label: "Vidéo Vimeo",
              schema: {
                videoId: fields.number({
                  label: "Id de la vidéo",
                  defaultValue: 0,
                }),
              },
            }),
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
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/about",
              publicPath: "src/assets/images/about/",
            },
          },
          components: {
            PdfLink: inline({
              label: "Lien pdf",
              schema: {
                label: fields.text({
                  label: "label",
                  validation: { isRequired: true },
                }),
                file: fields.file({
                  directory: "/public/files/about",
                  publicPath: "/files/about",
                  label: "Fichier",
                  validation: { isRequired: true },
                }),
              },
            }),
            VimeoEmbed: inline({
              label: "Vidéo Vimeo",
              schema: {
                videoId: fields.number({
                  label: "Id de la vidéo",
                  defaultValue: 0,
                }),
              },
            }),
          },
        }),
      },
    }),
    settings: singleton({
      label: "Réglages",
      path: "/src/content/settings/config",
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
