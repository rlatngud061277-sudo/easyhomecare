import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

    description:
      "주택, 상가, 공장 등 건물 주변에 위치한 수목의 크기와 주변 시설물을 확인하고 현장 상황에 맞는 벌목 작업을 상담합니다.",

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
    shortTitle: "위험목 제거",

    description:
      "쓰러질 위험이 있거나 건물, 전선, 시설물 등에 피해를 줄 가능성이 있는 위험목과 고목을 확인하고 제거 작업을 상담합니다.",

    image:
      "/5AD408FF-BE0D-4117-A740-AF7B2010E6A7.png",

    points: [
      "기울어진 나무 제거",
      "고사목 및 고목 제거",
      "건물 주변 위험목 제거",
      "전선 주변 수목 상담",
      "태풍 및 강풍 피해 우려 수목 정리",
    ],
  },

  large: {
    title: "대형 수목 벌목",
    shortTitle: "대형 수목 벌목",

    description:
      "높이가 높거나 굵기가 큰 대형 수목과 오래된 나무를 현장 조건과 장비 진입 가능 여부를 확인한 후 작업합니다.",

    image:
      "/06B44412-9B35-4FB9-BF55-A47B4C6F5B92.png",

    points: [
      "대형 나무 벌목",
      "고목 제거",
      "높은 수목 제거",
      "장비를 이용한 벌목",
      "좁은 현장 대형 수목 상담",
    ],
  },

  land: {
    title: "토지 및 임야 벌목",
    shortTitle: "토지·임야 벌목",

    description:
      "토지 정리, 부지 관리, 임야 정리 등 넓은 현장의 수목을 현장 규모와 작업 목적에 맞춰 벌목합니다.",

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
    shortTitle: "재선충 피해목 제거",

    description:
      "소나무재선충병 피해가 의심되거나 고사한 소나무의 현장 상태를 확인하고 피해목 제거 작업을 상담합니다.",

    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "재선충 피해 의심목 상담",
      "고사한 소나무 제거",
      "피해목 벌목 상담",
      "주택 및 토지 내 소나무 제거",
      "현장 상태 확인 후 작업 안내",
    ],
  },

  "root-removal": {
    title: "나무뿌리 제거",
    shortTitle: "나무뿌리 제거",

    description:
      "벌목 후 남은 그루터기와 나무뿌리로 인해 토지 이용이나 시설물 공사에 불편이 있는 현장을 확인하고 제거 작업을 상담합니다.",

    image:
      "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

    points: [
      "벌목 후 그루터기 제거",
      "나무뿌리 제거",
      "마당 및 토지 뿌리 제거",
      "공사 전 수목 뿌리 정리",
      "장비 진입 가능 여부 확인",
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

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
   SEO 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;

  const data =
    SERVICES[service as ServiceKey];

  if (!data) {
    return {};
  }

  const pageUrl =
    `${SITE_URL}/services/${service}`;

  return {
    title: `${data.title} | 서울·경기·인천·충남·충북 | ${COMPANY}`,

    description:
      `${COMPANY} ${data.title} 안내. ${data.description} ` +
      "서울·경기·인천·충남·충북을 중심으로 출장 상담하며 그 외 지역도 문의 가능합니다.",

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: `${data.title} | ${COMPANY}`,
      description: data.description,
      url: pageUrl,
      siteName: COMPANY,
      type: "website",

      images: [
        {
          url: data.image,
          alt: data.title,
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
   페이지
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const data =
    SERVICES[service as ServiceKey];

  if (!data) {
    notFound();
  }

  const otherServices = Object.entries(SERVICES).filter(
    ([key]) => key !== service
  );

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
          border-bottom: 1px solid #e4e8e4;
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

        .homeBtn {
          padding: 11px 16px;

          background: #edf4ef;
          color: #1d5b39;

          border-radius: 10px;

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
              rgba(9, 29, 17, 0.93),
              rgba(9, 29, 17, 0.65),
              rgba(9, 29, 17, 0.25)
            ),
            url("${data.image}") center / cover no-repeat;
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
          max-width: 800px;

          margin: 0 0 20px;

          font-size: clamp(39px, 7vw, 65px);
          line-height: 1.15;
          letter-spacing: -2.5px;
        }

        .hero p {
          max-width: 690px;

          margin: 0 0 28px;

          color: #edf2ee;

          font-size: 17px;
          line-height: 1.8;
        }

        .callBtn {
          display: inline-block;

          padding: 16px 23px;

          background: white;
          color: #173c27;

          border-radius: 12px;

          font-weight: 900;
        }

        section {
          padding: 80px 22px;
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

          line-height: 1.8;
        }

        .infoGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .infoBox {
          padding: 35px;

          background: white;

          border: 1px solid #e4e8e4;
          border-radius: 20px;
        }

        .infoBox h3 {
          margin: 0 0 18px;

          font-size: 25px;
        }

        .check {
          padding: 13px 0;

          border-bottom: 1px solid #edf0ed;

          font-weight: 750;
        }

        .check:last-child {
          border-bottom: 0;
        }

        .notice {
          padding: 35px;

          background: #eaf2ec;

          border-radius: 20px;
        }

        .notice h3 {
          margin: 0 0 15px;

          font-size: 25px;
        }

        .notice p {
          margin: 0;

          color: #58645b;

          line-height: 1.9;
        }

        .other {
          background: white;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .serviceCard {
          padding: 24px;

          background: #f7f9f7;

          border: 1px solid #e2e7e3;
          border-radius: 16px;

          transition: .2s;
        }

        .serviceCard:hover {
          transform: translateY(-3px);
          border-color: #9ab8a3;
        }

        .serviceCard strong {
          display: block;

          margin-bottom: 10px;

          font-size: 18px;
        }

        .serviceCard span {
          color: #28744b;

          font-size: 14px;
          font-weight: 900;
        }

        .area {
          background: #173c27;
          color: white;
        }

        .area .label {
          color: #b8e986;
        }

        .area h2 {
          color: white;
        }

        .area p {
          max-width: 760px;

          color: #d8e2da;

          line-height: 1.8;
        }

        .areaBtn {
          display: inline-block;

          margin-top: 12px;
          padding: 15px 21px;

          background: white;
          color: #173c27;

          border-radius: 11px;

          font-weight: 900;
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

        .contactBox h2 {
          margin-bottom: 12px;
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
            font-size: 42px;
          }

          section {
            padding: 62px 18px;
          }

          .infoGrid {
            grid-template-columns: 1fr;
          }

          .serviceGrid {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 29px;
          }

          .infoBox,
          .notice {
            padding: 27px 21px;
          }
        }
      `}</style>

      <header className="header">
        <div className="nav">
          <a href="/" className="logo">
            이지종합건설
          </a>

          <a href="/" className="homeBtn">
            메인으로
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="badge">
              🌳 이지종합건설 벌목 서비스
            </div>

            <h1>{data.title}</h1>

            <p>{data.description}</p>

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
              SERVICE INFORMATION
            </div>

            <h2>{data.title} 작업 안내</h2>

            <p className="desc">
              나무의 높이와 굵기,
              주변 건물 및 시설물과의 거리,
              작업 장비의 진입 가능 여부 등에 따라
              작업 방법과 견적이 달라질 수 있습니다.
              현장 사진과 주소를 준비해 주시면
              상담이 더욱 빠릅니다.
            </p>

            <div className="infoGrid">
              <div className="infoBox">
                <h3>주요 작업</h3>

                {data.points.map((point) => (
                  <div
                    className="check"
                    key={point}
                  >
                    ✓ {point}
                  </div>
                ))}
              </div>

              <div className="notice">
                <h3>현장 상담이 필요한 이유</h3>

                <p>
                  같은 종류의 나무라도
                  높이와 굵기, 주변 건물,
                  전선 및 담장과의 거리,
                  차량과 장비의 진입 가능 여부에 따라
                  작업 방법이 달라집니다.
                  <br />
                  <br />
                  현장 주소와 나무 사진을 보내주시면
                  작업 가능 여부와 필요한 장비를
                  확인하여 상담해드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="other">
          <div className="container">
            <div className="label">
              OTHER SERVICES
            </div>

            <h2>다른 벌목 서비스</h2>

            <p className="desc">
              필요한 작업 종류를 선택하면
              각 서비스의 상세 내용을
              확인할 수 있습니다.
            </p>

            <div className="serviceGrid">
              {otherServices.map(
                ([key, item]) => (
                  <a
                    href={`/services/${key}`}
                    className="serviceCard"
                    key={key}
                  >
                    <strong>
                      {item.shortTitle}
                    </strong>

                    <span>
                      자세히 보기 →
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </section>

        <section className="area">
          <div className="container">
            <div className="label">
              SERVICE AREA
            </div>

            <h2>
              {data.shortTitle} 출장 지역
            </h2>

            <p>
              서울 · 경기 · 인천 · 충남 · 충북을
              중심으로 출장 상담을 진행합니다.
              그 외 지역도 현장 위치와 작업 규모에
              따라 상담 가능합니다.
            </p>

            <a
              href="/tree-removal"
              className="areaBtn"
            >
              지역별 벌목 페이지 보기 →
            </a>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="contactBox">
              <div className="label">
                CONTACT
              </div>

              <h2>
                {data.shortTitle} 견적문의
              </h2>

              <p>
                현장 주소와 나무 사진을 준비해 주세요.
                <br />
                작업 환경을 확인한 후 상담해드립니다.
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
            서비스지역 : 서울 · 경기 · 인천 · 충남 ·
            충북 · 그 외 지역 문의
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
