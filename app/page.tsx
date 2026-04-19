import Navigation from "@/components/Navigation";
import SocialFloat from "@/components/SocialFloat";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import Director from "@/components/sections/Director";
import Principles from "@/components/sections/Principles";
import Stats from "@/components/sections/Stats";
import Procedures from "@/components/sections/Procedures";
import EyeSurgery from "@/components/sections/EyeSurgery";
import SkinLifting from "@/components/sections/SkinLifting";
import Safety from "@/components/sections/Safety";
import Gallery from "@/components/sections/Gallery";
import Media from "@/components/sections/Media";
import Shorts from "@/components/sections/Shorts";
import International from "@/components/sections/International";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import Consultation from "@/components/sections/Consultation";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <SocialFloat />
      <Navigation />
      {/* 브랜드 미션 (메인 히어로 · SkinMedi 스타일) */}
      <BrandStatement />
      {/* 신뢰를 쌓은 시간 */}
      <Stats />
      <Hero />
      {/* 1. SMPS 철학 */}
      <Director />
      <Principles />
      {/* 2. 가슴수술 */}
      <Procedures />
      {/* 3. 눈성형 */}
      <EyeSurgery />
      {/* 4. 피부·리프팅 */}
      <SkinLifting />
      {/* 5. 안전마취센터 */}
      <Safety />
      {/* 6. Before & After */}
      <Gallery />
      {/* 7. 마케팅채널 (YouTube) */}
      <Media />
      <Shorts />
      {/* 해외 의료진 교류 · 논문 */}
      <International />
      {/* 8. FAQ */}
      <FAQ />
      {/* 오시는 길 */}
      <Location />
      <Consultation />
      <Footer />
    </main>
  );
}
