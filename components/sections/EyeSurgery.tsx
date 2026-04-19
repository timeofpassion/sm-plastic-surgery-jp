type EyeItem = {
  num: string;
  title: string;
  desc: React.ReactNode;
  image: string;
};

const EYE: EyeItem[] = [
  {
    num: "①",
    title: "쌍꺼풀",
    desc: (
      <>
        쌍꺼풀이 없어 눈이 밋밋하거나 사나워보이는 눈매를 한층 부드럽고 아름답게
        만들어주는 수술로 방법으로는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          매몰법 / 자연유착법 / 절개법
        </mark>{" "}
        등의 수술법이 있습니다.
      </>
    ),
    image: "/쌍꺼풀.png",
  },
  {
    num: "②",
    title: "상안검",
    desc: (
      <>
        나이와 함께 늘어진 윗눈꺼풀의 피부·근육·지방을 정리해 시야를 가리는 답답함을
        해소하고, 한층 젊고 또렷한 눈매로 개선하는 수술로 방법으로는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          절개법 / 눈썹하거상술
        </mark>{" "}
        등의 수술법이 있습니다.
      </>
    ),
    image: "/상안검.png",
  },
  {
    num: "③",
    title: "하안검",
    desc: (
      <>
        눈밑 지방 돌출, 다크서클, 잔주름으로 피곤해 보이는 인상을 개선하고 매끈하고
        생기 있는 눈밑 라인을 만들어주는 수술로 방법으로는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          눈밑지방재배치 / 절제법
        </mark>{" "}
        등의 수술법이 있습니다.
      </>
    ),
    image: "/하안검.png",
  },
  {
    num: "④",
    title: "안검하수 교정",
    desc: (
      <>
        눈 뜨는 근육(상안검거근)의 힘이 약해 졸려 보이거나 답답한 눈매를 또렷하고
        시원한 인상으로 교정해주는 수술로 방법으로는{" "}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">
          상안검거근 단축술 / 뮬러근 단축술
        </mark>{" "}
        등의 수술법이 있습니다.
      </>
    ),
    image: "/안검하수.png",
  },
];

export default function EyeSurgery() {
  return (
    <section id="eye" className="py-12 lg:py-[70px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          눈성형
        </span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3.2rem] font-medium leading-[1.3] mb-6 keep-all">
          에스엠성형외과는 가슴수술뿐만 아니라
          <br />
          대한민국에서{" "}
          <span className="inline-block bg-brand text-white px-3 py-1">
            눈 수술로도 No.1
          </span>{" "}
          입니다.
        </h2>
        <p className="text-[1.2rem] lg:text-[1.4rem] text-text-main font-medium mb-16 max-w-[720px] keep-all">
          가슴 수술 날, 눈 수술도 같이 끝내주세요.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {EYE.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-100/60"
              style={{
                animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${
                  i * 0.08
                }s forwards`,
              }}
            >
              <div className="w-full aspect-[5/4] overflow-hidden bg-bg-sub-alt">
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
