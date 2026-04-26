import Link from 'next/link'

const LINE_URL = 'https://line.me/R/ti/p/@952nqpbr'
const MESSENGER_URL = 'https://m.me/smplasticsurgery'
const SITE_URL = 'https://www.smpsjp.com'

function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
    </svg>
  )
}

export default function EnHomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/en/" className="flex items-center gap-3">
            <img src="/logo_smps.png" alt="SM Plastic Surgery" className="h-7 w-auto"
              style={{ filter: 'brightness(0.45) hue-rotate(208deg) saturate(2.2) contrast(1.1)' }} />
            <span className="text-sm font-semibold text-gray-800 hidden sm:block">SM Plastic Surgery</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors px-2 py-1 rounded border border-gray-200">日本語</a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#06C755] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity">
              <LineIcon /> LINE
            </a>
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0084FF] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity">
              <MessengerIcon /> Messenger
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EEF4FC] via-[#F3F7FD] to-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#B8942A] uppercase mb-5">
            SM PLASTIC SURGERY — Gangnam · Seoul
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Korea&rsquo;s Breast Surgery<br />
            <span className="text-[#1253A6]">Designed by Medicine.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
            Dr. Lee Moo-young, graduate of Seoul National University School of Medicine,
            has been operating at the same Gangnam location for 12+ years.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0084FF] text-white font-medium rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md">
              <MessengerIcon /> Contact via Messenger
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#06C755] text-white font-medium rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md">
              <LineIcon /> LINE Consultation
            </a>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-gray-200">
            {[
              { label: 'Gangnam Review Rating', value: '9.7 / 10' },
              { label: 'Patient Reviews', value: '872+' },
              { label: 'Est.', value: '2013' },
              { label: 'Credentials', value: 'Asan Medical Center' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[0.7rem] text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xl font-bold text-gray-900">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#1253A6] uppercase mb-3">WHY SM</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why International Patients Choose SM
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'One Clinic. One Surgeon. 12 Years.',
                desc: 'Most Gangnam clinics expand branches or change surgeons. Dr. Lee has worked at the same Gangnam address since 2013 — the same door, the same hands, every time.',
              },
              {
                num: '02',
                title: 'Dedicated English & Multi-language Support',
                desc: 'From first consultation to post-surgery follow-up, one dedicated coordinator handles everything. No getting passed around between staff.',
              },
              {
                num: '03',
                title: 'Medicine, Not Trends',
                desc: 'Chest structure, skin type, and lifestyle are all assessed before surgery. Academic research informs every plan — not social media trends.',
              },
            ].map((p) => (
              <div key={p.num} className="border border-gray-100 rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#1253A6]/20 mb-3">{p.num}</p>
                <h3 className="font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#1253A6] uppercase mb-3">PROCEDURES</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Specialties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Hybrid Breast Augmentation',
                tag: 'FLAGSHIP',
                desc: 'Silicone implant + autologous fat grafting combined. More natural look and feel — our most requested procedure.',
              },
              {
                title: 'Breast Augmentation (Implant)',
                tag: 'BREAST',
                desc: 'Implant type and position selected after thorough assessment of chest width, skin elasticity, and medical history.',
              },
              {
                title: 'Breast Revision Surgery',
                tag: 'REVISION',
                desc: 'Capsule contracture, implant displacement, asymmetry — complex revision cases handled with ultrasound-guided planning.',
              },
              {
                title: 'Double Eyelid Surgery',
                tag: 'EYE',
                desc: 'Incision method / natural adhesion / buried suture — selected based on eyelid anatomy and desired outcome.',
              },
              {
                title: 'Ptosis Correction',
                tag: 'EYE',
                desc: 'Correct drooping eyelid caused by weakened levator muscle. Often combined with double eyelid surgery.',
              },
              {
                title: 'Skin & Lifting Treatments',
                tag: 'SKIN',
                desc: 'Botox, filler, Thermage, Ulthera — available during your recovery stay in Korea.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <span className="text-[0.65rem] font-bold tracking-widest text-[#1253A6] bg-[#1253A6]/10 px-2 py-0.5 rounded-full">{p.tag}</span>
                <h3 className="font-semibold text-gray-900 mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#1253A6] uppercase mb-3">DIRECTOR</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Lee Moo-young</h2>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              {[
                'Seoul National University School of Medicine, Graduate',
                'Plastic Surgery Specialist — Asan Medical Center',
                'Former Chief, Ulsan University Hospital Plastic Surgery',
                '12+ years at the same Gangnam location (since 2013)',
                'Member, Korean Society of Plastic and Reconstructive Surgeons',
              ].map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <span className="text-[#1253A6] mt-0.5">•</span> {l}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0084FF] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                <MessengerIcon /> Ask via Messenger
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#EEF4FC] to-[#dce8f8] rounded-3xl h-72 flex items-center justify-center">
            <img src="/doctor.png" alt="Dr. Lee Moo-young" className="h-full object-contain rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-[#1253A6] uppercase mb-3">BLOG</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn Before You Decide</h2>
          <p className="text-gray-500 mb-8">In-depth guides on breast surgery, eye surgery, and skin treatments from our clinical team.</p>
          <Link href="/en/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1253A6] text-[#1253A6] font-medium rounded-full hover:bg-[#1253A6] hover:text-white transition-colors">
            Read Our Blog →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1253A6]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Consultation?</h2>
          <p className="text-blue-200 mb-10 text-lg">
            Send us a message and our English-speaking coordinator will respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0084FF] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
              <MessengerIcon /> Facebook Messenger
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
              <LineIcon /> LINE
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">Free online consultation · No commitment required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-semibold text-white mb-1">SM Plastic Surgery (에스엠성형외과)</p>
            <p>Gangnam-daero 435, Seocho-gu, Seoul · 9F Juryuseong Bldg</p>
            <p>Mon–Fri 10:00–19:00 · Sat 10:00–16:00</p>
          </div>
          <div className="flex gap-6 items-start">
            <a href="/" className="hover:text-white transition-colors">日本語</a>
            <a href={`${SITE_URL}/en/blog`} className="hover:text-white transition-colors">Blog</a>
            <a href="https://www.youtube.com/@smplasticsurgery" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
