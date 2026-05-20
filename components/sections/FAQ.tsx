"use client";

import { useState } from "react";

type FAQItem = { q: string; a: React.ReactNode };

const MEDICAL: FAQItem[] = [
  {
    q: "모티바 vs 멘토 보형물, 차이가 뭔가요? 제 체형에 맞는 건 어떻게 결정하나요?",
    a: (
      <>
        <p>강남 가슴성형 시장에서 가장 많이 비교되는 두 브랜드입니다.</p>

        <p className="mt-4 font-medium text-text-main">1. 임상 데이터와 신뢰성</p>
        <ul className="mt-2 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>멘토</strong> — 미국 FDA 승인을 받은 전통적인 브랜드입니다. 수십 년간의 방대한 임상 데이터를 보유하고 있어 장기적인 안정성이 입증된 '스탠다드' 보형물로 통합니다.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>모티바</strong> — 비교적 최근에 등장한 프리미엄 보형물로, 최신 인체공학적 기술을 집약했습니다. 기존 보형물들의 단점을 보완하며 빠르게 시장 점유율을 높여온 차세대 보형물입니다.
          </li>
        </ul>

        <p className="mt-4 font-medium text-text-main">2. 촉감의 스타일</p>
        <ul className="mt-2 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>멘토</strong> — 탄력 있고 '탱글탱글한' 느낌이 특징입니다. 가슴의 볼륨감을 탄탄하게 유지하고 싶어 하는 분들에게 선호도가 높습니다.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>모티바</strong> — 실제 살성과 가장 흡사한 '말랑하고 부드러운' 느낌을 지향합니다. 보형물이 들어간 느낌을 최소화하고 싶은 마른 체형의 분들에게 유리합니다.
          </li>
        </ul>

        <p className="mt-4 font-medium text-text-main">3. 모양과 움직임</p>
        <ul className="mt-2 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>멘토</strong> — 보형물 자체의 형태 유지력이 좋아 어느 자세에서든 일정한 볼륨감을 보여줍니다.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>모티바</strong> — 중력에 반응하는 유동성이 뛰어납니다. 서 있을 때는 자연스러운 물방울 모양이 되고, 누웠을 때는 실제 가슴처럼 옆으로 자연스럽게 퍼지는 것이 가장 큰 차이점입니다.
          </li>
        </ul>

        <p className="mt-4 font-medium text-text-main">4. 외피(Shell) 및 안전 기술</p>
        <ul className="mt-2 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>멘토 (블루실)</strong> — 보형물 외피 사이에 푸른색 층(Blue Seal)을 삽입하여, 내부 겔이 밖으로 새어 나가는 현상을 시각적으로 완벽히 차단하고 방지합니다.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>모티바 (RFID 칩)</strong> — 보형물 내부에 인체 이식이 가능한 아주 작은 식별 칩이 들어 있습니다. 전용 스캐너를 통해 보증서 없이도 언제든 보형물의 정보를 확인할 수 있어 사후 관리가 용이합니다.
          </li>
        </ul>

        <p className="mt-4">
          어느 쪽이 낫다고 단정할 수 없습니다. 흉곽 너비, 피부 두께, 원하는 촉감에 따라 결정이 달라집니다.
          에스엠성형외과에서는 상담 시 <strong>실제 보형물 샘플 촉감 비교</strong>를 통해 함께 결정합니다.
        </p>
      </>
    ),
  },
  {
    q: "구형구축(피막구축) 부작용 확률은 얼마나 되나요? 예방할 수 있나요?",
    a: (
      <>
        <p>
          구형구축은 보형물 주변 섬유막이 과도하게 수축해 가슴이 딱딱해지는 현상입니다.
          가슴수술 부작용 중 가장 흔히 언급되며, 발생률은 수술 환경에 따라 다르나
          일반적으로 <strong>5~10% 내외</strong>로 보고됩니다.
        </p>
        <p className="mt-3">에스엠성형외과의 예방 시스템:</p>
        <ul className="mt-2 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>켈러펀넬(Keller Funnel) 사용</strong> — 보형물을 손으로 직접 만지지 않고 삽입해 세균 오염 최소화
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>이중평면법 수술</strong> — 출혈·혈종 최소화
          </li>
        </ul>
        <p className="mt-3 text-[0.88rem] border-l-2 border-accent-gold pl-3">
          에스엠은 수술 이후 가슴마사지를 권장하지 않습니다.
        </p>
      </>
    ),
  },
  {
    q: "겨드랑이 절개 vs 가슴 밑선(유방하주름) 절개, 흉터 차이가 있나요?",
    a: (
      <>
        <p>에스엠에서 가슴성형 시 가장 많이 선택되는 두 절개 방식입니다.</p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>가슴밑선 절개</strong> — 가슴 아래 주름선에 절개. 수술 시야가 넓어 정밀한 박리 가능, 재수술 시 동일 절개선 활용. 흉터는 주름 안으로 숨겨짐. 의료용 본드 사용이 가능하여 수술 후 다음날부터 일상생활 가능합니다.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>겨드랑이 절개</strong> — 가슴에 흉터가 생기지 않는 장점. 다만 시야가 상대적으로 좁고, 재수술 시 다른 절개선이 필요할 수 있음. 하루정도 배액관 착용이 필요합니다.
          </li>
        </ul>
        <p className="mt-3">
          절개 결정은 수영복·비키니 착용 여부, 재수술 가능성 등 라이프스타일을 고려해 최종 결정합니다.
        </p>
      </>
    ),
  },
  {
    q: "배액관(피통)을 꼭 착용해야 하나요? 압박복은 얼마나 입어야 하나요?",
    a: (
      <>
        <p>
          배액관(드레인)은 <strong>겨드랑이 절개 수술</strong> 후 삼출액을 빼내기 위한 튜브입니다.
          하루정도의 착용이 필요하며, 실밥 제거가 필요합니다.
          다만 <strong>가슴밑선으로 절개</strong> 시 배액관은 필요없습니다.
        </p>
        <p className="mt-3">
          압박복(압박 속옷)은 붓기 관리와 보형물 안정을 위해 <strong>4주간</strong> 착용을 권장합니다.
        </p>
      </>
    ),
  },
  {
    q: "이중평면법(Dual Plane)이란 무엇인가요? 근육 위·아래와 어떻게 다른가요?",
    a: (
      <>
        <p>
          이중평면법은 현재 강남 가슴성형에서 가장 많이 사용되는 삽입 방식입니다.
          보형물 상부는 대흉근 근육 아래, 하부는 근막 위에 위치시켜 두 층을 동시에 활용합니다.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>근육 위(전근막하)</strong> — 회복 빠름. 피부·지방층이 얇으면 보형물 윤곽이 비칠 수 있음(리플링).
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>이중평면(Dual Plane) ★</strong> — 자연스러운 라인과 빠른 회복, 리플링 최소화를 동시에 추구. 에스엠에서 진행하는 수술 방식.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "가슴 성형 후 모유수유가 가능한가요? 임신·출산에 영향이 있나요?",
    a: (
      <>
        <p>
          유방하 절개 or 겨드랑이 절개 + 이중평면법 조합의 경우 유선 조직을 직접 건드리지 않아
          <strong> 모유수유 가능성이 높습니다.</strong>
          유륜주위 절개는 유관 손상 가능성이 있어 수유에 영향을 줄 수 있습니다.
        </p>
        <p className="mt-3">
          임신·출산 계획이 있으신 경우 상담 시 반드시 말씀해 주세요.
          이에 따라 절개 방식과 삽입 위치를 함께 설계합니다.
        </p>
        <p className="mt-3 text-[0.88rem] border-l-2 border-accent-gold pl-3">
          임신 후 가슴 조직 변화로 형태가 달라질 수 있습니다. 출산·수유 후 재정비 수술을 선택하시는 분도 있습니다.
        </p>
      </>
    ),
  },
  {
    q: "보형물 수명은 얼마나 되나요? 주기적으로 교체해야 하나요?",
    a: (
      <>
        <p>
          보형물은 <strong>"정해진 수명이 있는 소모품"이 아닙니다.</strong>
        </p>
        <p className="mt-3">교체를 고려하는 경우 (재수술):</p>
        <ul className="mt-2 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">구형구축이 진행된 경우</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">보형물 파열의 경우</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">노화·출산 후 모양 재정비를 원하는 경우</li>
        </ul>
        <p className="mt-3">
          문제가 없으면 주기적 교체는 불필요합니다. 다만 <strong>3~5년 주기 초음파 검진</strong>으로 상태 확인을 권장합니다.
        </p>
      </>
    ),
  },
];

const PRACTICAL: FAQItem[] = [
  {
    q: "일본어로 상담이 되나요? 통역 코디네이터가 항상 같이 있나요?",
    a: (
      <>
        네. <strong>일본 담당자 LINE</strong>을 통해 일본어 상담을 진행합니다.
        수술 당일 입실부터 퇴원 체크까지 동일한 담당자가 응대합니다.
        상담·수술·회복 전 과정에서 일본어 소통이 가능합니다.
      </>
    ),
  },
  {
    q: "수술 당일 퇴원이 가능한가요? 회복실 체류는 얼마나 되나요?",
    a: (
      <>
        <p>
          <strong>당일 퇴원이 가능</strong>합니다. 수술 후 회복실에서 안정을 취한 뒤 귀가하시면 됩니다.
        </p>
        <p className="mt-3">
          일본에서 오시는 분들은 수술 다음 날 오전 체크(붓기·실밥 상태 확인) 후 귀국하시는 일정을 권장합니다.
        </p>
      </>
    ),
  },
  {
    q: "한국에 며칠 있어야 하나요? 최소 체류 일정을 알려주세요.",
    a: (
      <>
        <strong>2박 3일</strong> 정도 일정 잡으시는 걸 추천드립니다.
      </>
    ),
  },
  {
    q: "샤워, 출근, 운동은 각각 언제부터 가능한가요?",
    a: (
      <ul className="mt-3 space-y-2">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>샤워(전신):</strong> 실밥 제거 후
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>가벼운 일상·출근:</strong> 2주차부터 (무거운 짐, 팔을 많이 쓰는 업무 제외)
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>운동·사우나:</strong> 6주차 이후 권장
        </li>
      </ul>
    ),
  },
  {
    q: "비용은 얼마인가요? 수술별 대략적인 금액이 궁금합니다.",
    a: (
      <>
        보형물 종류와 수술 범위에 따라 달라집니다.
        상담 후 정식 견적서를 드리고 있어 <strong>LINE으로 문의</strong> 주시면 안내드리겠습니다.
      </>
    ),
  },
  {
    q: "보형물은 어떤 브랜드를 쓰나요? 직접 선택할 수 있나요?",
    a: (
      <>
        주로 <strong>멘토</strong>와 <strong>모티바</strong>를 사용합니다.
        흉곽 조건·피부 두께·원하는 촉감에 따라 상담 시 함께 결정하며,
        실제 보형물 샘플을 상담 시 직접 만져보실 수 있습니다.
      </>
    ),
  },
  {
    q: "대리 수술이나 집도의 교체는 없나요?",
    a: (
      <>
        <strong>이무영 원장 1인 집도</strong> 원칙입니다.
        수술 기록지에 집도의 서명을 남기고, <strong>정품 인증</strong>도 함께 드립니다.
        에스엠성형외과는 개원 이래 대리 수술 없이 운영해 왔습니다.
      </>
    ),
  },
  {
    q: "실밥은 일본에서 제거해도 되나요?",
    a: (
      <>
        네. 귀국 후 일본에서 제거하실 수 있도록 <strong>수술 확인서와 진료의뢰서</strong>를 드리니
        지참하셔서 일본 병원에서 실밥을 제거하시면 됩니다.
      </>
    ),
  },
];

type TabId = "medical" | "practical";

export default function FAQ() {
  const [tab, setTab] = useState<TabId>("medical");
  const [open, setOpen] = useState<number | null>(0);

  const items = tab === "medical" ? MEDICAL : PRACTICAL;

  function switchTab(next: TabId) {
    setTab(next);
    setOpen(0);
  }

  return (
    <section id="faq" className="py-10 lg:py-16 flex justify-center bg-[#F8FAFD]">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          Information & Support
        </span>
        <h2 className="font-serif-display text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.25] mb-4">
          FAQ
        </h2>
        <p className="text-[0.92rem] text-text-sub mb-10 max-w-xl leading-relaxed">
          강남언니·성형 커뮤니티에서 가장 많이 올라오는 질문들을 모았습니다.
          수술 전 꼭 확인해 두세요.
        </p>

        {/* Category tabs */}
        <div className="flex border-b border-text-main mb-0 overflow-x-auto hide-scrollbar">
          {([
            { id: "medical" as TabId, label: "수술·의학 Q&A", count: MEDICAL.length },
            { id: "practical" as TabId, label: "실용·일정 Q&A", count: PRACTICAL.length },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => switchTab(t.id)}
              className={`shrink-0 flex items-center gap-2 px-5 py-3.5 text-[0.88rem] font-medium border-b-2 transition-colors ${
                tab === t.id
                  ? "border-text-main text-text-main"
                  : "border-transparent text-text-sub hover:text-text-main"
              }`}
            >
              {t.label}
              <span className={`text-[0.72rem] px-1.5 py-0.5 rounded-full ${
                tab === t.id ? "bg-brand text-white" : "bg-bg-sub-alt text-text-sub"
              }`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4 border-t-0">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-xl bg-white shadow-sm overflow-hidden transition-all">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-5 bg-transparent border-none flex items-center justify-between cursor-pointer text-left outline-none gap-4"
                >
                  <div className="flex gap-4 lg:gap-6 items-start">
                    <span className="font-serif-display text-[1.1rem] text-accent-gold font-medium min-w-[40px]">
                      Q{i + 1}
                    </span>
                    <span className="text-[1rem] lg:text-[1.2rem] font-medium text-text-main tracking-tight keep-all">
                      {item.q}
                    </span>
                  </div>
                  <div className="relative w-5 h-5 shrink-0">
                    <span className="absolute top-1/2 left-0 w-full h-px bg-text-sub" />
                    <span
                      className={`absolute top-0 left-1/2 w-px h-full bg-text-sub transition-all ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 bg-bg-sub ${
                    isOpen ? "max-h-[1600px] pb-10" : "max-h-0"
                  }`}
                >
                  <div className="pl-0 lg:pl-16 pt-4 pr-4 text-text-sub text-[0.95rem] lg:text-[1rem] leading-[1.85] keep-all">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
