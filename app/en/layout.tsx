import type { Metadata } from 'next'

const SITE_URL = 'https://www.smpsjp.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: 'SM Plastic Surgery Korea | Breast Augmentation Gangnam Seoul',
    template: '%s | SM Plastic Surgery',
  },
  description:
    'SM Plastic Surgery (SMPS) in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University School of Medicine, 12+ years same location. Breast augmentation, eye surgery, skin treatments. English coordinator & Messenger consultation available.',
  keywords: [
    // ── Core: Korea plastic surgery ──
    'Korea plastic surgery',
    'Korean plastic surgery',
    'cosmetic surgery Korea',
    'plastic surgery Seoul',
    'plastic surgery in Korea',
    'Gangnam plastic surgery',
    'Seoul cosmetic surgery',
    'best plastic surgery Korea',
    'top plastic surgery clinic Korea',
    'Korea plastic surgery 2025',

    // ── Medical tourism ──
    'Korea medical tourism',
    'Seoul medical tourism',
    'plastic surgery vacation Korea',
    'cosmetic surgery trip Korea',
    'Korea surgery holiday',
    'plastic surgery Korea for foreigners',
    'Korea plastic surgery package',
    'visiting Korea for plastic surgery',
    'how to get plastic surgery in Korea',
    'Korea plastic surgery guide',
    'Korea cosmetic surgery travel',
    'best hospital Korea plastic surgery',

    // ── English support ──
    'Korea plastic surgery English',
    'English speaking plastic surgeon Korea',
    'English speaking clinic Korea Gangnam',
    'Korea plastic surgery English coordinator',
    'plastic surgery Korea English speaking',
    'Gangnam clinic English',
    'Korea plastic surgery English support',

    // ── Breast surgery ──
    'breast augmentation Korea',
    'breast augmentation Seoul',
    'breast implants Korea',
    'breast surgery Korea',
    'Korean breast augmentation',
    'best breast augmentation Korea',
    'breast augmentation Gangnam',
    'hybrid breast augmentation Korea',
    'breast augmentation Korea cost',
    'breast augmentation Korea price',
    'breast augmentation Korea natural',
    'breast implant surgery Korea',
    'Motiva implant Korea',
    'Mentor implant Korea',
    'dual plane breast augmentation Korea',
    'Korea breast surgery before after',
    'safe breast augmentation Korea',

    // ── Breast revision ──
    'breast revision surgery Korea',
    'capsular contracture treatment Korea',
    'breast implant revision Korea',
    'breast reoperation Korea',
    'revision breast surgery Gangnam',

    // ── Eye surgery ──
    'double eyelid surgery Korea',
    'eyelid surgery Korea',
    'blepharoplasty Korea',
    'ptosis correction Korea',
    'Korean double eyelid surgery',
    'upper eyelid surgery Korea',
    'lower blepharoplasty Korea',
    'eye surgery Korea natural',

    // ── Skin & lifting ──
    'Thermage Korea',
    'Ulthera Korea',
    'HIFU Korea',
    'Botox Korea',
    'filler Korea',
    'skin booster Korea',
    'non-surgical treatment Korea',
    'lifting treatment Korea',

    // ── Trust & reviews ──
    'Korea plastic surgery before after',
    'Korea plastic surgery review',
    'Korea plastic surgery natural results',
    'safe plastic surgery Korea',
    'trusted plastic surgery Korea',
    'Korea plastic surgery no proxy surgeon',
    'Korea cosmetic surgery review',
    'Gangnam unni review',

    // ── Doctor / clinic specific ──
    'SM Plastic Surgery',
    'SMPS Korea',
    'Dr Lee Moo-young',
    'Lee Moo-young surgeon',
    'Seoul National University plastic surgeon Korea',
    'Asan Medical Center plastic surgery',
    'smpsjp',
    'SM plastic surgery Gangnam',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      ja: `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: 'SM Plastic Surgery Korea | Breast Augmentation Gangnam Seoul',
    description:
      'SM Plastic Surgery (SMPS) in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University, 12+ years same location. English consultation available via Messenger & LINE.',
    url: `${SITE_URL}/en/`,
    siteName: 'SM Plastic Surgery',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* /en 라우트 전용: html[lang] 을 ja → en 으로 교정 (루트 레이아웃 override 불가 우회) */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      {children}
    </>
  )
}
