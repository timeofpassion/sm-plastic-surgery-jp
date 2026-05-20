import Header from '@/components/Header'
import SocialFloat from '@/components/SocialFloat'
import Footer from '@/components/sections/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SocialFloat />
      <Header />
      <main className="min-h-screen bg-bg-base">{children}</main>
      <Footer />
    </>
  )
}
