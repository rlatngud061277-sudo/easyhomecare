import type { MetadataRoute } from "next";
import { regions, getRegionUrl } from "./regions";

/* =====================================
   기본 사이트 주소
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

/* =====================================
   벌목 서비스 카테고리 6개
===================================== */

const SERVICES = [
  "building",
  "dangerous",
  "large",
  "land",
  "pine-wilt",
  "root-removal",
];

/* =====================================
   사이트맵
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* =====================================
     카테고리 메인 페이지

     /services/building
     /services/dangerous
     ...
  ===================================== */

  const servicePages: MetadataRoute.Sitemap =
    SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* =====================================
     기존 지역별 벌목 페이지

     /tree-removal/gangnam
     /tree-removal/suwon
     /tree-removal/cheonan
     ...
  ===================================== */

  const regionPages: MetadataRoute.Sitemap =
    regions.map((region) => ({
      url: `${SITE_URL}${getRegionUrl(region)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,

      priority:
        region.name === region.province
          ? 0.8
          : 0.7,
    }));

  /* =====================================
     카테고리 × 지역 페이지

     예:
     /services/pine-wilt/cheonan
     /services/root-removal/cheonan
     /services/dangerous/suwon
     ...
  ===================================== */

  const serviceRegionPages: MetadataRoute.Sitemap =
    SERVICES.flatMap((service) =>
      regions.map((region) => ({
        url:
          `${SITE_URL}/services/` +
          `${service}/${region.slug}`,

        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    );

  /* =====================================
     전체 사이트맵 반환
  ===================================== */

  return [
    /* 메인 홈페이지 */
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    /* 전체 지역 벌목 페이지 */
    {
      url: `${SITE_URL}/tree-removal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* 서비스 카테고리 */
    ...servicePages,

    /* 기존 지역 페이지 */
    ...regionPages,

    /* 서비스 × 지역 페이지 */
    ...serviceRegionPages,
  ];
}
