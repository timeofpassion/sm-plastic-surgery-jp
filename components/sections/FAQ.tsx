"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const FAQS: FAQItem[] = [
  {
    q: "일본어로 상담이 되나요?",
    a: (
      <>
        네. 일본 담당{" "}
        <span className="text-brand font-medium">서채우 팀장</span>이
        LINE·메일·전화로 일본어 상담을 진행합니다. 상담부터 귀국 후 경과 체크까지
        동일한 담당자가 응대합니다.
      </>
    ),
  },
  {
    q: "귀국한 뒤 문제가 생기면 어떻게 하나요?",
    a: (
      <>
        수술 후 1주·1개월·3개월·6개월·1년 시점에 LINE으로 경과를 확인합니다. 사진을
        보내주시면 원장이 직접 확인하고, 필요 시{" "}
        <span className="text-brand font-medium">일본 제휴 의료기관</span>에서 응급
        대응이 가능하도록 연결합니다.
      </>
    ),
  },
  {
    q: "한국에 며칠 있어야 하나요?",
    a: (
      <ul className="mt-3 space-y-1">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          가슴성형 단독: 3박 4일 (수술 후 1회 체크 포함)
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          재수술·복수 시술: 5박 6일 권장
        </li>
      </ul>
    ),
  },
  {
    q: "보형물은 어떤 브랜드를 쓰나요?",
    a: (
      <>
        멘토(Mentor, Johnson &amp; Johnson) 등을 주로 사용합니다. 흉곽 조건·피부
        두께·원하는 촉감에 따라 상담 시 결정하며, 선택지를 직접 보여드립니다.
      </>
    ),
  },
  {
    q: "비용은 얼마인가요?",
    a: (
      <>
        <ul className="mt-3 space-y-1 mb-3">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            하이브리드 가슴성형: ○○만엔부터
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            가슴 확대: ○○만엔부터
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            가슴 재수술: ○○만엔부터 (피막 절제 범위에 따라 변동)
          </li>
        </ul>
        보형물 종류와 지방이식 범위에 따라 달라집니다. 상담 후 정식 견적서를
        드립니다.
      </>
    ),
  },
  {
    q: "다운타임은 얼마나 되나요?",
    a: (
      <ul className="mt-3 space-y-1">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          붓기: 2주차에 약 50%, 4주차에 약 80% 감소
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          압박 속옷: 4주간 착용 권장
        </li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
          운동: 가벼운 일상 2주차부터, 상체 운동 6주차부터
        </li>
      </ul>
    ),
  },
  {
    q: "대리 수술이나 집도의 교체는 없나요?",
    a: (
      <>
        <span className="text-brand font-medium">이무영 원장 1인 집도</span>{" "}
        원칙입니다. 수술 기록지에 집도의 서명을 남기고, 보호자 동반 시 수술실
        입·퇴실 시각을 직접 확인하실 수 있습니다.
      </>
    ),
  },
  {
    q: "한국인처럼 과한 결과가 나오지 않을지 걱정입니다.",
    a: (
      <>
        상담 시 원하는 형태의 기준 사진을 가져오시면, 해당 이미지가 본인의
        흉곽·피부에 실제로 구현 가능한지부터 함께 확인합니다. 원하지 않는 방향은
        진행하지 않습니다.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          Information & Support
        </span>
        <h2 className="font-serif-display text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.25] mb-16 lg:mb-20">
          FAQ
        </h2>

        <div className="flex flex-col border-t border-text-main">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-border-default transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-8 bg-transparent border-none flex items-center justify-between cursor-pointer text-left outline-none gap-4"
                >
                  <div className="flex gap-4 lg:gap-6 items-start">
                    <span className="font-serif-display text-[1.1rem] text-accent-gold font-medium min-w-[40px]">
                      Q{i + 1}
                    </span>
                    <span className="text-[1.05rem] lg:text-[1.25rem] font-medium text-text-main tracking-tight">
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
                  className={`overflow-hidden transition-all duration-400 bg-bg-sub-alt ${
                    isOpen ? "max-h-[600px] pb-10" : "max-h-0"
                  }`}
                >
                  <div className="pl-0 lg:pl-16 pt-4 pr-4 text-text-sub text-[1rem] lg:text-[1.05rem] leading-[1.8] keep-all">
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
