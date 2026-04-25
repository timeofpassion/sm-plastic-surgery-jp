"use client";

import { useState, useEffect, useRef } from "react";
import NavHeader from "@/components/ui/nav-header";

const NAV_LINKS = [
  { label: "홈페이지", href: "#top" },
  { label: "가슴수술", href: "#procedures" },
  { label: "Before&After", href: "#gallery" },
  { label: "눈성형", href: "#eye" },
  { label: "피부·리프팅", href: "#skin" },
  { label: "FAQ", href: "#faq" },
  { label: "마케팅채널", href: "#media" },
  { label: "대표원장 소개", href: "#director" },
  { label: "SMPS 철학", href: "#why-sm" },
  { label: "안전마취센터", href: "#safety" },
  { label: "오시는 길", href: "#location" },
];

export default function Navigation() {
  const [lang, setLang] = useState<"KR" | "JP">("JP");
  const [activeSection, setActiveSection] = useState("#top");
  const tabBarRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1)).filter((id) => id !== "top");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = linkRefs.current.get(activeSection);
    if (activeLink && tabBarRef.current) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeSection]);

  return (
    <nav className="sticky top-0 w-full border-b border-border-default bg-white/95 backdrop-blur-md z-[100]">
      {/* Main bar */}
      <div className="w-full max-w-[1260px] mx-auto px-6 h-nav flex justify-between items-center gap-4">
        <a href="#" className="flex items-center gap-3 no-underline shrink-0">
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

        {/* Desktop: sliding cursor nav */}
        <div className="hidden xl:flex flex-1 justify-center">
          <NavHeader links={NAV_LINKS} activeSection={activeSection} />
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/blog"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-border-default text-text-sub text-[0.72rem] font-medium rounded-full transition-colors hover:border-brand hover:text-brand"
          >
            ブログ
          </a>
          <a
            href="https://line.me/R/ti/p/@952nqpbr"
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="nav"
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#06C755] text-white text-[0.72rem] font-medium rounded-full transition-opacity hover:opacity-85"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
            </svg>
            LINE 相談
          </a>
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

      {/* Mobile tab bar */}
      <div
        ref={tabBarRef}
        className="xl:hidden flex overflow-x-auto hide-scrollbar border-t border-border-default"
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              ref={(el) => {
                if (el) linkRefs.current.set(link.href, el);
              }}
              className={`shrink-0 px-4 py-2.5 text-[0.75rem] font-medium whitespace-nowrap transition-colors border-b-2 ${
                isActive
                  ? "text-brand border-brand"
                  : "text-text-sub border-transparent hover:text-text-main"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
