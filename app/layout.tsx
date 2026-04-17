import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.smpsjp.com";
const TITLE = "에스엠성형외과 | 가슴성형, 깊이 있게 합니다";
const DESCRIPTION =
  "서울대 의대 출신 이무영 원장이 12년째 같은 자리에서 직접 집도합니다. 하이브리드 가슴성형 · 재수술 전문.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "에스엠성형외과",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "에스엠성형외과",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/logo_smps.png",
    apple: "/logo_smps.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
