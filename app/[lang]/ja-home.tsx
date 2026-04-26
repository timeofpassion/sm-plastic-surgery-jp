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

export default function JaHomePage() {
  return (
    <main id="top" className="relative">
      <SocialFloat />
      <Navigation />
      <Hero />
      <Director />
      <Stats />
      <LatestBlog />
      <Procedures />
      <Gallery />
      <EyeSurgery />
      <SkinLifting />
      <FAQ />
      <Media />
      <Shorts />
      <Principles />
      <Safety />
      <GangnamReviews />
      <Consultation />
      <Location />
      <Footer />
    </main>
  )
}
