'use client';

import { ShaderBackground } from '@/components/ui/hero-shader';

const TRUST = [
  { label: "강남언니 평가", value: "9.7 / 10" },
  { label: "환자 리뷰", value: "872건+" },
  { label: "개원", value: "2013년" },
  { label: "집도 전문의", value: "서울대 출신" },
];

export default function Hero() {
  return (
    <ShaderBackground>
      <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Left Content Area */}
        <div className="relative z-20 w-full lg:w-1/2 px-6 lg:px-12 py-20 lg:py-32 flex flex-col justify-center">
          <div className="max-w-[520px]">
            {/* Label */}
            <span className="label-en block mb-6 text-[0.85rem] tracking-[0.15em] text-white/80 font-medium">
              12년, 같은 자리에서.
            </span>

            {/* Main Heading */}
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-white leading-[1.1] tracking-tight keep-all mb-8 opacity-0 animate-fade-up">
              가슴성형을<br />
              의학으로<br />
              설계합니다
            </h1>

            {/* Subtext */}
            <div className="text-[0.95rem] lg:text-[1rem] text-white/85 leading-relaxed mb-10 opacity-0 animate-fade-up [animation-delay:0.15s] space-y-4">
              <p className="font-medium text-white/90">서울대 의대 출신 이무영 원장이 강남에서 12년간 직접 집도합니다.</p>
              <p className="text-white/80 text-[0.9rem]">정확한 진단부터 시작하는 맞춤형 수술. 유행이 아닌 의학으로 설계하는 자연스러운 결과.</p>
              <p className="text-white/75 text-[0.85rem]">모든 시술은 환자 개개인의 특성과 요구사항을 고려한 맞춤형 치료로 진행됩니다.</p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3 mb-14 opacity-0 animate-fade-up [animation-delay:0.25s]">
              <a
                href="https://line.me/R/ti/p/@952nqpbr"
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="hero-line"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#06C755] text-white text-[0.9rem] font-semibold rounded-full transition-all hover:bg-[#05b34a] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#06C755]/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
                </svg>
                상담하기
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-up [animation-delay:0.35s]">
              {TRUST.map((item) => (
                <div key={item.label}>
                  <div className="text-[0.65rem] uppercase tracking-[0.13em] text-white/60 mb-3 font-semibold">
                    {item.label}
                  </div>
                  <div className="text-[1rem] lg:text-[1.1rem] font-black text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual Area - Shader extends here */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-1/2 opacity-40 lg:opacity-100" />
      </section>
    </ShaderBackground>
  );
}
