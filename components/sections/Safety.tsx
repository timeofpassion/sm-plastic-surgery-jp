"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    value: "item-1",
    label: "마취과 전문의 상주",
    desc: "언제든 어떠한 상황에서도 빠르게 대처하기 위하여 마취과 전문의가 상주하고 있습니다. 수술 시작부터 회복실 퇴실까지 마취과 전문의가 직접 관리합니다.",
    image: "/전문의상주.png",
    tag: "ANESTHESIOLOGIST ON SITE",
  },
  {
    value: "item-2",
    label: "실시간 모니터링",
    desc: "병원에 상주하는 마취과 전문의가 수술 중 최첨단 의료장비를 이용해 실시간으로 모니터링을 하기 때문에 혹시라도 발생할 수 있는 모든 응급상황에 대처할 수 있습니다.",
    image: "/실시간모니터링.png",
    tag: "REAL-TIME MONITORING",
  },
  {
    value: "item-3",
    label: "응급처치시스템",
    desc: "AED(자동심장충격기), 응급 약품, 산소 공급 장치를 수술실 내 상시 비치하고 있습니다. 응급상황 발생 즉시 대응할 수 있는 체계가 완비되어 있습니다.",
    image: "/응급처치시스템.png",
    tag: "EMERGENCY SYSTEM",
  },
  {
    value: "item-4",
    label: "안심 리커버리 시스템",
    desc: "수술의 완성도뿐만 아니라, 환자분의 '빠른 일상 복귀'를 가장 중요하게 생각합니다. 특히 해외에서 오신 일본 환자분들이 불안함 없이 안심하고 귀국길에 오르실 수 있도록, 개인별 회복 속도와 몸 상태에 맞춘 맞춤형 사후 관리를 제공합니다.",
    image: "/검사시스템.png",
    tag: "RECOVERY SUPPORT",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-12 lg:py-[70px] bg-bg-base">
      <div className="w-full max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* 좌측: 헤더 + 아코디언 */}
          <div>
            <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
              안전마취센터
            </span>
            <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] font-medium leading-[1.3] mb-5 keep-all">
              수술보다 에스엠성형외과가
              <br />
              최우선으로 생각하는 것은{" "}
              <span className="inline-block bg-brand text-white px-3 py-1">
                환자의 안전
              </span>
              입니다.
            </h2>
            <p className="text-[0.95rem] text-text-sub mb-10 leading-[1.8] keep-all">
              수술 결과가 좋아도 마취에서 문제가 생기면 의미가 없습니다.
              에스엠성형외과는{" "}
              <strong className="text-text-main font-semibold">
                4가지 안전 시스템
              </strong>
              이 완벽히 구비되어 있습니다.
            </p>

            <TabsPrimitive.Root defaultValue="item-1" orientation="vertical">
              <AccordionPrimitive.Root
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full border-t border-border-default"
              >
                {ITEMS.map((item) => (
                  <AccordionPrimitive.Item
                    key={item.value}
                    value={item.value}
                    className="border-b border-border-default"
                  >
                    <TabsPrimitive.List asChild>
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between py-5 text-left transition-colors hover:text-brand [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-brand">
                          <div className="flex items-center gap-4">
                            <TabsPrimitive.Trigger
                              value={item.value}
                              asChild
                            >
                              <span className="text-[0.7rem] tracking-[0.15em] text-text-sub group-data-[state=open]:text-brand font-semibold hidden sm:block">
                                {item.tag}
                              </span>
                            </TabsPrimitive.Trigger>
                            <span className="text-[1rem] lg:text-[1.1rem] font-semibold text-text-main group-data-[state=open]:text-brand keep-all">
                              {item.label}
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 shrink-0 text-text-sub transition-transform duration-200" />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                    </TabsPrimitive.List>

                    <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <p className="text-[0.9rem] text-text-sub leading-[1.8] keep-all pb-5 pr-6">
                        {item.desc}
                      </p>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                ))}
              </AccordionPrimitive.Root>
            </TabsPrimitive.Root>

            <div className="mt-10 border-t border-border-default pt-8">
              <p className="font-serif-display text-[1rem] text-text-main leading-[1.8] max-w-[600px]">
                마취 사고는 예방 가능합니다.{" "}
                <strong className="text-brand font-medium">
                  그 예방에 병원의 자원이 얼마나 들어가는지가 병원을 고르는
                  기준이 되어야 합니다.
                </strong>
              </p>
            </div>
          </div>

          {/* 우측: 탭 이미지 */}
          <div className="lg:sticky lg:top-24">
            <TabsPrimitive.Root defaultValue="item-1">
              <div className="relative w-full overflow-hidden bg-bg-sub-alt aspect-[4/5]">
                {ITEMS.map((item, idx) => (
                  <TabsPrimitive.Content
                    key={item.value}
                    value={item.value}
                    className="absolute inset-0 h-full w-full data-[state=inactive]:hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-full w-full object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                      <span className="text-[0.65rem] tracking-[0.2em] text-white/70 font-semibold block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-serif-display text-[1.4rem] text-white font-medium">
                        {item.label}
                      </h3>
                    </div>
                  </TabsPrimitive.Content>
                ))}
              </div>

              {/* 탭 인디케이터 */}
              <TabsPrimitive.List className="flex gap-1 mt-3">
                {ITEMS.map((item) => (
                  <TabsPrimitive.Trigger
                    key={item.value}
                    value={item.value}
                    className="flex-1 h-1 bg-border-default transition-colors data-[state=active]:bg-brand"
                  />
                ))}
              </TabsPrimitive.List>
            </TabsPrimitive.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
