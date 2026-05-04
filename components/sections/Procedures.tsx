const SERVICES = [
  {
    id: "hybrid",
    title: "ハイブリッド豊胸",
    body: "[SERVICE_HYBRID_BODY]",
    gradient: "from-[#b8d0e8] via-[#96b8d8] to-[#6898c8]",
    num: "01",
  },
  {
    id: "augmentation",
    title: "豊胸拡大（インプラント）",
    body: "[SERVICE_AUGMENTATION_BODY]",
    gradient: "from-[#c4d8ec] via-[#a4c0dc] to-[#7890c8]",
    num: "02",
  },
  {
    id: "revision",
    title: "豊胸再手術",
    body: "[SERVICE_REVISION_BODY]",
    gradient: "from-[#bac8e0] via-[#98b0cc] to-[#6880b0]",
    num: "03",
  },
];

export default function Procedures() {
  return (
    <section id="procedures" className="py-20 lg:py-32 bg-white">

      {/* 섹션 헤더 */}
      <div className="w-full max-w-content mx-auto px-6 text-center mb-20 lg:mb-28">
        <span className="label-en block mb-6">Main Services</span>
        <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-8 keep-all">
          SM美容外科の主力施術
        </h2>
        <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] max-w-[680px] mx-auto keep-all">
          SM美容外科は最先端の手術機器を保有していますが、
          <br className="hidden sm:block" />
          機器自体が目的ではありません。
          <br className="hidden sm:block" />
          すべての手術は患者一人ひとりの体型・組織に合わせた
          <br className="hidden sm:block" />
          オーダーメイド設計を基本とします。
        </p>
      </div>

      {/* 서비스 카드 3개 — 좌우 교대 */}
      <div className="w-full max-w-content mx-auto px-6">
        <div className="space-y-24 lg:space-y-36">
          {SERVICES.map((service, i) => {
            const imgLeft = i % 2 === 0;
            return (
              <div
                key={service.id}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* 이미지 placeholder */}
                <div className={imgLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"}>
                  <div
                    className={`w-full rounded-2xl overflow-hidden bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                    style={{ aspectRatio: "4/5" }}
                  >
                    <span className="text-white/25 font-bold" style={{ fontSize: "3.5rem" }}>
                      {service.num}
                    </span>
                  </div>
                </div>

                {/* 텍스트 */}
                <div className={imgLeft ? "lg:order-2 order-2" : "lg:order-1 order-2"}>
                  <h3 className="text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem] font-bold text-brand leading-[1.25] mb-6 keep-all">
                    {service.title}
                  </h3>
                  <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9]">
                    <p>{service.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
