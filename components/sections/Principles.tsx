export default function Principles() {
  return (
    <section id="why-sm" className="py-20 lg:py-32 flex justify-center bg-white">
      <div className="w-full max-w-content px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{ maxWidth: "90%", aspectRatio: "4/5" }}
            >
              <img
                src="/의학설계.png"
                alt="SM美容外科 医学的設計"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* 우: 텍스트 */}
          <div className="order-1 lg:order-2">
            <span className="label-en block mb-6">
              About
            </span>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold text-text-main leading-[1.3] mb-10 keep-all">
              에스엠성형외과는
              <br />
              가슴과 눈성형에 집중하는
              <br />
              클리닉입니다.
            </h2>
            <div className="text-[0.95rem] lg:text-[1rem] text-text-sub leading-[1.9] space-y-5">
              <p>에스엠성형외과는 2013년 개원 이후 강남역 동일 위치를 지키고 있습니다. 원장 이전·분원 없이, 개원 12년째 같은 원장이 같은 자리에서 환자를 맞이합니다. 1년 후, 5년 후에도 같은 문을 열면 같은 원장이 기다립니다.</p>
              <p>LINE 상담부터 예약·방한 안내·수술실 통역·귀국 후 문의사항 응대까지 일본 전담 통역이 전 과정을 담당합니다. '통역이 있는 병원'이 아닌 '끝까지 책임지는 전담 통역이 있는 병원'입니다.</p>
              <p>흉곽·피부 상태·생활 패턴을 진단해 그 사람만의 방법을 설계합니다. '왜 이 환자에겐 이 방법이 최적인가'를 설명할 수 있습니다.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
