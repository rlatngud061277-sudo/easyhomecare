export default function Home() {
  const services = [
    {
      title: "벌목 · 위험목 제거",
      desc: "주택, 상가, 공장, 토지 주변의 위험목·고목·대형수목을 현장 상황에 맞춰 안전하게 정리합니다.",
      icon: "🌳",
    },
    {
      title: "냉장고 철거",
      desc: "붙박이 냉장고, 대형 냉장고, 냉장고장 철거 등 현장 여건에 맞춰 깔끔하게 진행합니다.",
      icon: "🧊",
    },
    {
      title: "외부 작업",
      desc: "외부 시설물 철거, 외벽 보수, 렉산, 파라솔, 카스토퍼 등 다양한 외부 작업을 진행합니다.",
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
        background: "#f7f6f0",
        color: "#1d261f",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid #e7e4da",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "17px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "900",
                letterSpacing: "-1px",
                color: "#24462a",
              }}
            >
              이지홈케어
            </div>
            <div
              style={{
                fontSize: "12px",
                marginTop: "3px",
                color: "#6f756e",
              }}
            >
              벌목 · 철거 · 외부작업 전문
            </div>
          </div>

          <a
            href="tel:01023849768"
            style={{
              textDecoration: "none",
              background: "#24462a",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "900",
            }}
          >
            전화 견적
          </a>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #19391f 0%, #31583a 52%, #77613f 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "100px 24px 95px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.14)",
              fontSize: "14px",
              fontWeight: "800",
              marginBottom: "22px",
            }}
          >
            벌목 전문 · 현장 맞춤 시공
          </div>

          <h1
            style={{
              margin: 0,
              maxWidth: "850px",
              fontSize: "clamp(42px, 8vw, 74px)",
              lineHeight: "1.08",
              letterSpacing: "-3px",
            }}
          >
            위험목 · 고목 · 대형수목
            <br />
            벌목 전문
          </h1>

          <p
            style={{
              maxWidth: "680px",
              margin: "25px 0 0",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.86)",
            }}
          >
            주택 · 공장 · 상가 · 토지 현장 확인부터 안전한 벌목과 정리까지.
            냉장고 철거, 외부 시설물 철거 및 각종 외부작업도 함께
            진행합니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "34px",
            }}
          >
            <a
              href="tel:01023849768"
              style={{
                textDecoration: "none",
                background: "#fff",
                color: "#1f3423",
                padding: "15px 22px",
                borderRadius: "12px",
                fontWeight: "900",
              }}
            >
              📞 010-2384-9768
            </a>

            <a
              href="#services"
              style={{
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.55)",
                color: "#fff",
                padding: "15px 22px",
                borderRadius: "12px",
                fontWeight: "800",
              }}
            >
              작업 서비스 보기
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "85px 24px",
        }}
      >
        <div style={{ marginBottom: "35px" }}>
          <div
            style={{
              fontSize: "14px",
              color: "#796344",
              fontWeight: "900",
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
            주요 작업 서비스
          </h2>

          <p
            style={{
              color: "#697069",
              lineHeight: "1.7",
              marginTop: "13px",
            }}
          >
            현장 규모와 작업 환경에 따라 필요한 방식으로 안전하게
            진행합니다.
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
                border: "1px solid #e5e2d8",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 8px 30px rgba(30,48,35,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "38px",
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
                  color: "#666d66",
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
          background: "#ece9df",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "900",
              color: "#796344",
              marginBottom: "10px",
            }}
          >
            WORK AREA
          </div>

          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "36px",
              letterSpacing: "-1.5px",
            }}
          >
            출장 가능 지역
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#5e665f",
            }}
          >
            서울 · 경기 · 인천 · 충남 · 충북
            <br />
            그 외 지역은 현장 상황에 따라 문의해주세요.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "85px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              border: "1px solid #e4e1d7",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "900",
                color: "#796344",
                marginBottom: "9px",
              }}
            >
              STEP 01
            </div>
            <h3 style={{ fontSize: "23px", margin: "0 0 12px" }}>
              현장 상담
            </h3>
            <p
              style={{
                color: "#686e68",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              작업 위치, 현장 사진, 수목 크기 또는 철거 대상 정보를
              확인합니다.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              border: "1px solid #e4e1d7",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "900",
                color: "#796344",
                marginBottom: "9px",
              }}
            >
              STEP 02
            </div>
            <h3 style={{ fontSize: "23px", margin: "0 0 12px" }}>
              견적 안내
            </h3>
            <p
              style={{
                color: "#686e68",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              작업 난이도와 장비 사용 여부, 현장 조건을 확인해 견적을
              안내합니다.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              border: "1px solid #e4e1d7",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "900",
                color: "#796344",
                marginBottom: "9px",
              }}
            >
              STEP 03
            </div>
            <h3 style={{ fontSize: "23px", margin: "0 0 12px" }}>
              작업 및 마무리
            </h3>
            <p
              style={{
                color: "#686e68",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              현장 안전을 우선으로 작업하고 작업 완료 후 깔끔하게
              정리합니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            background: "#234529",
            color: "#fff",
            borderRadius: "24px",
            padding: "50px 28px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: "900",
              opacity: 0.8,
              marginBottom: "12px",
            }}
          >
            빠른 견적 상담
          </div>

          <h2
            style={{
              margin: "0 0 15px",
              fontSize: "36px",
              letterSpacing: "-1.5px",
            }}
          >
            현장 사진과 함께 문의해주세요
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "620px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: "1.8",
            }}
          >
            벌목 · 위험목 제거 · 냉장고 철거 · 외부작업 · 기타 집수리
            <br />
            작업 위치와 사진을 보내주시면 확인 후 상담해드립니다.
          </p>

          <a
            href="tel:01023849768"
            style={{
              display: "inline-block",
              marginTop: "28px",
              textDecoration: "none",
              background: "#fff",
              color: "#234529",
              padding: "15px 24px",
              borderRadius: "11px",
              fontWeight: "900",
              fontSize: "17px",
            }}
          >
            📞 010-2384-9768 전화 견적
          </a>
        </div>
      </section>

      <footer
        style={{
          background: "#1c261f",
          color: "#c9cec8",
          padding: "38px 24px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            fontSize: "13px",
            lineHeight: "1.9",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#fff",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            이지홈케어
          </strong>

          <div>대표자 : 송은규</div>
          <div>사업자등록번호 : 882-06-03153</div>
          <div>전화 : 010-2384-9768</div>
          <div>
            업무 : 벌목 · 위험목 제거 · 냉장고 철거 · 외부작업 · 집수리
          </div>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <details>
              <summary
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginBottom: "12px",
                }}
              >
                개인정보처리방침
              </summary>

              <div
                style={{
                  color: "#aeb5af",
                  lineHeight: "1.8",
                  paddingTop: "8px",
                }}
              >
                <p>
                  이지홈케어는 고객의 개인정보를 중요하게 생각하며 관련
                  법령에 따라 개인정보를 보호하고 있습니다.
                </p>

                <p>
                  <strong style={{ color: "#d9ddd9" }}>
                    1. 수집하는 개인정보
                  </strong>
                  <br />
                  견적 및 작업 상담 과정에서 이름, 연락처, 작업 주소,
                  현장 사진 및 상담에 필요한 정보를 제공받을 수 있습니다.
                </p>

                <p>
                  <strong style={{ color: "#d9ddd9" }}>
                    2. 개인정보 이용 목적
                  </strong>
                  <br />
                  수집된 정보는 견적 상담, 현장 확인, 작업 일정 조율,
                  고객 문의 응대 및 서비스 제공을 위해 이용됩니다.
                </p>

                <p>
                  <strong style={{ color: "#d9ddd9" }}>
                    3. 개인정보 보유 및 이용기간
                  </strong>
                  <br />
                  개인정보는 이용 목적이 달성된 후 지체 없이 파기하며,
                  관계 법령에 따라 보존이 필요한 경우 해당 기간 동안
                  보관할 수 있습니다.
                </p>

                <p>
                  <strong style={{ color: "#d9ddd9" }}>
                    4. 개인정보의 제3자 제공
                  </strong>
                  <br />
                  이지홈케어는 법령에서 정한 경우를 제외하고 고객의 동의
                  없이 개인정보를 제3자에게 제공하지 않습니다.
                </p>

                <p>
                  <strong style={{ color: "#d9ddd9" }}>
                    5. 개인정보 관련 문의
                  </strong>
                  <br />
                  개인정보 관련 문의 : 010-2384-9768
                  <br />
                  대표자 : 송은규
                </p>
              </div>
            </details>
          </div>

          <div
            style={{
              marginTop: "20px",
              color: "#8f9790",
            }}
          >
            © 2026 EASY HOME CARE. All rights reserved.
          </div>
        </div>
      </footer>

      <a
        href="tel:01023849768"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          zIndex: 50,
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "#234529",
          color: "#fff",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
        aria-label="전화 문의"
      >
        ☎
      </a>
    </main>
  );
}
