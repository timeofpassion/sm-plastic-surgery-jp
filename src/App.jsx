import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import WhySM from './sections/WhySM'
import Procedures from './sections/Procedures'
import Safety from './sections/Safety'
import Results from './sections/Results'
import EyeSurgery from './sections/EyeSurgery'
import SkinLifting from './sections/SkinLifting'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import Reservation from './sections/Reservation'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhySM />
      <Procedures />
      <Safety />
      <Results />
      <EyeSurgery />
      <SkinLifting />
      <Reviews />
      <FAQ />
      <Reservation />
      <Footer />
    </>
  )
}
