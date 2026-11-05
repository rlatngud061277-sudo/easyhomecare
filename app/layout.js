
/* =====================================
   이지종합건설 기본 정보
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

const SITE_NAME = "이지종합건설";

const SITE_TITLE =
  "이지종합건설 | 서울·경기·인천·충남·충북 벌목 전문업체";

const SITE_DESCRIPTION =
  "이지종합건설 공식 홈페이지. 주택 및 건물 주변 벌목, 위험목 제거, 대형 수목 벌목, 토지 및 임야 벌목, 재선충 피해목 제거, 나무뿌리 제거 등 벌목 작업을 상담합니다. 서울·경기·인천·충남·충북 및 그 외 지역 문의 가능합니다.";

/* =====================================
   파비콘 이미지
   public 폴더에 업로드된 실제 파일명
===================================== */

const FAVICON =
  "/BA305B39-6F0A-44DB-83A9-8E4E848D358F.png";

/* =====================================
   SEO 및 파비콘 메타데이터
===================================== */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | 이지종합건설",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "이지종합건설",
    "벌목",
    "벌목업체",
    "나무제거",
    "위험목제거",
    "대형수목벌목",
    "재선충피해목제거",
    "나무뿌리제거",
    "서울벌목",
    "경기벌목",
    "인천벌목",
    "충남벌목",
    "충북벌목",
  ],

  /* 브라우저 파비콘 */
  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
        sizes: "any",
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

  /* 네이버 서치어드바이저 */
  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  /* 카카오톡 및 SNS 공유 */
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    images: [
      {
        url: FAVICON,
        alt: "이지종합건설 벌목 전문업체 로고",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [FAVICON],
  },
};

/* =====================================
   Root Layout
===================================== */

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
