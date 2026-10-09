import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arnoldcode.dev";

  const pages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/metodologia`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/casos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sobre-mi`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contacto`, changeFrequency: "monthly", priority: 0.7 },
  ];

  return pages;
}
