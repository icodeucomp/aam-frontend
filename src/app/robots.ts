import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/login", "/admin/dashboard/"],
      },
    ],
    sitemap: "https://www.amanahauliamandiri.id/sitemap.xml",
  };
}
