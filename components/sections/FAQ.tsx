"use client";

import { useState } from "react";

type FAQItem = { q: string; a: React.ReactNode };

const MEDICAL: FAQItem[] = [
  {
    q: "모티바 vs 멘토 보형물, 차이가 뭔가요? 제 체형에 맞는 건 어떻게 결정하나요?",
    a: (
      <>
        <p>
          강남 가슴성형 시장에서 가장 많이 비교되는 두 브랜드입니다.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>멘토(Mentor, J&amp;J)</strong> — 미국 FDA 승인, 가장 긴 임상 데이터 보유. 라운드·물방울 모두 제공. 코히시브겔의 안정성이 검증된 스탠다드 보형물.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>모티바(Motiva)</strong> — 마이크로텍스처드 표면으로 조직 유착과 스무스의 촉감을 절충. 충진률이 높아 리플링이 적고 자연스러운 움직임이 특징.
          </li>
        </ul>
        <p className="mt-3">
          어느 쪽이 낫다고 단정할 수 없습니다. 흉곽 너비, 피부 두께, 원하는 촉감에 따라 결정이 달라집니다.
          에스엠성형외과에서는 상담 시 <strong>초음파 진단</strong>과 실제 보형물 샘플 촉감 비교를 통해 함께 결정합니다.
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
            <strong>켈러펀넬(Keller Funnel)</strong> 사용 — 보형물을 손으로 직접 만지지 않고 삽입해 세균 오염 최소화
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">무균 수술 시스템 — 포켓 내부 세척, 항생제 관주</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">이중평면법으로 출혈·혈종 최소화</li>
        </ul>
        <p className="mt-3 text-[0.88rem] border-l-2 border-accent-gold pl-3">
          최근 코히시브겔 보형물은 마사지가 불필요하거나 역효과가 날 수 있습니다. 수술 후 마사지 여부는 원장님과 상담 후 결정합니다.
        </p>
      </>
    ),
  },
  {
    q: "겨드랑이 절개 vs 가슴 밑선(유방하주름) 절개, 흉터 차이가 있나요?",
    a: (
      <>
        <p>한국 강남 가슴성형에서 가장 많이 선택되는 두 절개 방식입니다.</p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>유방하주름 절개(IMF)</strong> — 가슴 아래 주름선에 절개. 수술 시야가 넓어 정밀한 박리 가능, 재수술 시 동일 절개선 활용. 흉터는 주름 안으로 숨겨짐.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>겨드랑이 절개(Transaxillary)</strong> — 가슴에 흉터가 생기지 않는 장점. 다만 시야가 상대적으로 좁고, 재수술 시 다른 절개선이 필요할 수 있음.
          </li>
        </ul>
        <p className="mt-3">
          수영복·비키니 착용 여부, 재수술 가능성 등 라이프스타일을 고려해 결정합니다.
          상담 시 각 방식의 실제 흉터 사진을 보여드립니다.
        </p>
      </>
    ),
  },
  {
    q: "배액관(피통)을 꼭 착용해야 하나요? 압박복은 얼마나 입어야 하나요?",
    a: (
      <>
        <p>
          배액관(드레인)은 수술 후 삼출액을 빼내기 위한 튜브입니다.
          에스엠성형외과에서는 정밀한 지혈과 박리로 출혈을 최소화해
          <strong> 피통 없이 수술을 진행하는 경우가 많습니다.</strong>
          재수술이나 광범위한 피막 절제 시에는 삽입이 필요할 수 있으며, 상담 시 안내합니다.
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
          보형물 상부는 대흉근 아래(근육하), 하부는 근막 위에 위치시켜 두 층을 동시에 활용합니다.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>근육 위(전근막하)</strong> — 회복 빠름. 피부·지방층이 얇으면 보형물 윤곽이 비칠 수 있음(리플링).
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>근육 아래(완전 근육하)</strong> — 자연스럽지만 팔 움직임 시 '애니메이션 변형' 발생 가능. 회복 기간이 길어짐.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>이중평면(Dual Plane) ★</strong> — 자연스러운 라인과 빠른 회복, 리플링 최소화를 동시에 추구. 에스엠에서 가장 많이 적용하는 방식.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "보형물 사이즈(cc)는 어떻게 결정하나요? 본인이 원하는 크기로 선택 가능한가요?",
    a: (
      <>
        <p>
          보형물 사이즈는 희망 크기만으로 결정하지 않습니다.
          <strong>흉곽 너비(Base Width)</strong>가 가장 중요한 기준이며, 이를 초과하는 보형물은 리플링·구형구축·변위 위험을 높입니다.
        </p>
        <ul className="mt-3 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">흉곽 너비 측정 → 적합한 보형물 직경 범위 산출</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">피부 두께·탄력 확인</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">원하시는 결과 사진 지참 시 구체적 목표 공유 가능</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">실제 보형물 샘플로 사이저(sizer) 시뮬레이션</li>
        </ul>
      </>
    ),
  },
  {
    q: "가슴 성형 후 모유수유가 가능한가요? 임신·출산에 영향이 있나요?",
    a: (
      <>
        <p>
          유방하주름·겨드랑이 절개 + 이중평면법 조합의 경우 유선 조직을 직접 건드리지 않아
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
          현재 코히시브겔 보형물은 <strong>"정해진 수명이 있는 소모품"이 아닙니다.</strong>
          멘토 등 주요 브랜드는 파열 시 평생 무상 교체를 보증합니다.
        </p>
        <p className="mt-3">교체를 고려하는 경우:</p>
        <ul className="mt-2 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">구형구축이 Baker Ⅲ~Ⅳ도로 진행된 경우</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">보형물 파열(초음파·MRI로 확인)</li>
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
        네. 일본 담당 <strong>서채우 팀장</strong>이 LINE·메일·전화로 일본어 상담을 진행합니다.
        수술 당일 입실부터 퇴원까지, 귀국 후 경과 체크까지 동일한 담당자가 응대합니다.
        상담·수술·회복 전 과정에서 일본어 소통이 가능합니다.
      </>
    ),
  },
  {
    q: "수술 당일 퇴원이 가능한가요? 회복실 체류는 얼마나 되나요?",
    a: (
      <>
        <p>
          가슴 확대 단독 수술의 경우 <strong>당일 퇴원이 가능</strong>합니다.
          수술 후 회복실에서 2~3시간 안정을 취한 뒤 담당 코디네이터가 귀가를 도와드립니다.
        </p>
        <p className="mt-3">
          컨디션이 좋지 않거나 재수술·복수 시술의 경우 1박 입원을 권장하기도 합니다.
          일본에서 오시는 분들은 수술 다음 날 오전 체크(붓기·실밥 상태 확인) 후 귀국하시는 일정을 권장합니다.
        </p>
      </>
    ),
  },
  {
    q: "한국에 며칠 있어야 하나요? 최소 체류 일정을 알려주세요.",
    a: (
      <ul className="mt-3 space-y-2">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>가슴 확대 단독:</strong> 3박 4일 (수술 후 익일 체크 포함)
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>하이브리드(보형물+지방이식):</strong> 4~5박 권장
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>재수술·피막 절제 포함:</strong> 5박 6일 권장
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>눈+가슴 복수 시술:</strong> 5박 이상 권장
        </li>
      </ul>
    ),
  },
  {
    q: "샤워, 출근, 운동은 각각 언제부터 가능한가요?",
    a: (
      <ul className="mt-3 space-y-2">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>샤워(전신):</strong> 실밥 제거 후(수술 후 약 7일)
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>가벼운 일상·출근:</strong> 2주차부터 (무거운 짐, 팔을 많이 쓰는 업무 제외)
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>하체 위주 운동:</strong> 4주차부터
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          <strong>상체 운동·수영·사우나:</strong> 6주차 이후
        </li>
      </ul>
    ),
  },
  {
    q: "사후관리 프로그램은 어떻게 되나요? 귀국 후에도 케어가 되나요?",
    a: (
      <>
        <p>
          귀국 후에도 LINE으로 경과를 지속적으로 확인합니다.
          수술 후 <strong>1주·1개월·3개월·6개월·1년</strong> 시점에 사진을 보내주시면
          원장님이 직접 확인하고 소견을 알려드립니다.
        </p>
        <p className="mt-3">
          응급 상황 발생 시 일본 제휴 의료기관을 통해 긴급 대응이 가능하도록 연결해 드립니다.
          실밥은 일본 의원급에서도 제거 가능하며, 제거 방법을 사전에 안내해 드립니다.
        </p>
      </>
    ),
  },
  {
    q: "귀국한 뒤 문제가 생기면 어떻게 하나요?",
    a: (
      <>
        수술 후 1주·1개월·3개월·6개월·1년 시점에 LINE으로 경과를 확인합니다.
        사진을 보내주시면 원장이 직접 확인하고,
        필요 시 <strong>일본 제휴 의료기관</strong>에서 응급 대응이 가능하도록 연결합니다.
      </>
    ),
  },
  {
    q: "비용은 얼마인가요? 수술별 대략적인 금액이 궁금합니다.",
    a: (
      <>
        <ul className="mt-3 space-y-1 mb-3">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">하이브리드 가슴성형: ○○만엔부터</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">가슴 확대(보형물 단독): ○○만엔부터</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">가슴 재수술: ○○만엔부터 (피막 절제 범위에 따라 변동)</li>
        </ul>
        보형물 종류와 수술 범위에 따라 달라집니다.
        상담 후 정식 견적서를 드리며, 숨겨진 추가 비용은 없습니다.
      </>
    ),
  },
  {
    q: "보형물은 어떤 브랜드를 쓰나요? 직접 선택할 수 있나요?",
    a: (
      <>
        <p>
          주로 <strong>멘토(Mentor, Johnson &amp; Johnson)</strong>와
          <strong> 모티바(Motiva)</strong>를 사용합니다.
          흉곽 조건·피부 두께·원하는 촉감에 따라 상담 시 함께 결정하며,
          실제 보형물 샘플을 직접 만져보실 수 있습니다.
        </p>
        <p className="mt-3">
          특정 브랜드를 원하시는 경우 상담 시 말씀해 주시면 흉곽 조건에 적합한지 함께 검토합니다.
        </p>
      </>
    ),
  },
  {
    q: "대리 수술이나 집도의 교체는 없나요?",
    a: (
      <>
        <strong>이무영 원장 1인 집도</strong> 원칙입니다.
        수술 기록지에 집도의 서명을 남기고,
        보호자 동반 시 수술실 입·퇴실 시각을 직접 확인하실 수 있습니다.
        에스엠성형외과는 개원 이래 단 한 건도 대리 수술 없이 운영해 왔습니다.
      </>
    ),
  },
  {
    q: "한국인처럼 과한 결과가 나오지 않을지 걱정입니다.",
    a: (
      <>
        상담 시 원하는 형태의 기준 사진을 가져오시면,
        해당 이미지가 본인의 흉곽·피부에 실제로 구현 가능한지부터 함께 확인합니다.
        일본인 환자분들의 경우 자연스럽고 과하지 않은 결과를 선호하는 경향이 많아,
        이를 기준으로 사이즈와 형태를 함께 설계합니다.
        원하지 않는 방향은 진행하지 않는 것이 에스엠의 원칙입니다.
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
    <section id="faq" className="py-12 lg:py-[70px] flex justify-center bg-[#EEF4FC]">
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
                  className="w-full py-8 bg-transparent border-none flex items-center justify-between cursor-pointer text-left outline-none gap-4"
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
                    isOpen ? "max-h-[800px] pb-10" : "max-h-0"
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
