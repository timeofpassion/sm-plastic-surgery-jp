"use client";

import { useState } from "react";

type Standard = {
  tag: string;
  title: string;
  desc: string;
};

const STANDARDS: Standard[] = [
  {
    tag: "NO PHOTOSHOP",
    title: "포토샵·보정 일체 금지",
    desc: "빛 조절, 필터, 피부 보정 전부 없습니다. 원본 그대로입니다.",
  },
  {
    tag: "SAME CONDITION",
    title: "조명·각도·거리·화장 100% 동일",
    desc: "수술 전과 후, 같은 환경에서만 촬영합니다.",
  },
  {
    tag: "TRANSPARENT DATE",
    title: "촬영일 연·월·일까지 공개",
    desc: "'N개월 후' 같은 애매한 표기는 쓰지 않습니다.",
  },
  {
    tag: "SIGNED CONSENT",
    title: "환자 본인 서면 동의 후 게시",
    desc: "동의서 없는 사진은 단 한 장도 올라가지 않습니다.",
  },
];

const FILTERS = ["가슴성형", "눈성형"] as const;

type Filter = (typeof FILTERS)[number];
type Category = Filter;

type Case = {
  category: Category;
  label: string;
  before: string;
  after: string;
  afterLabel?: string;
  /** 받은 시술·수술 상세 내역. 대표 이미지 하단에 태그 형태로 표시됨 */
  procedures?: string[];
};

const CASES: Case[] = [
  // 가슴성형
  {
    category: "가슴성형",
    label: "가슴확대 수술",
    before: "/ba_가슴_01_before.png",
    after: "/ba_가슴_01_after.png",
    afterLabel: "수술후",
  },
  {
    category: "가슴성형",
    label: "가슴확대",
    before: "/ba_가슴_02_before.png",
    after: "/ba_가슴_02_after.png",
    afterLabel: "수술후",
  },

  // 눈성형
  {
    category: "눈성형",
    label: "쌍꺼풀 수술",
    before: "/ba_눈_01_before.png",
    after: "/ba_눈_01_after.png",
    afterLabel: "수술후",
  },
  {
    category: "눈성형",
    label: "쌍꺼풀수술",
    before: "/ba_눈_02_before.png",
    after: "/ba_눈_02_after.png",
    afterLabel: "수술후",
  },

  // 피부 · 리프팅
  // (등록된 케이스 없음 — 이미지 업로드 시 추가)
];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("가슴성형");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const filtered = CASES.filter((c) => c.category === filter);
  const selected = filtered[selectedIdx] ?? filtered[0];

  const handleFilter = (f: Filter) => {
    setFilter(f);
    setSelectedIdx(0);
  };

  return (
    <section id="gallery" className="py-12 lg:py-[70px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          Before &amp; After
        </span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-5 keep-all">
          사진을{" "}
          <span className="inline-block bg-brand text-white px-3 py-1">
            꾸미지 않습니다.
          </span>
        </h2>
        <p className="text-[1.05rem] lg:text-[1.15rem] text-text-main mb-4 max-w-[760px] keep-all leading-[1.8]">
          한국 성형외과의 전후사진을 믿기 어려우셨다면,
          <br />
          에스엠이 <strong className="text-brand font-semibold">12년간 지켜온 4가지 원칙</strong>을 확인해주세요.
        </p>
        <p className="text-[0.9rem] text-text-sub mb-12 max-w-[760px] keep-all">
          보정된 결과가 아니라, 실제 결과를 그대로 보여드립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {STANDARDS.map((s, i) => (
            <div
              key={s.title}
              className="p-6 lg:p-7 border border-border-default bg-white flex flex-col gap-3 transition-all hover:border-brand hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-bold tracking-[0.15em] text-brand">
                  0{i + 1}
                </span>
                <span className="text-[0.65rem] tracking-[0.15em] text-accent-gold font-semibold">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-[0.95rem] lg:text-[1rem] font-bold text-text-main keep-all leading-tight">
                {s.title}
              </h3>
              <p className="text-[0.85rem] text-text-sub leading-[1.7] keep-all">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-8 mb-10 text-[1rem] border-b border-border-default pb-4 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`cursor-pointer transition-colors pb-2 ${
                filter === f
                  ? "text-text-main font-bold border-b-2 border-brand -mb-[18px]"
                  : "text-text-sub hover:text-text-main"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured */}
        {selected && (
          <div className="mb-16">
            <div className="relative w-full bg-bg-sub-alt border border-border-default overflow-hidden">
              <div className="grid grid-cols-2">
                <img
                  src={selected.before}
                  alt={`${selected.label} 수술전`}
                  className="w-full h-auto block"
                />
                <img
                  src={selected.after}
                  alt={`${selected.label} ${selected.afterLabel ?? "수술후"}`}
                  className="w-full h-auto block"
                />
              </div>
              {/* center arrow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                >
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>

            {/* before/after labels */}
            <div className="grid grid-cols-2">
              <div className="bg-bg-sub text-text-sub text-center py-3 text-[0.95rem] font-medium">
                수술전
              </div>
              <div className="bg-[#1e2a4a] text-white text-center py-3 text-[0.95rem] font-medium">
                {selected.afterLabel ?? "수술후"}
              </div>
            </div>

            {/* caption */}
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <div className="font-semibold text-[1.1rem] lg:text-[1.25rem] text-text-main">
                {selected.label}
              </div>
              {selected.procedures && selected.procedures.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="text-[0.75rem] uppercase tracking-widest text-accent-gold font-semibold mr-1 self-center">
                    받은 시술
                  </span>
                  {selected.procedures.map((p) => (
                    <span
                      key={p}
                      className="text-[0.8rem] bg-bg-sub-alt border border-border-default px-3 py-1 text-text-sub"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {filtered.map((c, i) => {
            const isActive = i === selectedIdx;
            return (
              <button
                key={`${c.before}-${i}`}
                onClick={() => setSelectedIdx(i)}
                className={`text-left flex flex-col transition-all ${
                  isActive
                    ? "ring-2 ring-text-main"
                    : "hover:ring-1 hover:ring-border-default"
                }`}
              >
                <div className="w-full grid grid-cols-2 bg-bg-sub-alt overflow-hidden">
                  <img
                    src={c.before}
                    alt=""
                    className="w-full h-auto block"
                  />
                  <img
                    src={c.after}
                    alt=""
                    className="w-full h-auto block"
                  />
                </div>
                <div
                  className={`py-3 px-3 text-center text-[0.85rem] transition-colors ${
                    isActive
                      ? "bg-text-main text-white font-semibold"
                      : "bg-bg-sub text-text-sub"
                  }`}
                >
                  {c.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* disclaimer */}
        <div className="border-t border-border-default pt-10">
          <h3 className="font-serif-display text-[1rem] font-semibold text-text-main mb-4 flex items-center gap-2 before:content-[''] before:w-3 before:h-px before:bg-brand">
            안내
          </h3>
          <p className="text-[0.85rem] text-text-sub leading-[1.8] max-w-[900px]">
            수술 결과는 피부 탄력, 흉곽 형태, 회복 중 관리에 따라 달라집니다.
            부작용(출혈·감염·비대칭·보형물 관련 합병증)이 발생할 수 있으며, 진료 시
            개별 설명드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}
