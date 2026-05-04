"use client";

import { useState } from "react";

const EDUCATION = [
  "ソウル大学校医科大学 卒業",
  "ソウル大学校病院 インターン修了",
  "ソウル大学校病院 外科 レジデント修了",
  "大韓美容外科学会 正会員",
];

const CERTS = [
  "大韓乳房成形学会 正会員",
  "大韓内視鏡乳房手術学会 正会員",
  "国際美容外科学会（ISAPS）会員",
];

export default function Director() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="director" className="py-20 lg:py-32 flex justify-center bg-white">
      <div className="w-full max-w-content px-6 text-center">

        <span className="label-en block mb-6">Medical Staff</span>

        <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-14 keep-all">
          SM美容外科の代表院長は、
          <br />
          <strong>皮膚・乳房手術の専門医です。</strong>
        </h2>

        {/* 단일 카드 */}
        <div className="flex justify-center mb-8">
          <button
            className="relative overflow-hidden cursor-pointer group focus:outline-none"
            style={{ width: "320px", aspectRatio: "4/5", borderRadius: "1rem" }}
            onClick={() => setModalOpen(true)}
            aria-label="院長プロフィールを見る"
          >
            {/* 원장 사진 placeholder — 추후 실제 이미지로 교체 */}
            <div className="w-full h-full bg-gradient-to-br from-[#c8ddf0] via-[#a8c4e0] to-[#7aa8d0] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <span className="text-brand/15 font-bold" style={{ fontSize: "5rem" }}>SM</span>
            </div>
            {/* 하단 오버레이 */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6 text-left">
              <p className="text-white/70 text-[0.75rem] tracking-wide mb-1">代表院長</p>
              <p className="text-white font-bold text-[1.1rem]">李戊永（イ・ムヨン）</p>
            </div>
          </button>
        </div>

        {/* ご経歴ボタン */}
        <button
          onClick={() => setModalOpen(true)}
          className="label-pill inline-flex items-center gap-2 mb-12 transition-opacity hover:opacity-80"
        >
          ご経歴を見る
        </button>

        {/* Bio placeholder */}
        <div className="max-w-[600px] mx-auto text-[0.95rem] text-text-sub leading-[1.9]">
          <p>[DIRECTOR_BIO]</p>
        </div>

      </div>

      {/* 모달 */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-sub hover:text-text-main rounded-full hover:bg-bg-sub transition-colors text-[0.9rem]"
              aria-label="閉じる"
            >
              ✕
            </button>

            {/* 모달 사진 placeholder */}
            <div
              className="w-full mb-6 bg-gradient-to-br from-[#c8ddf0] via-[#a8c4e0] to-[#7aa8d0] rounded-xl overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: "4/5" }}
            >
              <span className="text-brand/15 font-bold" style={{ fontSize: "4rem" }}>SM</span>
            </div>

            <p className="text-brand text-[0.75rem] tracking-wide mb-1">代表院長</p>
            <h3 className="text-text-main font-bold text-[1.4rem] mb-8">李戊永（イ・ムヨン）</h3>

            <span className="label-pill inline-block mb-5">ご経歴</span>
            <ul className="mb-8 space-y-2.5 text-left">
              {EDUCATION.map((item) => (
                <li key={item} className="text-[0.88rem] text-text-sub leading-[1.7] flex gap-2">
                  <span className="text-brand shrink-0">・</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <span className="label-pill inline-block mb-5">学会・資格</span>
            <ul className="space-y-2.5 text-left">
              {CERTS.map((item) => (
                <li key={item} className="text-[0.88rem] text-text-sub leading-[1.7] flex gap-2">
                  <span className="text-brand shrink-0">・</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
