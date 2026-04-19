import Navigation from "@/components/Navigation";
import SocialFloat from "@/components/SocialFloat";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import Director from "@/components/sections/Director";
import Principles from "@/components/sections/Principles";
import GangnamReviews from "@/components/sections/GangnamReviews";
import Stats from "@/components/sections/Stats";
import Procedures from "@/components/sections/Procedures";
import EyeSurgery from "@/components/sections/EyeSurgery";
import SkinLifting from "@/components/sections/SkinLifting";
import Safety from "@/components/sections/Safety";
import Gallery from "@/components/sections/Gallery";
import Media from "@/components/sections/Media";
import Shorts from "@/components/sections/Shorts";
import Location from "@/components/sections/Location";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main id="top" className="relative">
      <SocialFloat />
      <Navigation />
      {/* 브랜드 미션 (메인 히어로 · SkinMedi 스타일) */}
      <BrandStatement />
      {/* 신뢰를 쌓은 시간 */}
      <Stats />
      <Hero />
      <GangnamReviews />
      {/* 1. SMPS 철학 */}
      <Director />
      <Principles />
      {/* 2. 가슴수술 */}
      <Procedures />
      {/* 3. Before & After (가슴 → 바로 전후사진) */}
      <Gallery />
      {/* 4. 마케팅채널 (YouTube + Shorts) - 눈성형 위로 이동 */}
      <Media />
      <Shorts />
      {/* 5. 눈성형 */}
      <EyeSurgery />
      {/* 6. 피부·리프팅 */}
      <SkinLifting />
      {/* 7. 안전마취센터 */}
      <Safety />
      {/* 오시는 길 */}
      <Location />
      <Consultation />
      <Footer />
    </main>
  );
}
