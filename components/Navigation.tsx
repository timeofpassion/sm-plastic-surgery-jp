"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "홈페이지", href: "#top" },
  { label: "대표원장 소개", href: "#director" },
  { label: "SMPS 철학", href: "#why-sm" },
  { label: "가슴수술", href: "#procedures" },
  { label: "Before&After", href: "#gallery" },
  { label: "마케팅채널", href: "#media" },
  { label: "눈성형", href: "#eye" },
  { label: "피부·리프팅", href: "#skin" },
  { label: "안전마취센터", href: "#safety" },
  { label: "오시는 길", href: "#location" },
];

export default function Navigation() {
  const [lang, setLang] = useState<"KR" | "JP">("JP");

  return (
    <nav className="sticky top-0 w-full h-nav flex items-center justify-center border-b border-border-default bg-white/95 backdrop-blur-md z-[100]">
      <div className="w-full max-w-content px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 no-underline">
          <img
            src="/logo_smps.png"
            alt="에스엠성형외과"
            className="h-8 w-auto"
            style={{
              filter:
                "brightness(0.45) hue-rotate(208deg) saturate(2.2) contrast(1.1)",
            }}
          />
        </a>

        <div className="hidden xl:flex gap-3.5 2xl:gap-5 text-[0.78rem] font-medium tracking-tight whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-main no-underline relative transition-colors hover:text-brand group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLang("JP")}
            aria-label="日本語"
            title="日本語"
            className={`w-8 h-8 rounded-full overflow-hidden border transition-all flex items-center justify-center ${
              lang === "JP"
                ? "border-brand ring-2 ring-brand/30 scale-110"
                : "border-border-default opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src="https://flagcdn.com/w80/jp.png"
              alt="JP"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setLang("KR")}
            aria-label="한국어"
            title="한국어"
            className={`w-8 h-8 rounded-full overflow-hidden border transition-all flex items-center justify-center ${
              lang === "KR"
                ? "border-brand ring-2 ring-brand/30 scale-110"
                : "border-border-default opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src="https://flagcdn.com/w80/kr.png"
              alt="KR"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
