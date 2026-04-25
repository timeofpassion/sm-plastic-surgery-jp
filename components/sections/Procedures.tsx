"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CARDS = [
  {
    num: "01",
    tag: "보형물 형태",
    title: "라운드형 vs\n물방울형",
    sub: "Implant Shape",
    image: "/breast_01.png",
    points: [
      "라운드형: 볼륨감이 균일, 회전해도 형태 변화 없음",
      "물방울형: 서 있을 때 가장 자연스러운 실루엣",
      "물방울형은 회전 시 변형 위험 → 텍스처드 표면 필수",
      "흉곽 구조·피부 조건·원하는 결과에 따라 결정",
    ],
    detail: "멘토(Mentor) 실물 샘플 — 상담 시 직접 확인 가능",
  },
  {
    num: "02",
    tag: "보형물 표면",
    title: "스무스 vs\n텍스처드",
    sub: "Implant Surface",
    image: "/breast_02.png",
    points: [
      "스무스: 매끈한 표면, 라운드형에 주로 사용",
      "텍스처드: 조직 유착으로 위치 고정, 물방울형에 필수",
      "마이크로텍스처드(Motiva 등): 중간 거칠기, 부드러운 촉감",
      "텍스처드-BIA-ALCL 연관 보고 → 상담 시 원장님과 검토",
    ],
    detail: "표면 선택은 보형물 형태·삽입 위치와 연동 결정",
  },
  {
    num: "03",
    tag: "삽입 위치",
    title: "이중평면법\n(Dual Plane)",
    sub: "Pocket Placement",
    image: "/breast_03.png",
    points: [
      "근육 위(전근막하): 회복 빠름, 피부 얇으면 리플링 가능",
      "근육 아래(완전 근육하): 자연스럽지만 통증 크고 애니메이션 변형 가능",
      "이중평면 ★: 상부 근육하 + 하부 근막상 — 가장 많이 선택",
      "흉곽·피부 두께에 따라 이중평면 유형 1~3으로 세분화",
    ],
    detail: "대부분의 케이스에서 이중평면을 기준으로 시작",
  },
  {
    num: "04",
    tag: "절개선 위치",
    title: "유방하주름 vs\n겨드랑이",
    sub: "Incision Site",
    image: "/doctor.png",
    points: [
      "유방하주름: 수술 시야 최대, 흉터가 주름 안으로 은폐",
      "겨드랑이: 가슴에 흉터 없음, 시야 제한 — 재수술 시 별도 절개 필요",
      "유륜주위: 유륜 경계로 흉터 은폐, 유두 감각 변화 가능",
      "에스엠 기본 권장: 유방하주름 (재수술에도 동일 절개선 활용)",
    ],
    detail: "수술 시야가 가장 넓어 정밀한 조작 가능",
  },
  {
    num: "05",
    tag: "하이브리드 성형",
    title: "보형물 +\n자가 지방이식",
    sub: "Hybrid Augmentation",
    image: "/expert.png",
    points: [
      "보형물이 전체 볼륨 토대, 본인 지방으로 데콜테 마감",
      "보형물 단독의 경계선 문제 + 지방이식 단독의 볼륨 한계 동시 해결",
      "지방 생착률 40~60%, 6개월 이상 경과해야 최종 형태 확인",
      "허벅지·복부 등 공여부에도 멍·붓기 발생 예상",
    ],
    detail: "체류 4~5박 권장 | 수술 시간 약 3~4시간",
  },
  {
    num: "06",
    tag: "가슴 재수술",
    title: "구형구축·변형\n교정",
    sub: "Revision Surgery",
    image: "/resurgery.png",
    points: [
      "구형구축(Baker Ⅱ~Ⅳ): 섬유막 제거(피막 절제술) + 보형물 교체",
      "보형물 변위·회전·리플링·좌우 비대칭 교정",
      "초음파로 이전 수술 기록 없이도 현 상태 파악 가능",
      "재수술 경험 풍부한 이무영 원장 직접 집도",
    ],
    detail: "타원 재수술도 가능 | 초음파 확인 후 수술 계획 수립",
  },
];

export default function Procedures() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section id="procedures" className="py-12 lg:py-20">

      {/* Section header */}
      <div className="w-full max-w-content mx-auto px-6 mb-8 lg:mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-gold font-semibold block mb-3">
              Breast Surgery Guide
            </span>
            <h2 className="font-serif-display text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] font-medium leading-[1.2] keep-all">
              수술 전에 먼저<br />알아야 할 것들
            </h2>
            <p className="text-[0.9rem] lg:text-[0.95rem] text-text-sub leading-[1.75] max-w-xl mt-3 keep-all">
              보형물 형태·표면·삽입 위치·절개선, 그리고 하이브리드·재수술까지.
              에스엠성형외과는 상담 시 각 항목을 직접 설명하고 맞춤 조합을 함께 결정합니다.
            </p>
          </div>
          {/* Arrow buttons */}
          <div className="flex gap-2 shrink-0 pb-1">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="이전"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${
                canScrollPrev
                  ? "border-text-main text-text-main hover:bg-text-main hover:text-white"
                  : "border-border-default text-text-sub opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="다음"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${
                canScrollNext
                  ? "border-text-main text-text-main hover:bg-text-main hover:text-white"
                  : "border-border-default text-text-sub opacity-40 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 lg:gap-4 pl-6 xl:pl-[calc((100vw-1100px)/2_+_24px)]">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex-[0_0_85%] md:flex-[0_0_46%] xl:flex-[0_0_31%] relative h-[480px] lg:h-[540px] overflow-hidden group shrink-0"
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.tag}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />

              {/* Card content */}
              <div className="absolute inset-0 p-6 lg:p-7 flex flex-col">

                {/* Top — number + tag */}
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] font-bold text-white/40 tracking-[0.15em]">
                    {card.num}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent-gold font-semibold">
                    {card.tag}
                  </span>
                </div>

                {/* Bottom — main content */}
                <div className="mt-auto">
                  <p className="text-[0.68rem] uppercase tracking-[0.15em] text-white/50 mb-2">
                    {card.sub}
                  </p>
                  <h3 className="font-serif-display text-[1.4rem] lg:text-[1.55rem] font-semibold text-white leading-[1.25] mb-5 keep-all whitespace-pre-line">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[0.78rem] lg:text-[0.82rem] text-white/80 leading-[1.6]">
                        <span className="text-accent-gold shrink-0 mt-[2px] select-none">—</span>
                        <span className="keep-all">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[0.7rem] text-white/45 pt-3 border-t border-white/10 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Right spacer so last card doesn't hug edge */}
          <div className="flex-[0_0_16px] md:flex-[0_0_24px] shrink-0" />
        </div>
      </div>

      {/* Dot pagination */}
      <div className="flex justify-center items-center gap-2 mt-7">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-6 bg-brand"
                : "w-1.5 bg-border-default hover:bg-text-sub"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
