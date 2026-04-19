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
        "bg-sub": "#f5f6f8",
        "bg-sub-alt": "#f9fafb",
        "text-main": "#111111",
        "text-sub": "#555555",
        brand: {
          DEFAULT: "#1e3a5f",
          hover: "#142c47",
        },
        "border-default": "#e5e7eb",
        "accent-gold": "#8aa3c4",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
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
