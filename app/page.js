
"use client";

import { useState } from "react";

/* =====================================
   기본 정보
===================================== */

const COMPANY = "이지종합건설";

const PHONE = "01023849768";
const PHONE_DISPLAY = "010-2384-9768";

/* =====================================
   벌목 사진
   public 폴더에 업로드한 파일명
===================================== */

const TREE_IMAGES = {
  main: "/F43681CE-3D8F-416F-AF29-CE59813364F8.png",

  building:
    "/821819A6-616A-44E0-8B91-B80E45FE4E73.png",

  dangerous:
    "/5AD408FF-BE0D-4117-A740-AF7B2010E6A7.png",

  large:
    "/06B44412-9B35-4FB9-BF55-A47B4C6F5B92.png",

  land:
    "/9C676CC5-D9E0-45B4-B0DC-F4653EC43126.png",
};

/* =====================================
   벌목 서비스
===================================== */

const services = [
  {
    title: "주택 및 건물 주변 벌목",
    desc:
      "주택, 상가, 공장 등 건물 주변의 나무를 " +
      "현장 상황에 맞춰 제거합니다.",
    image: TREE_IMAGES.building,
  },
  {
    title: "위험목 제거",
    desc:
      "건물이나 시설물에 피해를 줄 우려가 있는 " +
      "나무의 상태와 주변 환경을 확인한 후 " +
      "작업 방법을 안내합니다.",
    image: TREE_IMAGES.dangerous,
  },
  {
    title: "대형 수목 벌목",
    desc:
      "크기가 큰 나무와 오래된 고목 등 " +
      "현장 접근성과 주변 시설물을 고려한 " +
      "벌목 작업을 진행합니다.",
    image: TREE_IMAGES.large,
  },
  {
    title: "토지 및 임야 벌목",
    desc:
      "토지 정리, 부지 관리 및 임야 내 수목 제거 등 " +
      "현장 규모에 맞춰 상담해드립니다.",
    image: TREE_IMAGES.land,
  },
];

/* =====================================
   벌목 시공사례
===================================== */

const cases = [
  {
    title: "건물 주변 수목 벌목",
    desc:
      "건물 주변 수목의 벌목 전·후 현장 사진입니다.",
    image: TREE_IMAGES.building,
  },
  {
    title: "주택 주변 나무 제거",
    desc:
      "주택 주변 나무 제거 작업의 전·후 사진입니다.",
    image: TREE_IMAGES.dangerous,
  },
  {
    title: "대형 수목 벌목 현장",
    desc:
      "수목 벌목 작업 전·후 모습을 확인하실 수 있습니다.",
    image: TREE_IMAGES.large,
  },
  {
    title: "토지 및 부지 벌목",
    desc:
      "부지 내 수목 벌목 전·후 현장 사진입니다.",
    image: TREE_IMAGES.land,
  },
];

/* =====================================
   지역별 벌목 페이지
===================================== */

const serviceAreas = [
  {
    name: "서울",
    desc: "서울특별시 25개 자치구",
    href: "/tree-removal#seoul",
  },
  {
    name: "경기",
    desc: "수원 · 용인 · 화성 · 평택 등",
    href: "/tree-removal#gyeonggi",
  },
  {
    name: "인천",
    desc: "인천광역시 시·군·구",
    href: "/tree-removal#incheon",
  },
  {
    name: "충남",
    desc: "천안 · 아산 · 당진 · 서산 등",
    href: "/tree-removal#chungnam",
  },
  {
    name: "충북",
    desc: "청주 · 충주 · 제천 · 음성 등",
    href: "/tree-removal#chungbuk",
  },
];

/* =====================================
   메인 홈페이지
===================================== */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Pretendard",
            "Noto Sans KR",
            Arial,
            sans-serif;

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

        .navLinks a:hover {
          color: #28744b;
        }

        .callTop {
          background: #1d5b39;
          color: white !important;

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

        /* =====================================
           메인 배너
        ===================================== */

        .hero {
          min-height: 650px;

          display: flex;
          align-items: center;

          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(8, 24, 14, 0.92),
              rgba(8, 24, 14, 0.65),
              rgba(8, 24, 14, 0.2)
            ),
            url("/F43681CE-3D8F-416F-AF29-CE59813364F8.png")
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
          max-width: 850px;
          margin-bottom: 23px;

          font-size: clamp(40px, 7vw, 73px);
          line-height: 1.15;
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
          display: inline-block;

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

        /* =====================================
           공통 디자인
        ===================================== */

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

        /* =====================================
           업체 안내
        ===================================== */

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

        /* =====================================
           벌목 서비스
        ===================================== */

        .services {
          background: white;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .card {
          overflow: hidden;

          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 18px;

          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
        }

        .cardImage {
          display: block;

          width: 100%;
          aspect-ratio: 16 / 10;
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

        /* =====================================
           벌목 상담 안내
        ===================================== */

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

        .check:last-child {
          border-bottom: 0;
        }

        /* =====================================
           지역별 벌목 페이지
        ===================================== */

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

        .areaGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 30px;
        }

        .areaCard {
          display: block;

          padding: 26px;

          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;

          transition:
            background 0.2s,
            transform 0.2s;
        }

        .areaCard:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-3px);
        }

        .areaCard h3 {
          margin-bottom: 10px;
          font-size: 24px;
        }

        .areaCard p {
          margin-bottom: 17px;

          color: #d8e2da;
          font-size: 14px;
          line-height: 1.7;
        }

        .areaCard span {
          color: #b8e986;
          font-size: 14px;
          font-weight: 900;
        }

        .allAreaBtn {
          display: inline-block;

          padding: 17px 25px;

          background: white;
          color: #173c27;

          border-radius: 12px;
          font-size: 16px;
          font-weight: 900;
        }

        .areaNotice {
          margin-top: 25px;

          color: #d8e2da;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================
           견적 문의
        ===================================== */

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

        /* =====================================
           하단 사업자 정보
        ===================================== */

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

        /* =====================================
           하단 고정 전화 버튼
        ===================================== */

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

        /* =====================================
           모바일 디자인
        ===================================== */

        @media (max-width: 850px) {
          .navLinks {
            display: none;
          }

          .menuButton {
            display: block;
          }

          .mobileMenu {
            display: block;

            padding: 8px 24px 22px;

            background: white;
            border-top: 1px solid #eee;
          }

          .mobileMenu a {
            display: block;
            padding: 13px 0;
            font-weight: 800;
          }

          .aboutGrid {
            grid-template-columns: 1fr;
          }

          .areaGrid {
            grid-template-columns: repeat(2, 1fr);
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

          .areaGrid {
            grid-template-columns: 1fr;
          }

          .areaCard {
            padding: 23px;
          }

          .contactBox h2 {
            font-size: 28px;
          }
        }
      `}</style>

      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header>
        <div className="nav">
          <a href="#home" className="logo">
            이지<span>종합건설</span>
          </a>

          <nav className="navLinks">
            <a href="#services">벌목</a>
            <a href="#cases">시공사례</a>
            <a href="#area">서비스지역</a>
            <a href="/tree-removal">지역별 벌목</a>
            <a href="#contact">견적문의</a>

            <a
              href={`tel:${PHONE}`}
              className="callTop"
            >
              전화 문의
            </a>
          </nav>

          <button
            type="button"
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mobileMenu">
            <a href="#services" onClick={closeMenu}>
              벌목
            </a>

            <a href="#cases" onClick={closeMenu}>
              시공사례
            </a>

            <a href="#area" onClick={closeMenu}>
              서비스지역
            </a>

            <a href="/tree-removal" onClick={closeMenu}>
              지역별 벌목
            </a>

            <a href="#contact" onClick={closeMenu}>
              견적문의
            </a>

            <a href={`tel:${PHONE}`} onClick={closeMenu}>
              ☎ {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </header>

      {/* =====================================
          메인 홈페이지
      ===================================== */}

      <main id="home">
        <section className="hero">
          <div className="heroInner">
            <div className="badge">
              🌳 벌목 전문업체 · 광역 출장 상담
            </div>

            <h1>
              벌목이 필요한 현장,
              <br />
              <strong>이지종합건설</strong>이
              <br />
              함께합니다.
            </h1>

            <p>
              주택 주변 위험목 제거부터
              대형 수목 벌목,
              토지 및 임야 벌목까지.
              <br />
              현장 환경과 작업 조건을 확인하고
              적합한 벌목 방법을 안내해드립니다.
            </p>

            <div className="heroButtons">
              <a
                href={`tel:${PHONE}`}
                className="primaryBtn"
              >
                ☎ 벌목 견적 문의
              </a>

              <a
                href="/tree-removal"
                className="secondaryBtn"
              >
                지역별 벌목 서비스 보기
              </a>
            </div>
          </div>
        </section>

        {/* 업체 안내 */}

        <div className="intro">
          <div className="introGrid">
            <div className="introItem">
              <strong>벌목 전문 상담</strong>
              <span>현장 사진과 작업 내용을 확인 후 상담</span>
            </div>

            <div className="introItem">
              <strong>현장 맞춤 작업</strong>
              <span>주변 시설물과 작업 환경을 고려한 시공</span>
            </div>

            <div className="introItem">
              <strong>광역 출장 상담</strong>
              <span>서울 · 경기 · 인천 · 충남 · 충북</span>
            </div>
          </div>
        </div>

        {/* =====================================
            벌목 서비스
        ===================================== */}

        <section className="services" id="services">
          <div className="container">
            <div className="sectionLabel">
              TREE REMOVAL SERVICE
            </div>

            <h2 className="sectionTitle">
              벌목 전문 시공
            </h2>

            <p className="sectionDesc">
              주택, 공장, 상가, 토지 및 임야 등
              다양한 현장의 벌목 작업을 상담해드립니다.
              나무의 크기와 주변 환경에 따라
              작업 방법 및 견적이 달라질 수 있습니다.
            </p>

            <div className="serviceGrid">
              {services.map((item) => (
                <article
                  className="card"
                  key={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.title}
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

        {/* =====================================
            시공사례
        ===================================== */}

        <section id="cases">
          <div className="container">
            <div className="sectionLabel">
              TREE REMOVAL PORTFOLIO
            </div>

            <h2 className="sectionTitle">
              벌목 시공사례
            </h2>

            <p className="sectionDesc">
              벌목 작업 현장 사진과
              시공 내용을 확인하실 수 있습니다.
            </p>

            <div className="serviceGrid">
              {cases.map((item) => (
                <article
                  className="card"
                  key={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.title}
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

        {/* =====================================
            벌목 상담 안내
        ===================================== */}

        <section>
          <div className="container aboutGrid">
            <div>
              <div className="sectionLabel">
                ABOUT TREE REMOVAL
              </div>

              <h2 className="sectionTitle">
                벌목 작업,
                <br />
                현장 확인부터 상담하세요.
              </h2>

              <p className="sectionDesc">
                벌목은 나무의 높이와 굵기,
                주변 건물 및 전선과의 거리,
                장비 진입 가능 여부 등에 따라
                작업 방법이 달라집니다.
                <br />
                <br />
                현장 사진과 작업 내용을 보내주시면
                작업 가능 여부와 필요한 장비,
                예상 견적을 안내해드립니다.
              </p>
            </div>

            <div className="aboutBox">
              <h3>벌목 상담 안내</h3>

              <div className="check">
                ✓ 주택 및 건물 주변 나무 제거
              </div>

              <div className="check">
                ✓ 위험목 및 고목 제거
              </div>

              <div className="check">
                ✓ 대형 수목 벌목
              </div>

              <div className="check">
                ✓ 토지 및 임야 벌목
              </div>

              <div className="check">
                ✓ 현장 접근성 및 장비 진입 확인
              </div>

              <div className="check">
                ✓ 벌목 작업 견적 상담
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            지역별 벌목 서비스
        ===================================== */}

        <section className="area" id="area">
          <div className="container">
            <div className="sectionLabel">
              SERVICE AREA
            </div>

            <h2 className="sectionTitle">
              지역별 벌목 출장 서비스
            </h2>

            <p className="sectionDesc">
              서울 · 경기 · 인천 · 충남 · 충북을
              중심으로 벌목 출장 상담을 진행합니다.
              <br />
              아래 지역을 선택하면
              해당 지역의 시·군·구별
              벌목 안내 페이지를 확인할 수 있습니다.
            </p>

            <div className="areaGrid">
              {serviceAreas.map((area) => (
                <a
                  key={area.name}
                  href={area.href}
                  className="areaCard"
                >
                  <h3>{area.name} 벌목</h3>

                  <p>{area.desc}</p>

                  <span>
                    지역별 벌목 페이지 보기 →
                  </span>
                </a>
              ))}
            </div>

            <a
              href="/tree-removal"
              className="allAreaBtn"
            >
              🌳 전체 벌목 출장 지역 보기 →
            </a>

            <p className="areaNotice">
              서울 · 경기 · 인천 · 충남 · 충북
              그 외 지역도 현장 위치와
              작업 규모에 따라 출장 가능 여부를
              확인해드립니다.
            </p>
          </div>
        </section>

        {/* =====================================
            견적 문의
        ===================================== */}

        <section id="contact">
          <div className="container">
            <div className="contactBox">
              <div className="sectionLabel">
                TREE REMOVAL CONTACT
              </div>

              <h2>벌목 견적 문의</h2>

              <p>
                벌목이 필요한 나무의 사진과
                현장 주소를 준비해 주세요.
                <br />
                나무의 크기, 작업 환경 및
                장비 진입 가능 여부를 확인한 후
                상담해드립니다.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="bigCall"
              >
                ☎ {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================
          하단 사업자 정보
      ===================================== */}

      <footer>
        <div className="footerInner">
          <div className="footerLogo">
            {COMPANY}
          </div>

          <div>벌목 전문업체</div>

          <div>대표자 : 송은규</div>

          <div>
            사업자등록번호 : 882-06-03153
          </div>

          <div>
            전화 : {PHONE_DISPLAY}
          </div>

          <div>
            서비스지역 : 서울 · 경기 · 인천 ·
            충남 · 충북 · 그 외 지역 문의
          </div>

          <div className="privacy">
            개인정보처리방침
            <br />
            상담 과정에서 제공된 개인정보는
            견적 및 시공 상담을 위한 목적으로만
            이용하며, 목적 달성 후 관련 법령에
            따라 안전하게 처리합니다.
          </div>

          <br />

          <div>
            © 2026 {COMPANY}.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* =====================================
          하단 고정 전화 버튼
      ===================================== */}

      <a
        href={`tel:${PHONE}`}
        className="floatingCall"
      >
        ☎ 벌목 견적문의
      </a>
    </>
  );
}
