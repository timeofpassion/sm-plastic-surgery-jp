const SERVICES = [
  {
    id: "hybrid",
    title: "ハイブリッド豊胸",
    // [JA-REVIEW] 原文: 보형물 + 자가 지방이식 병행. 보형물: 전체 볼륨과 형태의 토대. 지방: 데콜테 라인과 경계부의 부드러움. 촉감은 지방이, 형태는 보형물이 담당.
    body: "インプラントと自家脂肪移植を組み合わせた施術です。インプラントで全体のボリュームと形の土台をつくり、採取した自家脂肪をデコルテラインと輪郭部に注入することで、より自然なふっくらとした仕上がりを実現します。触感は脂肪が、形はインプラントが担う設計です。",
    image: "/breast.png",
    gradient: "from-[#b8d0e8] via-[#96b8d8] to-[#6898c8]",
    num: "01",
  },
  {
    id: "augmentation",
    title: "豊胸拡大（インプラント）",
    // [JA-REVIEW] 原文: 흉곽 너비·피부 탄력·출산력을 확인한 뒤 보형물 종류(라운드/앵커, 스무스/텍스처드)와 삽입 위치(근육 위/아래)를 결정합니다. 체형에 맞는 맞춤 설계.
    body: "胸郭の幅・皮膚の弾力・出産経験を丁寧に確認したうえで、インプラントの種類（ラウンド型・スムース/テクスチャード）と挿入位置（筋肉上・筋肉下）を個別に決定します。体型に合わせたオーダーメイドの設計で、自然な仕上がりを目指します。",
    image: null,
    gradient: "from-[#c4d8ec] via-[#a4c0dc] to-[#7890c8]",
    num: "02",
  },
  {
    id: "revision",
    title: "豊胸再手術",
    // [JA-REVIEW] 原文: 구형구축(Baker Ⅱ~Ⅳ), 보형물 변위·회전, 좌우 비대칭, 형태 변형, 이물감, 리플링. 초음파로 현재 보형물 상태 확인 후 피막 절제 범위와 보형물 교체 여부 결정. 기존 수술 기록 없어도 가능.
    body: "拘縮（Baker Ⅱ〜Ⅳ）・インプラントのずれ・左右非対称・形の変形・異物感・リップリングなど、さまざまなお悩みに対応します。超音波検査で現在のインプラントの状態を確認したうえで、被膜切除の範囲とインプラント交換の要否を決定します。以前の手術記録がない場合でも対応可能です。",
    image: null,
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
                {/* 이미지 영역 */}
                <div className={imgLeft ? "lg:order-1 order-1" : "lg:order-2 order-1"}>
                  <div
                    className={`w-full rounded-2xl overflow-hidden ${service.image ? "" : `bg-gradient-to-br ${service.gradient} flex items-center justify-center`}`}
                    style={{ aspectRatio: "4/5" }}
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white/25 font-bold" style={{ fontSize: "3.5rem" }}>
                        {service.num}
                      </span>
                    )}
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
