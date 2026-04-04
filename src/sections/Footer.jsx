import Container from '../components/Container'

export default function Footer() {
  return (
    <footer className="bg-light-blue py-14 lg:py-20 border-t border-border">
      <Container>
        <div className="text-center">
          {/* Logo */}
          <p
            className="text-primary text-xl tracking-[0.08em] font-semibold mb-2"
            style={{ fontFamily: 'var(--font-serif-en)' }}
          >
            SM PLASTIC SURGERY
          </p>
          <p className="text-text-gray text-sm mb-8">에스엠성형외과의원</p>

          {/* Business info */}
          <div className="text-text-gray text-[13px] leading-relaxed space-y-1.5 mb-8">
            <p>상호: 에스엠성형외과의원 | 대표: 이무영</p>
            <p>사업자등록번호: 214-14-30551</p>
            <p>주소: 서울시 서초구 강남대로 435 주류성빌딩 9층</p>
            <p>전화: 02-537-3707</p>
          </div>

          {/* Copyright */}
          <p className="text-text-gray/50 text-[12px]">
            &copy; 2025 SM Plastic Surgery. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
