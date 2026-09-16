"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const callNumber = "01023849768";

  const services = [
    {
      title: "벌목 · 나무 제거",
      desc: "좁은 공간, 주택가, 건물 주변 등 현장 상황에 맞춰 벌목 및 나무 제거 작업을 진행합니다.",
      image: "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",
    },
    {
      title: "에어컨 배선 테이핑",
      desc: "노후되거나 벗겨진 에어컨 배관 및 배선 보온재를 깔끔하게 보수합니다.",
      image: "/4CD1D8DB-15F0-408B-B121-14B8DE5EFE19.png",
    },
    {
      title: "방범창살 설치",
      desc: "주택, 빌라, 상가 등 현장에 맞는 방범창살 설치 및 보수 작업을 진행합니다.",
      image: "/63C20778-04FD-4E09-8C17-4318D20C2C49.png",
    },
    {
      title: "대형 거울 설치",
      desc: "가정집, 상가, 사무실 등 대형 거울 설치 작업을 안전하게 진행합니다.",
      image: "/D0726F84-4F5C-48E8-B6B6-67AB7B722759.png",
    },
    {
      title: "선반 설치 · 보강",
      desc: "벽선반 설치부터 흔들리거나 처진 기존 선반의 보강 작업까지 가능합니다.",
      image: "/A8739EC2-FB40-407E-8651-727243E1FB11.png",
    },
    {
      title: "파라솔 설치",
      desc: "테라스, 옥상, 마당 등 야외 공간에 대형 파라솔 설치 작업을 진행합니다.",
      image: "/98F2595E-43F2-41CC-A8FF-95581E24C025.png",
    },
    {
      title: "빨래건조대 설치",
      desc: "베란다 천장형 빨래건조대 신규 설치 및 노후 제품 교체가 가능합니다.",
      image: "/1BCC4677-17D0-4FCA-8D3E-EFFBE2E1268A.png",
    },
  ];

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
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #e6e9e6;
          backdrop-filter: blur(10px);
        }

        .nav {
          max-width: 1180px;
          height: 72px;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -1px;
          color: #1d5b39;
        }

        .logo span {
          color: #222;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 27px;
          font-size: 15px;
          font-weight: 800;
        }

        .callTop {
          background: #1d5b39;
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
        }

        .menuButton {
          display: none;
          background: transparent;
          border: 0;
          font-size: 27px;
          cursor: pointer;
        }

        .mobileMenu {
          display: none;
        }

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(8, 24, 14, 0.9),
              rgba(8, 24, 14, 0.58),
              rgba(8, 24, 14, 0.18)
            ),
            url("/F43681CE-3D8F-416F-AF29-CE598133364F8.png")
              center / cover no-repeat;
        }

        .heroInner {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          padding: 90px 24px;
        }

        .badge {
          display: inline-block;
          margin-bottom: 20px;
          padding: 9px 15px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.14);
          font-size: 14px;
          font-weight: 700;
        }

        .hero h1 {
          max-width: 760px;
          margin-bottom: 23px;
          font-size: clamp(43px, 7vw, 73px);
          line-height: 1.12;
          letter-spacing: -3px;
        }

        .hero h1 strong {
          color: #b8e986;
        }

        .hero p {
          max-width: 650px;
          margin-bottom: 32px;
          color: #f2f5f2;
          font-size: 18px;
          line-height: 1.8;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .primaryBtn,
        .secondaryBtn {
          padding: 16px 22px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 900;
        }

        .primaryBtn {
          background: white;
          color: #173c27;
        }

        .secondaryBtn {
          border: 1px solid rgba(255, 255, 255, 0.75);
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
          margin-bottom: 10px;
          color: #28744b;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.4px;
        }

        .sectionTitle {
          margin-bottom: 13px;
          font-size: 37px;
          letter-spacing: -1.8px;
        }

        .sectionDesc {
          margin-bottom: 40px;
          color: #667068;
          line-height: 1.8;
        }

        .intro {
          background: #173c27;
          color: white;
          padding: 45px 24px;
        }

        .introGrid {
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .introItem {
          padding: 20px;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .introItem:last-child {
          border-right: 0;
        }

        .introItem strong {
          display: block;
          margin-bottom: 7px;
          font-size: 21px;
        }

        .introItem span {
          color: #cbd8ce;
          font-size: 14px;
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
          overflow: hidden;
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 18px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
        }

        .cardImage {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }

        .cardBody {
          padding: 22px;
        }

        .cardBody h3 {
          margin-bottom: 9px;
          font-size: 21px;
        }

        .cardBody p {
          color: #707870;
          font-size: 14px;
          line-height: 1.7;
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .aboutBox {
          padding: 42px;
          background: #eaf2ec;
          border-radius: 24px;
        }

        .aboutBox h3 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        .check {
          padding: 12px 0;
          border-bottom: 1px solid #d2dfd5;
          font-weight: 750;
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
          flex-wrap: wrap;
          gap: 10px;
        }

        .areaTag {
          padding: 13px 18px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 30px;
          font-weight: 800;
        }

        .contactBox {
          padding: 55px 25px;
          text-align: center;
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 24px;
        }

        .contactBox h2 {
          margin-bottom: 15px;
          font-size: 36px;
        }

        .contactBox p {
          margin-bottom: 27px;
          color: #687069;
          line-height: 1.8;
        }

        .bigCall {
          display: inline-block;
          padding: 18px 28px;
          background: #1d5b39;
          color: white;
          border-radius: 13px;
          font-size: 20px;
          font-weight: 900;
        }

        footer {
          padding: 45px 24px 105px;
          background: #121713;
          color: #c9cfca;
          font-size: 13px;
          line-height: 1.9;
        }

        .footerInner {
          max-width: 1180px;
          margin: auto;
        }

        .footerLogo {
          margin-bottom: 15px;
          color: white;
          font-size: 22px;
          font-weight: 900;
        }

        .privacy {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #303831;
          color: #9fa7a0;
        }

        .floatingCall {
          position: fixed;
          right: 18px;
          bottom: 20px;
          z-index: 200;
          padding: 15px 20px;
          background: #1d5b39;
          color: white;
          border-radius: 50px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.22);
          font-weight: 900;
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
            padding: 8px 24px 22px;
            background: white;
            border-top: 1px solid #eee;
          }

          .mobileMenu a {
            display: block;
            padding: 13px 0;
            font-weight: 800;
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
            font-size: 20px;
          }

          .hero {
            min-height: 590px;
          }

          .heroInner {
            padding: 65px 20px;
          }

          .hero h1 {
            font-size: 43px;
            letter-spacing: -2px;
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

          .introGrid {
            grid-template-columns: 1fr;
          }

          .introItem {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }

          .introItem:last-child {
            border-bottom: 0;
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
            이지<span>종합건설</span>
          </a>

          <nav className="navLinks">
            <a href="#services">서비스</a>
            <a href="#cases">시공사례</a>
            <a href="#area">서비스지역</a>
            <a href="#contact">견적문의</a>

            <a href={`tel:${callNumber}`} className="callTop">
              전화 문의
            </a>
          </nav>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
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

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            견적 문의
          </a>

          <a href={`tel:${callNumber}`}>
            ☎ 010-2384-9768
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="badge">
              벌목 · 외부작업 · 생활 집수리
            </div>

            <h1>
              현장에 필요한 작업,
              <br />
              <strong>이지종합건설</strong>이
              <br />
              해결합니다.
            </h1>

            <p>
              벌목 및 나무 제거부터 방범창살, 에어컨 배선 테이핑,
              대형 거울, 빨래건조대, 선반 보강 등 다양한 작업을
              현장 상황에 맞춰 진행합니다.
            </p>

            <div className="heroButtons">
              <a href={`tel:${callNumber}`} className="primaryBtn">
                ☎ 전화 견적 문의
              </a>

              <a href="#cases" className="secondaryBtn">
                실제 시공사례 보기
              </a>
            </div>
          </div>
        </section>

        <div className="intro">
          <div className="introGrid">
            <div className="introItem">
              <strong>현장 맞춤 상담</strong>
              <span>사진과 작업 내용을 확인 후 상담</span>
            </div>

            <div className="introItem">
              <strong>다양한 출장 시공</strong>
              <span>외부 작업부터 생활 집수리까지</span>
            </div>

            <div className="introItem">
              <strong>광역 출장 가능</strong>
              <span>서울 · 경기 · 인천 · 충남 · 충북</span>
            </div>
          </div>
        </div>

        <section className="services" id="services">
          <div className="container">
            <div className="sectionLabel">
              EASY GENERAL CONSTRUCTION
            </div>

            <h2 className="sectionTitle">
              이지종합건설 주요 시공
            </h2>

            <p className="sectionDesc">
              일반적인 집수리부터 작업하기 까다로운 외부 시공까지
              현장 사진을 보내주시면 작업 가능 여부를 확인해드립니다.
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
              <div className="sectionLabel">
                EASY CONSTRUCTION
              </div>

              <h2 className="sectionTitle">
                어디에 문의해야 할지
                <br />
                애매한 작업도 문의하세요.
              </h2>

              <p className="sectionDesc">
                현장마다 구조, 설치 위치, 작업 조건이 다르기 때문에
                사진과 작업 내용을 확인한 후 작업 가능 여부와
                필요한 시공 방법을 안내해드립니다.
              </p>
            </div>

            <div className="aboutBox">
              <h3>주요 작업 분야</h3>

              <div className="check">✓ 벌목 및 나무 제거</div>
              <div className="check">✓ 외부 시설물 설치 및 보수</div>
              <div className="check">✓ 냉장고 · 수납장 철거</div>
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
            <div className="sectionLabel">
              SERVICE AREA
            </div>

            <h2 className="sectionTitle">
              이지종합건설 출장 가능 지역
            </h2>

            <p className="sectionDesc">
              작업 내용과 현장 위치에 따라 출장 가능 여부를
              확인해드립니다. 그 외 지역도 문의해주세요.
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
              <div className="sectionLabel">
                CONTACT
              </div>

              <h2>
                시공 및 출장 견적 문의
              </h2>

              <p>
                작업이 필요한 부분의 사진과 내용을 준비하시면
                <br />
                더욱 빠른 상담이 가능합니다.
              </p>

              <a
                href={`tel:${callNumber}`}
                className="bigCall"
              >
                ☎ 010-2384-9768
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerInner">
          <div className="footerLogo">
            이지종합건설
          </div>

          <div>대표자 : 송은규</div>
          <div>사업자등록번호 : 882-06-03153</div>
          <div>전화 : 010-2384-9768</div>

          <div>
            서비스지역 : 서울 · 경기 · 인천 · 충남 · 충북 ·
            그 외 지역 문의
          </div>

          <div className="privacy">
            개인정보처리방침
            <br />
            상담 과정에서 제공된 개인정보는 견적 및 시공 상담을
            위한 목적으로만 이용하며, 목적 달성 후 관련 법령에
            따라 안전하게 처리합니다.
          </div>

          <br />

          <div>
            © 2026 이지종합건설. All Rights Reserved.
          </div>
        </div>
      </footer>

      <a
        href={`tel:${callNumber}`}
        className="floatingCall"
      >
        ☎ 견적문의
      </a>
    </>
  );
}
