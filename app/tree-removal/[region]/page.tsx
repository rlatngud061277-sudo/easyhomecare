import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  regions,
  getRegion,
  getRegionName,
  getRegionUrl,
} from "../../regions";

const SITE_URL = "https://easyhomecare.vercel.app";

const COMPANY = "이지종합건설";

const PHONE = "01023849768";
const PHONE_DISPLAY = "010-2384-9768";

const TREE_IMAGE =
  "/F43681CE-3D8F-416F-AF29-CE59813364F8.png";

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

  // 검색결과 제목 예시:
  // 인천벌목업체 | 이지종합건설
  // 세종벌목업체 | 이지종합건설
  // 강남구벌목업체 | 이지종합건설
  const title = `${name}벌목업체 | ${COMPANY}`;

  const description =
    `${name} 벌목 및 나무 제거 상담. ` +
    `주택·건물 주변 벌목, 위험목 제거, 고목 제거, ` +
    `대형 수목 벌목, 토지 및 임야 벌목 등 ` +
    `현장 상황에 맞는 작업을 안내합니다. ` +
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
          url: TREE_IMAGE,
          alt: `${name} 벌목 상담`,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RegionPage({
  params,
}: Props) {
  const { region: slug } = await params;

  const region = getRegion(slug);

  if (!region) {
    notFound();
  }

  const name = getRegionName(region);

  const nearbyRegions = regions
    .filter(
      (item) =>
        item.province === region.province &&
        item.slug !== region.slug
    )
    .slice(0, 12);

  const mainRegions = regions.filter(
    (item) => item.name === item.province
  );

  const services = [
    {
      title: "주택 및 건물 주변 벌목",
      description:
        `${name} 주택, 상가, 공장 등 건물 주변의 ` +
        `나무 제거 작업을 상담합니다.`,
    },
    {
      title: "위험목 및 고목 제거",
      description:
        "주변 건물과 시설물, 전선 등의 위치를 확인하고 " +
        "현장에 맞는 작업 방법을 안내합니다.",
    },
    {
      title: "대형 수목 벌목",
      description:
        "나무의 높이와 굵기, 작업 공간 및 장비 진입 가능 여부를 " +
        "확인한 뒤 벌목 작업을 상담합니다.",
    },
    {
      title: "토지 및 임야 벌목",
      description:
        `${name} 토지 정리, 부지 관리 및 임야 내 ` +
        `수목 제거 등 작업 범위에 맞춰 상담합니다.`,
    },
  ];

  return (
    <main className="regionPage">
      <style>{`
        .regionPage {
          min-height: 100vh;
          background: #f7f8f6;
          color: #18211a;
          font-family: -apple-system, BlinkMacSystemFont,
            "Pretendard", "Noto Sans KR", Arial, sans-serif;
          word-break: keep-all;
        }

        .regionPage * {
          box-sizing: border-box;
        }

        .regionPage a {
          text-decoration: none;
        }

        .regionHeader {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid #e5e8e5;
        }

        .regionNav {
          max-width: 1180px;
          margin: auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .regionLogo {
          color: #1d5b39;
          font-size: 23px;
          font-weight: 900;
        }

        .regionCall,
        .regionButton,
        .regionFloating {
          display: inline-block;
          background: #1d5b39;
          color: white;
          border-radius: 12px;
          font-weight: 900;
        }

        .regionCall {
          padding: 12px 18px;
          font-size: 14px;
        }

        .regionHero {
          min-height: 520px;
          display: flex;
          align-items: center;
          padding: 85px 24px;
          color: white;
          background:
            linear-gradient(
              90deg,
              rgba(8,24,14,0.94),
              rgba(8,24,14,0.65),
              rgba(8,24,14,0.3)
            ),
            url("${TREE_IMAGE}") center / cover no-repeat;
        }

        .regionContainer {
          width: 100%;
          max-width: 1180px;
          margin: auto;
        }

        .regionBadge {
          display: inline-block;
          padding: 9px 15px;
          margin-bottom: 22px;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 30px;
          background: rgba(255,255,255,0.13);
          font-size: 14px;
          font-weight: 800;
        }

        .regionHero h1 {
          margin: 0 0 24px;
          font-size: clamp(35px, 6vw, 62px);
          line-height: 1.3;
          letter-spacing: -2px;
        }

        .regionHero h1 strong {
          color: #b8e986;
        }

        .regionHero p {
          max-width: 720px;
          margin: 0 0 30px;
          color: #edf3ed;
          font-size: 17px;
          line-height: 1.9;
        }

        .regionButton {
          padding: 16px 23px;
          font-size: 16px;
        }

        .regionHero .regionButton {
          background: white;
          color: #173c27;
        }

        .regionSection {
          padding: 80px 24px;
        }

        .regionLabel {
          margin-bottom: 12px;
          color: #28744b;
          font-size: 14px;
          font-weight: 900;
        }

        .regionSectionTitle {
          margin: 0 0 16px;
          font-size: clamp(28px, 4vw, 38px);
          line-height: 1.35;
          letter-spacing: -1px;
        }

        .regionSectionDesc {
          max-width: 850px;
          margin: 0 0 35px;
          color: #667068;
          font-size: 16px;
          line-height: 1.9;
        }

        .regionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .regionCard {
          overflow: hidden;
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 18px;
        }

        .regionCardImage {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }

        .regionCardBody {
          padding: 24px;
        }

        .regionCardBody h3 {
          margin: 0 0 12px;
          font-size: 21px;
        }

        .regionCardBody p {
          margin: 0;
          color: #667068;
          font-size: 15px;
          line-height: 1.8;
        }

        .regionAbout {
          background: #eaf2ec;
        }

        .regionCheckBox {
          padding: 28px;
          background: white;
          border: 1px solid #dbe7dd;
          border-radius: 18px;
        }

        .regionCheck {
          padding: 13px 0;
          border-bottom: 1px solid #e5e8e5;
          font-weight: 800;
          line-height: 1.7;
        }

        .regionCheck:last-child {
          border-bottom: 0;
        }

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
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 30px;
          color: white;
          font-size: 14px;
          font-weight: 800;
        }

        .regionContact {
          padding: 55px 25px;
          text-align: center;
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 24px;
        }

        .regionContact h2 {
          margin: 0 0 17px;
          font-size: 36px;
        }

        .regionContact p {
          margin: 0 0 28px;
          color: #667068;
          line-height: 1.9;
        }

        .regionFooter {
          padding: 45px 24px 110px;
          background: #121713;
          color: #c9cfca;
          font-size: 13px;
          line-height: 2;
        }

        .regionFooterInner {
          max-width: 1180px;
          margin: auto;
        }

        .regionFooterLogo {
          color: white;
          font-size: 23px;
          font-weight: 900;
        }

        .regionFooter a {
          color: white;
        }

        .regionFloating {
          position: fixed;
          right: 18px;
          bottom: 20px;
          z-index: 200;
          padding: 15px 20px;
          border-radius: 50px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.22);
        }

        @media (max-width: 600px) {
          .regionNav {
            padding: 15px 18px;
          }

          .regionLogo {
            font-size: 19px;
          }

          .regionHero {
            padding: 70px 20px;
          }

          .regionHero h1 {
            font-size: 38px;
          }

          .regionHero p {
            font-size: 15px;
          }

          .regionSection {
            padding: 65px 18px;
          }

          .regionGrid {
            grid-template-columns: 1fr;
          }

          .regionContact {
            padding: 40px 20px;
          }

          .regionContact h2 {
            font-size: 29px;
          }
        }
      `}</style>

      <header className="regionHeader">
        <div className="regionNav">
          <Link href="/" className="regionLogo">
            {COMPANY}
          </Link>

          <a href={`tel:${PHONE}`} className="regionCall">
            ☎ 전화 문의
          </a>
        </div>
      </header>

      <section className="regionHero">
        <div className="regionContainer">
          <div className="regionBadge">
            🌳 {name} 벌목 출장 상담
          </div>

          <h1>
            {name}벌목업체
            <br />
            <strong>나무 제거 · 위험목 제거</strong>
          </h1>

          <p>
            {name} 주택 및 건물 주변 벌목부터
            대형 수목 제거, 토지 및 임야 벌목까지.
            <br />
            현장 환경과 작업 조건을 확인하고
            벌목 방법과 견적을 안내해드립니다.
          </p>

          <a href={`tel:${PHONE}`} className="regionButton">
            ☎ 벌목 견적 문의
          </a>
        </div>
      </section>

      <section className="regionSection">
        <div className="regionContainer">
          <div className="regionLabel">
            TREE REMOVAL SERVICE
          </div>

          <h2 className="regionSectionTitle">
            {name} 벌목 서비스
          </h2>

          <p className="regionSectionDesc">
            {COMPANY}은 {name} 지역의 벌목 및
            나무 제거 작업을 상담합니다.
            나무의 크기와 주변 환경, 장비 진입 가능 여부에
            따라 작업 방법과 견적이 달라질 수 있습니다.
          </p>

          <div className="regionGrid">
            {services.map((service) => (
              <article className="regionCard" key={service.title}>
                <img
                  src={TREE_IMAGE}
                  alt={`${name} ${service.title}`}
                  className="regionCardImage"
                  loading="lazy"
                />

                <div className="regionCardBody">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="regionSection"
        style={{ background: "#ffffff" }}
      >
        <div className="regionContainer">
          <div className="regionLabel">
            TREE REMOVAL PORTFOLIO
          </div>

          <h2 className="regionSectionTitle">
            벌목 작업 안내
          </h2>

          <p className="regionSectionDesc">
            벌목이 필요한 나무의 사진과 현장 위치를
            준비해 주시면 작업 범위와 현장 조건을
            확인한 후 상담해드립니다.
          </p>

          <div className="regionGrid">
            <article className="regionCard">
              <img
                src={TREE_IMAGE}
                alt="벌목 작업 안내 이미지"
                className="regionCardImage"
                loading="lazy"
              />

              <div className="regionCardBody">
                <h3>현장별 벌목 상담</h3>
                <p>
                  주택 주변 나무 제거부터 대형 수목 및
                  위험목 제거까지 현장 상황에 맞춰
                  상담을 진행합니다.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="regionSection regionAbout">
        <div className="regionContainer">
          <div className="regionLabel">
            TREE REMOVAL GUIDE
          </div>

          <h2 className="regionSectionTitle">
            {name} 벌목 작업 상담 안내
          </h2>

          <p className="regionSectionDesc">
            벌목할 나무의 크기와 위치, 주변 건물 및
            전선과의 거리, 장비 진입 가능 여부 등을
            확인한 후 작업 방법을 안내합니다.
          </p>

          <div className="regionCheckBox">
            <div className="regionCheck">
              ✓ 벌목할 나무의 높이와 굵기 확인
            </div>
            <div className="regionCheck">
              ✓ 주변 건물 및 시설물 위치 확인
            </div>
            <div className="regionCheck">
              ✓ 장비 진입 가능 여부 확인
            </div>
            <div className="regionCheck">
              ✓ 작업 범위 및 현장 위치 확인
            </div>
            <div className="regionCheck">
              ✓ 작업 방법 및 견적 상담
            </div>
          </div>
        </div>
      </section>

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

          <div style={{ marginTop: 30 }}>
            <p>다른 지역 보기</p>

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
          </div>

          <div style={{ marginTop: 30 }}>
            <Link href="/tree-removal" className="regionTag">
              전체 벌목 출장 지역 보기 →
            </Link>
          </div>
        </div>
      </section>

      <section className="regionSection">
        <div className="regionContainer">
          <div className="regionContact">
            <div className="regionLabel">
              TREE REMOVAL CONTACT
            </div>

            <h2>{name} 벌목 견적 문의</h2>

            <p>
              벌목이 필요한 나무의 사진과 현장 위치를
              준비해 주세요.
              <br />
              나무의 크기와 작업 환경 등을 확인한 후
              상담해드립니다.
            </p>

            <a href={`tel:${PHONE}`} className="regionButton">
              ☎ {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer className="regionFooter">
        <div className="regionFooterInner">
          <div className="regionFooterLogo">
            {COMPANY}
          </div>

          <div>벌목 전문업체</div>
          <div>대표자 : 송은규</div>
          <div>사업자등록번호 : 882-06-03153</div>
          <div>전화 : {PHONE_DISPLAY}</div>

          <div>
            서비스지역 : 서울 · 경기 · 인천 ·
            충남 · 충북 · 세종 · 그 외 지역 문의
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href="/">메인 홈페이지</Link>
            {" · "}
            <Link href="/tree-removal">전체 벌목 지역</Link>
          </div>

          <div style={{ marginTop: 20 }}>
            © 2026 {COMPANY}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a href={`tel:${PHONE}`} className="regionFloating">
        ☎ 벌목 견적문의
      </a>
    </main>
  );
}
