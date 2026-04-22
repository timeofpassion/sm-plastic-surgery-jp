"use client";

import { useState } from "react";

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
  const [active, setActive] = useState(0);
  const selected = EYE[active];

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
        <p className="text-[1.2rem] lg:text-[1.4rem] text-text-main font-medium mb-12 max-w-[720px] keep-all">
          가슴 수술 날, 눈 수술도 같이 끝내주세요.
        </p>

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left: crossfade image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[520px] bg-bg-sub-alt">
            {EYE.map((item, i) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/65 to-transparent pointer-events-none">
              <span className="font-serif-display text-[3.5rem] text-white/25 leading-none block">
                {selected.num}
              </span>
              <h3 className="font-serif-display text-[2rem] text-white font-medium leading-tight">
                {selected.title}
              </h3>
            </div>
          </div>

          {/* Right: accordion list */}
          <div className="flex flex-col border-t border-border-default lg:border-t-0 lg:border-l border-border-default">
            {EYE.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className={`text-left px-8 py-7 border-b border-border-default transition-colors duration-200 ${
                    isActive ? "bg-bg-sub-alt" : "hover:bg-bg-sub"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span
                        className={`font-serif-display text-[1.1rem] mt-0.5 shrink-0 transition-colors ${
                          isActive ? "text-brand" : "text-text-sub"
                        }`}
                      >
                        {item.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-[1.15rem] font-semibold mb-0 transition-colors ${
                            isActive ? "text-brand" : "text-text-main"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={`text-[0.88rem] text-text-sub leading-[1.8] keep-all transition-all duration-400 overflow-hidden ${
                            isActive ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[1.4rem] leading-none shrink-0 transition-all duration-300 mt-0.5 ${
                        isActive ? "rotate-45 text-brand" : "text-text-sub"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
