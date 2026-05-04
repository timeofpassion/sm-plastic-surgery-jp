"use client";

import { useState } from "react";

/* [JA-REVIEW]
   原文(韓国語): 서울대학교 의과대학 졸업 / 서울아산병원 성형외과 전문의 /
   울산대학교병원 성형외과 과장 / BR바람·BK성형외과 원장 역임 / 2013년 6월 강남역 에스엠성형외과 개원
   対象: EDUCATION 配列全体 — 카리님 확인 필요
[/JA-REVIEW] */
const EDUCATION = [
  "ソウル大学校医科大学 卒業",
  "ソウル峨山病院 形成外科 専門医課程 修了",
  "蔚山大学校病院 形成外科 科長 歴任",
  "BRバラム・BK美容外科 院長 歴任",
  "2013年6月 SM美容外科医院 開院",
];

/* [JA-REVIEW]
   原文(韓国語): 대한성형외과학회 정회원 / 대한 유방성형 연구회 /
   대한 지방성형 연구회 / 대한 눈성형 연구회 / Global 자랑스런 한국인 선정
   対象: CERTS 配列全体 — 카리님 확인 필요
[/JA-REVIEW] */
const CERTS = [
  "大韓形成外科学会 正会員",
  "大韓乳房成形研究会 会員",
  "大韓脂肪成形研究会 会員",
  "大韓眼形成研究会 会員",
  "「Global 자랑스런 한국인」 選定",
];

/* [JA-REVIEW]
   原文(韓国語): 이무영 원장은 서울대학교 의과대학을 졸업하고 서울아산병원에서 성형외과
   전문의 과정을 마쳤습니다. 울산대학교병원 성형외과 과장, BR바람·BK성형외과 원장을
   거쳐 2013년 6월 강남역에 에스엠성형외과를 열었습니다. 개원 이후 12년, 자리를 옮기지
   않았습니다. 처음 수술한 환자가 1년 뒤, 5년 뒤 같은 문을 열고 들어올 수 있다는 것 —
   그것이 에스엠이 지켜온 기본입니다.
   対象: DIRECTOR_BIO — 카리님 확인 필요
[/JA-REVIEW] */
const DIRECTOR_BIO =
  "イ・ムヨン院長はソウル大学校医科大学を卒業後、ソウル峨山病院にて形成外科専門医課程を修了しました。蔚山大学校病院形成外科科長、BRバラム・BK美容外科院長を経て、2013年6月に江南駅前にSM美容外科医院を開院しました。開院から12年、場所を変えたことはありません。最初の手術をした患者様が1年後、5年後も同じドアを開けて来院できること——それがSMが守り続けてきた基本です。";

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
            <img
              src="/doctor_white.png"
              alt="代表院長 イ・ムヨン"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
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

        {/* Bio */}
        <div className="max-w-[600px] mx-auto text-[0.95rem] text-text-sub leading-[1.9]">
          <p>{DIRECTOR_BIO}</p>
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

            {/* 모달 사진 */}
            <div
              className="w-full mb-6 rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src="/doctor_white.png"
                alt="代表院長 イ・ムヨン"
                className="w-full h-full object-cover object-top"
              />
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
