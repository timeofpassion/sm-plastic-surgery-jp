"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

export default function Gallery4({ title, description, items }: Gallery4Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-content mx-auto px-6 py-20 lg:py-28">
      {/* 헤더 + 화살표 */}
      <div className="flex flex-col gap-6 mb-10 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {title && (
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-4 keep-all">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] max-w-[680px] keep-all">
              {description}
            </p>
          )}
        </div>
        <div className="hidden lg:flex gap-2 shrink-0">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="이전"
            type="button"
            className="w-11 h-11 rounded-full border border-border-default flex items-center justify-center text-text-main transition-colors hover:bg-brand hover:text-white hover:border-brand disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-main disabled:hover:border-border-default"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="다음"
            type="button"
            className="w-11 h-11 rounded-full border border-border-default flex items-center justify-center text-text-main transition-colors hover:bg-brand hover:text-white hover:border-brand disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-text-main disabled:hover:border-border-default"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 캐러셀 */}
      <div className="overflow-hidden -mx-2" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_42%] xl:flex-[0_0_36%] min-w-0 px-2"
            >
              <a
                href={item.href}
                className="group block relative rounded-2xl overflow-hidden min-h-[27rem] bg-bg-sub shadow-md transition-all hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* 어두운 그라디언트 — 텍스트 가독성 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                {/* 콘텐츠 */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-white">
                  <h3 className="text-[1.2rem] lg:text-[1.4rem] font-bold mb-3 keep-all">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.75] text-white/85 mb-4 keep-all line-clamp-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-white">
                    자세히 보기
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일/태블릿 인디케이터 */}
      {snapCount > 1 && (
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`슬라이드 ${i + 1}`}
              type="button"
              className={`h-1.5 rounded-full transition-all ${
                i === selectedIndex ? "w-8 bg-brand" : "w-1.5 bg-border-default"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
