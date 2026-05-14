export const dynamic = 'force-dynamic'

// _hidden: import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import SocialFloat from "@/components/SocialFloat";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import Procedures from "@/components/sections/Procedures";
// _hidden: import EyeSurgery from "@/components/sections/EyeSurgery";
// _hidden: import SkinLifting from "@/components/sections/SkinLifting";
import Gallery from "@/components/sections/Gallery";
import LatestBlog from "@/components/sections/LatestBlog";
import FAQ from "@/components/sections/FAQ";
// _hidden: import Consultation from "@/components/sections/Consultation"; — LINE 채널로 일원화
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";
// _hidden: import GangnamReviews from "@/components/sections/GangnamReviews";
// _hidden: import Reviews from "@/components/sections/Reviews";
// _hidden: import Media from "@/components/sections/Media";
// _hidden: import Shorts from "@/components/sections/Shorts";
// _hidden: import Safety from "@/components/sections/Safety";

export default function HomePage() {
  return (
    <main id="top" className="relative">
      <SocialFloat />
      {/* _hidden: <Navigation /> */}

      {/* sticky 미니멀 헤더 — 로고만, 클릭 시 최상단 */}
      <Header />

      {/* 1. HERO */}
      <Hero />

      {/* 2. About / Philosophy */}
      <Principles />

      {/* ブログ */}
      <LatestBlog />

      {/* 5. Services */}
      <Procedures />
      {/* _hidden: <EyeSurgery /> */}
      {/* _hidden: <SkinLifting /> */}

      {/* 6. Before & After */}
      <Gallery />

      {/* FAQ */}
      <FAQ />

      {/* _hidden: <Consultation /> — 상담 채널은 LINE으로 일원화 (HERO CTA + SocialFloat + Footer LINE) */}

      {/* 7. Access — 오시는 길 + 구글맵 */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* _hidden: <GangnamReviews /> */}
      {/* _hidden: <Reviews /> */}
      {/* _hidden: <Media /> */}
      {/* _hidden: <Shorts /> */}
      {/* _hidden: <Safety /> */}
      {/* _hidden: <Location /> — 住所・地図は Footer に統合済み */}
    </main>
  );
}
