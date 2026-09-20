
export const metadata = {
  title:
    "이지종합건설 | 서울·경기·인천·충남·충북 벌목 전문업체",

  description:
    "이지종합건설은 서울, 경기, 인천, 충남, 충북 지역 벌목 전문업체입니다. 주택 및 건물 주변 벌목, 위험목 제거, 고목 제거, 대형 수목 벌목, 토지 및 임야 벌목 등 현장 상황에 맞는 벌목 서비스를 제공합니다. 그 외 지역도 출장 상담 가능합니다.",

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
