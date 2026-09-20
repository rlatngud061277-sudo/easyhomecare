import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  regions,
  getRegion,
  getRegionName,
  getRegionUrl,
} from "../../regions";

/* =====================================
   기본 정보
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

const COMPANY = "이지종합건설";

const PHONE = "01023849768";
const PHONE_DISPLAY = "010-2384-9768";

/* =====================================
   메인 홈페이지와 동일한 벌목 사진
===================================== */

const TREE_IMAGES = {
  main: "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

  building:
    "/821819A6-616A-44E0-8B91-B80E45FE4E73.png",

  dangerous:
    "/5AD408FF-BE0D-4117-A740-AF7B2010E6A7.png",

  large:
    "/06B44412-9B35-4FB9-BF55-A47B4C6F5B92.png",

  land:
    "/9C676CC5-D9E0-45B4-B0DC-F4653EC43126.png",
};

/* =====================================
   지역 페이지 설정
===================================== */

type Props = {
  params: Promise<{
    region: string;
  }>;
};

export function generateStaticParams() {
  return regions.map((region) => ({
    region: region.slug,
  }));
}

export const dynamicParams = false;

/* =====================================
   지역별 검색 제목 및 설명
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region: slug } = await params;

  const region = getRegion(slug);

  if (!region) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const name = getRegionName(region);

  const title = `${name} 벌목업체 | ${COMPANY}`;

  const description =
    `${name} 벌목 및 나무 제거 상담. ` +
    "주택 및 건물 주변 벌목, 위험목 제거, " +
    "대형 수목 벌목, 토지 및 임야 벌목 등 " +
    "현장 상황에 맞는 작업을 상담합니다. " +
    `${COMPANY} ${PHONE_DISPLAY}`;

  const pageUrl = `${SITE_URL}${getRegionUrl(region)}`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: COMPANY,
      type: "website",
      images: [
        {
          url: TREE_IMAGES.main,
          alt: `${name} 벌목업체 ${COMPANY}`,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =====================================
   지역별 벌목 페이지
===================================== */

export default async function RegionPage({
  params,
}: Props) {
  const { region: slug } = await params;

  const region = getRegion(slug);

  if (!region) {
    notFound();
  }

  const name = getRegionName(region);

  /* =====================================
     메인 홈페이지와 동일한 서비스 사진
  ===================================== */

  const services = [
    {
      title: "주택 및 건물 주변 벌목",
      desc:
        `${name} 주택, 상가, 공장 등 건물 주변의 ` +
        "나무 제거 작업을 현장 상황에 맞춰 상담합니다.",
      image: TREE_IMAGES.building,
    },
    {
      title: "위험목 제거",
      desc:
        "건물이나 시설물에 피해를 줄 우려가 있는 " +
        "나무의 상태와 주변 환경을 확인한 후 " +
        "작업 방법을 안내합니다.",
      image: TREE_IMAGES.dangerous,
    },
    {
      title: "대형 수목 벌목",
      desc:
        "크기가 큰 나무와 오래된 고목 등 " +
        "현장 접근성과 주변 시설물을 고려한 " +
        "벌목 작업을 상담합니다.",
      image: TREE_IMAGES.large,
    },
    {
      title: "토지 및 임야 벌목",
      desc:
        "토지 정리, 부지 관리 및 임야 내 수목 제거 등 " +
        "현장 규모와 작업 범위에 맞춰 상담해드립니다.",
      image: TREE_IMAGES.land,
    },
  ];

  /* =====================================
     지역 이동 링크
  ===================================== */

  const nearbyRegions = regions.filter(
    (item) =>
      item.province === region.province &&
      item.slug !== region.slug
  );

  const mainRegions = regions.filter(
    (item) => item.name === item.province
  );

  return (
    <main className="regionPage">
      <style>{`
        /* =====================================
           기본 디자인
        ===================================== */

        .regionPage {
          min-height: 100vh;
          background: #f7f8f6;
          color: #18211a;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Pretendard",
            "Noto Sans KR",
            Arial,
            sans-serif;

          word-break: keep-all;
        }

        .regionPage * {
          box-sizing: border-box;
        }

        .regionPage a {
          text-decoration: none;
        }

        /* =====================================
           상단 메뉴
        ===================================== */

        .regionHeader {
          position: sticky;
          top: 0;
          z-index: 100;

          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #e6e9e6;
        }

        .regionNav {
          max-width: 1180px;
          min-height: 72px;
          margin: auto;
          padding: 12px 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .regionLogo {
          color: #1d5b39;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .regionCall {
          display: inline-block;

          padding: 12px 18px;
          background: #1d5b39;
          color: white;

          border-radius: 10px;

          font-size: 14px;
          font-weight: 900;
          white-space: nowrap;
        }

        /* =====================================
           메인 배너
           메인 홈페이지와 동일한 사진
        ===================================== */

        .regionHero {
          min-height: 580px;

          display: flex;
          align-items: center;

          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(8, 24, 14, 0.92),
              rgba(8, 24, 14, 0.65),
              rgba(8, 24, 14, 0.2)
            ),
            url("${TREE_IMAGES.main}")
            center / cover no-repeat;
        }

        .regionContainer {
          width: 100%;
          max-width: 1180px;
          margin: auto;
        }

        .regionHeroInner {
          padding: 85px 24px;
        }

        .regionBadge {
          display: inline-block;

          margin-bottom: 20px;
          padding: 9px 15px;

          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 30px;

          background: rgba(255, 255, 255, 0.14);

          font-size: 14px;
          font-weight: 800;
        }

        .regionHero h1 {
          max-width: 850px;
          margin: 0 0 23px;

          font-size: clamp(38px, 6vw, 64px);
          line-height: 1.2;
          letter-spacing: -2px;
        }

        .regionHero h1 strong {
          color: #b8e986;
        }

        .regionHero p {
          max-width: 700px;
          margin: 0 0 32px;

          color: #f2f5f2;
          font-size: 17px;
          line-height: 1.8;
        }

        .regionButton {
          display: inline-block;

          padding: 16px 22px;

          background: #1d5b39;
          color: white;

          border-radius: 12px;

          font-size: 16px;
          font-weight: 900;
        }

        .regionHero .regionButton {
          background: white;
          color: #173c27;
        }

        /* =====================================
           공통 섹션
        ===================================== */

        .regionSection {
          padding: 85px 24px;
        }

        .regionLabel {
          margin-bottom: 10px;

          color: #28744b;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.4px;
        }

        .regionSectionTitle {
          margin: 0 0 15px;

          font-size: clamp(29px, 4vw, 37px);
          line-height: 1.35;
          letter-spacing: -1.5px;
        }

        .regionSectionDesc {
          max-width: 850px;
          margin: 0 0 35px;

          color: #667068;
          font-size: 16px;
          line-height: 1.9;
        }

        /* =====================================
           벌목 서비스 사진 카드
        ===================================== */

        .regionServices {
          background: white;
        }

        .regionServiceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .regionCard {
          overflow: hidden;

          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 18px;

          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
        }

        .regionCardImage {
          display: block;

          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
        }

        .regionCardBody {
          padding: 22px;
        }

        .regionCardBody h3 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.5;
        }

        .regionCardBody p {
          margin: 0;

          color: #707870;
          font-size: 15px;
          line-height: 1.8;
        }

        /* =====================================
           상담 안내
        ===================================== */

        .regionAbout {
          background: #f7f8f6;
        }

        .regionAboutGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .regionAboutBox {
          padding: 38px;

          background: #eaf2ec;
          border-radius: 24px;
        }

        .regionAboutBox h3 {
          margin: 0 0 18px;
          font-size: 27px;
        }

        .regionCheck {
          padding: 13px 0;

          border-bottom: 1px solid #d2dfd5;
          font-weight: 800;
          line-height: 1.7;
        }

        .regionCheck:last-child {
          border-bottom: 0;
        }

        /* =====================================
           지역별 페이지 이동
        ===================================== */

        .regionArea {
          background: #173c27;
          color: white;
        }

        .regionArea .regionLabel {
          color: #b8e986;
        }

        .regionArea .regionSectionDesc {
          color: #d8e2da;
        }

        .regionTags {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .regionTag {
          display: inline-block;

          padding: 13px 18px;

          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;

          color: white;
          font-size: 14px;
          font-weight: 800;
        }

        .regionAreaHeading {
          margin: 30px 0 15px;
          font-size: 18px;
        }

        .regionAllAreas {
          display: inline-block;
          margin-top: 28px;
          padding: 16px 22px;

          background: white;
          color: #173c27;

          border-radius: 12px;
          font-size: 15px;
          font-weight: 900;
        }

        /* =====================================
           견적 문의
        ===================================== */

        .regionContact {
          padding: 55px 25px;

          text-align: center;

          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 24px;
        }

        .regionContact h2 {
          margin: 0 0 15px;
          font-size: 36px;
        }

        .regionContact p {
          margin: 0 0 27px;

          color: #687069;
          font-size: 16px;
          line-height: 1.8;
        }

        /* =====================================
           하단 사업자 정보
        ===================================== */

        .regionFooter {
          padding: 45px 24px 105px;

          background: #121713;
          color: #c9cfca;

          font-size: 13px;
          line-height: 1.9;
        }

        .regionFooterInner {
          max-width: 1180px;
          margin: auto;
        }

        .regionFooterLogo {
          margin-bottom: 15px;

          color: white;
          font-size: 22px;
          font-weight: 900;
        }

        .regionFooter a {
          color: white;
        }

        /* =====================================
           하단 고정 전화 버튼
        ===================================== */

        .regionFloatingCall {
          position: fixed;
          right: 18px;
          bottom: 20px;
          z-index: 200;

          padding: 15px 20px;

          background: #1d5b39;
          color: white;

          border-radius: 50px;

          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.22);

          font-weight: 900;
        }

        /* =====================================
           모바일 디자인
        ===================================== */

        @media (max-width: 850px) {
          .regionAboutGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .regionNav {
            min-height: 64px;
            padding: 12px 18px;
          }

          .regionLogo {
            font-size: 20px;
          }

          .regionHero {
            min-height: 560px;
          }

          .regionHeroInner {
            padding: 65px 20px;
          }

          .regionHero h1 {
            font-size: 40px;
          }

          .regionHero p {
            font-size: 16px;
          }

          .regionSection {
            padding: 65px 18px;
          }

          .regionServiceGrid {
            grid-template-columns: 1fr;
          }

          .regionAboutBox {
            padding: 28px 22px;
          }

          .regionContact h2 {
            font-size: 28px;
          }
        }
      `}</style>

      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header className="regionHeader">
        <div className="regionNav">
          <Link href="/" className="regionLogo">
            {COMPANY}
          </Link>

          <a
            href={`tel:${PHONE}`}
            className="regionCall"
          >
            ☎ 전화 문의
          </a>
        </div>
      </header>

      {/* =====================================
          지역별 메인 배너
      ===================================== */}

      <section className="regionHero">
        <div className="regionContainer regionHeroInner">
          <div className="regionBadge">
            🌳 {name} 벌목 · 나무 제거 상담
          </div>

          <h1>
            {name} 벌목업체
            <br />
            <strong>{COMPANY}</strong>
          </h1>

          <p>
            {name} 지역의 주택 및 건물 주변 벌목부터
            위험목 제거, 대형 수목 벌목,
            토지 및 임야 벌목까지.
            <br />
            현장 환경과 작업 조건을 확인한 후
            벌목 방법과 견적을 안내해드립니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            className="regionButton"
          >
            ☎ 벌목 견적 문의
          </a>
        </div>
      </section>

      {/* =====================================
          벌목 서비스
          메인 홈페이지 사진 그대로 사용
      ===================================== */}

      <section className="regionSection regionServices">
        <div className="regionContainer">
          <div className="regionLabel">
            TREE REMOVAL SERVICE
          </div>

          <h2 className="regionSectionTitle">
            {name} 벌목 전문 시공
          </h2>

          <p className="regionSectionDesc">
            {COMPANY}은 {name} 지역의 주택,
            상가, 공장, 토지 및 임야 등
            다양한 현장의 벌목 작업을 상담합니다.
            나무의 크기와 주변 환경에 따라
            작업 방법과 견적이 달라질 수 있습니다.
          </p>

          <div className="regionServiceGrid">
            {services.map((service) => (
              <article
                key={service.title}
                className="regionCard"
              >
                <img
                  src={service.image}
                  alt={`${name} ${service.title}`}
                  className="regionCardImage"
                  loading="lazy"
                />

                <div className="regionCardBody">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          벌목 상담 안내
      ===================================== */}

      <section className="regionSection regionAbout">
        <div className="regionContainer regionAboutGrid">
          <div>
            <div className="regionLabel">
              ABOUT TREE REMOVAL
            </div>

            <h2 className="regionSectionTitle">
              {name} 벌목 작업,
              <br />
              현장 확인부터 상담하세요.
            </h2>

            <p className="regionSectionDesc">
              벌목은 나무의 높이와 굵기,
              주변 건물 및 전선과의 거리,
              장비 진입 가능 여부 등에 따라
              작업 방법이 달라집니다.
              <br />
              <br />
              현장 사진과 작업 내용을 준비해 주시면
              작업 가능 여부와 필요한 장비,
              예상 견적을 안내해드립니다.
            </p>
          </div>

          <div className="regionAboutBox">
            <h3>벌목 상담 안내</h3>

            <div className="regionCheck">
              ✓ 주택 및 건물 주변 나무 제거
            </div>

            <div className="regionCheck">
              ✓ 위험목 및 고목 제거
            </div>

            <div className="regionCheck">
              ✓ 대형 수목 벌목
            </div>

            <div className="regionCheck">
              ✓ 토지 및 임야 벌목
            </div>

            <div className="regionCheck">
              ✓ 현장 접근성 및 장비 진입 확인
            </div>

            <div className="regionCheck">
              ✓ 벌목 작업 견적 상담
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          지역별 벌목 페이지 이동
      ===================================== */}

      <section className="regionSection regionArea">
        <div className="regionContainer">
          <div className="regionLabel">
            SERVICE AREA
          </div>

          <h2 className="regionSectionTitle">
            {region.province} 벌목 출장 지역
          </h2>

          <p className="regionSectionDesc">
            아래 지역을 누르면 해당 지역의
            벌목 안내 페이지로 이동합니다.
          </p>

          <div className="regionTags">
            {nearbyRegions.map((item) => (
              <Link
                key={item.slug}
                href={getRegionUrl(item)}
                className="regionTag"
              >
                {getRegionName(item)} 벌목
              </Link>
            ))}
          </div>

          <h3 className="regionAreaHeading">
            다른 지역 보기
          </h3>

          <div className="regionTags">
            {mainRegions.map((item) => (
              <Link
                key={item.slug}
                href={getRegionUrl(item)}
                className="regionTag"
              >
                {item.name} 벌목
              </Link>
            ))}
          </div>

          <Link
            href="/tree-removal"
            className="regionAllAreas"
          >
            🌳 전체 벌목 출장 지역 보기 →
          </Link>
        </div>
      </section>

      {/* =====================================
          견적 문의
      ===================================== */}

      <section className="regionSection">
        <div className="regionContainer">
          <div className="regionContact">
            <div className="regionLabel">
              TREE REMOVAL CONTACT
            </div>

            <h2>{name} 벌목 견적 문의</h2>

            <p>
              벌목이 필요한 나무의 사진과
              현장 위치를 준비해 주세요.
              <br />
              나무의 크기, 작업 환경 및
              장비 진입 가능 여부를 확인한 후
              상담해드립니다.
            </p>

            <a
              href={`tel:${PHONE}`}
              className="regionButton"
            >
              ☎ {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          하단 사업자 정보
      ===================================== */}

      <footer className="regionFooter">
        <div className="regionFooterInner">
          <div className="regionFooterLogo">
            {COMPANY}
          </div>

          <div>벌목 전문업체</div>

          <div>대표자 : 송은규</div>

          <div>
            사업자등록번호 : 882-06-03153
          </div>

          <div>
            전화 : {PHONE_DISPLAY}
          </div>

          <div>
            서비스지역 : 서울 · 경기 · 인천 ·
            충남 · 충북 · 세종 · 그 외 지역 문의
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href="/">
              메인 홈페이지
            </Link>

            {" · "}

            <Link href="/tree-removal">
              전체 벌목 지역
            </Link>
          </div>

          <div style={{ marginTop: 20 }}>
            © 2026 {COMPANY}. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* =====================================
          하단 고정 전화 버튼
      ===================================== */}

      <a
        href={`tel:${PHONE}`}
        className="regionFloatingCall"
      >
        ☎ 벌목 견적문의
      </a>
    </main>
  );
}
