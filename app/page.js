export default function Home() {
  const services = [
    {
      title: "벌목 · 나무 제거",
      desc: "주택, 상가, 공장, 토지 주변의 위험 수목과 불필요한 나무를 안전하게 정리합니다.",
      icon: "🌳",
    },
    {
      title: "냉장고 철거",
      desc: "붙박이 냉장고, 대형 냉장고, 냉장고장 철거까지 현장 상황에 맞춰 진행합니다.",
      icon: "🧊",
    },
    {
      title: "외부 작업",
      desc: "외부 시설물 철거, 외벽 보수, 렉산, 파라솔, 카스토퍼 등 다양한 외부 작업이 가능합니다.",
      icon: "🏠",
    },
    {
      title: "기타 집수리",
      desc: "생활 중 필요한 각종 설치, 철거, 보수 작업도 함께 상담 가능합니다.",
      icon: "🛠️",
    },
  ];

  return (
    <main
      style={{
        margin: 0,
        background: "#f6f5ef",
        color: "#1f2a20",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(255,255,255,0.95)",
          borderBottom: "1px solid #e7e5dc",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "900",
                letterSpacing: "-1px",
                color: "#234528",
              }}
            >
              이지홈케어
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#73786f",
                marginTop: "3px",
              }}
            >
              벌목 · 철거 · 외부작업 전문
            </div>
          </div>

          <a
            href="#contact"
            style={{
              textDecoration: "none",
              background: "#234528",
              color: "#fff",
              padding: "12px 17px",
              borderRadius: "10px",
              fontWeight: "800",
              fontSize: "14px",
            }}
          >
            견적 문의
          </a>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #1f3b24 0%, #34583a 55%, #806a45 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "95px 24px 90px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.14)",
              padding: "8px 13px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: "700",
              marginBottom: "22px",
            }}
          >
            벌목 전문 · 현장 맞춤 작업
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 8vw, 72px)",
              lineHeight: "1.08",
              margin: "0 0 24px",
              letterSpacing: "-3px",
              maxWidth: "850px",
            }}
          >
            위험한 나무부터
            <br />
            철거·외부작업까지
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "650px",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            현장 상황을 정확하게 확인하고 필요한 작업만 깔끔하게 진행합니다.
            벌목, 냉장고 철거, 외부 시설물 작업과 다양한 집수리까지
            이지홈케어에 문의하세요.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#1f2a20",
                background: "#fff",
                padding: "15px 22px",
                borderRadius: "12px",
                fontWeight: "900",
              }}
            >
              빠른 견적 문의
            </a>

            <a
              href="#services"
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.55)",
                padding: "15px 22px",
                borderRadius: "12px",
                fontWeight: "800",
              }}
            >
              서비스 보기
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "85px 24px",
        }}
      >
        <div
          style={{
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "900",
              color: "#7a6545",
              marginBottom: "10px",
            }}
          >
            EASY HOME CARE
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              letterSpacing: "-1.8px",
            }}
          >
            주요 작업
          </h2>

          <p
            style={{
              color: "#6c716a",
              lineHeight: "1.7",
              marginTop: "13px",
            }}
          >
            현장 규모와 작업 조건에 맞춰 필요한 방식으로 진행합니다.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "18px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                border: "1px solid #e5e3da",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 8px 30px rgba(34,48,36,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "37px",
                  marginBottom: "18px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "21px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#676d65",
                  lineHeight: "1.75",
                  fontSize: "15px",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#ebe9df",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "75px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "900",
                color: "#7a6545",
                marginBottom: "10px",
              }}
            >
              WORK PROCESS
            </div>

            <h2
              style={{
                fontSize: "34px",
                margin: "0 0 18px",
                letterSpacing: "-1.5px",
              }}
            >
              현장 확인부터
              <br />
              마무리까지 깔끔하게
            </h2>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <strong>01. 현장 상담</strong>
            <p style={{ color: "#686d66", lineHeight: "1.7" }}>
              작업 내용과 현장 사진을 확인해 작업 가능 여부를 상담합니다.
            </p>

            <strong>02. 견적 안내</strong>
            <p style={{ color: "#686d66", lineHeight: "1.7" }}>
              현장 규모, 난이도, 장비 사용 여부에 따라 견적을 안내합니다.
            </p>

            <strong>03. 시공 및 정리</strong>
            <p style={{ color: "#686d66", lineHeight: "1.7", marginBottom: 0 }}>
              안전하게 작업하고 현장을 정리한 뒤 마무리합니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "85px 24px",
        }}
      >
        <div
          style={{
            background: "#234528",
            borderRadius: "22px",
            padding: "45px 28px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "800",
              opacity: 0.8,
              marginBottom: "12px",
            }}
          >
            EASY HOME CARE
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "0 0 15px",
              letterSpacing: "-1.5px",
            }}
          >
            현장 사진으로 빠르게 상담하세요
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "600px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            벌목, 냉장고 철거, 외부 작업, 기타 집수리까지
            작업 위치와 사진을 보내주시면 확인 후 상담해드립니다.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#234528",
                padding: "14px 22px",
                borderRadius: "10px",
                fontWeight: "900",
              }}
            >
              전화 견적 문의
            </a>

            <a
              href="#"
              style={{
                textDecoration: "none",
                background: "#f5db4c",
                color: "#222",
                padding: "14px 22px",
                borderRadius: "10px",
                fontWeight: "900",
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #e1dfd6",
          padding: "30px 24px",
          textAlign: "center",
          color: "#80847d",
          fontSize: "13px",
        }}
      >
        © 2026 이지홈케어 · 벌목 · 철거 · 외부작업 · 집수리
      </footer>
    </main>
  );
}
