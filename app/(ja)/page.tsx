export const dynamic = 'force-dynamic'

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
      {/* 신뢰 지표 */}
      <Stats />
      {/* 수술 전 주의사항 */}
      <Procedures />
      {/* 클리닉 블로그 */}
      <LatestBlog />
      {/* 눈성형 */}
      <EyeSurgery />
      {/* 피부·리프팅 */}
      <SkinLifting />
      {/* Before & After 리뷰사진 */}
      <Gallery />
      {/* 리뷰 후기 */}
      <GangnamReviews />
      {/* 대표원장 소개 */}
      <Director />
      {/* FAQ — 메인 정보 콘텐츠 */}
      <FAQ />
      {/* 마케팅채널 */}
      <Media />
      <Shorts />
      {/* SMPS 철학 */}
      <Principles />
      {/* 상담 예약 */}
      <Consultation />
      {/* 오시는 길 */}
      <Location />
      <Footer />
    </main>
  );
}
