const MAP_QUERY = "서울+서초구+강남대로+435+주류성빌딩";
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`;
const MAP_LINK = "https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9";
const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 lg:py-28 flex justify-center bg-white"
    >
      <div className="w-full max-w-content px-6">
        {/* SKINMEDI 패턴 헤더 */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="label-en block mb-5">Access</span>
          <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] keep-all">
            오시는 길
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* 좌측 — 클리닉 정보 */}
          <div className="bg-bg-sub rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
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
            <InfoRow
              label="교통"
              value={
                <>
                  강남역 10번출구 도보 7분
                  <br />
                  신논현역 7번출구 도보 5분
                  <span className="text-[0.85rem] text-text-sub mt-1.5 block leading-[1.7]">
                    인천공항 → 공항버스 6009 → 강남역 하차 → 도보 2분
                  </span>
                </>
              }
            />
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

            <div className="mt-auto pt-2 flex flex-wrap gap-3">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="location"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[0.82rem] font-semibold transition-opacity hover:opacity-90"
                style={{ background: "#06C755" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
                </svg>
                LINE으로 상담 예약
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border-default text-text-main text-[0.82rem] font-medium transition-colors hover:border-brand hover:text-brand"
              >
                Google 지도에서 길찾기 →
              </a>
            </div>
          </div>

          {/* 우측 — 구글맵 임베드 */}
          <div className="w-full rounded-2xl overflow-hidden border border-border-default shadow-md min-h-[320px] lg:min-h-[480px]">
            <iframe
              src={MAP_EMBED}
              title="에스엠성형외과 위치"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
      <div className="mb-2">
        <span className="label-pill">{label}</span>
      </div>
      <div className="text-[0.95rem] text-text-main leading-[1.8]">{value}</div>
    </div>
  );
}
