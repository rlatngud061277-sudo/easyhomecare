export const metadata = {
  title: "이지종합건설 | 벌목·철거·외부작업 전문",
  description:
    "위험목, 고목, 대형수목 벌목부터 냉장고 철거, 외부작업, 각종 집수리까지 이지종합건설이 현장 맞춤으로 진행합니다.",
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
