type SkinItem = {
  num: string;
  title: string;
  desc: React.ReactNode;
  image: string;
};

const SKIN: SkinItem[] = [
  {
    num: "01",
    title: "보톡스",
    desc: (
      <>
        근육의 과도한 움직임으로 생기는 주름을 부드럽게 풀어주고 턱·사각턱·종아리
        볼륨까지 자연스럽게 다듬어주는 시술로 주요 부위는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          이마 / 미간 / 눈가 / 턱 / 사각턱
        </mark>{" "}
        등이 있습니다.
      </>
    ),
    image: "/ai_07.png",
  },
  {
    num: "02",
    title: "필러",
    desc: (
      <>
        꺼진 부위에 히알루론산을 채워 즉각적인 볼륨과 윤곽을 만들어주고 깊은 주름을
        자연스럽게 완화시키는 시술로 주요 부위는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          앞광대 / 팔자 / 입술 / 애교 / 눈밑
        </mark>{" "}
        등이 있습니다.
      </>
    ),
    image: "/ai_03.png",
  },
  {
    num: "03",
    title: "물광주사",
    desc: (
      <>
        히알루론산을 진피층에 직접 주입해 속부터 차오르는 수분과 광채로 피부 결과
        탄력을 개선해주는 시술로 효과는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          보습 / 미백 / 탄력
        </mark>{" "}
        세 가지로 정리됩니다.
      </>
    ),
    image: "/ai_11.png",
  },
  {
    num: "04",
    title: "텐쎄라 · 텐써마",
    desc: (
      <>
        절개 없이 피부 속 콜라겐을 자극해 탄력과 리프팅을 동시에 잡아주는 시술로
        방법으로는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          텐써마(고주파) / 텐쎄라(초음파 HIFU)
        </mark>{" "}
        두 가지가 있습니다.
      </>
    ),
    image: "/ai_06.png",
  },
];

export default function SkinLifting() {
  return (
    <section id="skin" className="py-12 lg:py-[70px] flex justify-center bg-bg-sub">
      <div className="w-full max-w-content px-6">
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-4">
            피부 · 리프팅
          </span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3rem] font-medium leading-[1.3] mb-5 keep-all">
            수술 회복 기간에
            <br />
            더할 수 있는 피부관리
          </h2>
          <p className="text-[1rem] text-text-sub max-w-[580px] mx-auto font-light keep-all leading-[1.8]">
            방한 기간 동안 보톡스 / 필러 / 물광주사 / 텐쎄라·텐써마로
            피부관리를 함께 받아보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-default border border-border-default rounded-2xl overflow-hidden shadow-md">
          {SKIN.map((item) => (
            <div
              key={item.title}
              className="group bg-white flex flex-col sm:flex-row overflow-hidden transition-all duration-300 hover:bg-bg-sub-alt"
            >
              {/* 이미지 */}
              <div className="w-full sm:w-[200px] lg:w-[240px] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-bg-sub-alt relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 font-serif-display text-[0.75rem] tracking-[0.2em] text-white bg-black/40 px-2.5 py-1 rounded">
                  {item.num}
                </span>
              </div>

              {/* 텍스트 */}
              <div className="flex flex-col justify-center p-7 lg:p-8 flex-1">
                <h3 className="font-serif-display text-[1.3rem] lg:text-[1.5rem] font-semibold text-text-main mb-4 pb-4 border-b border-border-default keep-all leading-tight">
                  {item.title}
                </h3>
                <p className="text-[0.88rem] text-text-sub leading-[1.8] keep-all">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
