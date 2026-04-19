const MAP_QUERY = "서울+서초구+강남대로+435+주류성빌딩";
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`;
const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-[120px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">
          Location
        </span>
        <h2 className="font-serif-display text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-medium leading-[1.25] mb-16 keep-all">
          에스엠성형외과 오시는 길
        </h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 items-stretch">
          <div className="w-full aspect-[16/10] lg:aspect-auto lg:min-h-[440px] border border-border-default overflow-hidden">
            <iframe
              src={MAP_EMBED}
              title="에스엠성형외과 위치"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="bg-bg-sub-alt p-8 lg:p-10 border border-border-default flex flex-col gap-7">
            <InfoRow
              label="주소"
              value={
                <>
                  서울시 서초구 강남대로 435
                  <br />
                  주류성빌딩 9층
                </>
              }
            />
            <InfoRow label="교통" value="강남역 3번 출구 도보 3분" />
            <InfoRow
              label="진료시간"
              value={
                <>
                  평일 10:00–19:00
                  <br />
                  토요일 10:00–16:00
                  <br />
                  일요일·공휴일 휴진
                </>
              }
            />
            <InfoRow label="전화" value="0507-1324-3707" />
            <InfoRow label="의료진" value="성형외과 전문의 1명" />

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-text-main text-white text-[0.9rem] font-medium transition-opacity hover:opacity-90"
            >
              Google 지도에서 길찾기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[0.7rem] text-accent-gold uppercase tracking-widest font-semibold mb-2">
        {label}
      </div>
      <div className="text-[0.95rem] text-text-main leading-[1.7]">{value}</div>
    </div>
  );
}
