const MAIN_VIDEO_ID = "siw_pv2rp8w";

const VIDEOS = [
  { id: "cMT5rpGGbAw" },
  { id: "fWOUbdfu6bk" },
  { id: "FO-qBMjP80Q" },
  { id: "Bmx6hukkovM" },
];

export default function Media() {
  return (
    <section id="media" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">
          YouTube — 영상으로 만나는 에스엠
        </span>
        <h2 className="font-serif-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-6 keep-all">
          영상으로 만나는 <b className="font-bold">에스엠 성형외과</b>
        </h2>
        <p className="text-[1.1rem] text-text-sub mb-16 max-w-[700px]">
          텍스트로 전하기 어려운 것은 영상으로. 원장이 직접 설명하는 수술 원리,
          실제 환자의 질문, 회복 과정을 영상으로 확인하세요.
        </p>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mb-20 items-center">
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${MAIN_VIDEO_ID}?rel=0`}
              title="에스엠 성형외과 메인 영상"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[0.85rem] text-gray-400 tracking-wider">
              SM Plastic Surgery
            </span>
            <h3 className="text-[1.3rem] lg:text-[1.5rem] font-semibold leading-snug line-clamp-3">
              에스엠 성형외과 이무영 원장이 말하는 &lsquo;자연스러운 가슴 성형&rsquo;의
              핵심
            </h3>
            <a
              href="https://www.youtube.com/@smplasticsurgery"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-4 px-6 bg-brand text-white text-[0.9rem] font-semibold inline-flex items-center justify-center gap-3 transition-opacity hover:opacity-90 self-start"
            >
              에스엠 성형외과 공식 유튜브 보러가기 →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((v) => (
            <a
              key={v.id}
              href={`https://youtu.be/${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit flex flex-col gap-3 group"
            >
              <div className="w-full aspect-video bg-black relative overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                    <div
                      className="w-0 h-0 ml-1"
                      style={{
                        borderStyle: "solid",
                        borderWidth: "8px 0 8px 14px",
                        borderColor:
                          "transparent transparent transparent #d32f2f",
                      }}
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
