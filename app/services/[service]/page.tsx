import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { regions } from "../../regions";

/* =====================================
   기본 정보
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

const COMPANY = "이지종합건설";

const PHONE = "01023849768";
const PHONE_DISPLAY = "010-2384-9768";

/* =====================================
   서비스 정보
===================================== */

const SERVICES = {
  building: {
    title: "주택 및 건물 주변 벌목",
    shortTitle: "건물 주변 벌목",
    keyword: "건물 주변 벌목",
    description:
      "주택, 상가, 공장 등 건물 주변의 나무를 현장 상황과 주변 시설물을 고려하여 벌목 상담합니다.",
    image:
      "/821819A6-616A-44E0-8B91-B80E45FE4E73.png",

    points: [
      "주택 주변 나무 벌목",
      "상가 및 건물 주변 수목 제거",
      "공장 주변 수목 정리",
      "담장 및 시설물 주변 벌목",
      "장비 진입 가능 여부 확인",
    ],
  },

  dangerous: {
    title: "위험목 제거",
    shortTitle: "위험목 제거",
    keyword: "위험목 제거",
    description:
      "건물, 담장, 전선 및 시설물 주변에서 피해 우려가 있는 위험목과 고목의 상태를 확인하고 제거 작업을 상담합니다.",
    image:
      "/5AD408FF-BE0D-4117-A740-AF7B2010E6A7.png",

    points: [
      "주택 주변 위험목 제거",
      "기울어진 나무 제거",
      "고사목 및 고목 제거",
      "시설물 주변 위험 수목 정리",
      "현장 여건에 따른 작업 상담",
    ],
  },

  large: {
    title: "대형 수목 벌목",
    shortTitle: "대형 수목 벌목",
    keyword: "대형 수목 벌목",
    description:
      "높이가 높거나 굵기가 큰 대형 수목과 오래된 고목을 현장 접근성과 주변 환경을 확인하여 벌목 상담합니다.",
    image:
      "/06B44412-9B35-4FB9-BF55-A47B4C6F5B92.png",

    points: [
      "대형 나무 벌목",
      "높은 수목 제거",
      "굵은 나무 벌목",
      "오래된 고목 제거",
      "장비 작업 가능 여부 확인",
    ],
  },

  land: {
    title: "토지 및 임야 벌목",
    shortTitle: "토지·임야 벌목",
    keyword: "토지 임야 벌목",
    description:
      "토지 정리, 부지 관리, 임야 정비 등에 필요한 수목 벌목 및 제거 작업을 현장 규모에 맞춰 상담합니다.",
    image:
      "/9C676CC5-D9E0-45B4-B0DC-F4653EC43126.png",

    points: [
      "토지 내 수목 벌목",
      "임야 수목 제거",
      "부지 정리 벌목",
      "공사 전 수목 정리",
      "현장 규모별 작업 상담",
    ],
  },

  "pine-wilt": {
    title: "재선충 피해목 제거",
    shortTitle: "재선충 피해목 제거",
    keyword: "재선충 피해목 제거",
    description:
      "재선충 피해가 의심되거나 고사한 소나무 등 현장 상태를 확인하여 피해목 제거 작업을 상담합니다.",
    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "재선충 피해 의심목 상담",
      "고사한 소나무 제거 상담",
      "피해목 현장 상태 확인",
      "주변 수목 상태 확인",
      "현장별 제거 방법 상담",
    ],
  },

  "root-removal": {
    title: "나무뿌리 제거",
    shortTitle: "나무뿌리 제거",
    keyword: "나무뿌리 제거",
    description:
      "벌목 후 남아 있는 나무 그루터기와 뿌리를 현장 여건과 작업 공간을 확인하여 제거 상담합니다.",
    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "나무뿌리 제거",
      "그루터기 제거",
      "벌목 후 잔여 뿌리 정리",
      "마당 및 토지 뿌리 제거",
      "장비 진입 가능 여부 확인",
    ],
  },
} as const;

type ServiceSlug = keyof typeof SERVICES;

/* =====================================
   정적 페이지 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({
    service,
  }));
}

export const dynamicParams = false;

/* =====================================
   SEO
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;

  const serviceData =
    SERVICES[service as ServiceSlug];

  if (!serviceData) {
    return {};
  }

  const pageUrl =
    `${SITE_URL}/services/${service}`;

  return {
    title: {
      absolute:
        `${serviceData.title} | 서울·경기·인천·충남·충북 | ${COMPANY}`,
    },

    description:
      `${COMPANY} ${serviceData.title} 안내. ` +
      `${serviceData.description} ` +
      `서울·경기·인천·충남·충북 및 그 외 지역 상담 가능합니다.`,

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: COMPANY,
      title:
        `${serviceData.title} | ${COMPANY}`,
      description:
        serviceData.description,

      images: [
        {
          url: serviceData.image,
          alt: serviceData.title,
        },
      ],
    },
  };
}

/* =====================================
   PAGE
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const serviceData =
    SERVICES[service as ServiceSlug];

  if (!serviceData) {
    notFound();
  }

  /*
    regions.ts에는

    서울 / 경기 / 인천 / 충남 / 충북 / 세종

    광역 페이지와 시·군·구 페이지가 같이 들어있음.

    여기서는 사용자가 원하는
    서울·경기·인천·충남·충북만 표시.
  */

  const provinces = [
    "서울",
    "경기",
    "인천",
    "충남",
    "충북",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Pretendard",
            "Noto Sans KR",
            Arial,
            sans-serif;

          background: #f7f8f6;
          color: #18211a;
          word-break: keep-all;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .service-header {
          position: sticky;
          top: 0;
          z-index: 100;

          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #e5e8e5;
          backdrop-filter: blur(10px);
        }

        .service-nav {
          max-width: 1180px;
          height: 70px;
          margin: auto;
          padding: 0 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .service-logo {
          color: #1d5b39;

          font-size: 23px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .service-logo span {
          color: #222;
        }

        .service-call {
          padding: 11px 17px;

          background: #1d5b39;
          color: white;

          border-radius: 10px;

          font-size: 14px;
          font-weight: 900;
        }

        /* =====================================
           HERO
        ===================================== */

        .service-hero {
          position: relative;

          min-height: 510px;

          display: flex;
          align-items: center;

          background:
            linear-gradient(
              90deg,
              rgba(8, 24, 14, 0.92),
              rgba(8, 24, 14, 0.65),
              rgba(8, 24, 14, 0.28)
            ),
            url("${serviceData.image}")
            center / cover no-repeat;

          color: white;
        }

        .hero-inner {
          width: 100%;
          max-width: 1180px;

          margin: auto;
          padding: 80px 24px;
        }

        .hero-badge {
          display: inline-block;

          margin-bottom: 18px;
          padding: 8px 14px;

          border:
            1px solid
            rgba(255,255,255,0.4);

          border-radius: 30px;

          background:
            rgba(255,255,255,0.12);

          font-size: 14px;
          font-weight: 800;
        }

        .service-hero h1 {
          max-width: 800px;

          margin:
            0
            0
            22px;

          font-size:
            clamp(
              38px,
              7vw,
              68px
            );

          line-height: 1.15;
          letter-spacing: -3px;
        }

        .service-hero p {
          max-width: 690px;

          margin:
            0
            0
            30px;

          color: #edf3ee;

          font-size: 17px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .hero-call,
        .hero-region {
          display: inline-block;

          padding: 15px 21px;

          border-radius: 11px;

          font-weight: 900;
        }

        .hero-call {
          background: white;
          color: #173c27;
        }

        .hero-region {
          border:
            1px solid
            rgba(255,255,255,0.7);

          color: white;
        }

        /* =====================================
           공통
        ===================================== */

        .section {
          padding: 80px 24px;
        }

        .container {
          max-width: 1180px;
          margin: auto;
        }

        .label {
          margin-bottom: 9px;

          color: #28744b;

          font-size: 13px;
          font-weight: 900;
        }

        .title {
          margin:
            0
            0
            13px;

          font-size: 36px;
          letter-spacing: -1.5px;
        }

        .desc {
          margin:
            0
            0
            35px;

          color: #687069;

          line-height: 1.8;
        }

        /* =====================================
           작업 내용
        ===================================== */

        .info-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 35px;

          align-items: center;
        }

        .info-image {
          width: 100%;

          border-radius: 22px;

          aspect-ratio: 4 / 3;

          object-fit: cover;
        }

        .point-box {
          padding: 35px;

          background: #eaf2ec;

          border-radius: 22px;
        }

        .point-box h2 {
          margin:
            0
            0
            18px;

          font-size: 28px;
        }

        .point {
          padding: 13px 0;

          border-bottom:
            1px solid #d1ded4;

          font-weight: 750;
        }

        .point:last-child {
          border-bottom: 0;
        }

        /* =====================================
           지역 선택
        ===================================== */

        .region-section {
          background: #173c27;
          color: white;
        }

        .region-section .label {
          color: #b8e986;
        }

        .region-section .desc {
          color: #d8e2da;
        }

        .province-box {
          margin-bottom: 24px;

          padding: 28px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );

          border-radius: 18px;
        }

        .province-top {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 15px;

          margin-bottom: 20px;
        }

        .province-top h3 {
          margin: 0;

          font-size: 25px;
        }

        .province-count {
          color: #b8e986;

          font-size: 13px;
          font-weight: 900;
        }

        .region-grid {
          display: grid;

          grid-template-columns:
            repeat(
              5,
              minmax(0, 1fr)
            );

          gap: 10px;
        }

        .region-button {
          display: flex;

          min-height: 48px;

          align-items: center;
          justify-content: center;

          padding: 11px 9px;

          background:
            rgba(
              255,
              255,
              255,
              0.1
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.18
            );

          border-radius: 9px;

          text-align: center;

          font-size: 14px;
          font-weight: 800;

          transition:
            background 0.2s,
            transform 0.2s;
        }

        .region-button:hover {
          background:
            rgba(
              255,
              255,
              255,
              0.2
            );

          transform:
            translateY(-2px);
        }

        .province-button {
          background: #b8e986;
          color: #173c27;

          border-color: #b8e986;
        }

        /* =====================================
           다른 서비스
        ===================================== */

        .other-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;
        }

        .other-card {
          padding: 22px;

          background: white;

          border:
            1px solid #e4e8e4;

          border-radius: 15px;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .other-card:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0
            8px
            24px
            rgba(0,0,0,0.08);
        }

        .other-card strong {
          display: block;

          margin-bottom: 7px;

          font-size: 17px;
        }

        .other-card span {
          color: #28744b;

          font-size: 13px;
          font-weight: 900;
        }

        /* =====================================
           상담
        ===================================== */

        .contact {
          padding: 75px 24px;

          text-align: center;

          background: #eef3ef;
        }

        .contact h2 {
          margin:
            0
            0
            14px;

          font-size: 35px;
        }

        .contact p {
          margin:
            0
            0
            25px;

          color: #687069;

          line-height: 1.8;
        }

        .big-call {
          display: inline-block;

          padding: 17px 25px;

          background: #1d5b39;
          color: white;

          border-radius: 12px;

          font-size: 19px;
          font-weight: 900;
        }

        /* =====================================
           FOOTER
        ===================================== */

        .footer {
          padding: 38px 24px;

          background: #121713;
          color: #aeb6af;

          font-size: 13px;
          line-height: 1.8;
        }

        .footer-inner {
          max-width: 1180px;
          margin: auto;
        }

        .footer-company {
          margin-bottom: 8px;

          color: white;

          font-size: 20px;
          font-weight: 900;
        }

        /* =====================================
           모바일
        ===================================== */

        @media (
          max-width: 850px
        ) {
          .info-grid {
            grid-template-columns:
              1fr;
          }

          .region-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );
          }

          .other-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        @media (
          max-width: 560px
        ) {
          .service-nav {
            height: 64px;
            padding: 0 18px;
          }

          .service-logo {
            font-size: 20px;
          }

          .service-hero {
            min-height: 470px;
          }

          .hero-inner {
            padding:
              60px
              19px;
          }

          .service-hero h1 {
            font-size: 40px;
            letter-spacing: -2px;
          }

          .section {
            padding:
              60px
              18px;
          }

          .title {
            font-size: 29px;
          }

          .point-box {
            padding:
              27px
              21px;
          }

          .province-box {
            padding:
              21px
              16px;
          }

          .province-top {
            display: block;
          }

          .province-top h3 {
            margin-bottom: 7px;
          }

          .region-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }

          .other-grid {
            grid-template-columns:
              1fr;
          }

          .contact h2 {
            font-size: 29px;
          }
        }
      `}</style>

      {/* HEADER */}

      <header className="service-header">
        <div className="service-nav">
          <Link
            href="/"
            className="service-logo"
          >
            이지<span>종합건설</span>
          </Link>

          <a
            href={`tel:${PHONE}`}
            className="service-call"
          >
            ☎ 전화 문의
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}

        <section className="service-hero">
          <div className="hero-inner">
            <div className="hero-badge">
              🌳 이지종합건설 벌목 서비스
            </div>

            <h1>
              {serviceData.title}
            </h1>

            <p>
              {serviceData.description}
              <br />
              서울 · 경기 · 인천 · 충남 · 충북
              지역별 페이지에서 자세한 내용을
              확인하실 수 있습니다.
            </p>

            <div className="hero-buttons">
              <a
                href={`tel:${PHONE}`}
                className="hero-call"
              >
                ☎ 견적 문의
              </a>

              <a
                href="#regions"
                className="hero-region"
              >
                지역 선택 ↓
              </a>
            </div>
          </div>
        </section>

        {/* 작업 내용 */}

        <section className="section">
          <div className="container">
            <div className="info-grid">
              <img
                src={serviceData.image}
                alt={`${COMPANY} ${serviceData.title}`}
                className="info-image"
              />

              <div className="point-box">
                <h2>
                  {serviceData.title}
                </h2>

                {serviceData.points.map(
                  (point) => (
                    <div
                      key={point}
                      className="point"
                    >
                      ✓ {point}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            지역별 페이지
        ===================================== */}

        <section
          className="section region-section"
          id="regions"
        >
          <div className="container">
            <div className="label">
              SERVICE AREA
            </div>

            <h2 className="title">
              지역별 {serviceData.shortTitle}
            </h2>

            <p className="desc">
              지역을 선택하면 해당 지역의
              {` ${serviceData.shortTitle} `}
              안내 페이지로 이동합니다.
              <br />
              서울 · 경기 · 인천 · 충남 · 충북
              지역별 페이지를 확인하세요.
            </p>

            {provinces.map(
              (province) => {
                /*
                  광역 페이지 + 해당 시군구를
                  모두 가져옴.
                */

                const provinceRegions =
                  regions.filter(
                    (region) =>
                      region.province ===
                      province
                  );

                /*
                  서울 자체 / 경기 자체처럼
                  name과 province가 같은 것은
                  광역 버튼으로 사용.
                */

                const mainRegion =
                  provinceRegions.find(
                    (region) =>
                      region.name ===
                      province
                  );

                /*
                  나머지는 시군구 버튼
                */

                const districts =
                  provinceRegions.filter(
                    (region) =>
                      region.name !==
                      province
                  );

                return (
                  <div
                    className="province-box"
                    key={province}
                  >
                    <div className="province-top">
                      <h3>
                        {province}
                      </h3>

                      <span className="province-count">
                        {districts.length}
                        개 지역
                      </span>
                    </div>

                    <div className="region-grid">
                      {mainRegion && (
                        <Link
                          href={
                            `/services/${service}/${mainRegion.slug}`
                          }
                          className="region-button province-button"
                        >
                          {province} 전체
                        </Link>
                      )}

                      {districts.map(
                        (region) => (
                          <Link
                            key={
                              region.slug
                            }
                            href={
                              `/services/${service}/${region.slug}`
                            }
                            className="region-button"
                          >
                            {region.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* =====================================
            다른 벌목 서비스
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="label">
              OTHER SERVICE
            </div>

            <h2 className="title">
              다른 벌목 서비스
            </h2>

            <p className="desc">
              필요한 작업에 맞는
              벌목 서비스를 선택하세요.
            </p>

            <div className="other-grid">
              {Object.entries(SERVICES)
                .filter(
                  ([slug]) =>
                    slug !== service
                )
                .map(
                  ([
                    slug,
                    item,
                  ]) => (
                    <Link
                      href={
                        `/services/${slug}`
                      }
                      className="other-card"
                      key={slug}
                    >
                      <strong>
                        {item.title}
                      </strong>

                      <span>
                        자세히 보기 →
                      </span>
                    </Link>
                  )
                )}
            </div>
          </div>
        </section>

        {/* 상담 */}

        <section className="contact">
          <h2>
            {serviceData.title} 견적 문의
          </h2>

          <p>
            작업이 필요한 나무와
            주변 현장 사진을 준비해 주세요.
            <br />
            현장 위치와 작업 내용을
            확인한 후 상담해드립니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            className="big-call"
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-company">
            {COMPANY}
          </div>

          <div>
            대표자 : 송은규
          </div>

          <div>
            사업자등록번호 :
            882-06-03153
          </div>

          <div>
            전화 : {PHONE_DISPLAY}
          </div>

          <div>
            서비스지역 :
            서울 · 경기 · 인천 · 충남 · 충북 ·
            그 외 지역 문의
          </div>

          <div
            style={{
              marginTop: "14px",
            }}
          >
            © 2026 {COMPANY}.
            All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
