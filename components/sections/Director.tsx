const ACADEMIC = [
  "대한성형외과학회 정회원",
  "대한 유방성형 연구회",
  "대한 지방성형 연구회",
  "대한 눈성형 연구회",
  "Global 자랑스런 한국인 선정",
];

export default function Director() {
  return (
    <section
      id="director"
      className="py-12 lg:py-[70px] flex justify-center bg-[#EEF4FC] lg:bg-[linear-gradient(to_left,#ffffff_60%,#EEF4FC_60%)]"
    >
      <div className="w-full max-w-content px-6">
        {/* Top row: photo + intro */}
        <div className="grid lg:grid-cols-[4.5fr_5.5fr] gap-12 lg:gap-24 items-start mb-16 lg:mb-20">
          <div className="relative opacity-0 animate-fade-up">
            <div className="hidden lg:block absolute -top-5 -left-5 w-full h-full border border-border-default z-[1] rounded-2xl" />
            <div className="relative w-full aspect-[3/4.2] overflow-hidden border border-border-default bg-gray-200 z-[2] rounded-2xl">
              <img
                src="/doctor_white.png"
                alt="이무영 대표원장"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="pt-6 lg:pt-10 opacity-0 animate-fade-up-delay-2">
            <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-6">
              OUR PHILOSOPHY & DIRECTOR
            </span>
            <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-6 keep-all">
              한 병원, 한 원장.
              <br />
              12년째 같은 자리에서.
            </h2>

            <div className="mb-8">
              <span className="inline-block bg-brand text-white px-4 py-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.4rem] font-semibold leading-tight rounded-lg">
                Global 자랑스런 한국인 선정!
              </span>
            </div>

            <ul className="mb-10 space-y-2 text-[1.05rem] sm:text-[1.2rem] lg:text-[1.35rem] font-serif-display font-medium text-text-main leading-[1.4]">
              <li>서울대학교 의과대학 졸업</li>
              <li>성형외과 전문의</li>
            </ul>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-2 max-w-[65%]">
              <img
                src="/seoul.png"
                alt="서울대학교 의과대학"
                className="w-full h-auto object-contain"
              />
              <img
                src="/expert.png"
                alt="전문의"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: Bio + Academic (full-width) */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <div className="w-10 h-px bg-brand mb-7" />
            <p className="text-[0.95rem] lg:text-[1.05rem] text-text-main mb-5 font-light keep-all text-justify leading-[1.9]">
              이무영 원장은 서울대학교 의과대학을 졸업하고 서울아산병원에서 성형외과
              전문의 과정을 마쳤습니다. 울산대학교병원 성형외과 과장, BR바람·BK성형외과
              원장을 거쳐 2013년 6월 강남역에 에스엠성형외과를 열었습니다.
            </p>
            <p className="text-[0.95rem] lg:text-[1.05rem] text-text-main font-light keep-all text-justify leading-[1.9]">
              개원 이후 12년, 자리를 옮기지 않았습니다. 처음 수술한 환자가 1년 뒤, 5년
              뒤 같은 문을 열고 들어올 수 있다는 것 — 그것이 에스엠이 지켜온 기본입니다.
            </p>
          </div>

          {/* Right: Academic Activities */}
          <div className="p-8 lg:p-10 bg-bg-sub border-l-[3px] border-brand rounded-2xl">
            <h3 className="font-serif-display text-[1.15rem] lg:text-[1.3rem] font-semibold mb-6 flex items-center gap-3">
              학술 활동 (Academic Activities)
            </h3>
            <ul className="list-none grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {ACADEMIC.map((item) => (
                <li
                  key={item}
                  className="text-[0.9rem] lg:text-[0.95rem] text-text-sub relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1 before:h-px before:bg-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
