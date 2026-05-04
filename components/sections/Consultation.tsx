"use client";

import { useRef } from "react";

const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

const CHECKLIST = [
  "現在の胸の状態とお悩み",
  "ご希望のイメージ（参考写真歓迎）",
  "以前の手術経験（ある場合）",
  "ご来院可能な時期",
  "ご予算の目安",
];

const TREATMENTS = [
  "ハイブリッド豊胸",
  "豊胸拡大（インプラント）",
  "豊胸再手術",
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
            カウンセリング・
            <br />
            お問い合わせのご案内
          </h2>
          <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[2] max-w-[640px] mx-auto keep-all">
            <p className="mb-5">
              SM美容外科は
              <br />
              韓国国内の患者様だけではなく、
              <br />
              海外の患者様のためのカウンセリング及び
              <br />
              手術システムを運営しています。
            </p>
            <p className="mb-5">
              手術前に十分なカウンセリングを通じて
              <br />
              体型と手術方針を説明し、
              <br />
              無理な施術は勧めません。
            </p>
            <p>
              胸成形は急いで選択することではなく、
              <br />
              正しい判断から始まるべきです。
            </p>
          </div>
        </div>

        {/* 체크리스트 박스 */}
        <div
          className="max-w-[640px] mx-auto mb-8 rounded-xl p-8"
          style={{ background: "#f3f7f9" }}
        >
          <h3 className="text-[0.85rem] font-semibold text-text-main mb-5">
            ご相談時にお伝えいただきたい内容
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
            日本語専任スタッフが、LINEにて1対1でご対応します。
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
            LINEでのご相談はこちら →
          </a>
        </div>

        {/* 구분선 */}
        <div className="max-w-[640px] mx-auto mb-16 border-t border-border-default" />

        {/* Contact 폼 */}
        <div className="max-w-[640px] mx-auto">
          {/* action: [TBD_FORM_HANDLER] — replace with actual form endpoint before launch */}
          <form action="" method="post" className="space-y-7">

            {/* お名前 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                お名前 <span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                className="w-full border border-border-default rounded-lg px-4 py-3 text-[0.9rem] text-text-main placeholder:text-text-sub/40 focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            {/* ご連絡先 — 3분할 자동 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                ご連絡先（電話番号） <span className="text-red-500 ml-0.5">*</span>
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

            {/* ご関心のある治療 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-3">
                ご関心のある治療 <span className="text-red-500 ml-0.5">*</span>
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

            {/* お問い合わせ内容 */}
            <div>
              <label className="block text-[0.85rem] font-medium text-text-main mb-2">
                お問い合わせ内容
                <span className="text-[0.78rem] text-text-sub font-normal ml-2">（任意）</span>
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="ご質問・ご希望などをご自由にご記入ください。"
                className="w-full border border-border-default rounded-lg px-4 py-3 text-[0.9rem] text-text-main placeholder:text-text-sub/40 focus:outline-none focus:border-brand transition-colors resize-none"
              />
            </div>

            {/* 개인정보 동의 */}
            <div>
              <div
                className="h-44 overflow-y-auto border border-border-default rounded-lg px-5 py-4 mb-4 text-[0.78rem] text-text-sub leading-[1.85]"
                style={{ background: "#fafafa" }}
              >
                <p className="font-semibold text-text-main mb-2">個人情報の取り扱いについて</p>
                <p className="mb-3">
                  SM美容外科医院（以下「当院」）は、個人情報の保護に関する法律（個人情報保護法）および医療広告ガイドラインに基づき、お預かりした個人情報を適切に管理いたします。
                </p>
                <p className="font-medium text-text-main mb-1">【利用目的】</p>
                <p className="mb-3">
                  ご入力いただいた氏名・連絡先・お問い合わせ内容は、カウンセリングのご案内および当院からのご連絡のみに使用いたします。法令に定める場合を除き、第三者への提供は行いません。
                </p>
                <p className="font-medium text-text-main mb-1">【保管・管理】</p>
                <p className="mb-3">
                  個人情報は適切なセキュリティ対策を講じたうえで管理し、利用目的の達成後は速やかに削除いたします。
                </p>
                <p className="font-medium text-text-main mb-1">【開示・訂正・削除のご請求】</p>
                <p>
                  個人情報の開示・訂正・削除等をご希望の場合は、当院窓口（jp@sm-ps.co.kr）までご連絡ください。
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
                  個人情報の取り扱いに同意します <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-semibold text-[1rem] transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#1b499c" }}
            >
              お問い合わせ
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
