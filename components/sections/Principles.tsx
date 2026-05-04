export default function Principles() {
  return (
    <section id="why-sm" className="py-20 lg:py-32 flex justify-center bg-white">
      <div className="w-full max-w-content px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 좌: 이미지 placeholder — 추후 실제 이미지로 교체 */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3f7f9] via-[#dbeaf6] to-[#c4d9ed] flex items-center justify-center"
              style={{ maxWidth: "90%", aspectRatio: "4/5" }}
            >
              {/* placeholder */}
              <div className="text-brand/10 font-bold" style={{ fontSize: "6rem" }}>SM</div>
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
            <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] space-y-5">
              <p>[ABOUT_BODY]</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
