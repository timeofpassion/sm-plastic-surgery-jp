const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";
const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

export default function Footer() {
  return (
    <footer className="flex justify-center" style={{ background: "#111111" }}>
      <div className="w-full max-w-content px-6 pt-16 pb-10">

        {/* 로고 + 클리닉명 */}
        <div className="mb-12">
          <img
            src="/logo_smps.png"
            alt="SM美容外科"
            className="h-8 mb-3"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
          <p className="text-white/40 text-[0.78rem] tracking-wide">SM美容外科医院</p>
        </div>

        {/* 3열 그리드 */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Access
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              [TBD_ADDRESS]
              <br />
              <span className="text-white/45 text-[0.82rem]">（江南駅3番出口 徒歩3分）</span>
            </p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-[0.78rem] text-[#7EC8E3] hover:underline"
            >
              Google マップで確認 →
            </a>
          </div>
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Hours
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              平日 10:00–19:00
              <br />
              土曜 10:00–16:00
              <br />
              日曜・祝日 休診
            </p>
          </div>
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Clinic
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              院長 イ・ムヨン
              <br />
              SM美容外科医院
            </p>
          </div>
        </div>

        {/* 사업자 정보 행 */}
        <div className="py-6 border-t border-white/10 text-[0.75rem] text-white/35 leading-[2.2] space-y-0.5">
          <p>
            TEL: +82-507-1324-3707　｜　E-mail: jp@sm-ps.co.kr　｜
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/55 transition-colors"
            >
              LINE: @952nqpbr
            </a>
          </p>
          <p>
            代表者: イ・ムヨン　｜　事業者登録番号: [TBD_BUSINESS_REG]　｜　住所: [TBD_ADDRESS]
          </p>
        </div>

        {/* 의료고지 + Copyright */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-[0.78rem] text-white/35 leading-[1.8] mb-4">
            施術結果には個人差があります。出血・感染・非対称・血腫・インプラント関連合併症等の副作用が生じる場合があります。詳細はカウンセリング時にご説明します。
            <br />
            本ページは医療広告ガイドラインに基づき作成されています。
          </p>
          <p className="text-[0.72rem] text-white/25">
            © 2013-2026 SM美容外科医院 All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
