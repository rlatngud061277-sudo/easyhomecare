export const metadata = {
  title: "이지홈케어 | 벌목·집수리 전문",
  description:
    "벌목 전문 시공부터 생활 집수리까지. 이지홈케어가 깔끔하게 해결해드립니다.",
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
