import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pt-nav min-h-screen bg-bg-base">{children}</main>
      <Footer />
    </>
  )
}
