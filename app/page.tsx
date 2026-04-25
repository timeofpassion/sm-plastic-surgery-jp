import Navigation from "@/components/Navigation";
import SocialFloat from "@/components/SocialFloat";
import Hero from "@/components/sections/Hero";
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
import FAQ from "@/components/sections/FAQ";
import LatestBlog from "@/components/sections/LatestBlog";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main id="top" className="relative">
      <SocialFloat />
      <Navigation />
      <Hero />
      {/* 대표원장 소개 */}
      <Director />
      {/* 신뢰 지표 */}
      <Stats />
      {/* 최신 블로그 */}
      <LatestBlog />
      {/* 가슴수술 */}
      <Procedures />
      {/* Before & After */}
      <Gallery />
      {/* 눈성형 */}
      <EyeSurgery />
      {/* 피부·리프팅 */}
      <SkinLifting />
      {/* FAQ — 메인 정보 콘텐츠 */}
      <FAQ />
      {/* 마케팅채널 */}
      <Media />
      <Shorts />
      {/* SMPS 철학 */}
      <Principles />
      {/* 안전마취센터 */}
      <Safety />
      {/* 리뷰 */}
      <GangnamReviews />
      {/* 상담 예약 */}
      <Consultation />
      {/* 오시는 길 */}
      <Location />
      <Footer />
    </main>
  );
}
