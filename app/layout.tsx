import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.smpsjp.com";
const TITLE = "에스엠성형외과 | 가슴성형, 깊이 있게 합니다";
const DESCRIPTION = "한 병원, 한 원장. 12년째 같은 자리에서 직접 집도합니다.";
const OG_IMAGE = `${SITE_URL}/logo_smps.png`;

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
