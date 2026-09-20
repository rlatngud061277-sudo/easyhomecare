
import type { MetadataRoute } from "next";
import { regions } from "./regions";

const SITE_URL = "https://easyhomecare.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/tree-removal`,
      lastModified: new Date(),
    },
    ...regions.map((region) => ({
      url: `${SITE_URL}/tree-removal/${region.slug}`,
      lastModified: new Date(),
    })),
  ];
}
