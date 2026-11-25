import type { MetadataRoute } from "next";
import { SITE } from "@/design-system/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.canonicalUrl,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
