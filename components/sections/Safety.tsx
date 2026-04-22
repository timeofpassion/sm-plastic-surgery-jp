"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SAFETY = [
  {
    title: "마취과 전문의 상주",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 상주하고 있습니다.",
    image: "/전문의상주.png",
  },
  {
    title: "실시간 모니터링",
    desc: "병원에 상주하는 마취과 전문의가 수술 중 최첨단 의료장비를 이용해 실시간으로 모니터링을 하기 때문에 혹시라도 발생할 수 있는 모든 응급상황에 대처할 수 있습니다.",
    image: "/실시간모니터링.png",
  },
  {
    title: "응급처치시스템",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 상주하고 있습니다.",
    image: "/응급처치시스템.png",
  },
  {
    title: "안심 리커버리 시스템",
    desc: "수술의 완성도뿐만 아니라, 환자분의 '빠른 일상 복귀'를 가장 중요하게 생각합니다. 특히 해외에서 오신 일본 환자분들이 불안함 없이 안심하고 귀국길에 오르실 수 있도록, 개인별 회복 속도와 몸 상태에 맞춘 맞춤형 사후 관리를 제공합니다.",
    image: "/검사시스템.png",
  },
];

export default function Safety() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi, update]);

  return (
    <section
      id="safety"
      className="py-12 lg:py-[70px] bg-bg-base overflow-hidden"
    >
      <div className="w-full max-w-content mx-auto px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          안전마취센터
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-4 keep-all">
              수술보다 에스엠성형외과가 최우선으로 생각하는 것은{" "}
              <span className="inline-block bg-brand text-white px-3 py-1">
                환자의 안전
              </span>
              입니다.
            </h2>
            <p className="text-[1rem] text-text-sub max-w-[680px] leading-[1.8] keep-all">
              수술 결과가 좋아도 마취에서 문제가 생기면 의미가 없습니다.{" "}
              <strong className="text-text-main font-semibold">
                마취과 전문의 상주, 실시간 모니터링, 응급처치시스템, 안심 리커버리 시스템
              </strong>
              의 4가지 시스템이 완벽히 구비되어 있습니다.
            </p>
          </div>

          {/* 화살표 버튼 */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="이전"
              className="w-10 h-10 flex items-center justify-center border border-border-default bg-white transition-colors hover:bg-bg-sub disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5 text-text-main" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="다음"
              className="w-10 h-10 flex items-center justify-center border border-border-default bg-white transition-colors hover:bg-bg-sub disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5 text-text-main" />
            </button>
          </div>
        </div>
      </div>

      {/* 캐러셀 */}
      <div ref={emblaRef} className="overflow-hidden pl-6 lg:pl-[max(1.5rem,calc(50vw-550px+1.5rem))]">
        <div className="flex gap-5">
          {SAFETY.map((item) => (
            <div
              key={item.title}
              className="group shrink-0 w-[72vw] sm:w-[44vw] md:w-[36vw] lg:w-[300px] flex flex-col"
            >
              <div className="w-full aspect-[3/2] overflow-hidden rounded-none bg-bg-sub-alt mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif-display text-[1.2rem] font-semibold text-text-main mb-3 keep-all leading-tight">
                {item.title}
              </h3>
              <p className="text-[0.88rem] text-text-sub leading-[1.8] keep-all">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-content mx-auto px-6 mt-14">
        <div className="border-t border-border-default pt-8">
          <p className="font-serif-display text-[1.1rem] text-text-main leading-[1.8] max-w-[800px]">
            마취 사고는 예방 가능합니다.{" "}
            <strong className="text-brand font-medium">
              그 예방에 병원의 자원이 얼마나 들어가는지가 병원을 고르는 기준이
              되어야 합니다.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
