"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "벌목 · 나무 제거",
      desc: "주택, 상가, 공장 등 좁은 공간 및 위험목 벌목 작업",
      image: "/F43681CE-3D8F-416F-AF29-CE598133364F8.png",
    },
    {
      title: "에어컨 배선 테이핑",
      desc: "노후된 에어컨 배관 및 배선 테이핑 보수",
      image: "/4CD1D8DB-15F0-408B-B121-14B8DE5EFE19.png",
    },
    {
      title: "방범창살 설치",
      desc: "주택 및 빌라 방범창살 설치·보수",
      image: "/63C20778-04FD-4E09-8C17-4318D20C2C49.png",
    },
    {
      title: "대형 거울 설치",
      desc: "가정집·상가 대형 거울 안전 설치",
      image: "/D0726F84-4F5C-48E8-B6B6-67AB7B722759.png",
    },
    {
      title: "선반 보강",
      desc: "처진 선반 및 벽선반 설치·보강 작업",
      image: "/A8739EC2-FB40-407E-8651-727243E1FB11.png",
    },
    {
      title: "파라솔 설치",
      desc: "테라스·옥상·야외공간 대형 파라솔 설치",
      image: "/98F2595E-43F2-41CC-A8FF-95581E24C025.png",
    },
    {
      title: "빨래건조대 설치",
      desc: "베란다 천장형 빨래건조대 설치 및 교체",
      image: "/1BCC4677-17D0-4FCA-8D3E-EFFBE2E1268A.png",
    },
  ];

  const callNumber = "01023849768";

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Pretendard",
            "Noto Sans KR", Arial, sans-serif;
          background: #f7f8f6;
          color: #18211a;
          word-break: keep-all;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #e8e8e8;
          backdrop-filter: blur(10px);
        }

        .nav {
          max-width: 1180px;
          margin: auto;
          height: 72px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          color: #1d5b39;
          letter-spacing: -1px;
        }

        .logo span {
          color: #222;
        }

        .navLinks {
          display: flex;
          gap: 28px;
          align-items: center;
          font-size: 15px;
          font-weight: 700;
        }

        .callTop {
          background: #1d5b39;
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
        }

        .menuButton {
          display: none;
          border: 0;
          background: transparent;
          font-size: 27px;
        }

        .hero {
          min-height: 620px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(9, 25, 15, 0.88),
              rgba(9, 25, 15, 0.55),
              rgba(9, 25, 15, 0.15)
            ),
            url("/F43681CE-3D8F-416F-AF29-CE598133364F8.png")
              center/cover no-repeat;
          color: white;
        }

        .heroInner {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          padding: 80px 24px;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 9px 14px;
          border-radius: 30px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.12;
          letter-spacing: -3px;
          margin-bottom: 22px;
        }

        .hero h1 strong {
          color: #b8e986;
        }

        .hero p {
          font-size: 19px;
          line-height: 1.8;
          color: #f1f1f1;
          max-width: 610px;
          margin-bottom: 30px;
        }

        .heroButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .secondaryBtn {
          padding: 16px 22px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 16px;
        }

        .primaryBtn {
          background: #ffffff;
          color: #173c27;
        }

        .secondaryBtn {
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: white;
        }

        section {
          padding: 90px 24px;
        }

        .container {
          max-width: 1180px;
          margin: auto;
        }

        .sectionLabel {
          color: #28744b;
          font-weight: 900;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .sectionTitle {
          font-size: 36px;
          letter-spacing: -1.8px;
          margin-bottom: 12px;
        }

        .sectionDesc {
          color: #667068;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .services {
          background: white;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .card {
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 18px;
          overflow: hidden;
          transition: 0.2s;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
        }

        .cardImage {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }

        .cardBody {
          padding: 22px;
        }

        .cardBody h3 {
          font-size: 21px;
          margin-bottom: 9px;
        }

        .cardBody p {
          color: #707870;
          line-height: 1.65;
          font-size: 14px;
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .aboutBox {
          background: #eaf2ec;
          border-radius: 24px;
          padding: 42px;
        }

        .aboutBox h3 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .check {
          padding: 12px 0;
          border-bottom: 1px solid #d2dfd5;
          font-weight: 700;
        }

        .area {
          background: #173c27;
          color: white;
        }

        .area .sectionLabel {
          color: #b8e986;
        }

        .area .sectionDesc {
          color: #d8e2da;
        }

        .areaTags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .areaTag {
          padding: 13px 18px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 30px;
          font-weight: 800;
        }

        .contactBox {
          text-align: center;
          background: white;
          padding: 55px 25px;
          border-radius: 24px;
          border: 1px solid #e5e8e5;
        }

        .contactBox h2 {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .contactBox p {
          color: #687069;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .bigCall {
          display: inline-block;
          background: #1d5b39;
          color: white;
          padding: 18px 28px;
          border-radius: 13px;
          font-size: 20px;
          font-weight: 900;
        }

        footer {
          background: #121713;
          color: #c9cfca;
          padding: 42px 24px 100px;
          font-size: 13px;
          line-height: 1.9;
        }

        .footerInner {
          max-width: 1180px;
          margin: auto;
        }

        .footerLogo {
          color: white;
          font-size: 21px;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .floatingCall {
          position: fixed;
          right: 18px;
          bottom: 20px;
          z-index: 200;
          background: #1d5b39;
          color: white;
          padding: 15px 19px;
          border-radius: 50px;
          font-weight: 900;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.22);
        }

        @media (max-width: 850px) {
          .navLinks {
            display: none;
          }

          .menuButton {
            display: block;
          }

          .mobileMenu {
            display: ${menuOpen ? "block" : "none"};
            background: white;
            padding: 10px 24px 22px;
            border-top: 1px solid #eee;
          }

          .mobileMenu a {
            display: block;
            padding: 13px 0;
            font-weight: 800;
          }

          .hero {
            min-height: 570px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .serviceGrid {
            grid-template-columns: 1fr 1fr;
          }

          .aboutGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .nav {
            height: 64px;
            padding: 0 18px;
          }

          .logo {
            font-size: 21px;
          }

          .heroInner {
            padding: 65px 20px;
          }

          .hero h1 {
            font-size: 43px;
          }

          .hero p {
            font-size: 16px;
          }

          section {
            padding: 65px 18px;
          }

          .sectionTitle {
            font-size: 29px;
          }

          .serviceGrid {
            grid-template-columns: 1fr;
          }

          .cardImage {
            aspect-ratio: 16 / 10;
          }

          .aboutBox {
            padding: 28px 22px;
          }

          .contactBox h2 {
            font-size: 28px;
          }
        }
      `}</style>

      <header>
        <div className="nav">
          <a href="#" className="logo">
            이지<span>홈케어</span>
          </a>

          <nav className="navLinks">
            <a href="#services">서비스</a>
            <a href="#cases">시공사례</a>
            <a href="#area">서비스지역</a>
            <a href="#contact">견적문의</a>
            <a className="callTop" href={`tel:${callNumber}`}>
              전화 문의
            </a>
          </nav>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            ☰
          </button>
        </div>

        <div className="mobileMenu">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            서비스
          </a>
          <a href="#cases" onClick={() => setMenuOpen(false)}>
            시공사례
          </a>
          <a href="#area" onClick={() => setMenuOpen(false)}>
            서비스 지역
          </a>
          <a href={`tel:${callNumber}`}>☎ 전화 견적 문의</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="badge">현장 맞춤 시공 · 출장 작업</div>

            <h1>
              집 안부터 외부까지
              <br />
              필요한 작업을
              <br />
              <strong>한 번에.</strong>
            </h1>

            <p>
              벌목부터 방범창, 에어컨 배선 테이핑, 대형 거울,
              빨래건조대, 선반 보강 등 다양한 생활·외부 시공을
              도와드립니다.
            </p>

            <div className="heroButtons">
              <a href={`tel:${callNumber}`} className="primaryBtn">
                ☎ 전화 견적 문의
              </a>
              <a href="#cases" className="secondaryBtn">
                시공사례 보기
              </a>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="sectionLabel">EASY HOME CARE</div>
            <h2 className="sectionTitle">어떤 작업이 필요하세요?</h2>
            <p className="sectionDesc">
              작은 집수리부터 외부 작업까지 현장 상황에 맞춰
              상담해드립니다.
            </p>

            <div className="serviceGrid" id="cases">
              {services.map((item, index) => (
                <article className="card" key={index}>
                  <img
                    src={item.image}
                    alt={`${item.title} 시공사례`}
                    className="cardImage"
                    loading="lazy"
                  />
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container aboutGrid">
            <div>
              <div className="sectionLabel">WHY EASY HOME CARE</div>
              <h2 className="sectionTitle">
                애매한 작업도
                <br />
                먼저 문의해주세요.
              </h2>
              <p className="sectionDesc">
                집수리는 현장마다 구조와 작업 조건이 다릅니다.
                작업할 부분의 사진과 간단한 설명을 보내주시면
                작업 가능 여부와 견적을 안내해드립니다.
              </p>
            </div>

            <div className="aboutBox">
              <h3>이런 작업도 가능합니다.</h3>
              <div className="check">✓ 벌목 및 외부 작업</div>
              <div className="check">✓ 냉장고 및 수납장 철거</div>
              <div className="check">✓ 방범창살 설치</div>
              <div className="check">✓ 에어컨 배선 테이핑</div>
              <div className="check">✓ 대형 거울 설치</div>
              <div className="check">✓ 빨래건조대 설치</div>
              <div className="check">✓ 선반 설치 및 보강</div>
              <div className="check">✓ 기타 생활 집수리</div>
            </div>
          </div>
        </section>

        <section className="area" id="area">
          <div className="container">
            <div className="sectionLabel">SERVICE AREA</div>
            <h2 className="sectionTitle">출장 가능 지역</h2>
            <p className="sectionDesc">
              현장 위치와 작업 내용에 따라 출장 가능 여부를
              빠르게 안내해드립니다.
            </p>

            <div className="areaTags">
              <div className="areaTag">서울</div>
              <div className="areaTag">경기</div>
              <div className="areaTag">인천</div>
              <div className="areaTag">충남</div>
              <div className="areaTag">충북</div>
              <div className="areaTag">그 외 지역 문의</div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contactBox">
              <div className="sectionLabel">CONTACT</div>
              <h2>작업 가능 여부부터 문의하세요</h2>
              <p>
                작업 내용과 현장 상황을 확인한 후
                <br />
                가능한 작업 방법을 안내해드립니다.
              </p>

              <a href={`tel:${callNumber}`} className="bigCall">
                ☎ 010-2384-9768
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerInner">
          <div className="footerLogo">이지홈케어</div>

          <div>대표자 : 송은규</div>
          <div>사업자등록번호 : 882-06-03153</div>
          <div>전화 : 010-2384-9768</div>
          <div>서비스지역 : 서울 · 경기 · 인천 · 충남 · 충북 · 그 외 지역 문의</div>

          <br />

          <div>
            개인정보처리방침 | 고객의 개인정보는 상담 및 견적 안내
            목적으로만 이용됩니다.
          </div>

          <div>© 2026 EASY HOME CARE. All Rights Reserved.</div>
        </div>
      </footer>

      <a href={`tel:${callNumber}`} className="floatingCall">
        ☎ 견적문의
      </a>
    </>
  );
}
