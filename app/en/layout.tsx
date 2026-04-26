import type { Metadata } from 'next'

const SITE_URL = 'https://www.smpsjp.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: 'SM Plastic Surgery Korea | Breast Augmentation Gangnam Seoul',
    template: '%s | SM Plastic Surgery',
  },
  description:
    'SM Plastic Surgery (SMPS) in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University School of Medicine, 12+ years. Breast augmentation, eye surgery, skin treatments. English & Messenger consultation available.',
  keywords: [
    'Korea plastic surgery',
    'breast augmentation Korea',
    'Gangnam plastic surgery',
    'Korean breast augmentation',
    'hybrid breast augmentation Korea',
    'Korea cosmetic surgery',
    'SM Plastic Surgery',
    'SMPS Korea',
    'Seoul breast surgery',
    'Korea eye surgery',
    'Gangnam clinic English',
    'Korea plastic surgery English',
    'Korean cosmetic surgery review',
    'breast augmentation Seoul',
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
      'SM Plastic Surgery (SMPS) in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University, 12+ years. English consultation available.',
    url: `${SITE_URL}/en/`,
    siteName: 'SM Plastic Surgery',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
