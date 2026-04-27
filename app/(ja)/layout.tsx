import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";

const GA_ID = "G-RLYZKLQSTR";
const SITE_URL = "https://www.smpsjp.com";
const TITLE = "에스엠성형외과 SM美容外科医院 | 韓国 江南 豊胸・目元・肌治療";
const DESCRIPTION =
  "서울 강남 에스엠성형외과(SM美容外科医院). 서울대 의대 출신 이무영 원장이 12년째 직접 집도하는 가슴성형·눈성형·피부과. 일본 전문통역 상담 가능. 韓国 江南で信頼できる美容整形クリニック、日本人患者様専門対応。";

const KEYWORDS_KR = [
  "에스엠성형외과",
  "SM성형외과",
  "SMPS",
  "강남 가슴성형",
  "강남 성형외과",
  "강남 눈성형",
  "강남 피부과",
  "한국 가슴성형",
  "한국 눈성형",
  "하이브리드 가슴성형",
  "가슴 재수술",
  "쌍꺼풀 수술",
  "안검하수 교정",
  "이무영 원장",
  "서울대 성형외과",
  "아산병원 성형외과",
  "일본인 성형",
  "일본어 상담 성형외과",
];

const KEYWORDS_JP = [
  "SM美容外科",
  "SM美容外科医院",
  "エスエム美容外科",
  "SMPS",
  "韓国 豊胸",
  "韓国 豊胸手術",
  "韓国 バストアップ",
  "韓国 整形",
  "韓国 美容整形",
  "江南 整形外科",
  "江南 豊胸",
  "江南 美容外科",
  "ハイブリッド豊胸",
  "豊胸 再手術",
  "豊胸 修正",
  "韓国 二重整形",
  "韓国 眼瞼下垂",
  "韓国 目元整形",
  "韓国 サーマクール",
  "韓国 ボトックス",
  "韓国 フィラー",
  "韓国 水光注射",
  "江南 日本語対応",
  "韓国 整形 日本語",
  "韓国 整形 名医",
  "韓国 豊胸 おすすめ",
  "李武榮",
  "イ・ムヨン",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | 에스엠성형외과 SM美容外科",
  },
  description: DESCRIPTION,
  keywords: [...KEYWORDS_KR, ...KEYWORDS_JP],
  authors: [{ name: "에스엠성형외과", url: SITE_URL }],
  creator: "에스엠성형외과",
  publisher: "에스엠성형외과",
  applicationName: "SM Plastic Surgery JP",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "에스엠성형외과 SM美容外科",
    locale: "ja_JP",
    alternateLocale: ["ko_KR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      ja: SITE_URL,
      en: `${SITE_URL}/en/`,
      "x-default": SITE_URL,
    },
  },
  category: "healthcare",
  verification: {
    google: "X5gJW4TYCuZU1zIcCk4gfCSnzuLhR70W13YKC0zqevs",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness", "Physician"],
  name: "에스엠성형외과 (SM Plastic Surgery)",
  alternateName: ["SM美容外科医院", "エスエム美容外科", "SMPS"],
  image: `${SITE_URL}/logo_smps.png`,
  logo: `${SITE_URL}/logo_smps.png`,
  url: SITE_URL,
  telephone: "+82-507-1324-3707",
  email: "jp@sm-ps.co.kr",
  description: DESCRIPTION,
  medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
  priceRange: "₩₩₩",
  address: {
    "@type": "PostalAddress",
    streetAddress: "강남대로 435 주류성빌딩 9층",
    addressLocality: "서초구",
    addressRegion: "서울특별시",
    postalCode: "06611",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5044,
    longitude: 127.0244,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  founder: {
    "@type": "Physician",
    name: "이무영",
    alternateName: ["李武榮", "Lee Moo-young", "イ・ムヨン"],
    jobTitle: "대표원장 / Director",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "서울대학교 의과대학 (Seoul National University College of Medicine)",
      },
      {
        "@type": "Hospital",
        name: "서울아산병원 (Asan Medical Center)",
      },
    ],
    medicalSpecialty: "PlasticSurgery",
  },
  foundingDate: "2013-06-10",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.6",
    bestRating: "10",
    reviewCount: "887",
    ratingExplanation: "강남언니(Gangnam Unni) 리뷰 기반",
  },
  sameAs: [
    "https://www.youtube.com/@smplasticsurgery",
    "https://www.instagram.com/sm_official_jp",
    "https://x.com/smps8888",
    "https://www.tiktok.com/@smps_jp8888",
    "https://ameblo.jp/sm-official-jp/",
    "https://line.me/R/ti/p/@952nqpbr",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "하이브리드 가슴성형 (Hybrid Breast Augmentation)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "가슴 확대 (Breast Augmentation)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "가슴 재수술 (Breast Revision Surgery)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "쌍꺼풀 수술 (Double Eyelid Surgery)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "상안검 수술 (Upper Blepharoplasty)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "하안검 수술 (Lower Blepharoplasty)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "안검하수 교정 (Ptosis Correction)", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "보톡스 (Botox)", procedureType: "TherapeuticProcedure" },
    { "@type": "MedicalProcedure", name: "필러 (Filler)", procedureType: "TherapeuticProcedure" },
    { "@type": "MedicalProcedure", name: "물광주사", procedureType: "TherapeuticProcedure" },
    { "@type": "MedicalProcedure", name: "텐쎄라·텐써마 리프팅 (Ulthera & Thermage)", procedureType: "TherapeuticProcedure" },
  ],
  knowsLanguage: ["ko", "ja", "en"],
};

export default function JaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script id="track-events" strategy="afterInteractive">
        {`
          (function() {
            function track(name, params) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', name, params || {});
              }
            }
            document.addEventListener('click', function(e) {
              var target = e.target;
              if (!target || !target.closest) return;
              var lineLink = target.closest('a[href*="line.me/R/ti/p"]');
              if (lineLink) {
                track('click_line', { button_location: lineLink.getAttribute('data-track-location') || 'other' });
              }
              var socialLink = target.closest('a[data-social]');
              if (socialLink) {
                track('click_social', { platform: socialLink.getAttribute('data-social') });
              }
              var ytLink = target.closest('a[href*="youtube.com"], a[href*="youtu.be"]');
              if (ytLink && !socialLink) {
                track('click_youtube', { url: ytLink.getAttribute('href') || '' });
              }
            }, true);
            var thresholds = [25, 50, 75, 90];
            var fired = {};
            var ticking = false;
            function onScroll() {
              if (ticking) return;
              ticking = true;
              requestAnimationFrame(function() {
                var doc = document.documentElement;
                var scrollable = doc.scrollHeight - window.innerHeight;
                if (scrollable <= 0) { ticking = false; return; }
                var pct = (window.scrollY / scrollable) * 100;
                for (var i = 0; i < thresholds.length; i++) {
                  var t = thresholds[i];
                  if (pct >= t && !fired[t]) {
                    fired[t] = true;
                    track('scroll_depth', { percent: t });
                  }
                }
                ticking = false;
              });
            }
            window.addEventListener('scroll', onScroll, { passive: true });
          })();
        `}
      </Script>
    </html>
  );
}
