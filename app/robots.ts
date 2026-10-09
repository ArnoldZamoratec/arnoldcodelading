import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://arnoldcode.dev/sitemap.xml",
    host: "https://arnoldcode.dev",
  };
}
