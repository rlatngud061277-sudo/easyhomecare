import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  regions,
  getRegion,
} from "../../../regions";

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
    keyword: "건물 주변 벌목",

    description:
      "주택, 상가, 공장 등 건물 주변에 위치한 나무를 현장 상황에 맞춰 제거합니다.",

    image:
      "/821819A6-616A-44E0-8B91-B80E45FE4E73.png",

    points: [
      "주택 주변 나무 벌목",
      "상가 및 공장 주변 수목 제거",
      "건물과 가까운 나무 제거",
      "담장 주변 수목 정리",
      "현장 접근성 및 장비 진입 확인",
    ],
  },

  dangerous: {
    title: "위험목 제거",
    keyword: "위험목 제거",

    description:
      "쓰러질 위험이 있거나 건물과 시설물에 피해를 줄 우려가 있는 위험목 및 고목 제거를 상담합니다.",

    image:
      "/5AD408FF-BE0D-4117-A740-AF7B2010E6A7.png",

    points: [
      "기울어진 나무 제거",
      "고사목 및 고목 제거",
      "건물 주변 위험목 제거",
      "전선 주변 수목 상담",
      "강풍 피해 우려 수목 정리",
    ],
  },

  large: {
    title: "대형 수목 벌목",
    keyword: "대형 수목 벌목",

    description:
      "높이가 높거나 굵기가 큰 대형 수목과 고목의 벌목 작업을 상담합니다.",

    image:
      "/06B44412-9B35-4FB9-BF55-A47B4C6F5B92.png",

    points: [
      "대형 나무 벌목",
      "높은 수목 제거",
      "고목 제거",
      "장비를 이용한 벌목",
      "좁은 현장 대형 수목 상담",
    ],
  },

  land: {
    title: "토지 및 임야 벌목",
    keyword: "토지·임야 벌목",

    description:
      "토지 정리, 부지 관리 및 임야 내 수목 제거 등 현장 규모에 맞춰 작업을 상담합니다.",

    image:
      "/9C676CC5-D9E0-45B4-B0DC-F4653EC43126.png",

    points: [
      "토지 수목 제거",
      "임야 벌목",
      "부지 정리",
      "공사 예정지 수목 제거",
      "다수 수목 벌목 상담",
    ],
  },

  "pine-wilt": {
    title: "재선충 피해목 제거",
    keyword: "재선충 피해목 제거",

    description:
      "재선충 피해가 의심되거나 고사한 소나무의 현장 상태를 확인하고 피해목 제거 작업을 상담합니다.",

    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "재선충 피해 의심목 상담",
      "고사한 소나무 제거",
      "피해목 벌목 상담",
      "토지 내 소나무 제거",
      "현장 상태 확인",
    ],
  },

  "root-removal": {
    title: "나무뿌리 제거",
    keyword: "나무뿌리 제거",

    description:
      "벌목 후 남은 그루터기와 나무뿌리를 현장 여건과 장비 진입 가능 여부에 맞춰 제거합니다.",

    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "벌목 후 그루터기 제거",
      "나무뿌리 제거",
      "마당 나무뿌리 제거",
      "토지 내 뿌리 제거",
      "공사 전 수목 뿌리 정리",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =====================================
   모든 서비스 × 지역 URL 생성
===================================== */

export function generateStaticParams() {
  const params: {
    service: string;
    region: string;
  }[] = [];

  Object.keys(SERVICES).forEach((service) => {
    regions.forEach((region) => {
      params.push({
        service,
        region: region.slug,
      });
    });
  });

  return params;
}

export const dynamicParams = false;

/* =====================================
   SEO
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
  }>;
}): Promise<Metadata> {
  const { service, region } = await params;

  const serviceData =
    SERVICES[service as ServiceKey];

  const regionData = getRegion(region);

  if (!serviceData || !regionData) {
    return {};
  }

  const pageUrl =
    `${SITE_URL}/services/${service}/${region}`;

  const title =
    `${regionData.name} ${serviceData.keyword} 업체 | ${COMPANY}`;

  const description =
    `${regionData.name} ${serviceData.title} 전문업체 ${COMPANY}. ` +
    `${serviceData.description} ` +
    `${regionData.name} 벌목 및 나무 제거 견적 상담 가능합니다.`;

  return {
    title,

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
          url: serviceData.image,
          alt: `${regionData.name} ${serviceData.title}`,
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
   지역별 서비스 페이지
===================================== */

export default async function ServiceRegionPage({
  params,
}: {
  params: Promise<{
    service: string;
    region: string;
  }>;
}) {
  const { service, region } = await params;

  const serviceData =
    SERVICES[service as ServiceKey];

  const regionData = getRegion(region);

  if (!serviceData || !regionData) {
    notFound();
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
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

        .header {
          background: white;
          border-bottom: 1px solid #e5e8e5;
        }

        .nav {
          max-width: 1180px;
          height: 70px;

          margin: auto;
          padding: 0 22px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          color: #1d5b39;

          font-size: 23px;
          font-weight: 900;
        }

        .back {
          padding: 11px 15px;

          background: #edf4ef;
          color: #1d5b39;

          border-radius: 9px;

          font-size: 14px;
          font-weight: 900;
        }

        .hero {
          min-height: 500px;

          display: flex;
          align-items: center;

          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(8, 26, 15, .94),
              rgba(8, 26, 15, .68),
              rgba(8, 26, 15, .25)
            ),
            url("${serviceData.image}")
            center / cover no-repeat;
        }

        .heroInner {
          width: 100%;
          max-width: 1180px;

          margin: auto;
          padding: 80px 22px;
        }

        .badge {
          display: inline-block;

          margin-bottom: 17px;
          padding: 9px 14px;

          background: rgba(255,255,255,.14);

          border: 1px solid rgba(255,255,255,.3);
          border-radius: 30px;

          font-size: 14px;
          font-weight: 800;
        }

        .hero h1 {
          max-width: 850px;

          margin: 0 0 20px;

          font-size: clamp(38px, 7vw, 64px);
          line-height: 1.15;
          letter-spacing: -2.5px;
        }

        .hero p {
          max-width: 700px;

          margin: 0 0 28px;

          color: #edf3ee;

          font-size: 17px;
          line-height: 1.8;
        }

        .callBtn {
          display: inline-block;

          padding: 16px 23px;

          background: white;
          color: #173c27;

          border-radius: 11px;

          font-weight: 900;
        }

        section {
          padding: 78px 22px;
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

        h2 {
          margin: 0 0 15px;

          font-size: 35px;
          letter-spacing: -1.5px;
        }

        .desc {
          max-width: 800px;

          margin: 0 0 35px;

          color: #687169;
          line-height: 1.9;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .box {
          padding: 34px;

          background: white;

          border: 1px solid #e4e8e4;
          border-radius: 20px;
        }

        .box h3 {
          margin: 0 0 17px;

          font-size: 24px;
        }

        .check {
          padding: 13px 0;

          border-bottom: 1px solid #edf0ed;

          font-weight: 750;
        }

        .check:last-child {
          border-bottom: 0;
        }

        .greenBox {
          padding: 34px;

          background: #eaf2ec;
          border-radius: 20px;
        }

        .greenBox h3 {
          margin: 0 0 15px;

          font-size: 24px;
        }

        .greenBox p {
          margin: 0;

          color: #59655c;
          line-height: 1.9;
        }

        .area {
          background: #173c27;
          color: white;
        }

        .area .label {
          color: #b8e986;
        }

        .area p {
          max-width: 760px;

          color: #d8e2da;

          line-height: 1.9;
        }

        .areaButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          margin-top: 22px;
        }

        .areaBtn {
          display: inline-block;

          padding: 14px 19px;

          background: white;
          color: #173c27;

          border-radius: 10px;

          font-weight: 900;
        }

        .areaBtn.secondary {
          background: rgba(255,255,255,.12);
          color: white;

          border: 1px solid rgba(255,255,255,.3);
        }

        .contact {
          text-align: center;
        }

        .contactBox {
          padding: 50px 25px;

          background: white;

          border: 1px solid #e3e7e3;
          border-radius: 22px;
        }

        .contactBox p {
          color: #687169;
          line-height: 1.8;
        }

        .bigCall {
          display: inline-block;

          margin-top: 15px;
          padding: 17px 26px;

          background: #1d5b39;
          color: white;

          border-radius: 12px;

          font-size: 19px;
          font-weight: 900;
        }

        footer {
          padding: 38px 22px 95px;

          background: #121713;
          color: #c8cec9;

          font-size: 13px;
          line-height: 1.9;
        }

        .footerInner {
          max-width: 1180px;
          margin: auto;
        }

        .footerLogo {
          margin-bottom: 10px;

          color: white;

          font-size: 21px;
          font-weight: 900;
        }

        .floatingCall {
          position: fixed;

          right: 18px;
          bottom: 20px;

          z-index: 100;

          padding: 15px 19px;

          background: #1d5b39;
          color: white;

          border-radius: 40px;

          box-shadow: 0 7px 25px rgba(0,0,0,.22);

          font-weight: 900;
        }

        @media(max-width: 760px) {
          .hero {
            min-height: 470px;
          }

          .hero h1 {
            font-size: 41px;
          }

          section {
            padding: 62px 18px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 29px;
          }

          .box,
          .greenBox {
            padding: 27px 21px;
          }
        }
      `}</style>

      <header className="header">
        <div className="nav">
          <a href="/" className="logo">
            이지종합건설
          </a>

          <a
            href={`/services/${service}`}
            className="back"
          >
            {serviceData.keyword}
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="badge">
              🌳 {regionData.name} 벌목 전문 상담
            </div>

            <h1>
              {regionData.name}
              <br />
              {serviceData.title}
            </h1>

            <p>
              {regionData.name}에서{" "}
              {serviceData.description}
              {" "}
              현장 사진과 주소를 보내주시면
              작업 가능 여부와 견적을 상담해드립니다.
            </p>

            <a
              href={`tel:${PHONE}`}
              className="callBtn"
            >
              ☎ {PHONE_DISPLAY} 견적문의
            </a>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="label">
              {regionData.name.toUpperCase()} SERVICE
            </div>

            <h2>
              {regionData.name} {serviceData.title}
            </h2>

            <p className="desc">
              {regionData.name} 지역의 주택,
              건물, 토지 및 임야 등
              다양한 현장에서 작업 상담을 진행합니다.
              나무의 크기와 현장 접근성,
              주변 시설물의 위치에 따라
              작업 방법이 달라질 수 있습니다.
            </p>

            <div className="grid">
              <div className="box">
                <h3>주요 작업</h3>

                {serviceData.points.map((point) => (
                  <div
                    className="check"
                    key={point}
                  >
                    ✓ {point}
                  </div>
                ))}
              </div>

              <div className="greenBox">
                <h3>
                  {regionData.name} 현장 상담
                </h3>

                <p>
                  정확한 견적을 위해
                  현장 주소와 나무 사진을
                  준비해 주세요.
                  <br />
                  <br />
                  나무의 높이와 굵기,
                  건물 및 전선과의 거리,
                  차량과 장비 진입 가능 여부 등을
                  확인하여 작업 방법을 안내합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="area">
          <div className="container">
            <div className="label">
              TREE REMOVAL
            </div>

            <h2>
              {regionData.name} 벌목 서비스
            </h2>

            <p>
              {regionData.name} {serviceData.keyword}뿐만 아니라
              위험목 제거, 대형 수목 벌목,
              토지·임야 벌목, 재선충 피해목,
              나무뿌리 제거 등 다양한 벌목 작업을
              상담합니다.
            </p>

            <div className="areaButtons">
              <a
                href={`/services/${service}`}
                className="areaBtn"
              >
                {serviceData.keyword} 전체 안내 →
              </a>

              <a
                href={`/tree-removal/${region}`}
                className="areaBtn secondary"
              >
                {regionData.name} 벌목 페이지 →
              </a>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="contactBox">
              <div className="label">
                CONTACT
              </div>

              <h2>
                {regionData.name} {serviceData.keyword} 견적문의
              </h2>

              <p>
                현장 주소와 나무 사진을 준비해 주세요.
                <br />
                현장 환경을 확인한 후 상담해드립니다.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="bigCall"
              >
                ☎ {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerInner">
          <div className="footerLogo">
            {COMPANY}
          </div>

          <div>벌목 전문업체</div>
          <div>대표자 : 송은규</div>
          <div>사업자등록번호 : 882-06-03153</div>
          <div>전화 : {PHONE_DISPLAY}</div>

          <div>
            서비스지역 : 서울 · 경기 · 인천 ·
            충남 · 충북 · 그 외 지역 문의
          </div>

          <br />

          <div>
            © 2026 {COMPANY}. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a
        href={`tel:${PHONE}`}
        className="floatingCall"
      >
        ☎ 견적문의
      </a>
    </>
  );
}
