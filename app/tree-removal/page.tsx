
import type { Metadata } from "next";
import Link from "next/link";

import {
  regions,
  getRegionName,
  getRegionUrl,
} from "../regions";

const COMPANY = "이지종합건설";
const PHONE = "01023849768";
const PHONE_DISPLAY = "010-2384-9768";

const TREE_IMAGE =
  "/F43681CE-3D8F-416F-AF29-CE59813364F8.png";

export const metadata: Metadata = {
  title: "전국 벌목 출장 지역 | 이지종합건설",

  description:
    "서울 경기 인천 충남 충북 벌목 및 나무 제거 출장 상담. " +
    "주택 주변 위험목 제거, 대형 수목 벌목, " +
    "토지 및 임야 벌목 전문 상담. " +
    "이지종합건설 010-2384-9768",

  alternates: {
    canonical: "/tree-removal",
  },
};

const areaGroups = [
  {
    name: "서울",
    title: "서울특별시 벌목",
    desc: "서울 25개 자치구 벌목 및 나무 제거 출장 상담",
  },
  {
    name: "경기",
    title: "경기도 벌목",
    desc: "수원, 용인, 화성, 평택 등 경기도 벌목 출장 상담",
  },
  {
    name: "인천",
    title: "인천광역시 벌목",
    desc: "인천 지역 벌목 및 위험목 제거 출장 상담",
  },
  {
    name: "충남",
    title: "충청남도 벌목",
    desc: "천안, 아산, 당진, 서산 등 충남 벌목 출장 상담",
  },
  {
    name: "충북",
    title: "충청북도 벌목",
    desc: "청주, 충주, 제천, 음성 등 충북 벌목 출장 상담",
  },
];

export default function TreeRemovalPage() {
  return (
    <main className="treeAreaPage">
      <style>{`
        .treeAreaPage {
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

        .treeAreaPage * {
          box-sizing: border-box;
        }

        .treeAreaPage a {
          text-decoration: none;
        }

        .treeHeader {
          background: white;
          border-bottom: 1px solid #e5e8e5;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .treeNav {
          max-width: 1180px;
          margin: auto;
          padding: 18px 24px;

          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .treeLogo {
          color: #1d5b39;
          font-size: 23px;
          font-weight: 900;
        }

        .treeCall {
          background: #1d5b39;
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 900;
          font-size: 14px;
        }

        .treeHero {
          background:
            linear-gradient(
              90deg,
              rgba(8,24,14,0.94),
              rgba(8,24,14,0.62)
            ),
            url("${TREE_IMAGE}")
            center / cover no-repeat;

          color: white;
          padding: 100px 24px;
        }

        .treeContainer {
          max-width: 1180px;
          margin: auto;
        }

        .treeBadge {
          display: inline-block;
          padding: 9px 15px;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 30px;
          background: rgba(255,255,255,0.13);
          font-size: 14px;
          font-weight: 800;
        }

        .treeHero h1 {
          margin: 23px 0;
          font-size: clamp(35px,6vw,62px);
          line-height: 1.25;
          letter-spacing: -2px;
        }

        .treeHero h1 strong {
          color: #b8e986;
        }

        .treeHero p {
          max-width: 700px;
          margin-bottom: 30px;
          color: #e5eee6;
          font-size: 17px;
          line-height: 1.9;
        }

        .treeButton {
          display: inline-block;
          background: #1d5b39;
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          font-weight: 900;
        }

        .treeHero .treeButton {
          background: white;
          color: #173c27;
        }

        .treeSection {
          padding: 80px 24px;
        }

        .treeSectionTitle {
          margin-bottom: 15px;
          font-size: clamp(28px,4vw,38px);
          letter-spacing: -1px;
        }

        .treeSectionDesc {
          color: #667068;
          line-height: 1.9;
          margin-bottom: 35px;
        }

        .treeAreaCard {
          background: white;
          border: 1px solid #e5e8e5;
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 25px;
        }

        .treeAreaCard h2 {
          font-size: 27px;
          margin-bottom: 12px;
        }

        .treeAreaCard p {
          color: #667068;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .treeTags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .treeTag {
          display: inline-block;
          padding: 12px 17px;
          background: #eaf2ec;
          color: #1d5b39;
          border: 1px solid #d5e4d8;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 800;
        }

        .treeTag:hover {
          background: #d8eadc;
        }

        .treeContact {
          background: #173c27;
          color: white;
          text-align: center;
          padding: 75px 24px;
        }

        .treeContact h2 {
          font-size: 35px;
          margin-bottom: 18px;
        }

        .treeContact p {
          color: #d8e2da;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .treeContact .treeButton {
          background: white;
          color: #173c27;
        }

        .treeFooter {
          background: #121713;
          color: #c9cfca;
          padding: 45px 24px 110px;
          font-size: 13px;
          line-height: 2;
        }

        .treeFooterInner {
          max-width: 1180px;
          margin: auto;
        }

        .treeFooterLogo {
          color: white;
          font-size: 23px;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .treeFooter a {
          color: white;
        }

        .treeFloating {
          position: fixed;
          right: 18px;
          bottom: 20px;
          z-index: 200;
          background: #1d5b39;
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          font-weight: 900;
          box-shadow: 0 8px 25px rgba(0,0,0,0.22);
        }

        @media (max-width: 600px) {
          .treeNav {
            padding: 15px 18px;
          }

          .treeLogo {
            font-size: 19px;
          }

          .treeHero {
            padding: 75px 20px;
          }

          .treeHero h1 {
            font-size: 38px;
          }

          .treeHero p {
            font-size: 15px;
          }

          .treeSection {
            padding: 60px 18px;
          }

          .treeAreaCard {
            padding: 24px 18px;
          }

          .treeAreaCard h2 {
            font-size: 23px;
          }

          .treeContact h2 {
            font-size: 28px;
          }
        }
      `}</style>

      {/* 상단 메뉴 */}

      <header className="treeHeader">
        <div className="treeNav">
          <Link href="/" className="treeLogo">
            이지종합건설
          </Link>

          <a
            href={`tel:${PHONE}`}
            className="treeCall"
          >
            ☎ 전화 문의
          </a>
        </div>
      </header>

      {/* 메인 화면 */}

      <section className="treeHero">
        <div className="treeContainer">
          <div className="treeBadge">
            🌳 벌목 전문업체 · 광역 출장 상담
          </div>

          <h1>
            전국 벌목 출장 지역
            <br />
            <strong>
              이지종합건설
            </strong>
          </h1>

          <p>
            서울 · 경기 · 인천 · 충남 · 충북을
            중심으로 벌목 및 나무 제거
            출장 상담을 진행합니다.
            <br />
            지역별 벌목 안내 페이지를 확인하고
            현장 상황에 맞춰 상담받으세요.
          </p>

          <a
            href={`tel:${PHONE}`}
            className="treeButton"
          >
            ☎ 벌목 견적 문의
          </a>
        </div>
      </section>

      {/* 전체 지역 목록 */}

      <section className="treeSection">
        <div className="treeContainer">
          <h2 className="treeSectionTitle">
            지역별 벌목 서비스
          </h2>

          <p className="treeSectionDesc">
            아래에서 벌목 작업이 필요한 지역을
            선택해 주세요.
            각 지역의 벌목 및 나무 제거
            안내 페이지로 이동합니다.
          </p>

          {areaGroups.map((group) => {
            const groupRegions = regions.filter(
              (region) =>
                region.province === group.name
            );

            return (
              <section
                key={group.name}
                className="treeAreaCard"
                aria-label={group.title}
              >
                <h2>{group.title}</h2>

                <p>{group.desc}</p>

                <div className="treeTags">
                  {groupRegions.map((region) => (
                    <Link
                      key={region.slug}
                      href={getRegionUrl(region)}
                      className="treeTag"
                    >
                      {getRegionName(region)} 벌목
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* 견적 문의 */}

      <section className="treeContact">
        <div className="treeContainer">
          <h2>벌목 견적 문의</h2>

          <p>
            벌목이 필요한 나무의 사진과
            현장 주소를 준비해 주세요.
            <br />
            나무의 크기와 작업 환경,
            장비 진입 가능 여부를 확인한 후
            상담해드립니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            className="treeButton"
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* 하단 사업자 정보 */}

      <footer className="treeFooter">
        <div className="treeFooterInner">
          <div className="treeFooterLogo">
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

          <div style={{ marginTop: 20 }}>
            <Link href="/">
              메인 홈페이지로 돌아가기 →
            </Link>
          </div>

          <div style={{ marginTop: 20 }}>
            © 2026 {COMPANY}.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 하단 고정 전화 버튼 */}

      <a
        href={`tel:${PHONE}`}
        className="treeFloating"
      >
        ☎ 벌목 견적문의
      </a>
    </main>
  );
}
