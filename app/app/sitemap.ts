
import type { MetadataRoute } from "next";

import { regions } from "./regions";

const SITE_URL =
  "https://easyhomecare.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/tree-removal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const regionPages: MetadataRoute.Sitemap =
    regions.map((region) => ({
      url: `${SITE_URL}/tree-removal/${region.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...mainPages, ...regionPages];
}
