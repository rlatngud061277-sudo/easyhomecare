export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8f5",
        fontFamily: "Arial, sans-serif",
        color: "#202520",
      }}
    >
      <header
        style={{
          padding: "20px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <strong style={{ fontSize: "22px" }}>
          이지홈케어
        </strong>
      </header>

      <section
        style={{
          padding: "90px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          전문 시공 · 빠른 상담 · 깔끔한 마무리
        </p>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: "1.25",
            marginBottom: "20px",
          }}
        >
          우리 집에 필요한 시공,
          <br />
          이지홈케어
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.7",
            color: "#666",
          }}
        >
          벌목 전문 시공부터
          <br />
          생활 집수리까지 한 번에 해결해드립니다.
        </p>
      </section>
    </main>
  );
}
