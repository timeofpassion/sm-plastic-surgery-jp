const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";

export default function Footer() {
  return (
    <footer className="py-20 flex justify-center" style={{ background: "#111111" }}>
      <div className="w-full max-w-content px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-14">
          <div>
            <h5 className="text-[0.72rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-[0.2em]">
              Access
            </h5>
            <p className="text-[0.9rem] text-white/70 leading-[1.8]">
              ソウル市瑞草区江南大路435 主柳城ビル9F
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
        <div className="pt-10 border-t border-white/10 text-[0.78rem] text-white/35 leading-relaxed">
          施術結果には個人差があります。出血・感染・非対称・血腫・インプラント関連合併症等の副作用が生じる場合があります。詳細はカウンセリング時にご説明します。
        </div>
      </div>
    </footer>
  );
}
