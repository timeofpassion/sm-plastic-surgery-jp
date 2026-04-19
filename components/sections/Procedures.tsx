const PROCEDURES = [
  {
    image: "/breast_01.png",
    title: "하이브리드 가슴성형",
    who: "자연스러운 촉감과 형태를 같이 원하는 분",
    method: "멘토 보형물 + 자가 지방이식 병행",
    details: [
      "보형물: 전체 볼륨과 형태의 토대",
      "지방: 데콜테(윗가슴) 라인과 경계부의 부드러움",
      "수술 시간: 약 2~3시간",
      "귀가: 당일 가능 (컨디션에 따라 1박 권장)",
    ],
  },
  {
    image: "/breast_02.png",
    title: "가슴 확대 (보형물)",
    who: "첫 수술, 볼륨 업을 우선하는 분",
    body: "흉곽 너비·피부 탄력·출산력을 확인한 뒤 보형물 종류(라운드/앵커, 스무스/텍스처드)와 삽입 위치(근육 위/아래)를 결정합니다.",
  },
  {
    image: "/breast_03.png",
    title: "가슴 재수술",
    symptoms: [
      "구형구축 (Baker Ⅱ~Ⅳ)",
      "보형물 변위·회전",
      "좌우 비대칭, 형태 변형",
      "이물감, 리플링(주름)",
    ],
    body: "초음파로 현재 보형물 상태를 확인한 뒤, 피막 절제 범위와 보형물 교체 여부를 정합니다. 기존 수술 기록이 없어도 진행 가능합니다.",
  },
];

export default function Procedures() {
  return (
    <section id="procedures" className="py-12 lg:py-[70px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          가슴성형
        </span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-16 keep-all">
          에스엠이 집중하는 세 가지{" "}
          <span className="inline-block bg-brand text-white px-3 py-1">
            가슴 수술
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROCEDURES.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-100/60"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  i * 0.1
                }s forwards`,
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-sub-alt">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-8 lg:p-10">
                <h3 className="font-serif-display text-[1.5rem] lg:text-[1.65rem] font-semibold text-brand mb-5 pb-4 border-b border-border-default keep-all leading-tight">
                  {p.title}
                </h3>

                {p.who && (
                  <>
                    <MetaLabel>누구를 위한가</MetaLabel>
                    <p className="text-[0.95rem] font-medium mb-5 leading-relaxed text-text-main">
                      {p.who}
                    </p>
                  </>
                )}

                {p.method && (
                  <>
                    <MetaLabel>어떻게 하는가</MetaLabel>
                    <div className="text-[0.9rem] mb-6 p-3 px-4 border-l-2 border-accent-gold bg-bg-sub-alt text-text-sub">
                      {p.method}
                    </div>
                  </>
                )}

                {p.details && (
                  <ul className="list-none mb-0">
                    {p.details.map((d) => (
                      <li
                        key={d}
                        className="text-[0.88rem] mb-2.5 flex items-start gap-2 text-text-sub before:content-['•'] before:text-accent-gold"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {p.symptoms && (
                  <>
                    <MetaLabel>대상 증상</MetaLabel>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.symptoms.map((s) => (
                        <span
                          key={s}
                          className="text-[0.75rem] bg-white border border-border-default py-1 px-2.5 text-text-sub"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {p.body && (
                  <p className="text-[0.9rem] leading-[1.7] text-justify text-text-sub">
                    {p.body}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.75rem] font-bold text-brand uppercase mb-2 block tracking-wider">
      {children}
    </span>
  );
}
