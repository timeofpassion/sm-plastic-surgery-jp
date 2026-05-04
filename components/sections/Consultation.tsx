"use client";

import { useRef } from "react";

const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

const CHECKLIST = [
  "현재 가슴 상태와 고민",
  "원하는 이미지 (참고 사진 환영)",
  "이전 수술 경험 (있는 경우)",
  "내원 가능한 시기",
  "예산 범위",
];

const TREATMENTS = [
  "하이브리드 가슴성형",
  "가슴 확대 (보형물)",
  "가슴 재수술",
];

export default function Consultation() {
  const tel1Ref = useRef<HTMLInputElement>(null);
  const tel2Ref = useRef<HTMLInputElement>(null);
  const tel3Ref = useRef<HTMLInputElement>(null);

  return (
    <section id="consultation" className="py-20 lg:py-32 bg-white">
      <div className="w-full max-w-content mx-auto px-6">

        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="label-en block mb-6">Contact</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-10 keep-all">
            상담 및
            <br />
            문의 안내
          </h2>
          <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[2] max-w-[640px] mx-auto keep-all">
            <p className="mb-5">
              에스엠성형외과는
              <br />
              국내 환자뿐만 아니라,
              <br />
              해외 환자를 위한 상담 및
              <br />
              수술 시스템을 운영합니다.
            </p>
            <p className="mb-5">
              수술 전 충분한 상담을 통해
              <br />
              체형과 수술 방향을 설명하며,
              <br />
              무리한 시술은 권하지 않습니다.
            </p>
            <p>
              가슴성형은 서둘러 선택하는 것이 아니라,
              <br />
              올바른 판단에서 시작해야 합니다.
            </p>
          </div>
        </div>

        {/* 체크리스트 박스 */}
        <div
          className="max-w-[640px] mx-auto mb-8 rounded-xl p-8"
          style={{ background: "#f3f7f9" }}
        >
          <h3 className="text-[0.85rem] font-semibold text-text-main mb-5">
            상담 시 알려주시면 좋은 내용
          </h3>
          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.88rem] text-text-sub leading-[1.7]">
                <span className="text-brand shrink-0 mt-0.5">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* LINE CTA 블록 */}
        <div className="max-w-[640px] mx-auto mb-16">
          <p className="text-center text-[0.82rem] text-text-sub mb-3">
            전담 스태프가 LINE으로 1:1 응대합니다.
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-location="consultation-line"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-white font-semibold text-[1rem] transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "#06C755",
              boxShadow: "0 4px 16px rgba(6,199,85,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
            </svg>
            LINE 상담하기 →
          </a>
        </div>

        {/* 구분선 */}
        <div className="max-w-[640px] mx-auto mb-16 border-t border-border-default" />

        {/* Contact 폼 */}
        <div className="max-w-[640px] mx-auto">
          {/* action: [TBD_FORM_HANDLER] — replace with actual form endpoint before launch */}
          <form action="" method="post" className="space-y-7">

            {/* 이름 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                이름 <span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="홍길동"
                className="w-full border border-border-default rounded-lg px-4 py-3 text-[0.9rem] text-text-main placeholder:text-text-sub/40 focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            {/* 연락처 — 3분할 자동 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                연락처 (전화번호) <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  ref={tel1Ref}
                  type="text"
                  name="tel1"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="080"
                  onChange={(e) => {
                    if (e.target.value.replace(/\D/g, "").length >= 4) tel2Ref.current?.focus();
                  }}
                  className="w-[80px] border border-border-default rounded-lg px-3 py-3 text-[0.9rem] text-center focus:outline-none focus:border-brand transition-colors"
                />
                <span className="text-text-sub/60 text-lg select-none">–</span>
                <input
                  ref={tel2Ref}
                  type="text"
                  name="tel2"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="1234"
                  onChange={(e) => {
                    if (e.target.value.replace(/\D/g, "").length >= 4) tel3Ref.current?.focus();
                  }}
                  className="flex-1 border border-border-default rounded-lg px-3 py-3 text-[0.9rem] text-center focus:outline-none focus:border-brand transition-colors"
                />
                <span className="text-text-sub/60 text-lg select-none">–</span>
                <input
                  ref={tel3Ref}
                  type="text"
                  name="tel3"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="5678"
                  className="flex-1 border border-border-default rounded-lg px-3 py-3 text-[0.9rem] text-center focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            {/* 관심 있는 시술 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-3">
                관심 있는 시술 <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="space-y-3">
                {TREATMENTS.map((t) => (
                  <label key={t} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="treatment"
                      value={t}
                      className="w-4 h-4 rounded border-border-default accent-brand"
                    />
                    <span className="text-[0.88rem] text-text-sub group-hover:text-text-main transition-colors">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 문의 내용 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                문의 내용
                <span className="text-[0.78rem] text-text-sub font-normal ml-2">(선택)</span>
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="질문·요청사항을 자유롭게 입력해주세요."
                className="w-full border border-border-default rounded-lg px-4 py-3 text-[0.9rem] text-text-main placeholder:text-text-sub/40 focus:outline-none focus:border-brand transition-colors resize-none"
              />
            </div>

            {/* 개인정보 동의 */}
            <div>
              <div
                className="h-44 overflow-y-auto border border-border-default rounded-lg px-5 py-4 mb-4 text-[0.78rem] text-text-sub leading-[1.85]"
                style={{ background: "#fafafa" }}
              >
                {/* [REVIEW_LEGAL] 한국 의료광고법 표기 기준 검토 필요 - 라이브 머지 전 확정 */}
                <p className="font-semibold text-text-main mb-2">개인정보 처리방침</p>
                <p className="mb-3">
                  에스엠성형외과(이하 '본원')는 개인정보 보호법 및 의료광고 가이드라인에 따라 수집된 개인정보를 적절히 관리합니다.
                </p>
                <p className="font-medium text-text-main mb-1">【이용 목적】</p>
                <p className="mb-3">
                  입력하신 성명·연락처·문의 내용은 상담 안내 및 본원으로부터의 연락에만 사용합니다. 법령에 정한 경우를 제외하고 제3자에게 제공하지 않습니다.
                </p>
                <p className="font-medium text-text-main mb-1">【보관·관리】</p>
                <p className="mb-3">
                  개인정보는 적절한 보안 대책을 강구하여 관리하며, 이용 목적 달성 후 지체 없이 삭제합니다.
                </p>
                <p className="font-medium text-text-main mb-1">【열람·정정·삭제 요청】</p>
                <p>
                  개인정보 열람·정정·삭제 등을 원하시는 경우 본원 창구(jp@sm-ps.co.kr)로 연락해 주세요.
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="w-4 h-4 mt-0.5 rounded border-border-default accent-brand shrink-0"
                />
                <span className="text-[0.85rem] text-text-sub leading-[1.6]">
                  개인정보 처리에 동의합니다 <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-semibold text-[1rem] transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#1b499c" }}
            >
              문의하기
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
