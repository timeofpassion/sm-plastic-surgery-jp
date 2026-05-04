'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import EnNav from '@/components/en/EnNav'

const LINE_URL = 'https://line.me/R/ti/p/@952nqpbr'
const MESSENGER_URL = 'https://m.me/smplasticsurgery'

// ─── Icon helpers ────────────────────────────────────────────────────────────

function LineIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className="shrink-0">
      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
    </svg>
  )
}

function MessengerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className="shrink-0">
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
    </svg>
  )
}

// ─── Social Float ─────────────────────────────────────────────────────────────

const EN_SOCIALS = [
  {
    name: 'Messenger',
    platform: 'messenger',
    href: MESSENGER_URL,
    bg: '#0084FF',
    isPrimary: true,
    label: 'Messenger',
    icon: <MessengerIcon size={20} />,
  },
  {
    name: 'LINE',
    platform: 'line',
    href: LINE_URL,
    bg: '#06C755',
    isPrimary: false,
    label: '',
    icon: <LineIcon size={20} />,
  },
  {
    name: 'YouTube',
    platform: 'youtube',
    href: 'https://www.youtube.com/@smplasticsurgery',
    bg: '#FF0000',
    isPrimary: false,
    label: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    platform: 'instagram',
    href: 'https://www.instagram.com/sm_official_jp',
    bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    isPrimary: false,
    label: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'X',
    platform: 'x',
    href: 'https://x.com/smps8888',
    bg: '#000000',
    isPrimary: false,
    label: '',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

function EnSocialFloat() {
  return (
    <div className="fixed right-3 bottom-4 lg:right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-[200] flex flex-col items-end gap-1.5 lg:gap-2">
      {EN_SOCIALS.map((s) => {
        if (s.isPrimary) {
          return (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.name} data-social={s.platform} data-track-location="floating"
              className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-full text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:shadow-xl"
              style={{ background: s.bg }}>
              {s.icon}
              <span className="text-[0.72rem] lg:text-[0.8rem] font-semibold whitespace-nowrap">
                Messenger
              </span>
            </a>
          )
        }
        return (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
            aria-label={s.name} data-social={s.platform}
            className="group relative w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 hover:shadow-xl"
            style={{ background: s.bg }}>
            {s.icon}
            <span className="absolute right-full mr-3 whitespace-nowrap bg-neutral-900/90 text-white text-[0.75rem] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {s.name}
            </span>
          </a>
        )
      })}
    </div>
  )
}

// ─── Procedures (carousel) ───────────────────────────────────────────────────

const PROCEDURE_CARDS = [
  {
    num: '01', tag: 'Implant Shape', sub: 'Round vs. Teardrop',
    title: 'Round vs.\nTeardrop',
    image: '/breast_01.png',
    points: [
      'Round: uniform volume, shape unchanged if implant rotates',
      'Teardrop: most natural silhouette when standing',
      'Teardrop requires textured surface to prevent rotation',
      'Selection based on chest structure, skin, and desired outcome',
    ],
    detail: 'Mentor (J&J) physical samples available for comparison at consultation',
  },
  {
    num: '02', tag: 'Implant Surface', sub: 'Smooth vs. Textured',
    title: 'Smooth vs.\nTextured',
    image: '/breast_02.png',
    points: [
      'Smooth: soft surface, typically used with round implants',
      'Textured: tissue adherence for positional stability, essential for teardrop',
      'Micro-textured (e.g. Motiva): intermediate roughness, soft feel',
      'Textured–BIA-ALCL association reported — reviewed with surgeon at consultation',
    ],
    detail: 'Surface choice is determined together with implant shape and placement',
  },
  {
    num: '03', tag: 'Pocket Placement', sub: 'Dual Plane',
    title: 'Dual Plane\nPlacement',
    image: '/breast_03.png',
    points: [
      'Sub-glandular (over muscle): faster recovery, rippling risk if skin is thin',
      'Sub-muscular (fully under): natural look but animation deformity possible',
      'Dual Plane ★: upper sub-muscular + lower sub-glandular — most selected',
      'Dual plane type 1–3 classified based on chest and skin thickness',
    ],
    detail: 'Dual plane is the default starting point for most cases at SM',
  },
  {
    num: '04', tag: 'Incision Site', sub: 'IMF vs. Axillary',
    title: 'IMF vs.\nAxillary Incision',
    image: '/doctor.png',
    points: [
      'IMF (inframammary fold): widest surgical view, scar hidden in the fold',
      'Axillary (transaxillary): no scar on the breast, but limited view',
      'Periareolar: scar hidden along areolar border, possible nipple sensation change',
      'SM default recommendation: IMF (same incision usable for revision)',
    ],
    detail: 'Provides the widest operative view for precise dissection',
  },
  {
    num: '05', tag: 'Hybrid Augmentation', sub: 'Implant + Fat Transfer',
    title: 'Implant +\nFat Transfer',
    image: '/expert.png',
    points: [
      'Implant provides the core volume; autologous fat refines the décolletage',
      'Solves implant edge visibility and limited fat-only volume simultaneously',
      'Fat survival rate 40–60%; final shape confirmed after 6+ months',
      'Bruising and swelling at donor site (thigh/abdomen) expected',
    ],
    detail: '4–5 nights stay recommended | Surgery approx. 3–4 hours',
  },
  {
    num: '06', tag: 'Revision Surgery', sub: 'Contracture & Deformity',
    title: 'Capsular Contracture\n& Revision',
    image: '/resurgery.png',
    points: [
      'Baker II–IV contracture: capsulectomy + implant exchange',
      'Implant displacement, rotation, rippling, asymmetry correction',
      'Ultrasound assessment even without prior surgery records',
      'Complex revision cases handled directly by Dr. Lee Moo-young',
    ],
    detail: 'Revisions from other clinics accepted | Ultrasound-guided planning',
  },
]

function EnProcedures() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false, dragFree: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section id="procedures" className="py-12 lg:py-20 bg-[#EEF4FC]">
      <div className="w-full max-w-content mx-auto px-6 mb-8 lg:mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-gold font-semibold block mb-3">
              Breast Surgery Guide
            </span>
            <h2 className="font-serif-display text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] font-medium leading-[1.2]">
              What to Know<br />Before Surgery
            </h2>
            <p className="text-[0.9rem] lg:text-[0.95rem] text-text-sub leading-[1.75] max-w-xl mt-3">
              Implant shape, surface, pocket, incision, hybrid, and revision — at SM, we walk through each factor in consultation and decide on the right combination together.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 pb-1">
            <button onClick={scrollPrev} disabled={!canScrollPrev} aria-label="Previous"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollPrev ? 'border-text-main text-text-main hover:bg-text-main hover:text-white' : 'border-border-default text-text-sub opacity-40 cursor-not-allowed'}`}>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollNext} disabled={!canScrollNext} aria-label="Next"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${canScrollNext ? 'border-text-main text-text-main hover:bg-text-main hover:text-white' : 'border-border-default text-text-sub opacity-40 cursor-not-allowed'}`}>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 lg:gap-4 pl-6 xl:pl-[calc((100vw-1100px)/2_+_24px)]">
          {PROCEDURE_CARDS.map((card, i) => (
            <div key={i}
              className="flex-[0_0_85%] md:flex-[0_0_46%] xl:flex-[0_0_31%] relative h-[480px] lg:h-[540px] overflow-hidden group shrink-0">
              <img src={card.image} alt={card.tag}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
              <div className="absolute inset-0 p-6 lg:p-7 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] font-bold text-white/40 tracking-[0.15em]">{card.num}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent-gold font-semibold">{card.tag}</span>
                </div>
                <div className="mt-auto">
                  <p className="text-[0.68rem] uppercase tracking-[0.15em] text-white/50 mb-2">{card.sub}</p>
                  <h3 className="font-serif-display text-[1.4rem] lg:text-[1.55rem] font-semibold text-white leading-[1.25] mb-5 whitespace-pre-line">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[0.78rem] lg:text-[0.82rem] text-white/80 leading-[1.6]">
                        <span className="text-accent-gold shrink-0 mt-[2px] select-none">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[0.7rem] text-white/45 pt-3 border-t border-white/10 leading-relaxed">{card.detail}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-[0_0_16px] md:flex-[0_0_24px] shrink-0" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mt-7">
        {PROCEDURE_CARDS.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-6 bg-brand' : 'w-1.5 bg-border-default hover:bg-text-sub'}`} />
        ))}
      </div>
    </section>
  )
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const GALLERY_STANDARDS = [
  { tag: 'NO PHOTOSHOP', title: 'Zero Retouching or Photo Editing', desc: 'No lighting adjustment, filters, or skin retouching. These are the original, unedited photos.' },
  { tag: 'SAME CONDITION', title: 'Identical Lighting · Angle · Distance · Makeup', desc: 'Before and after photos are taken in the exact same environment, every time.' },
  { tag: 'SIGNED CONSENT', title: 'Shared Only With Signed Patient Consent', desc: 'Not a single photo is posted without a signed consent form from the patient.' },
]

const GALLERY_FILTERS = ['Breast Surgery', 'Eye Surgery'] as const
type GalleryFilter = typeof GALLERY_FILTERS[number]

const GALLERY_CASES = [
  { category: 'Breast Surgery' as GalleryFilter, label: 'Breast Augmentation', before: '/ba_가슴_01_before.png', after: '/ba_가슴_01_after.png', afterLabel: 'After Surgery' },
  { category: 'Breast Surgery' as GalleryFilter, label: 'Breast Augmentation', before: '/ba_가슴_02_before.png', after: '/ba_가슴_02_after.png', afterLabel: 'After Surgery' },
  { category: 'Eye Surgery' as GalleryFilter, label: 'Double Eyelid Surgery', before: '/ba_눈_01_before.png', after: '/ba_눈_01_after.png', afterLabel: 'After Surgery' },
  { category: 'Eye Surgery' as GalleryFilter, label: 'Double Eyelid Surgery', before: '/ba_눈_02_before.png', after: '/ba_눈_02_after.png', afterLabel: 'After Surgery' },
]

function EnGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('Breast Surgery')
  const [selectedIdx, setSelectedIdx] = useState(0)

  const filtered = GALLERY_CASES.filter((c) => c.category === filter)
  const selected = filtered[selectedIdx] ?? filtered[0]

  const handleFilter = (f: GalleryFilter) => { setFilter(f); setSelectedIdx(0) }

  return (
    <section id="gallery" className="py-12 lg:py-[70px] flex justify-center bg-[#F3F7FD]">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">Before &amp; After</span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-5">
          Results Proven by Skill
        </h2>
        <p className="text-[1.05rem] lg:text-[1.15rem] text-text-main mb-4 max-w-[760px] leading-[1.8]">
          We aim for the most precise design that enhances your natural beauty rather than excessive transformation.
        </p>
        <p className="text-[0.9rem] text-text-sub mb-12 max-w-[760px]">
          Three principles SM has upheld for 12 years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {GALLERY_STANDARDS.map((s, i) => (
            <div key={s.title}
              className="p-6 lg:p-8 bg-brand text-white flex flex-col gap-3 transition-all hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="text-[0.75rem] font-bold tracking-[0.15em] text-white bg-white/15 px-2 py-0.5 rounded-sm">0{i + 1}</span>
                <span className="text-[0.7rem] tracking-[0.2em] text-white/70 font-semibold">{s.tag}</span>
              </div>
              <h3 className="text-[1.1rem] lg:text-[1.25rem] font-bold text-white leading-tight">{s.title}</h3>
              <p className="text-[0.9rem] text-white/85 leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-8 mb-10 text-[1rem] border-b border-border-default pb-4 flex-wrap">
          {GALLERY_FILTERS.map((f) => (
            <button key={f} onClick={() => handleFilter(f)}
              className={`cursor-pointer transition-colors pb-2 ${filter === f ? 'text-text-main font-bold border-b-2 border-brand -mb-[18px]' : 'text-text-sub hover:text-text-main'}`}>
              {f}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mb-16">
            <div className="relative w-full bg-bg-sub-alt border border-border-default overflow-hidden">
              <div className="grid grid-cols-2">
                <img src={selected.before} alt={`${selected.label} before`} className="w-full h-auto block" />
                <img src={selected.after} alt={`${selected.label} after`} className="w-full h-auto block" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="bg-bg-sub text-text-sub text-center py-3 text-[0.95rem] font-medium">Before</div>
              <div className="bg-[#1e2a4a] text-white text-center py-3 text-[0.95rem] font-medium">{selected.afterLabel ?? 'After'}</div>
            </div>
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <div className="font-semibold text-[1.1rem] lg:text-[1.25rem] text-text-main">{selected.label}</div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {filtered.map((c, i) => {
            const isActive = i === selectedIdx
            return (
              <button key={`${c.before}-${i}`} onClick={() => setSelectedIdx(i)}
                className={`text-left flex flex-col transition-all ${isActive ? 'ring-2 ring-text-main' : 'hover:ring-1 hover:ring-border-default'}`}>
                <div className="w-full grid grid-cols-2 bg-bg-sub-alt overflow-hidden">
                  <img src={c.before} alt="" className="w-full h-auto block" />
                  <img src={c.after} alt="" className="w-full h-auto block" />
                </div>
                <div className={`py-3 px-3 text-center text-[0.85rem] transition-colors ${isActive ? 'bg-text-main text-white font-semibold' : 'bg-bg-sub text-text-sub'}`}>
                  {c.label}
                </div>
              </button>
            )
          })}
        </div>

        <div className="border-t border-border-default pt-10">
          <h3 className="font-serif-display text-[1rem] font-semibold text-text-main mb-4 flex items-center gap-2 before:content-[''] before:w-3 before:h-px before:bg-brand">
            Disclaimer
          </h3>
          <p className="text-[0.85rem] text-text-sub leading-[1.8] max-w-[900px]">
            Surgical outcomes vary depending on skin elasticity, chest structure, and post-operative care.
            Side effects (bleeding, infection, asymmetry, implant-related complications) may occur; details are explained individually during consultation.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Eye Surgery ──────────────────────────────────────────────────────────────

const EYE_ITEMS = [
  {
    num: '①', title: 'Double Eyelid Surgery',
    desc: (
      <>
        Creates a defined eyelid crease for eyes that appear flat or overly sharp. Methods include{' '}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">buried suture / natural adhesion / incision</mark>{' '}
        — selected based on eyelid anatomy and desired look.
      </>
    ),
    image: '/ai_02.png',
  },
  {
    num: '②', title: 'Upper Blepharoplasty',
    desc: (
      <>
        Removes excess skin, muscle, and fat from drooping upper eyelids, improving visual field and creating a younger, more defined look. Methods include{' '}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">incision / brow lift</mark>.
      </>
    ),
    image: '/ai_05.png',
  },
  {
    num: '③', title: 'Lower Blepharoplasty',
    desc: (
      <>
        Corrects under-eye fat protrusion, dark circles, and fine wrinkles for a smoother, more refreshed under-eye contour. Methods include{' '}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">fat repositioning / fat resection</mark>.
      </>
    ),
    image: '/ai_12.png',
  },
  {
    num: '④', title: 'Ptosis Correction',
    desc: (
      <>
        Corrects a sleepy or heavy-looking eye caused by a weakened levator muscle, resulting in a brighter, more defined gaze. Methods include{' '}
        <mark className="bg-sky-100 text-text-main px-1 font-medium">levator shortening / Müller&apos;s muscle shortening</mark>.
      </>
    ),
    image: '/ai_04.png',
  },
]

function EnEyeSurgery() {
  const [active, setActive] = useState(0)
  const selected = EYE_ITEMS[active]

  return (
    <section id="eye" className="py-12 lg:py-[70px] flex justify-center bg-[#F3F7FD]">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">Eye Surgery</span>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3.2rem] font-medium leading-[1.3] mb-6">
          Beyond breast surgery — SM is also{' '}
          <span className="inline-block bg-brand text-white px-3 py-1">No.1 for Eye Surgery</span>{' '}
          in Korea.
        </h2>
        <p className="text-[1.2rem] lg:text-[1.4rem] text-text-main font-medium mb-12 max-w-[720px]">
          Get your eye surgery done on the same day as your breast surgery.
        </p>

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[520px] bg-bg-sub-alt">
            {EYE_ITEMS.map((item, i) => (
              <img key={item.title} src={item.image} alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
            ))}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/65 to-transparent pointer-events-none">
              <span className="font-serif-display text-[3.5rem] text-white/25 leading-none block">{selected.num}</span>
              <h3 className="font-serif-display text-[2rem] text-white font-medium leading-tight">{selected.title}</h3>
            </div>
          </div>

          <div className="flex flex-col border-t border-border-default lg:border-t-0 lg:border-l border-border-default">
            {EYE_ITEMS.map((item, i) => {
              const isActive = i === active
              return (
                <button key={item.title} onClick={() => setActive(i)}
                  className={`text-left px-8 py-7 border-b border-border-default transition-colors duration-200 ${isActive ? 'bg-bg-sub-alt' : 'hover:bg-bg-sub'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span className={`font-serif-display text-[1.1rem] mt-0.5 shrink-0 transition-colors ${isActive ? 'text-brand' : 'text-text-sub'}`}>{item.num}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-[1.15rem] font-semibold mb-0 transition-colors ${isActive ? 'text-brand' : 'text-text-main'}`}>{item.title}</h3>
                        <div className={`text-[0.88rem] text-text-sub leading-[1.8] transition-all duration-400 overflow-hidden ${isActive ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className={`text-[1.4rem] leading-none shrink-0 transition-all duration-300 mt-0.5 ${isActive ? 'rotate-45 text-brand' : 'text-text-sub'}`}>+</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

type FAQItem = { q: string; a: React.ReactNode }

const FAQ_MEDICAL: FAQItem[] = [
  {
    q: 'Motiva vs. Mentor implants — what\'s the difference? Which is right for me?',
    a: (
      <>
        <p>The two most-compared brands in the Gangnam breast augmentation market.</p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>Mentor (Johnson &amp; Johnson)</strong> — US FDA-approved, the longest clinical data record. Available in round and teardrop. Cohesive gel stability well-established.
          </li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">
            <strong>Motiva</strong> — Micro-textured surface balances tissue adherence with smooth-like feel. High fill rate reduces rippling with natural movement.
          </li>
        </ul>
        <p className="mt-3">Neither is universally better. The decision depends on chest width, skin thickness, and desired feel. At SM, we compare physical implant samples and use <strong>ultrasound assessment</strong> at consultation to decide together.</p>
      </>
    ),
  },
  {
    q: 'What is capsular contracture and how common is it? Can it be prevented?',
    a: (
      <>
        <p>Capsular contracture is a hardening of the breast caused by the fibrous capsule around the implant contracting excessively. It is the most commonly cited complication, with reported rates of <strong>5–10%</strong> depending on surgical setting.</p>
        <p className="mt-3">SM&apos;s prevention protocol:</p>
        <ul className="mt-2 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Keller Funnel</strong> — implant inserted without direct hand contact, minimizing contamination</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Sterile surgical system — pocket irrigation, antibiotic lavage</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Dual plane approach to minimize bleeding and hematoma</li>
        </ul>
        <p className="mt-3 text-[0.88rem] border-l-2 border-accent-gold pl-3">With modern cohesive gel implants, post-op massage may be unnecessary or even counterproductive. Discuss with your surgeon after surgery.</p>
      </>
    ),
  },
  {
    q: 'Axillary incision vs. inframammary fold (IMF) — is there a difference in scarring?',
    a: (
      <>
        <p>The two most commonly selected incision approaches in Gangnam breast surgery.</p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>IMF (inframammary fold)</strong> — incision along the natural breast crease. Widest surgical view for precise dissection; scar is hidden inside the fold; same incision reused for revision.</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Axillary (transaxillary)</strong> — no visible scar on the breast, but relatively limited view; separate incision may be needed for revision.</li>
        </ul>
        <p className="mt-3">The choice considers lifestyle factors such as swimwear, potential future revision, and skin healing tendency. Actual scar photos for each method are shown at consultation.</p>
      </>
    ),
  },
  {
    q: 'Is a drainage tube required? How long do I need to wear a compression garment?',
    a: (
      <>
        <p>A drain (drainage tube) removes post-operative fluid. At SM, precise hemostasis and dissection often allow surgery <strong>without a drain</strong>. Revision cases or extensive capsulectomy may require one; this is discussed at consultation.</p>
        <p className="mt-3">Compression garments (bras) are recommended for <strong>4 weeks</strong> to manage swelling and stabilize the implants.</p>
      </>
    ),
  },
  {
    q: 'What is Dual Plane? How does it differ from over- or under-the-muscle?',
    a: (
      <>
        <p>Dual plane is currently the most widely used placement method in Gangnam breast augmentation. The upper portion of the implant sits under the pectoralis major muscle, while the lower portion lies above the fascia — combining both layers.</p>
        <ul className="mt-3 space-y-2">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Sub-glandular (over muscle)</strong> — faster recovery; rippling possible if skin and fat are thin.</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Sub-muscular (fully under muscle)</strong> — natural result, but animation deformity possible with arm movement; longer recovery.</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Dual Plane ★</strong> — pursues natural contour, faster recovery, and minimal rippling simultaneously. SM&apos;s most commonly applied technique.</li>
        </ul>
      </>
    ),
  },
  {
    q: 'How is implant size (cc) determined? Can I request a specific size?',
    a: (
      <>
        <p>Implant size is not determined by desired cup size alone. <strong>Chest base width</strong> is the most critical factor; exceeding it increases the risk of rippling, contracture, and displacement.</p>
        <ul className="mt-3 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Chest width measured → appropriate implant diameter range calculated</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Skin thickness and elasticity assessed</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Bringing reference photos allows shared goal-setting</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Physical sizer simulation with real implant samples</li>
        </ul>
      </>
    ),
  },
  {
    q: 'Can I breastfeed after breast augmentation? Does it affect pregnancy?',
    a: (
      <>
        <p>When IMF or axillary incision is combined with dual plane placement, the glandular tissue is not directly disturbed — <strong>breastfeeding is typically possible</strong>. Periareolar incision carries a risk of ductal injury and may affect nursing.</p>
        <p className="mt-3">If you have pregnancy plans, please mention this at consultation so incision and placement can be designed accordingly.</p>
        <p className="mt-3 text-[0.88rem] border-l-2 border-accent-gold pl-3">Pregnancy and breastfeeding can alter breast shape. Some patients choose a reshaping procedure after delivery and nursing.</p>
      </>
    ),
  },
  {
    q: 'How long do implants last? Do they need to be replaced on a schedule?',
    a: (
      <>
        <p>Modern cohesive gel implants are <strong>not consumables with a fixed lifespan</strong>. Major brands like Mentor offer lifetime warranty coverage for rupture.</p>
        <p className="mt-3">Situations where replacement is considered:</p>
        <ul className="mt-2 space-y-1.5">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Capsular contracture progressing to Baker Grade III–IV</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Implant rupture (confirmed by ultrasound or MRI)</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Elective reshaping after aging or postpartum changes</li>
        </ul>
        <p className="mt-3">No periodic replacement is needed if asymptomatic. Ultrasound screening every <strong>3–5 years</strong> is recommended.</p>
      </>
    ),
  },
]

const FAQ_PRACTICAL: FAQItem[] = [
  {
    q: 'Can consultations be done in English? Is there a dedicated English coordinator?',
    a: (
      <>
        Yes. Our dedicated English-speaking coordinator handles LINE, email, and messaging consultations. From check-in on surgery day through discharge, and continuing post-return follow-up — the same coordinator manages your entire journey. Full English communication is available throughout consultation, surgery, and recovery.
      </>
    ),
  },
  {
    q: 'Can I check out on the same day as surgery? How long is the recovery room stay?',
    a: (
      <>
        <p>For standard breast augmentation, <strong>same-day discharge is possible</strong>. After 2–3 hours of rest in the recovery room, your coordinator will assist with departure.</p>
        <p className="mt-3">For poor condition, revision, or combined procedures, 1-night admission may be recommended. For overseas patients, we recommend a next-morning check (swelling and suture assessment) before departing.</p>
      </>
    ),
  },
  {
    q: 'How many days do I need to stay in Korea? What is the minimum itinerary?',
    a: (
      <ul className="mt-3 space-y-2">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Breast augmentation only:</strong> 3 nights 4 days (includes next-morning check)</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Hybrid (implant + fat transfer):</strong> 4–5 nights recommended</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Revision with capsulectomy:</strong> 5 nights 6 days recommended</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Eye + breast combined:</strong> 5+ nights recommended</li>
      </ul>
    ),
  },
  {
    q: 'When can I shower, return to work, and exercise?',
    a: (
      <ul className="mt-3 space-y-2">
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Full shower:</strong> after suture removal (approx. day 7)</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Light daily activity / return to desk work:</strong> from week 2 (excluding heavy lifting and upper-body strain)</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Lower-body exercise:</strong> from week 4</li>
        <li className="pl-4 relative before:content-['-'] before:absolute before:left-0"><strong>Upper-body exercise, swimming, sauna:</strong> from week 6+</li>
      </ul>
    ),
  },
  {
    q: 'What does the aftercare program look like? Is follow-up available after returning home?',
    a: (
      <>
        <p>Follow-up continues after you return home via Messenger or LINE. At <strong>1 week, 1 month, 3 months, 6 months, and 1 year</strong> post-surgery, send us photos and the surgeon personally reviews and provides feedback.</p>
        <p className="mt-3">In urgent situations, we connect you to affiliated clinics abroad for emergency care. Suture removal can be done at a local clinic; we provide guidance in advance.</p>
      </>
    ),
  },
  {
    q: 'What if something goes wrong after I return home?',
    a: (
      <>
        Follow-up is ongoing at 1 week, 1 month, 3 months, 6 months, and 1 year via Messenger or LINE. Send photos and the surgeon reviews them directly. If needed, we connect you with <strong>affiliated clinics</strong> for emergency response abroad.
      </>
    ),
  },
  {
    q: 'How much does it cost? What are the approximate prices per procedure?',
    a: (
      <>
        <ul className="mt-3 space-y-1 mb-3">
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Hybrid breast augmentation: pricing provided after consultation</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Breast augmentation (implant only): pricing provided after consultation</li>
          <li className="pl-4 relative before:content-['-'] before:absolute before:left-0">Revision surgery: pricing varies by capsulectomy scope</li>
        </ul>
        Final cost depends on implant type and procedure scope. A formal quotation is provided after consultation. No hidden fees.
      </>
    ),
  },
  {
    q: 'Which implant brands do you use? Can I choose?',
    a: (
      <>
        <p>We primarily use <strong>Mentor (Johnson &amp; Johnson)</strong> and <strong>Motiva</strong>. The selection is made together at consultation based on chest structure, skin thickness, and desired feel. Physical implant samples are available to handle.</p>
        <p className="mt-3">If you have a preference for a specific brand, mention it at consultation and we will assess whether it is suitable for your anatomy.</p>
      </>
    ),
  },
  {
    q: 'Are there proxy surgeries or surgeon substitutions?',
    a: (
      <>
        <strong>Dr. Lee Moo-young performs every case personally</strong>. Surgical records are signed by the operating surgeon. Accompanying family members may confirm operating room entry and exit times directly. SM has operated with zero proxy surgeries since opening.
      </>
    ),
  },
  {
    q: 'I\'m worried about getting results that look overdone.',
    a: (
      <>
        Bring reference photos to the consultation and we will verify together whether the desired result is achievable with your chest structure and skin. International patients frequently prefer natural, understated outcomes — we use that as our design baseline. We do not proceed with any direction you are not comfortable with.
      </>
    ),
  },
]

type TabId = 'medical' | 'practical'

function EnFAQ() {
  const [tab, setTab] = useState<TabId>('medical')
  const [open, setOpen] = useState<number | null>(0)

  const items = tab === 'medical' ? FAQ_MEDICAL : FAQ_PRACTICAL

  function switchTab(next: TabId) { setTab(next); setOpen(0) }

  return (
    <section id="faq" className="py-12 lg:py-[70px] flex justify-center bg-[#EEF4FC]">
      <div className="w-full max-w-content px-6">
        <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">Information & Support</span>
        <h2 className="font-serif-display text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.25] mb-4">FAQ</h2>
        <p className="text-[0.92rem] text-text-sub mb-10 max-w-xl leading-relaxed">
          Most frequently asked questions from patients worldwide. Review these before your consultation.
        </p>

        <div className="flex border-b border-text-main mb-0 overflow-x-auto">
          {([
            { id: 'medical' as TabId, label: 'Surgery & Medical Q&A', count: FAQ_MEDICAL.length },
            { id: 'practical' as TabId, label: 'Practical & Scheduling Q&A', count: FAQ_PRACTICAL.length },
          ]).map((t) => (
            <button key={t.id} onClick={() => switchTab(t.id)}
              className={`shrink-0 flex items-center gap-2 px-5 py-3.5 text-[0.88rem] font-medium border-b-2 transition-colors ${tab === t.id ? 'border-text-main text-text-main' : 'border-transparent text-text-sub hover:text-text-main'}`}>
              {t.label}
              <span className={`text-[0.72rem] px-1.5 py-0.5 rounded-full ${tab === t.id ? 'bg-brand text-white' : 'bg-bg-sub-alt text-text-sub'}`}>{t.count}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col border-t-0">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-b border-border-default transition-colors">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-8 bg-transparent border-none flex items-center justify-between cursor-pointer text-left outline-none gap-4">
                  <div className="flex gap-4 lg:gap-6 items-start">
                    <span className="font-serif-display text-[1.1rem] text-accent-gold font-medium min-w-[40px]">Q{i + 1}</span>
                    <span className="text-[1rem] lg:text-[1.2rem] font-medium text-text-main tracking-tight">{item.q}</span>
                  </div>
                  <div className="relative w-5 h-5 shrink-0">
                    <span className="absolute top-1/2 left-0 w-full h-px bg-text-sub" />
                    <span className={`absolute top-0 left-1/2 w-px h-full bg-text-sub transition-all ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-400 bg-bg-sub-alt ${isOpen ? 'max-h-[800px] pb-10' : 'max-h-0'}`}>
                  <div className="pl-0 lg:pl-16 pt-4 pr-4 text-text-sub text-[0.95rem] lg:text-[1rem] leading-[1.85]">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Gangnam Reviews ──────────────────────────────────────────────────────────

const REVIEWS = [
  '/gangnam_review_02.png',
  '/gangnam_review_03.png',
  '/gangnam_review_04.png',
  '/gangnam_review_05.png',
  '/gangnam_review_06.png',
]

const VISIBLE_REVIEWS = 3

function EnGangnamReviews() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const maxIndex = Math.max(0, REVIEWS.length - VISIBLE_REVIEWS)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section id="gangnam-reviews" className="pt-8 pb-12 lg:pt-10 lg:pb-[70px] flex justify-center bg-bg-sub-alt">
      <div className="w-full max-w-content px-6">
        <div className="flex items-center gap-3 mb-3">
          <img src="/gangnam.png" alt="Gangnam Unni" className="w-7 h-7 object-contain" />
          <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider">Patient Reviews</span>
        </div>
        <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-10">
          Real Patient Reviews — Gangnam Platform
        </h2>

        <div className="mb-10 lg:mb-12 w-full max-w-[780px] mx-auto bg-white border border-border-default rounded-md overflow-hidden shadow-md">
          <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-border-default">
            <div className="flex items-center gap-2">
              <img src="/gangnam.png" alt="" className="w-6 h-6 object-contain" />
              <span className="font-bold text-[0.95rem] text-[#ff5c3a] tracking-tight">カンナムオンニ</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-[0.75rem] text-gray-500 px-2.5 py-1 border border-border-default rounded-full">Login / Register</span>
            </div>
          </div>

          <div className="relative h-[200px] sm:h-[240px] flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2B5891 0%, #5B9BD5 55%, #1A4070 100%)' }}>
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-14 -right-10 w-52 h-52 rounded-full bg-white/5" />
            <div className="relative flex flex-col items-center text-white text-center px-4">
              <div className="font-black text-[3rem] sm:text-[4rem] leading-none tracking-tight mb-3">SMPS</div>
              <div className="text-[0.8rem] sm:text-[0.9rem] opacity-90 tracking-[0.3em] uppercase mb-2">SM Plastic Surgery</div>
              <div className="text-[0.7rem] opacity-70 tracking-[0.2em]">Gangnam · Seoul · EST. 2013</div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-[1.25rem] sm:text-[1.4rem] font-bold text-text-main">SM Plastic Surgery</h3>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5b800">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-bold text-text-main text-[1rem]">9.6</span>
              <span className="text-text-sub text-[0.9rem]">887 reviews</span>
            </div>
            <div className="flex items-start gap-2 text-[0.85rem] text-text-sub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span>Sinnonhyeon stn. · 435, Gangnam-daero, Seocho-gu, Seoul, Korea</span>
            </div>
            <div className="mt-5 pt-4 border-t border-border-default grid grid-cols-3 text-center text-[0.8rem]">
              <div className="pb-2 border-b-2 border-text-main font-semibold text-text-main">Clinic Info</div>
              <div className="text-text-sub">Pricing</div>
              <div className="text-text-sub">Procedure Reviews</div>
            </div>
          </div>
        </div>

        <div className="relative mb-10">
          <button onClick={prev} disabled={index === 0} aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-border-default shadow-md flex items-center justify-center transition-all hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="overflow-hidden mx-10 lg:mx-14">
            <div className="flex gap-5 lg:gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE_REVIEWS}) - ${(index * 20) / VISIBLE_REVIEWS}px))` }}>
              {REVIEWS.map((src, i) => (
                <button type="button" key={i} onClick={() => setLightbox(src)}
                  className="shrink-0 rounded-md overflow-hidden bg-white border border-border-default transition-all hover:border-brand hover:shadow-lg cursor-zoom-in"
                  style={{ width: `calc((100% - ${(VISIBLE_REVIEWS - 1) * 24}px) / ${VISIBLE_REVIEWS})` }}>
                  <img src={src} alt={`Patient review ${i + 1}`} className="w-full h-auto block" />
                </button>
              ))}
            </div>
          </div>
          <button onClick={next} disabled={index >= maxIndex} aria-label="Next"
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-border-default shadow-md flex items-center justify-center transition-all hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-[0.95rem] lg:text-[1.05rem] text-text-sub mb-5">
            Want to see more reviews and Before/After cases? Contact us via Messenger or LINE.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" data-track-location="gangnam_reviews"
              className="inline-flex items-center gap-2 bg-[#0084FF] text-white text-[0.95rem] lg:text-[1rem] font-semibold py-3.5 px-8 rounded-full shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <MessengerIcon size={20} /> Contact via Messenger
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] text-white text-[0.95rem] lg:text-[1rem] font-semibold py-3.5 px-8 rounded-full shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <LineIcon size={20} /> LINE
            </a>
          </div>
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[300] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out">
          <button type="button" aria-label="Close" onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-sm shadow-2xl" />
        </div>
      )}
    </section>
  )
}

// ─── Shorts ───────────────────────────────────────────────────────────────────

const SHORTS_IDS = ['ZlQannrpbSc', 'hUHT8Aj5Ct4', '3deedDPJVrE', 'GySjwoiW4A8', '5BZDn089MTA', 'ihQYBj3RAvA']
const CHANNEL_SHORTS_URL = 'https://www.youtube.com/@smplasticsurgery/shorts'
const SHORTS_VISIBLE = 6

function EnShorts() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(SHORTS_IDS.length / SHORTS_VISIBLE)
  const currentItems = SHORTS_IDS.slice(page * SHORTS_VISIBLE, page * SHORTS_VISIBLE + SHORTS_VISIBLE)

  return (
    <section id="shorts" className="py-12 lg:py-[60px] flex justify-center">
      <div className="w-full max-w-content px-6">
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <h2 className="font-serif-display text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold text-text-main">SMPS Shorts</h2>
          <a href={CHANNEL_SHORTS_URL} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 text-text-main hover:text-brand transition-colors">
            <span className="text-[0.9rem] lg:text-[1rem] font-semibold tracking-wider">MORE VIEW</span>
            <span className="w-9 h-9 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:scale-110">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 lg:gap-4">
          {currentItems.map((id) => (
            <a key={id} href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noopener noreferrer"
              className="relative w-full aspect-[9/16] bg-neutral-100 overflow-hidden group cursor-pointer">
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 ml-1" style={{ borderStyle: 'solid', borderWidth: '7px 0 7px 11px', borderColor: 'transparent transparent transparent #5B9BD5' }} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function EnHomePage({ latestBlog }: { latestBlog?: React.ReactNode }) {
  return (
    <main id="top" className="relative">
      <EnSocialFloat />
      <EnNav />

      {/* ── Hero ── */}
      <section id="hero" className="relative overflow-hidden border-b border-border-default"
        style={{ background: 'linear-gradient(135deg, #EEF4FC 0%, #F3F7FD 55%, #ffffff 100%)' }}>
        <div className="pointer-events-none select-none absolute right-0 top-0 w-[55%] h-full hidden lg:block overflow-hidden">
          <div className="absolute right-[-120px] top-[-80px] w-[500px] h-[500px] rounded-full border border-[#5B9BD5]/8" />
          <div className="absolute right-[-50px] top-[-10px] w-[360px] h-[360px] rounded-full border border-[#7EC8E3]/10 bg-[#5B9BD5]/[0.03]" />
          <div className="absolute right-[90px] top-[70px] w-[230px] h-[230px] rounded-full bg-[#7EC8E3]/[0.06]" />
          <div className="absolute right-[170px] top-[110px] w-[140px] h-[140px] rounded-full bg-[#5B9BD5]/[0.07]" />
        </div>

        <div className="relative z-[1] w-full max-w-content mx-auto px-6 pt-14 lg:pt-20 pb-12 lg:pb-16">
          <span className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-gold font-semibold block mb-5">
            SM Plastic Surgery — Gangnam · Seoul
          </span>
          <h1 className="font-serif-display text-[2.5rem] sm:text-[3.2rem] lg:text-[5rem] font-medium text-text-main leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up">
            Korea&rsquo;s Breast Surgery<br />
            <span className="text-brand">&lsquo;Designed by Medicine.&rsquo;</span>
          </h1>
          <p className="text-[1rem] lg:text-[1.2rem] text-text-sub leading-[1.85] max-w-lg mb-10 opacity-0 animate-fade-up [animation-delay:0.15s]">
            Dr. Lee Moo-young, Seoul National University School of Medicine,<br />
            has been operating at the same Gangnam location for 12+ years.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10 opacity-0 animate-fade-up [animation-delay:0.25s]">
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" data-track-location="hero"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0084FF] text-white text-[0.88rem] font-medium rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10">
              <MessengerIcon size={16} /> Contact via Messenger
            </a>
            <a href="#procedures" className="text-[0.88rem] font-medium text-text-sub hover:text-text-main transition-colors flex items-center gap-1.5">
              Learn About Procedures ↓
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:0.35s]">
            {[
              { name: 'LINE', href: LINE_URL, bg: '#06C755', icon: <LineIcon size={14} /> },
              { name: 'YouTube', href: 'https://www.youtube.com/@smplasticsurgery', bg: '#FF0000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
              { name: 'Instagram', href: 'https://www.instagram.com/sm_official_jp', bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
              { name: 'TikTok', href: 'https://www.tiktok.com/@smps_jp8888', bg: '#000000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.52a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.39z" /></svg> },
              { name: 'X', href: 'https://x.com/smps8888', bg: '#000000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[13px] h-[13px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
            ].map((ch) => (
              <a key={ch.name} href={ch.href} target="_blank" rel="noopener noreferrer" aria-label={ch.name} title={ch.name}
                className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110 hover:shadow-md border border-black/10"
                style={{ background: ch.bg, color: '#fff' }}>
                {ch.icon}
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#5B9BD5]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 opacity-0 animate-fade-up [animation-delay:0.45s]">
            {[
              { label: 'Gangnam Review Rating', value: '9.7 / 10' },
              { label: 'Patient Reviews', value: '872+' },
              { label: 'Est.', value: '2013' },
              { label: 'Credentials', value: 'Asan Medical Center' },
            ].map((item) => (
              <div key={item.label} className="pl-3 border-l-2 border-[#7EC8E3]">
                <div className="text-[0.68rem] uppercase tracking-[0.12em] text-text-sub mb-1.5">{item.label}</div>
                <div className="text-[1.1rem] lg:text-[1.3rem] font-semibold text-text-main font-serif-display">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Director ── */}
      <section id="director" className="py-12 lg:py-[70px] flex justify-center bg-[#EEF4FC] lg:bg-[linear-gradient(to_left,#ffffff_60%,#EEF4FC_60%)]">
        <div className="w-full max-w-content px-6">
          <div className="grid lg:grid-cols-[4.5fr_5.5fr] gap-12 lg:gap-24 items-start mb-16 lg:mb-20">
            <div className="relative opacity-0 animate-fade-up">
              <div className="hidden lg:block absolute -top-5 -left-5 w-full h-full border border-border-default z-[1]" />
              <div className="relative w-full aspect-[3/4.2] overflow-hidden border border-border-default bg-gray-200 z-[2]">
                <img src="/doctor_white.png" alt="Dr. Lee Moo-young" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="pt-6 lg:pt-10 opacity-0 animate-fade-up-delay-2">
              <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-6">OUR PHILOSOPHY & DIRECTOR</span>
              <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-6">
                One Clinic. One Surgeon.<br />Same Location for 12 Years.
              </h2>
              <div className="mb-8">
                <span className="inline-block bg-brand text-white px-4 py-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.4rem] font-semibold leading-tight">
                  Global Proud Korean Award Recipient
                </span>
              </div>
              <ul className="mb-10 space-y-2 text-[1.05rem] sm:text-[1.2rem] lg:text-[1.35rem] font-serif-display font-medium text-text-main leading-[1.4]">
                <li>Seoul National University School of Medicine</li>
                <li>Board-Certified Plastic Surgeon</li>
              </ul>
              <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-2 max-w-[65%]">
                <img src="/seoul.png" alt="Seoul National University School of Medicine" className="w-full h-auto object-contain" />
                <img src="/expert.png" alt="Board-Certified Specialist" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="w-10 h-px bg-brand mb-7" />
              <p className="text-[0.95rem] lg:text-[1.05rem] text-text-main mb-5 font-light text-justify leading-[1.9]">
                Dr. Lee Moo-young graduated from Seoul National University School of Medicine and completed his plastic surgery residency at Asan Medical Center. After serving as Chief of Plastic Surgery at Ulsan University Hospital and heading BR Baram and BK Plastic Surgery clinics, he opened SM Plastic Surgery in Gangnam in June 2013.
              </p>
              <p className="text-[0.95rem] lg:text-[1.05rem] text-text-main font-light text-justify leading-[1.9]">
                For 12 years since opening, he has not moved. A patient who had surgery here can come back one year later, five years later, and find the same door, the same surgeon. That is the foundation SM has upheld.
              </p>
            </div>
            <div className="p-8 lg:p-10 bg-bg-sub border-l-[3px] border-brand">
              <h3 className="font-serif-display text-[1.15rem] lg:text-[1.3rem] font-semibold mb-6 flex items-center gap-3">
                Academic Activities
              </h3>
              <ul className="list-none grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Korean Society of Plastic and Reconstructive Surgeons',
                  'Korean Breast Augmentation Research Society',
                  'Korean Liposuction Research Society',
                  'Korean Eye Surgery Research Society',
                  'Global Proud Korean Award',
                ].map((item) => (
                  <li key={item}
                    className="text-[0.9rem] lg:text-[0.95rem] text-text-sub relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1 before:h-px before:bg-brand">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative py-14 lg:py-20 flex justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #2B5891 0%, #5B9BD5 60%, #1A4070 100%)' }}>
        <div className="absolute inset-0 bg-[rgba(10,12,15,0.65)] z-[1]" />
        <div className="relative z-[2] w-full max-w-content px-6 text-center">
          <p className="text-[1rem] font-light tracking-[0.2em] mb-3 opacity-90">SM Plastic Surgery</p>
          <h2 className="font-serif-display text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] mb-16 lg:mb-20">
            Years of Trust, Built One Case at a Time
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: 'Years of Medical Career', value: '24', unit: 'years', note: 'Licensed since 2002' },
              { label: 'Before & After Cases', value: '1,234', unit: 'cases', note: 'As of April 2026' },
              { label: 'Days at Same Gangnam Location', value: '4,695', unit: 'days', note: 'Opened June 10, 2013' },
            ].map((stat, i) => (
              <div key={stat.label}
                className="bg-white py-10 lg:py-12 px-6 rounded-sm shadow-2xl text-text-main flex flex-col items-center opacity-0"
                style={{ animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${0.4 + i * 0.1}s forwards` }}>
                <span className="bg-neutral-800 text-white text-[0.75rem] py-1 px-4 rounded-full mb-6 tracking-wider">{stat.label}</span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-serif-display text-[3rem] lg:text-[3.8rem] font-bold text-brand leading-none">{stat.value}</span>
                  <span className="text-[1.1rem] text-text-sub font-normal">{stat.unit}</span>
                </div>
                <span className="text-[0.85rem] text-gray-500 font-light">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Blog ── */}
      {latestBlog}

      {/* ── Procedures ── */}
      <EnProcedures />

      {/* ── Gallery ── */}
      <EnGallery />

      {/* ── Eye Surgery ── */}
      <EnEyeSurgery />

      {/* ── Skin & Lifting ── */}
      <section id="skin" className="py-12 lg:py-[70px] flex justify-center bg-bg-sub">
        <div className="w-full max-w-content px-6">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-4">Skin & Lifting</span>
            <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3rem] font-medium leading-[1.3] mb-5">
              Skin Treatments<br />During Your Recovery Stay
            </h2>
            <p className="text-[1rem] text-text-sub max-w-[580px] mx-auto font-light leading-[1.8]">
              Make the most of your time in Korea with Botox, Filler, Skin Booster, or Tensera / Thermage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-default border border-border-default">
            {[
              {
                num: '01', title: 'Botox', image: '/ai_07.png',
                desc: <>Softens wrinkles caused by muscle overactivity and refines jaw, masseter, and calf volume. Primary treatment areas: <mark className="bg-sky-100 text-text-main px-1 font-medium">forehead / frown lines / crow&apos;s feet / chin / jawline</mark>.</>,
              },
              {
                num: '02', title: 'Filler', image: '/ai_03.png',
                desc: <>Adds immediate volume and contour with hyaluronic acid and smooths deep folds naturally. Primary treatment areas: <mark className="bg-sky-100 text-text-main px-1 font-medium">cheekbones / nasolabial folds / lips / aegyo-sal / under-eyes</mark>.</>,
              },
              {
                num: '03', title: 'Skin Booster', image: '/ai_11.png',
                desc: <>Hyaluronic acid injected directly into the dermis for deep hydration and luminosity. Three benefits: <mark className="bg-sky-100 text-text-main px-1 font-medium">hydration / brightening / elasticity</mark>.</>,
              },
              {
                num: '04', title: 'Tensera · Thermage', image: '/ai_06.png',
                desc: <>Non-surgical collagen stimulation for tightening and lifting. Methods: <mark className="bg-sky-100 text-text-main px-1 font-medium">Thermage (radiofrequency) / Tensera (HIFU ultrasound)</mark>.</>,
              },
            ].map((item) => (
              <div key={item.title} className="group bg-white flex flex-col sm:flex-row overflow-hidden transition-all duration-300 hover:bg-bg-sub-alt">
                <div className="w-full sm:w-[200px] lg:w-[240px] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-bg-sub-alt relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 font-serif-display text-[0.75rem] tracking-[0.2em] text-white bg-black/40 px-2.5 py-1">{item.num}</span>
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-8 flex-1">
                  <h3 className="font-serif-display text-[1.3rem] lg:text-[1.5rem] font-semibold text-text-main mb-4 pb-4 border-b border-border-default leading-tight">{item.title}</h3>
                  <p className="text-[0.88rem] text-text-sub leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <EnFAQ />

      {/* ── Media ── */}
      <section id="media" className="py-12 lg:py-[70px] flex justify-center">
        <div className="w-full max-w-content px-6">
          <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">YouTube — Meet SM Plastic Surgery</span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-6">
            Watch SM Plastic Surgery <b className="font-bold">on YouTube</b>
          </h2>
          <p className="text-[1.1rem] text-text-sub mb-16 max-w-[700px]">
            What&apos;s hard to explain in text, we show on video. See the surgeon explain procedures, hear real patient questions, and follow the recovery journey.
          </p>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mb-20 items-center">
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <iframe src="https://www.youtube.com/embed/siw_pv2rp8w?rel=0" title="SM Plastic Surgery main video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[0.85rem] text-gray-400 tracking-wider">SM Plastic Surgery</span>
              <h3 className="text-[1.3rem] lg:text-[1.5rem] font-semibold leading-snug line-clamp-3">
                Dr. Lee Moo-young on What &lsquo;Natural Breast Augmentation&rsquo; Really Means
              </h3>
              <a href="https://www.youtube.com/@smplasticsurgery" target="_blank" rel="noopener noreferrer"
                className="mt-3 py-4 px-6 bg-brand text-white text-[0.9rem] font-semibold inline-flex items-center justify-center gap-3 transition-opacity hover:opacity-90 self-start">
                Visit the Official SM Plastic Surgery YouTube Channel →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['cMT5rpGGbAw', 'fWOUbdfu6bk', 'FO-qBMjP80Q', 'Bmx6hukkovM'].map((id) => (
              <a key={id} href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer"
                className="no-underline text-inherit flex flex-col gap-3 group">
                <div className="w-full aspect-video bg-black relative overflow-hidden">
                  <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 ml-1" style={{ borderStyle: 'solid', borderWidth: '8px 0 8px 14px', borderColor: 'transparent transparent transparent #5B9BD5' }} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shorts ── */}
      <EnShorts />

      {/* ── Principles ── */}
      <section id="why-sm" className="py-12 lg:py-[70px] flex justify-center bg-[#EEF4FC]">
        <div className="w-full max-w-content px-6">
          <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">WHY SM — Three Principles</span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-medium leading-[1.3] mb-16">
            Why International Patients Choose SM
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: '①', title: 'One Clinic. One Surgeon. 12 Years.', image: '/doctor.png',
                desc: 'Most Gangnam clinics expand branches or rotate surgeons. Dr. Lee has worked at the same Gangnam address since 2013 — one door, the same hands, every visit. That is why SM is a medical institution, not a cosmetic tourism stop.',
              },
              {
                num: '②', title: 'Dedicated English Support — End to End', image: '/일본통역사.png',
                desc: 'There is a difference between "a clinic with a translator" and "a clinic with a dedicated coordinator who sees you through the whole journey." From first message to in-OR interpretation to post-return follow-up, one coordinator handles everything.',
              },
              {
                num: '③', title: 'Medicine, Not Trends', image: '/의학설계.png',
                desc: 'Not Korean-style exaggerated results — medically grounded design. We assess chest structure, skin type, and lifestyle, then design a solution unique to you. We can explain why a specific method is optimal for each patient.',
              },
            ].map((p, i) => (
              <div key={p.num}
                className="group relative flex flex-col bg-white border border-border-default overflow-hidden opacity-0 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:border-[#7EC8E3] hover:shadow-xl hover:shadow-[#7EC8E3]/15 hover:bg-[#F8FBFF]"
                style={{ animation: `fadeUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${i * 0.1}s forwards` }}>
                <div className="w-full aspect-[4/3] overflow-hidden bg-bg-sub-alt">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col p-8 lg:p-10">
                  <span className="font-serif-display text-[1.5rem] text-brand mb-3">{p.num}</span>
                  <h3 className="font-serif-display text-[1.5rem] lg:text-[1.65rem] font-semibold text-brand mb-5 pb-4 border-b border-border-default leading-tight">{p.title}</h3>
                  <p className="text-[0.95rem] text-text-sub leading-[1.8] text-justify">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section id="safety" className="py-12 lg:py-[70px] bg-[#F3F7FD]">
        <div className="w-full max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-serif-display italic text-[0.9rem] text-accent-gold tracking-widest block mb-4">Safe Anesthesia Center</span>
            <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] font-medium leading-[1.3] mb-5">
              Before the surgery, SM puts{' '}
              <span className="inline-block bg-brand text-white px-3 py-1">patient safety</span>{' '}
              first.
            </h2>
            <p className="text-[0.95rem] text-text-sub leading-[1.8]">
              A perfect surgery result means nothing if there is a problem with anesthesia.<br />
              SM has all four safety systems fully in place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Resident Anesthesiologist', image: '/전문의상주.png', desc: 'A board-certified anesthesiologist is present throughout — from the first incision to discharge from the recovery room, for rapid response in any situation.' },
              { title: 'Real-time Monitoring', image: '/실시간모니터링.png', desc: 'Advanced equipment monitors vital signs in real time throughout surgery, enabling immediate response to any emergency that may arise.' },
              { title: 'Emergency Response System', image: '/응급처치시스템.png', desc: 'AED, emergency medications, and an oxygen supply are permanently stationed in the OR, with a complete emergency response protocol always ready.' },
              { title: 'Safe Recovery Program', image: '/검사시스템.png', desc: 'We prioritize not only surgical outcomes but your swift return to daily life. Personalized post-op care ensures you can travel home with full confidence.' },
            ].map((item) => (
              <div key={item.title} className="group flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-none bg-bg-sub-alt mb-5">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-[1.05rem] font-semibold text-text-main mb-2 leading-tight">{item.title}</h3>
                <p className="text-[0.875rem] text-text-sub leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border-default mt-14 pt-8 text-center">
            <p className="font-serif-display text-[1rem] text-text-main leading-[1.8]">
              Anesthesia accidents are preventable.{' '}
              <strong className="text-brand font-medium">
                How much a clinic invests in that prevention should be your criteria for choosing.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Gangnam Reviews ── */}
      <EnGangnamReviews />

      {/* ── Consultation ── */}
      <section id="consultation" className="py-12 lg:py-[70px] flex justify-center"
        style={{ background: 'linear-gradient(160deg, #071830 0%, #0A2458 55%, #0F3170 100%)' }}>
        <div className="w-full max-w-content px-6 text-center">
          <span className="font-serif-display italic text-[0.95rem] text-[#7EC8E3] tracking-wider block mb-5">Consultation</span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3rem] font-medium leading-[1.25] mb-6 text-white">
            Start your consultation via{' '}
            <span className="inline-block bg-[#0084FF] text-white px-3 py-1">Messenger</span>
            {' '}or{' '}
            <span className="inline-block bg-[#06C755] text-white px-3 py-1">LINE</span>
          </h2>
          <p className="text-[1.05rem] lg:text-[1.15rem] text-white/70 max-w-[640px] mx-auto mb-14 font-light">
            An English-speaking coordinator responds to every inquiry.<br />
            From first consultation to surgery, recovery, and post-return follow-up — the same coordinator stays with you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" data-track-location="consultation"
              className="inline-flex items-center justify-center gap-3 bg-[#0084FF] text-white text-[1.1rem] lg:text-[1.25rem] font-semibold py-5 px-12 rounded-full shadow-lg shadow-[#0084FF]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0084FF]/40">
              <MessengerIcon size={24} /> Contact via Messenger
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white text-[1.1rem] lg:text-[1.25rem] font-semibold py-5 px-12 rounded-full shadow-lg shadow-[#06C755]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#06C755]/40">
              <LineIcon size={24} /> LINE Consultation
            </a>
          </div>

          <div className="max-w-[640px] mx-auto bg-white/8 border border-white/15 backdrop-blur-sm p-8 lg:p-10 mb-14">
            <h3 className="font-serif-display text-[1.1rem] font-semibold text-white mb-5">Helpful to prepare before your consultation</h3>
            <ul className="text-left space-y-3">
              {[
                'Current condition and concerns',
                'Desired outcome direction (reference photos welcome)',
                'Previous surgery history (if applicable)',
                'Available travel dates to Korea',
                'Budget range',
              ].map((item) => (
                <li key={item}
                  className="relative pl-5 text-[0.95rem] text-white/70 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-2.5 before:h-px before:bg-[#7EC8E3]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section id="location" className="py-12 lg:py-[70px] flex justify-center bg-[#F3F7FD]">
        <div className="w-full max-w-content px-6">
          <span className="font-serif-display italic text-[0.95rem] text-accent-gold tracking-wider block mb-5">Location</span>
          <h2 className="font-serif-display text-[1.6rem] sm:text-[2rem] lg:text-[3rem] font-medium leading-[1.25] mb-16">
            Getting to SM Plastic Surgery
          </h2>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 items-stretch">
            <div className="w-full aspect-[16/10] lg:aspect-auto lg:min-h-[440px] border border-border-default overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=서울+서초구+강남대로+435+주류성빌딩&z=17&output=embed"
                title="SM Plastic Surgery Location"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen />
            </div>

            <div className="bg-bg-sub-alt p-8 lg:p-10 border border-border-default flex flex-col gap-7">
              {[
                {
                  label: 'Address',
                  value: <>435 Gangnam-daero, Seocho-gu, Seoul<br />9F Juryuseong Building</>,
                },
                {
                  label: 'Getting Here',
                  value: (
                    <>
                      Gangnam Station Exit 10 — 7 min walk<br />
                      Sinnonhyeon Station Exit 7 — 5 min walk<br />
                      <span className="text-[0.85rem] text-text-sub mt-1 block">
                        Incheon Airport → Airport Bus 6009 → Gangnam Station → 2 min walk
                      </span>
                    </>
                  ),
                },
                {
                  label: 'Hours',
                  value: <>Weekdays 10:00–19:00<br />Saturday 10:00–16:00<br />Sunday &amp; Holidays Closed</>,
                },
                { label: 'Phone', value: <>0507-1324-3707</> },
                { label: 'Medical Staff', value: <>1 Board-Certified Plastic Surgeon</> },
              ].map((row) => (
                <div key={String(row.label)}>
                  <div className="text-[0.7rem] text-accent-gold uppercase tracking-widest font-semibold mb-2">{row.label}</div>
                  <div className="text-[0.95rem] text-text-main leading-[1.7]">{row.value}</div>
                </div>
              ))}

              <a href="https://maps.app.goo.gl/FJaPvLH2QK8hqwBc9" target="_blank" rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-text-main text-white text-[0.9rem] font-medium transition-opacity hover:opacity-90">
                Get Directions on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-20 flex justify-center border-t border-border-default"
        style={{ background: 'linear-gradient(160deg, #071830 0%, #0A2458 60%, #0D2E6A 100%)' }}>
        <div className="w-full max-w-content px-6">
          <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-14">
            <div>
              <h5 className="text-[0.75rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-wider">Address</h5>
              <p className="text-[0.9rem] text-white/80 leading-[1.8]">
                435 Gangnam-daero, Seocho-gu, Seoul<br />
                9F Juryuseong Building (Gangnam Station Exit 10, 7 min walk)
              </p>
            </div>
            <div>
              <h5 className="text-[0.75rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-wider">Hours</h5>
              <p className="text-[0.9rem] text-white/80 leading-[1.8]">
                Weekdays 10:00–19:00<br />
                Saturday 10:00–16:00<br />
                Sunday &amp; Holidays Closed
              </p>
            </div>
            <div>
              <h5 className="text-[0.75rem] text-[#7EC8E3] uppercase mb-3 font-semibold tracking-wider">Clinic</h5>
              <p className="text-[0.9rem] text-white/80 leading-[1.8]">
                Director: Dr. Lee Moo-young<br />
                SM Plastic Surgery
              </p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 text-[0.8rem] text-white/40 leading-relaxed">
            Surgery outcomes vary by individual. Side effects including bleeding, infection, asymmetry, hematoma, and implant-related complications may occur. Detailed information is provided at consultation.
          </div>
        </div>
      </footer>
    </main>
  )
}
