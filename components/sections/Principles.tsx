export default function Principles() {
  return (
    <section id="why-sm" className="py-20 lg:py-32 flex justify-center bg-white">
      <div className="w-full max-w-content px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{ maxWidth: "90%", aspectRatio: "4/5" }}
            >
              <img
                src="/의학설계.png"
                alt="SM美容外科 医学的設計"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* 우: 텍스트 */}
          <div className="order-1 lg:order-2">
            <span className="label-en block mb-6">
              About
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-10 keep-all">
              SM美容外科は、
              <br />
              胸成形を専門に集中する
              <br />
              クリニックです。
            </h2>
            {/* [JA-REVIEW]
               原文(韓国語):
               ①한 병원·한 원장·12년의 일관성: 에스엠은 2013년 이후 강남역 한 자리. 1년 후, 5년 후에도 같은 문을 열면 같은 원장이 기다립니다.
               ②일본 전문통역 원스톱: 상담(LINE)부터 예약·방한 안내·수술실 통역·귀국 후 경과 체크까지 전담 통역이 전 과정을 담당.
               ③'유행'이 아닌 '의학'으로 설계: 흉곽·피부·생활 패턴을 진단해 그 사람만의 방법을 찾습니다. 유방성형 연구회 학술 근거 기반.
               対象: 아래 3단락 전체 — 카리님 확인 필요
            [/JA-REVIEW] */}
            <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] space-y-5">
              <p>SM美容外科は2013年の開院以来、江南駅の同じ場所にあり続けています。他院への移転や分院展開は行わず、同じ院長が同じ場所で患者様をお迎えします。1年後も5年後も、同じドアを開ければ同じ院長が待っています。</p>
              <p>LINEでのご相談から予約・訪韓案内・手術室での通訳・帰国後の経過確認まで、日本語専任スタッフが一貫してご対応します。「通訳がいる病院」ではなく「最後まで責任を持つ専任スタッフがいる病院」です。</p>
              <p>胸郭・皮膚の状態・生活パターンを診断し、その方だけに合った方法を設計します。大韓乳房成形研究会で積み重ねた学術的根拠をもとに、「なぜこの患者様にはこの方法が最適か」を説明できるクリニックです。</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
