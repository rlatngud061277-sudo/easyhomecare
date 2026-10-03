import "./globals.css";

/* =====================================
   이지종합건설 기본 정보
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

const SITE_NAME = "이지종합건설";

const SITE_TITLE =
  "이지종합건설 | 서울·경기·인천·충남·충북 벌목 전문업체";

const SITE_DESCRIPTION =
  "이지종합건설 공식 홈페이지. 주택 및 건물 주변 벌목, 위험목 제거, 대형 수목 벌목, 토지 및 임야 벌목, 재선충 피해목 제거, 나무뿌리 제거 등 벌목 작업을 상담합니다. 서울·경기·인천·충남·충북 및 그 외 지역 문의 가능합니다.";

const FAVICON =
  "/BA305B39-6F0A-44DB-83A9-8E4E848D358E.png";

/* =====================================
   검색엔진 메타데이터
===================================== */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  /* =====================================
     파비콘
  ===================================== */

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],

    shortcut: FAVICON,

    apple: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
  },

  /* =====================================
     네이버 서치어드바이저 소유확인
  ===================================== */

  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },

  /* =====================================
     검색엔진 설정
  ===================================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* =====================================
     대표 URL
  ===================================== */

  alternates: {
    canonical: SITE_URL,
  },

  /* =====================================
     SNS / 검색 공유 이미지
  ===================================== */

  openGraph: {
    type: "website",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,

    images: [
      {
        url: FAVICON,
        width: 1024,
        height: 1024,
        alt: "이지종합건설 벌목 전문업체",
      },
    ],
  },
};

/* =====================================
   Root Layout
===================================== */

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 파비콘 직접 지정 */}
        <link
          rel="icon"
          type="image/png"
          href={FAVICON}
        />

        <link
          rel="shortcut icon"
          type="image/png"
          href={FAVICON}
        />

        <link
          rel="apple-touch-icon"
          href={FAVICON}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
