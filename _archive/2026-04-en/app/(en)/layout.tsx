import Script from "next/script";
import "../globals.css";

const GA_ID = "G-RLYZKLQSTR";
const SITE_URL = "https://www.smpsjp.com";

const enStructuredData = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "SM Plastic Surgery",
  alternateName: ["SMPS Korea", "SM Plastic Surgery Gangnam", "에스엠성형외과"],
  image: `${SITE_URL}/logo_smps.png`,
  logo: `${SITE_URL}/logo_smps.png`,
  url: `${SITE_URL}/en/`,
  telephone: "+82-507-1324-3707",
  email: "jp@sm-ps.co.kr",
  description:
    "SM Plastic Surgery in Gangnam, Seoul. Dr. Lee Moo-young — Seoul National University School of Medicine, 12+ years at the same location. Breast augmentation, eye surgery, skin treatments. English coordinator & Messenger consultation available.",
  medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
  priceRange: "₩₩₩",
  address: {
    "@type": "PostalAddress",
    streetAddress: "435 Gangnam-daero, 9F Juryuseong Building",
    addressLocality: "Seocho-gu",
    addressRegion: "Seoul",
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
    name: "Dr. Lee Moo-young",
    alternateName: ["이무영", "李武榮", "イ・ムヨン"],
    jobTitle: "Director / Board-Certified Plastic Surgeon",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Seoul National University College of Medicine",
      },
      {
        "@type": "Hospital",
        name: "Asan Medical Center (Seoul)",
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
    ratingExplanation: "Based on Gangnam Unni (강남언니) verified reviews",
  },
  sameAs: [
    "https://www.youtube.com/@smplasticsurgery",
    "https://www.instagram.com/sm_official_jp",
    "https://x.com/smps8888",
    "https://www.tiktok.com/@smps_jp8888",
    "https://line.me/R/ti/p/@952nqpbr",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Hybrid Breast Augmentation", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Breast Augmentation", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Breast Revision Surgery", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Double Eyelid Surgery", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Upper Blepharoplasty", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Lower Blepharoplasty", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Ptosis Correction", procedureType: "SurgicalProcedure" },
    { "@type": "MedicalProcedure", name: "Thermage (Skin Tightening)", procedureType: "TherapeuticProcedure" },
    { "@type": "MedicalProcedure", name: "Ulthera / HIFU Lifting", procedureType: "TherapeuticProcedure" },
    { "@type": "MedicalProcedure", name: "Fat Grafting", procedureType: "SurgicalProcedure" },
  ],
  knowsLanguage: ["ko", "ja", "en"],
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init-en" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        id="structured-data-en"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enStructuredData) }}
      />
      <Script id="track-events-en" strategy="afterInteractive">
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
              var messengerLink = target.closest('a[href*="m.me"]');
              if (messengerLink) {
                track('click_messenger', { button_location: messengerLink.getAttribute('data-track-location') || 'other' });
              }
              var lineLink = target.closest('a[href*="line.me/R/ti/p"]');
              if (lineLink) {
                track('click_line', { button_location: lineLink.getAttribute('data-track-location') || 'other' });
              }
              var socialLink = target.closest('a[data-social]');
              if (socialLink) {
                track('click_social', { platform: socialLink.getAttribute('data-social') });
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
