import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SUPPORTED_LANGS, type Lang } from '@/lib/langs'

const SITE_URL = 'https://www.smpsjp.com'

const META: Record<Lang, { title: string; description: string; keywords: string[] }> = {
  ja: {
    title: '에스엠성형외과 SM美容外科医院 | 韓国 江南 豊胸・目元・肌治療',
    description:
      '서울 강남 에스엠성형외과(SM美容外科医院). 서울대 의대 출신 이무영 원장이 12년째 직접 집도하는 가슴성형·눈성형·피부과. 일본 전문통역 상담 가능.',
    keywords: [
      'SM美容外科', 'エスエム美容外科', 'SMPS', '韓国 豊胸', '韓国 豊胸手術',
      'ハイブリッド豊胸', '豊胸 再手術', '韓国 二重整形', '江南 整形外科',
      '江南 日本語対応', '韓国 整形 名医', 'イ・ムヨン',
    ],
  },
  en: {
    title: 'SM Plastic Surgery Korea | Breast Augmentation Gangnam Seoul',
    description:
      'SM Plastic Surgery (SMPS) in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University School of Medicine, 12+ years. Breast augmentation, eye surgery, skin treatments. English & Messenger consultation available.',
    keywords: [
      'Korea plastic surgery', 'breast augmentation Korea', 'Gangnam plastic surgery',
      'Korean breast augmentation', 'hybrid breast augmentation Korea',
      'Korea cosmetic surgery', 'SM Plastic Surgery', 'SMPS Korea',
      'Seoul breast surgery', 'Korea eye surgery', 'Gangnam clinic English',
    ],
  },
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = params.lang as Lang
  if (!SUPPORTED_LANGS.includes(lang)) return {}
  const m = META[lang]
  return {
    title: { default: m.title, template: `%s | SM Plastic Surgery` },
    description: m.description,
    keywords: m.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${lang}/`,
      languages: {
        ja: `${SITE_URL}/ja/`,
        en: `${SITE_URL}/en/`,
        'x-default': `${SITE_URL}/ja/`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${lang}/`,
      siteName: 'SM Plastic Surgery',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!SUPPORTED_LANGS.includes(params.lang as Lang)) notFound()
  return <>{children}</>
}
