export const dynamic = 'force-dynamic'

import Navigation from "@/components/Navigation";
import SocialFloat from "@/components/SocialFloat";
import Hero from "@/components/sections/Hero";
import Principles from "@/components/sections/Principles";
import Stats from "@/components/sections/Stats";
import Director from "@/components/sections/Director";
import Procedures from "@/components/sections/Procedures";
import EyeSurgery from "@/components/sections/EyeSurgery";
import SkinLifting from "@/components/sections/SkinLifting";
import Gallery from "@/components/sections/Gallery";
import LatestBlog from "@/components/sections/LatestBlog";
import FAQ from "@/components/sections/FAQ";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";
// _hidden: import GangnamReviews from "@/components/sections/GangnamReviews";
// _hidden: import Reviews from "@/components/sections/Reviews";
// _hidden: import Media from "@/components/sections/Media";
// _hidden: import Shorts from "@/components/sections/Shorts";
// _hidden: import Safety from "@/components/sections/Safety";
// _hidden: import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <main id="top" className="relative">
      <SocialFloat />
      <Navigation />

      {/* 1. HERO */}
      <Hero />

      {/* 2. About / Philosophy */}
      <Principles />

      {/* 3. Numbers */}
      <Stats />

      {/* 4. Staff */}
      <Director />

      {/* 5. Services */}
      <Procedures />
      <EyeSurgery />
      <SkinLifting />

      {/* 6. Before & After */}
      <Gallery />

      {/* ブログ */}
      <LatestBlog />

      {/* FAQ */}
      <FAQ />

      {/* 7. Contact */}
      <Consultation />

      {/* Footer — Access (住所・地図) 統合済み */}
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
