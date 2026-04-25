const SOCIALS = [
  {
    name: "LINE",
    platform: "line",
    href: "https://line.me/R/ti/p/@952nqpbr",
    bg: "#06C755",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942zM7.591 13.078H5.206a.515.515 0 01-.515-.514V7.788a.515.515 0 111.03 0v4.264h1.87a.515.515 0 110 1.026zm2.02-.514a.515.515 0 11-1.03 0V7.788a.515.515 0 111.03 0v4.776zm5.761 0a.515.515 0 01-.927.307l-2.44-3.321v2.999a.515.515 0 11-1.03 0V7.788a.515.515 0 01.928-.307l2.44 3.322v-3a.515.515 0 111.029 0v4.776zm3.889-2.903a.515.515 0 110 1.03h-1.871v1.187h1.871a.515.515 0 110 1.03h-2.386a.515.515 0 01-.514-.514V7.788a.515.515 0 01.514-.515h2.386a.515.515 0 110 1.03h-1.871v1.358z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    platform: "youtube",
    href: "https://www.youtube.com/@smplasticsurgery",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    platform: "instagram",
    href: "https://www.instagram.com/sm_official_jp",
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    platform: "x",
    href: "https://x.com/smps8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    platform: "tiktok",
    href: "https://www.tiktok.com/@smps_jp8888",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.52a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.39z" />
      </svg>
    ),
  },
  {
    name: "Ameba Blog",
    platform: "ameba",
    href: "https://ameblo.jp/sm-official-jp/",
    bg: "#FFFFFF",
    icon: (
      <img
        src="/logo_ameba.png"
        alt="Ameba Blog"
        className="w-7 h-7 object-contain"
      />
    ),
  },
];

export default function SocialFloat() {
  return (
    <div className="fixed right-3 bottom-4 lg:right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-[200] flex flex-col items-end gap-1.5 lg:gap-2">
      {SOCIALS.map((s) => {
        if (s.platform === "line") {
          return (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              data-social={s.platform}
              data-track-location="floating"
              className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:shadow-xl"
              style={{ background: "#06C755" }}
            >
              {s.icon}
              <span className="text-[0.72rem] lg:text-[0.8rem] font-semibold whitespace-nowrap">
                LINE 相談
              </span>
            </a>
          );
        }
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            data-social={s.platform}
            className="group relative w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 hover:shadow-xl"
            style={{ background: s.bg }}
          >
            {s.icon}
            <span className="absolute right-full mr-3 whitespace-nowrap bg-neutral-900/90 text-white text-[0.75rem] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {s.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
