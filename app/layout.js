
const SITE_URL = "https://easyhomecare.vercel.app";

const SITE_TITLE =
  "이지종합건설 | 서울·경기·인천·충남·충북 벌목 전문업체";

const SITE_DESCRIPTION =
  "이지종합건설은 서울·경기·인천·충남·충북 지역의 벌목 상담을 진행합니다. 주택 및 건물 주변 벌목, 위험목 제거, 고목 제거, 대형 수목 벌목, 토지 및 임야 벌목 등 현장 상황에 맞는 작업을 안내합니다. 그 외 지역도 문의 가능합니다.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  keywords: [
    "이지종합건설",
    "벌목업체",
    "벌목전문업체",
    "서울벌목",
    "경기벌목",
    "인천벌목",
    "충남벌목",
    "충북벌목",
    "위험목제거",
    "고목제거",
    "대형수목벌목",
    "주택벌목",
    "임야벌목",
    "나무제거",
  ],

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "이지종합건설",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",
        alt: "이지종합건설 벌목 작업 현장",
      },
    ],
  },

  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },
};

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
