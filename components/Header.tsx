"use client";

export default function Header() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="w-full max-w-content mx-auto px-6 h-14 lg:h-[72px] flex items-center justify-center">
        <a
          href="#top"
          onClick={handleLogoClick}
          aria-label="에스엠성형외과 — 페이지 상단으로"
          className="inline-flex items-center"
        >
          <img
            src="/logo_smps.png"
            alt="SM 美容外科"
            className="h-7 lg:h-9 w-auto"
            style={{
              filter:
                "brightness(0.45) hue-rotate(208deg) saturate(2.2) contrast(1.1)",
            }}
          />
        </a>
      </div>
    </header>
  );
}
