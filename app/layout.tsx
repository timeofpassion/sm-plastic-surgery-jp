import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "에스엠성형외과 | 가슴성형, 깊이 있게 합니다",
  description:
    "서울대 의대 출신 이무영 원장이 12년째 같은 자리에서 직접 집도합니다. 하이브리드 가슴성형, 재수술 전문.",
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
