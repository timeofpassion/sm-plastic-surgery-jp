type SkinItem = {
  num: string;
  title: string;
  desc: React.ReactNode;
  image: string;
};

const SKIN: SkinItem[] = [
  {
    num: "①",
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
    image: "/보톡스.png",
  },
  {
    num: "②",
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
    image: "/필러.png",
  },
  {
    num: "③",
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
    image: "/물광주사.png",
  },
  {
    num: "④",
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
    image: "/텐쎄라 텐써마.png",
  },
];

export default function SkinLifting() {
  return (
    <section id="skin" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          피부 · 리프팅
        </span>
        <h2 className="font-serif-display text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-medium leading-[1.25] mb-8 keep-all">
          수술 회복 기간에
          <br />
          더할 수 있는 피부관리
        </h2>
        <p className="text-[1.05rem] lg:text-[1.15rem] text-text-sub mb-16 max-w-[720px] font-light keep-all">
          병원을 방문하여 머물거나 회복하는 시간에 보톡스 / 필러 / 물광주사 /
          텐쎄라·텐써마로 피부관리를 받아보세요.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKIN.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-100/60"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  i * 0.08
                }s forwards`,
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-sub-alt">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-6 lg:p-8">
                <span className="font-serif-display text-[1.5rem] text-brand mb-3 origin-left">
                  {item.num}
                </span>
                <h3 className="font-serif-display text-[1.35rem] lg:text-[1.5rem] font-semibold text-brand mb-4 pb-4 border-b border-border-default keep-all leading-tight">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] text-text-sub leading-[1.7] keep-all">
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
