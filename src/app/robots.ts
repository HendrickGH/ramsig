import type { MetadataRoute } from "next";
import { SITE } from "@/design-system/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", SITE.canonicalUrl).toString(),
    host: SITE.canonicalUrl,
  };
}
