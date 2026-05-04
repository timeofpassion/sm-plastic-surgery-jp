const SERVICES = [
  {
    id: "hybrid",
    title: "하이브리드 가슴성형",
    body: "보형물 + 자가 지방이식을 병행하는 시술입니다. 보형물로 전체 볼륨과 형태의 토대를 만들고, 채취한 자가 지방을 데콜테 라인과 경계부에 주입해 더 자연스럽고 풍성한 마무리를 실현합니다. 촉감은 지방이, 형태는 보형물이 담당하는 설계입니다.",
    image: "/breast.png",
    gradient: "from-[#b8d0e8] via-[#96b8d8] to-[#6898c8]",
    num: "01",
  },
  {
    id: "augmentation",
    title: "가슴 확대 (보형물)",
    body: "흉곽 너비·피부 탄력·출산력을 확인한 뒤 보형물 종류(라운드/앵커, 스무스/텍스처드)와 삽입 위치(근육 위/아래)를 결정합니다. 체형에 맞는 맞춤 설계로 자연스러운 결과를 목표로 합니다.",
    image: null,
    gradient: "from-[#c4d8ec] via-[#a4c0dc] to-[#7890c8]",
    num: "02",
  },
  {
    id: "revision",
    title: "가슴 재수술",
    body: "구형구축(Baker Ⅱ~Ⅳ)·보형물 변위·좌우 비대칭·형태 변형·이물감·리플링 등 다양한 고민에 대응합니다. 초음파 검사로 현재 보형물 상태를 확인한 뒤 피막 절제 범위와 보형물 교체 여부를 결정합니다. 이전 수술 기록이 없어도 가능합니다.",
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
          에스엠성형외과 주력 시술
        </h2>
        <p className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] max-w-[680px] mx-auto keep-all">
          에스엠성형외과는 최첨단 수술 장비를 보유하고 있지만,
          <br className="hidden sm:block" />
          장비 자체가 목적이 아닙니다.
          <br className="hidden sm:block" />
          모든 수술은 환자 개개인의 체형·조직에 맞춘
          <br className="hidden sm:block" />
          맞춤 설계를 기본으로 합니다.
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
