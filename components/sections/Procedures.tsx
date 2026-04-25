"use client";

import { useState } from "react";

type Tab = "implant" | "hybrid" | "revision";

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: "implant", label: "보형물 가슴 확대", sub: "Breast Augmentation" },
  { id: "hybrid", label: "하이브리드 성형", sub: "Hybrid Augmentation" },
  { id: "revision", label: "가슴 재수술", sub: "Revision Surgery" },
];

export default function Procedures() {
  const [activeTab, setActiveTab] = useState<Tab>("implant");

  return (
    <section id="procedures" className="py-12 lg:py-[80px]">
      <div className="w-full max-w-content mx-auto px-6">

        <span className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-gold font-semibold block mb-4">
          Breast Surgery Guide
        </span>
        <h2 className="font-serif-display text-[1.8rem] sm:text-[2.2rem] lg:text-[3rem] font-medium leading-[1.25] mb-3 keep-all">
          수술 전에 먼저 알아야 할 것들
        </h2>
        <p className="text-[0.95rem] lg:text-[1.05rem] text-text-sub leading-[1.8] max-w-2xl mb-10">
          가슴성형은 보형물 형태·표면·삽입 위치·절개선 등 여러 변수의 조합으로 결과가 달라집니다.
          에스엠성형외과는 상담 시 각 항목을 직접 설명하고, 본인의 흉곽·피부 조건에 맞는 조합을 함께 결정합니다.
        </p>

        {/* Tab bar */}
        <div className="flex border-b border-border-default mb-10 overflow-x-auto hide-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 flex flex-col items-start px-6 py-4 text-left border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-brand text-text-main"
                  : "border-transparent text-text-sub hover:text-text-main"
              }`}
            >
              <span className="text-[0.95rem] font-semibold keep-all">{tab.label}</span>
              <span className="text-[0.7rem] uppercase tracking-wider text-text-sub mt-0.5">{tab.sub}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "implant" && <ImplantArticle />}
        {activeTab === "hybrid" && <HybridArticle />}
        {activeTab === "revision" && <RevisionArticle />}

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   보형물 가슴 확대
───────────────────────────────────────── */
function ImplantArticle() {
  return (
    <article className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
      <div className="prose-article">

        <Section title="보형물 형태 — 라운드형 vs 물방울형">
          <p>
            보형물은 크게 <Strong>라운드형</Strong>과 <Strong>물방울형(해부학적형)</Strong>으로 나뉩니다.
            어느 쪽이 더 좋다고 단정할 수 없으며, 개인의 흉곽 구조와 원하는 결과에 따라 달라집니다.
          </p>
          <CompareTable
            headers={["", "라운드형", "물방울형(해부학적형)"]}
            rows={[
              ["형태", "반구형으로 상·하극이 대칭", "상극이 완만하고 하극이 풍부"],
              ["자연스러움", "세워있을 때 다소 인공적, 누우면 자연스럽게 옆으로 퍼짐", "서 있을 때 가장 자연스러운 곡선"],
              ["회전 위험", "형태가 대칭이라 회전해도 티 나지 않음", "회전 시 형태 변형이 발생할 수 있어 텍스처드 표면 필요"],
              ["가격", "상대적으로 낮음", "상대적으로 높음"],
              ["적합한 경우", "볼륨 업이 주 목적, 처음 수술", "가슴 처짐 보완, 더 자연스러운 실루엣"],
            ]}
          />
        </Section>

        <Section title="보형물 표면 — 스무스 vs 텍스처드">
          <p>
            보형물 표면의 질감은 체내에서의 고정력과 구형구축 위험에 영향을 미칩니다.
          </p>
          <CompareTable
            headers={["", "스무스", "텍스처드", "마이크로텍스처드"]}
            rows={[
              ["표면", "매끈함", "거친 조직 부착면", "중간 정도의 거칠기"],
              ["촉감", "부드러움", "약간 단단함", "부드러운 편"],
              ["고정", "보형물이 내부에서 이동 가능", "조직 유착으로 위치 고정", "부분 유착"],
              ["구형구축", "과거에는 위험 높다고 봤으나 최근 연구에서 논란", "섬유막 형성이 적어 구형구축 위험 낮다는 주장", "—"],
              ["주의", "라운드형에 주로 사용", "물방울형에 필수적으로 적용", "일부 고가 제품(Motiva 등)에서 사용"],
            ]}
          />
          <Note>
            텍스처드 보형물과 희귀 림프종(BIA-ALCL)의 연관성이 보고된 바 있습니다.
            발생률은 매우 낮으나(100만 건당 2~3건 수준), 상담 시 원장님과 함께 검토합니다.
          </Note>
        </Section>

        <Section title="보형물 삽입 위치 — 왜 이중평면을 많이 쓰나">
          <p>
            보형물을 어느 층에 넣느냐에 따라 결과, 회복 기간, 자연스러움이 달라집니다.
            현재 가장 많이 사용되는 방식은 <Strong>이중평면(Dual Plane)</Strong>입니다.
          </p>
          <div className="space-y-4 mt-4">
            <InfoBlock title="근육 위 (전근막하)">
              대흉근 앞쪽, 근막 아래에 삽입합니다. 회복이 빠르고 상체 운동 제약이 적습니다.
              다만 피부·지방층이 얇을 경우 보형물 윤곽이 비칠 수 있습니다(리플링).
            </InfoBlock>
            <InfoBlock title="근육 아래 (완전 근육하)">
              대흉근 아래에 완전히 넣는 방식입니다. 리플링이 적고 매우 자연스러우나,
              수술 후 통증이 크고 팔을 움직일 때 보형물이 따라 움직이는 '애니메이션 변형'이 나타날 수 있습니다.
            </InfoBlock>
            <InfoBlock title="이중평면 (Dual Plane) ★ 가장 많이 사용">
              상부는 대흉근 아래, 하부는 근막 위에 위치합니다.
              근육하의 자연스러움과 근막하의 빠른 회복을 절충한 방식입니다.
              대부분의 경우 이중평면을 기준으로 조건에 따라 조정합니다.
            </InfoBlock>
          </div>
        </Section>

        <Section title="절개선 위치 — 흉터가 생기는 위치">
          <div className="space-y-4">
            <InfoBlock title="유방하주름 (Inframammary Fold) — 가장 많이 사용">
              유방 아래 주름에 절개합니다. 수술 시야가 가장 넓어 정밀한 조작이 가능하고,
              흉터가 주름 안으로 숨겨집니다. 재수술 시에도 동일 절개선을 활용할 수 있습니다.
            </InfoBlock>
            <InfoBlock title="겨드랑이 (Transaxillary)">
              가슴에 흉터가 생기지 않는 장점이 있습니다.
              다만 수술 시야가 제한적이고, 재수술 시 다른 절개선이 필요할 수 있습니다.
            </InfoBlock>
            <InfoBlock title="유륜주위 (Periareolar)">
              유륜 경계선을 따라 절개합니다. 흉터가 잘 숨겨지나,
              유두 감각 변화나 수유 영향 가능성이 있습니다.
            </InfoBlock>
          </div>
        </Section>

        <Section title="다운타임 & 회복 일정">
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              { period: "수술 당일", desc: "압박 속옷 착용, 귀가 가능 (컨디션에 따라 1박 권장)" },
              { period: "1주차", desc: "붓기·멍 최고조. 세안·간단한 세척 가능" },
              { period: "2~3주차", desc: "붓기 약 50% 감소. 가벼운 일상 복귀" },
              { period: "4주차", desc: "압박 속옷 착용 종료 (4주 기준)" },
              { period: "6주차 이후", desc: "상체 운동 가능" },
              { period: "3~6개월", desc: "최종 형태 안정. 보형물이 자리 잡힘" },
            ].map((item) => (
              <div key={item.period} className="flex gap-3 p-3 bg-bg-sub-alt">
                <span className="text-[0.72rem] font-bold text-brand shrink-0 pt-0.5 min-w-[56px]">{item.period}</span>
                <span className="text-[0.88rem] text-text-sub leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Sidebar */}
      <aside className="lg:sticky lg:top-[80px] space-y-4">
        <SideCard title="에스엠이 주로 사용하는 보형물">
          <p className="text-[0.88rem] text-text-sub leading-relaxed">
            <Strong>멘토(Mentor, J&amp;J)</Strong>를 주로 사용하며, 환자의 흉곽 조건과 피부 두께에 따라
            형태·표면을 결정합니다. 상담 시 실제 보형물 샘플을 직접 만져보실 수 있습니다.
          </p>
        </SideCard>
        <SideCard title="이런 분께 추천">
          <ul className="text-[0.88rem] text-text-sub space-y-2">
            {["첫 수술으로 볼륨 업을 원하는 분", "피부 탄력이 충분하고 처짐이 없는 분", "자연스러운 볼륨 라인을 원하는 분"].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-accent-gold mt-0.5 shrink-0">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SideCard>
        <SideCard title="한국 체류 일정">
          <p className="text-[0.88rem] text-text-sub leading-relaxed">
            단독 수술 기준 <Strong>3박 4일</Strong> 권장.<br />
            수술 다음 날 1회 체크 후 귀국 가능합니다.
          </p>
        </SideCard>
      </aside>
    </article>
  );
}

/* ─────────────────────────────────────────
   하이브리드 가슴성형
───────────────────────────────────────── */
function HybridArticle() {
  return (
    <article className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
      <div className="prose-article">

        <Section title="하이브리드 성형이란?">
          <p>
            <Strong>보형물(임플란트)</Strong>과 <Strong>자가 지방이식</Strong>을 동시에 진행하는 방식입니다.
            보형물이 전체 볼륨과 형태의 토대를 만들고,
            본인의 지방을 채취·정제해 가슴 경계부(특히 윗가슴 데콜테 라인)에 덧대어 자연스럽게 마감합니다.
          </p>
          <p>
            보형물만 넣었을 때 생기는 '경계선이 보이는 느낌'을 줄이고,
            순수 지방이식만으로는 한계가 있는 전체 볼륨감을 동시에 해결할 수 있습니다.
          </p>
        </Section>

        <Section title="어떤 경우에 적합한가">
          <div className="space-y-3 mt-2">
            {[
              { title: "윗가슴(데콜테)이 빈약한 경우", desc: "보형물 단독으로는 상극 채우기가 어려울 수 있습니다. 지방이식으로 자연스럽게 채웁니다." },
              { title: "보형물 경계가 비치는 것을 원하지 않는 경우", desc: "피부·지방층이 얇으면 보형물 윤곽이 보일 수 있습니다. 지방층을 추가해 완충합니다." },
              { title: "자연스러운 촉감을 원하는 경우", desc: "지방이식 부위는 자신의 조직이라 촉감이 가장 자연스럽습니다." },
            ].map(item => <InfoBlock key={item.title} title={item.title}>{item.desc}</InfoBlock>)}
          </div>
        </Section>

        <Section title="지방 채취 부위 및 과정">
          <p>
            허벅지·복부·옆구리 등 본인의 지방층에서 채취합니다.
            채취한 지방을 원심분리기로 정제한 뒤, 주사기로 층층이 이식합니다.
            이식된 지방의 생착률은 일반적으로 <Strong>40~60%</Strong> 수준이며,
            생착되지 않은 부분은 3~6개월에 걸쳐 자연 흡수됩니다.
          </p>
          <Note>
            지방이식 후 최종 형태를 확인하려면 6개월 이상 경과를 봐야 합니다.
            처음에는 이식량보다 결과가 작아 보일 수 있습니다.
          </Note>
        </Section>

        <Section title="장단점">
          <CompareTable
            headers={["장점", "단점 / 고려사항"]}
            rows={[
              ["자연스러운 경계와 촉감", "지방 공여부(채취 부위)에도 멍·붓기 발생"],
              ["데콜테 라인 개선", "지방 생착률이 개인차 있음 (40~60%)"],
              ["보형물 경계 완충", "보형물 단독보다 수술 시간 길어짐 (약 3~4시간)"],
              ["본인 조직 사용으로 이물감 최소화", "지방 공여부가 충분해야 함"],
            ]}
          />
        </Section>

        <Section title="회복 일정">
          <p>
            보형물 단독과 유사하나, 지방 채취 부위(허벅지·복부 등)의 멍·붓기가 추가됩니다.
            일반적으로 <Strong>2~3주</Strong> 후 일상 복귀, <Strong>6개월</Strong>에 최종 형태 확인.
          </p>
        </Section>

      </div>

      <aside className="lg:sticky lg:top-[80px] space-y-4">
        <SideCard title="이런 분께 추천">
          <ul className="text-[0.88rem] text-text-sub space-y-2">
            {[
              "자연스러운 촉감과 데콜테 라인 모두 원하는 분",
              "피부·지방층이 얇아 보형물 경계 걱정되는 분",
              "지방 채취할 여유 부위가 있는 분",
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-accent-gold mt-0.5 shrink-0">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SideCard>
        <SideCard title="한국 체류 일정">
          <p className="text-[0.88rem] text-text-sub leading-relaxed">
            <Strong>4~5박</Strong> 권장.<br />
            수술 시간이 길고 지방 채취 부위 관리가 필요합니다.
          </p>
        </SideCard>
      </aside>
    </article>
  );
}

/* ─────────────────────────────────────────
   가슴 재수술
───────────────────────────────────────── */
function RevisionArticle() {
  return (
    <article className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
      <div className="prose-article">

        <Section title="재수술이 필요한 경우">
          <p>
            가슴성형 후 시간이 지나며 다양한 이유로 재수술을 고려하게 됩니다.
            어떤 증상이나 변화가 생겼는지에 따라 수술 방법이 달라집니다.
          </p>
          <div className="space-y-3 mt-4">
            {[
              { title: "구형구축 (Capsular Contracture)", desc: "보형물 주변에 형성되는 섬유막(피막)이 과도하게 수축해 가슴이 딱딱해지는 증상. Baker Ⅱ~Ⅳ도에 해당하면 수술적 교정을 권장합니다." },
              { title: "보형물 변위·회전", desc: "보형물이 제 위치에서 벗어나거나(변위), 물방울형 보형물이 회전해 형태가 달라진 경우." },
              { title: "좌우 비대칭, 형태 변형", desc: "좌우 크기·위치 차이, 시간 경과에 따른 조직 변화로 인한 형태 왜곡." },
              { title: "리플링 (Rippling)", desc: "보형물 주름이 피부 위로 비치는 현상. 피부·지방층이 얇거나 보형물이 너무 큰 경우 발생." },
              { title: "보형물 교체 (수명)", desc: "보형물 자체의 수명은 제한이 없으나, 파열·이물감·촉감 변화 등의 이유로 교체를 원하는 경우." },
            ].map(item => <InfoBlock key={item.title} title={item.title}>{item.desc}</InfoBlock>)}
          </div>
        </Section>

        <Section title="구형구축 단계 (Baker 분류)">
          <CompareTable
            headers={["단계", "증상", "치료"]}
            rows={[
              ["Ⅰ도", "정상. 부드럽고 자연스러움", "경과 관찰"],
              ["Ⅱ도", "약간 딱딱함. 시각적으로는 정상", "경과 관찰 또는 보존적 치료"],
              ["Ⅲ도", "딱딱하고 시각적으로 변형 있음", "수술 권장"],
              ["Ⅳ도", "딱딱하고 통증 동반. 시각적으로 현저한 변형", "수술 필요"],
            ]}
          />
        </Section>

        <Section title="재수술 과정">
          <p>
            상담 시 <Strong>초음파 검사</Strong>로 현재 보형물 상태와 피막 두께를 확인합니다.
            이전 수술 기록이 없어도 초음파로 대부분의 상태를 파악할 수 있습니다.
          </p>
          <div className="space-y-3 mt-4">
            <InfoBlock title="피막 절제술 (Capsulectomy)">
              구형구축의 원인인 섬유막을 제거하는 술식. 피막 전체를 제거하는 '전피막 절제'와
              부분 제거가 있으며, 구축 정도와 피막 두께에 따라 선택합니다.
            </InfoBlock>
            <InfoBlock title="보형물 교체">
              피막 절제 후 새 보형물로 교체합니다. 형태·크기·표면을 이전과 다르게 선택하는 것도 가능합니다.
            </InfoBlock>
            <InfoBlock title="삽입 층 변경">
              리플링 등의 이유로 기존 삽입 위치(예: 근막하)를 변경(예: 근육하)하는 경우도 있습니다.
            </InfoBlock>
          </div>
          <Note>
            재수술은 초수술보다 난이도가 높습니다. 정확한 원인 파악과 수술 계획이 중요하며,
            에스엠성형외과는 재수술 경험이 풍부한 이무영 원장이 직접 집도합니다.
          </Note>
        </Section>

      </div>

      <aside className="lg:sticky lg:top-[80px] space-y-4">
        <SideCard title="이런 경우 재수술 상담을">
          <ul className="text-[0.88rem] text-text-sub space-y-2">
            {[
              "가슴이 점점 딱딱해지는 느낌",
              "보형물이 움직이거나 비대칭",
              "형태가 수술 직후와 달라짐",
              "피부 위로 주름이 비침",
              "이물감·통증이 지속됨",
            ].map(t => (
              <li key={t} className="flex gap-2 items-start">
                <span className="text-accent-gold mt-0.5 shrink-0">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SideCard>
        <SideCard title="기존 병원 정보 없어도 가능">
          <p className="text-[0.88rem] text-text-sub leading-relaxed">
            초음파로 현재 보형물 상태를 파악합니다.
            이전 수술 기록이나 보형물 정보가 없어도 상담 진행 가능합니다.
          </p>
        </SideCard>
      </aside>
    </article>
  );
}

/* ─────────────────────────────────────────
   공통 UI 컴포넌트
───────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 lg:mb-12">
      <h3 className="text-[1.05rem] lg:text-[1.2rem] font-semibold text-text-main mb-4 pb-3 border-b border-border-default keep-all">
        {title}
      </h3>
      <div className="space-y-3 text-[0.92rem] lg:text-[0.98rem] text-text-sub leading-[1.85]">
        {children}
      </div>
    </div>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-text-main">{children}</strong>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 p-4 border-l-2 border-accent-gold bg-bg-sub-alt text-[0.88rem] text-text-sub leading-relaxed">
      {children}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 lg:p-5 border border-border-default">
      <div className="text-[0.85rem] font-semibold text-text-main mb-1.5 keep-all">{title}</div>
      <div className="text-[0.88rem] text-text-sub leading-relaxed">{children}</div>
    </div>
  );
}

function CompareTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-4 -mx-0">
      <table className="w-full text-[0.83rem] border-collapse">
        <thead>
          <tr className="bg-bg-sub-alt">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-2.5 font-semibold text-text-main border border-border-default">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-sub-alt/40"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 border border-border-default leading-relaxed text-text-sub ${j === 0 ? "font-medium text-text-main whitespace-nowrap" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 border border-border-default bg-white">
      <div className="text-[0.72rem] uppercase tracking-[0.15em] text-accent-gold font-semibold mb-3">{title}</div>
      {children}
    </div>
  );
}
