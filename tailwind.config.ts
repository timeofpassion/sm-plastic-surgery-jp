import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#ffffff",
        "bg-sub": "#f3f7f9",        // SKINMEDI section tint (실측)
        "bg-sub-alt": "#edf1f5",
        "text-main": "#162030",     // SKINMEDI dark navy (실측)
        "text-sub": "#555555",
        brand: {
          DEFAULT: "#1b499c",       // SKINMEDI primary blue (실측)
          hover: "#163978",         // SKINMEDI hover blue (실측)
          dark: "#162030",          // SKINMEDI dark anchor
          logo: "#313f76",          // SKINMEDI logo navy
        },
        "border-default": "#e5e7eb",
        "accent-gold": "#7EC8E3",   // 기존 컴포넌트 호환 유지
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        label: [
          '"Montserrat"',
          '"Raleway"',
          "sans-serif",
        ],
        serif: [
          "'Playfair Display'",
          "'Noto Serif KR'",
          "serif",
        ],
      },
      maxWidth: {
        content: "1100px",
        "content-frame": "1260px",
      },
      spacing: {
        nav: "80px",
      },
      animation: {
        "fade-up": "fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "fade-up-delay-1": "fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.1s forwards",
        "fade-up-delay-2": "fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards",
        "fade-up-delay-3": "fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.4s forwards",
        "fade-left": "fadeLeft 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
