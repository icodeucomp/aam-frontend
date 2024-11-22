import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.amanahauliamandiri.id",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en",
          id: "https://www.amanahauliamandiri.id/id",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/profile",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/profile",
          id: "https://www.amanahauliamandiri.id/id/profile",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/profile/certification",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/profile/certification",
          id: "https://www.amanahauliamandiri.id/id/profile/certification",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/business",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/business",
          id: "https://www.amanahauliamandiri.id/id/business",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/media",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/media",
          id: "https://www.amanahauliamandiri.id/id/media",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/contact-us",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/contact-us",
          id: "https://www.amanahauliamandiri.id/id/contact-us",
        },
      },
    },
    {
      url: "https://www.amanahauliamandiri.id/career",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://www.amanahauliamandiri.id/en/career",
          id: "https://www.amanahauliamandiri.id/id/career",
        },
      },
    },
  ];
}
