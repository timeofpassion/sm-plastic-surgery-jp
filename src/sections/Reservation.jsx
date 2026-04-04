import Container from '../components/Container'
import SectionLabel from '../components/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Reservation() {
  const revealHeader = useScrollReveal()
  const revealForm = useScrollReveal()
  const revealInfo = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 bg-bg-alt" id="reservation">
      <Container>
        {/* Header */}
        <div ref={revealHeader} className="reveal mb-14">
          <SectionLabel>RESERVATION</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text-dark mb-4 keep-all"
            style={{ fontFamily: 'var(--font-serif-kr)' }}
          >
            무료 상담 예약
          </h2>
          <p className="text-text-gray text-base lg:text-lg keep-all max-w-[480px]">
            상담은 무료입니다.
            사진과 고민을 보내주시면, 원장이 직접 답변드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
          {/* Form */}
          <form ref={revealForm} className="reveal-left space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                성함 <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="홍길동"
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                연락처 (전화번호 또는 LINE ID) <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="전화번호 또는 LINE ID"
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">이메일</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Procedure */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                관심 시술 <span className="text-accent">*</span>
              </label>
              <select
                required
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-gray"
              >
                <option value="">선택해주세요</option>
                <option value="hybrid">하이브리드 가슴성형</option>
                <option value="augmentation">가슴확대술</option>
                <option value="revision">가슴 재수술</option>
                <option value="eye">눈성형 (쌍꺼풀 / 상하안검)</option>
                <option value="skin">피부·리프팅 (텐써마 / 텐써라)</option>
                <option value="combo">복합 시술 (가슴 + 눈 동시)</option>
                <option value="other">기타</option>
              </select>
            </div>

            {/* Visit timing */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">희망 방문 시기</label>
              <select
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-gray"
              >
                <option value="">선택해주세요</option>
                <option value="1month">1개월 이내</option>
                <option value="1-3month">1~3개월</option>
                <option value="3month">3개월 이후</option>
                <option value="undecided">미정</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">추가 문의사항</label>
              <textarea
                rows={4}
                placeholder="궁금한 점을 자유롭게 적어주세요."
                className="w-full px-5 py-3.5 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-fx btn-primary-fx w-full bg-primary text-white py-4 rounded-xl text-[15px] font-medium"
            >
              무료 상담 예약하기
            </button>
          </form>

          {/* Info cards */}
          <div ref={revealInfo} className="reveal-right space-y-6">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-7 border border-border">
              <h3 className="text-lg font-semibold text-text-dark mb-5">진료 시간</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['월~금', '10:00 — 19:00'],
                    ['토요일', '10:00 — 16:00'],
                    ['일요일', '휴진'],
                  ].map(([day, time], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-3 text-text-dark font-medium">{day}</td>
                      <td className="py-3 text-text-gray text-right">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-7 border border-border">
              <h3 className="text-lg font-semibold text-text-dark mb-3">오시는 길</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                서울시 서초구 강남대로 435 주류성빌딩 9층
              </p>
              <p className="text-primary text-sm font-medium mt-2">
                강남역 11번 출구 도보 3분
              </p>
            </div>

            {/* Contact links */}
            <div className="bg-white rounded-2xl p-7 border border-border">
              <h3 className="text-lg font-semibold text-text-dark mb-5">빠른 연락</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 text-sm text-text-dark hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-[#FEE500] flex items-center justify-center text-[#191919] text-xs font-bold">K</span>
                  카카오톡 상담
                </a>
                <a href="#" className="flex items-center gap-4 text-sm text-text-dark hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-[#06C755] flex items-center justify-center text-white text-xs font-bold">L</span>
                  LINE 상담
                </a>
                <a href="tel:02-537-3707" className="flex items-center gap-4 text-sm text-text-dark hover:text-primary transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold">T</span>
                  02-537-3707
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
