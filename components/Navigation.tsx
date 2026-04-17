"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "SMPS 철학", href: "#director" },
  { label: "가슴수술", href: "#procedures" },
  { label: "눈성형", href: "#eye" },
  { label: "피부·리프팅", href: "#skin" },
  { label: "안전마취센터", href: "#safety" },
  { label: "Before&After", href: "#gallery" },
  { label: "마케팅채널", href: "#media" },
  { label: "FAQ", href: "#faq" },
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
          />
        </a>

        <div className="hidden lg:flex gap-5 xl:gap-7 text-[0.82rem] font-medium tracking-tight whitespace-nowrap">
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
            onClick={() => setLang("KR")}
            aria-label="한국어"
            title="한국어"
            className={`w-8 h-8 rounded-full overflow-hidden border transition-all flex items-center justify-center ${
              lang === "KR"
                ? "border-brand ring-2 ring-brand/30 scale-110"
                : "border-border-default opacity-50 hover:opacity-100"
            }`}
          >
            <span className="text-[1.2rem] leading-none">🇰🇷</span>
          </button>
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
            <span className="text-[1.2rem] leading-none">🇯🇵</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
