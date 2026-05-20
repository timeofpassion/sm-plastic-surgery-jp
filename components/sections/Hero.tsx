'use client';

import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white"
    >
      {/* 풀스크린 배경 영상 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 어두운 오버레이 (텍스트 가독성) */}
      <div className="absolute inset-0 bg-black/55" />

      {/* 우측 대형 로고 (휑함 해소, 데스크탑 전용 — 모바일 비노출) */}
      <img
        src="/logo_smps.png"
        alt="SM Plastic Surgery"
        className="hidden lg:block absolute z-[1] right-[12%] top-1/2 -translate-y-1/2 w-[38%] max-w-[560px] opacity-90 pointer-events-none select-none"
        style={{ filter: "brightness(0) invert(1)" }}
      />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-[2] w-full max-w-content mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-[520px]">

          {/* 영어 라벨 */}
          <span className="block mb-6 !text-white text-lg font-bold drop-shadow-lg bg-black/60 px-4 py-2 rounded-lg w-fit">
            12년, 같은 자리에서.
          </span>

          {/* 메인 헤딩 */}
          <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] font-bold text-white leading-[1.15] tracking-tight keep-all mb-8 opacity-0 animate-fade-up">
            가슴성형을
            <br />
            의학으로
            <br />
            설계합니다
          </h1>

          {/* 보조 카피 */}
          <div className="text-[0.95rem] lg:text-[1rem] text-white/90 leading-[2] mb-10 opacity-0 animate-fade-up [animation-delay:0.15s]">
            <p>한국 강남 12년.</p>
            <p>서울대 의대 출신 이무영 원장이 직접 집도합니다.</p>
            <p>유행이 아닌, 의학으로</p>
            <p>가슴성형을 설계합니다.</p>
          </div>

          {/* CTA */}
          <div className="mb-12 opacity-0 animate-fade-up [animation-delay:0.25s]">
            <a
              href="https://line.me/R/ti/p/@952nqpbr"
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="hero-line"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#06C755] text-white text-[0.82rem] font-medium rounded-full transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
              </svg>
              LINE 무료 상담
            </a>
          </div>

        </div>
      </div>

      {/* 영상 일시정지 버튼 */}
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand hover:shadow-xl transition-shadow"
        aria-label="Toggle video playback"
      >
        {isPlaying ? (
          <Pause size={24} />
        ) : (
          <Play size={24} />
        )}
      </button>
    </section>
  );
}
