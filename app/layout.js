const SITE_URL = "https://easyhomecare.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "이지종합건설 | 서울·경기·인천·충남·충북 벌목 전문업체",
    template: "%s",
  },

  description:
    "이지종합건설은 서울·경기·인천·충남·충북 지역의 벌목 상담을 진행합니다. 주택 및 건물 주변 벌목, 위험목 제거, 고목 제거, 대형 수목 벌목, 토지 및 임야 벌목 등 현장 상황에 맞는 작업을 안내합니다. 그 외 지역도 문의 가능합니다.",

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
