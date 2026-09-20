import type { MetadataRoute } from "next";
import { regions, getRegionUrl } from "./regions";

const SITE_URL = "https://easyhomecare.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/tree-removal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...regions.map((region) => ({
      url: `${SITE_URL}${getRegionUrl(region)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority:
        region.name === region.province ? 0.8 : 0.7,
    })),
  ];
}
