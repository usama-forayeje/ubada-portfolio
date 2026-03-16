"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

// ── useInView ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const icons = {
  UX: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="#9D86FF" strokeWidth="1.5"/>
      <circle cx="8" cy="12" r="3" stroke="#7D52FD" strokeWidth="1.5"/>
      <circle cx="8" cy="12" r="1.2" fill="#7D52FD"/>
      <path d="M13 10h6M13 12h5M13 14h3" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Mobile: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#9D86FF" strokeWidth="1.5"/>
      <path d="M10 5h4" stroke="#7D52FD" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="18.5" r="1" fill="#9D86FF"/>
      <rect x="8" y="8" width="8" height="8" rx="2" fill="rgba(125,82,253,.2)" stroke="#7D52FD" strokeWidth="1"/>
    </svg>
  ),
  Web: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <rect x="2" y="3" width="20" height="14" rx="3" stroke="#9D86FF" strokeWidth="1.5"/>
      <path d="M2 9h20" stroke="#9D86FF" strokeWidth="1.5"/>
      <circle cx="5.5" cy="6" r="1.2" fill="#FF5F57"/>
      <circle cx="9"   cy="6" r="1.2" fill="#FFBD2E"/>
      <circle cx="12.5" cy="6" r="1.2" fill="#28CA41"/>
      <rect x="4" y="11" width="7" height="4" rx="1.5" fill="rgba(125,82,253,.25)" stroke="#7D52FD" strokeWidth="1"/>
      <rect x="13" y="11" width="7" height="1.8" rx="1" fill="rgba(157,134,255,.35)"/>
      <rect x="13" y="13.5" width="5" height="1.5" rx="1" fill="rgba(157,134,255,.2)"/>
      <path d="M8 20h8M12 17v3" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Brand: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <path d="M12 3L20 18H4L12 3Z" stroke="#9D86FF" strokeWidth="1.5"
        strokeLinejoin="round" fill="rgba(125,82,253,.12)"/>
      <circle cx="12" cy="14" r="3" fill="rgba(125,82,253,.25)" stroke="#7D52FD" strokeWidth="1.5"/>
      <circle cx="12" cy="14" r="1.2" fill="#7D52FD"/>
    </svg>
  ),
  Dev: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <polyline points="8,6 3,12 8,18" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="16,6 21,12 16,18" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M14 4L10 20" stroke="#7D52FD" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  SEO: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <circle cx="10" cy="10" r="7" stroke="#9D86FF" strokeWidth="1.5"/>
      <path d="M19 19l4 4" stroke="#7D52FD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10h6M10 7v6" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Chart: (
    <svg viewBox="0 0 24 24" fill="none" className="size-5.5">
      <polyline points="3,17 8,11 13,13 21,5" stroke="#9D86FF" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M3 21h18" stroke="#9D86FF" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8"  cy="11" r="2" fill="#7D52FD" fillOpacity="0.4" stroke="#7D52FD" strokeWidth="1"/>
      <circle cx="13" cy="13" r="2" fill="#7D52FD" fillOpacity="0.4" stroke="#7D52FD" strokeWidth="1"/>
      <circle cx="21" cy="5"  r="2" fill="#7D52FD" fillOpacity="0.4" stroke="#7D52FD" strokeWidth="1"/>
    </svg>
  ),
}

// ── Service card data ─────────────────────────────────────────────────────────
const SERVICES = [
  { icon: icons.UX,     name: "UI/UX Design",       desc: "User-centred interfaces built on research, clear IA, and aesthetic precision — across every platform.",   tags: ["Figma", "Research", "Wireframes"] },
  { icon: icons.Mobile, name: "Mobile App Design",   desc: "Seamless iOS & Android experiences — gesture-driven, pixel-perfect, and performance-aware.",               tags: ["iOS", "Android", "Prototyping"]  },
  { icon: icons.Web,    name: "Website Design",      desc: "Visually compelling, responsive websites that communicate your brand and drive real results.",               tags: ["Webflow", "CMS", "Responsive"]   },
  { icon: icons.Brand,  name: "Brand Strategy",      desc: "Cohesive visual identities — logo, typography, colour systems — every touchpoint intentional.",             tags: ["Logo", "Identity", "Guidelines"] },
  { icon: icons.Dev,    name: "Web Development",     desc: "Fast, accessible frontends with clean code — from Figma handoff to production-ready build.",                tags: ["React", "Next.js", "Tailwind"]   },
  { icon: icons.SEO,    name: "SEO & Marketing",     desc: "Strategic on-page SEO, performance tuning, and data-driven campaigns that convert.",                        tags: ["SEO", "Analytics", "CRO"]        },
]

// ── Stat rows ─────────────────────────────────────────────────────────────────
// const STATS = [
//   { label: "Projects Completed", value: "150+" },
//   { label: "Client Satisfaction", value: "100%" },
//   { label: "On-time Delivery",   value: "98%"  },
// ]

// ── Service card component ────────────────────────────────────────────────────
function ServiceCard({
  icon, name, desc, tags, index, visible, wide = false,
}: {
  icon: React.ReactNode; name: string; desc: string; tags: string[]
  index: number; visible: boolean; wide?: boolean
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/[0.07]",
        "bg-[#17122A] p-5 cursor-default transition-all duration-300",
        "hover:border-[#7D52FD]/40 hover:-translate-y-1",
        "hover:shadow-[0_12px_40px_rgba(125,82,253,0.18)]",
        wide ? "md:col-span-2" : "",
      ].join(" ")}
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(22px) scale(0.97)",
        transition: `opacity .6s ${index * 80}ms, transform .6s ${index * 80}ms cubic-bezier(.22,1,.36,1), border-color .3s, box-shadow .3s`,
      }}
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,82,253,.18)_0%,transparent_65%)]"/>

      {/* Wide card: icon + title side by side on desktop */}
      <div className={wide ? "flex flex-col sm:flex-row sm:items-start sm:gap-5" : ""}>
        {/* Icon */}
        <div className="mb-4 flex w-fit items-center justify-center rounded-xl
          bg-[#7D52FD]/10 border border-[#7D52FD]/18 p-2.75
          transition-all duration-300
          group-hover:bg-[#7D52FD]/20 group-hover:border-[#7D52FD]/40
          group-hover:shadow-[0_0_18px_rgba(125,82,253,0.3)]">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="mb-2 font-black text-white/90 group-hover:text-white
            transition-colors duration-200 leading-snug"
            style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)', fontSize:"clamp(.9rem,1.4vw,1rem)" }}>
            {name}
          </h3>
          <p className="mb-3 text-[.8rem] leading-[1.7] text-white/38 group-hover:text-white/55 transition-colors duration-200">
            {desc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(t => (
              <span key={t} className="rounded-full px-2.5 py-0.75 text-[9.5px] font-bold
                tracking-widest uppercase bg-white/4 border border-white/[.07]
                text-white/38 transition-all duration-300
                group-hover:border-[#7D52FD]/30 group-hover:text-[#B59AFF]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
export default function ServicesSection() {
  const { ref: leftRef,  visible: leftVis  } = useInView()
  const { ref: rightRef, visible: rightVis } = useInView(0.05)

  return (
    <section id="services" className="relative overflow-hidden bg-[#1A1428] py-24 md:py-32">

      {/* bg glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-20 top-1/3 w-105 h-105 rounded-full bg-[#7D52FD] opacity-[0.09] blur-[130px]"/>
        <div className="absolute right-0 bottom-0 w-87.5 h-87.5 rounded-full bg-[#7D52FD] opacity-[0.06] blur-[110px]"/>
        <div className="absolute inset-0 opacity-[0.025]
          bg-[radial-gradient(circle,#fff_1px,transparent_1px)]
          bg-size-[32px_32px]"/>
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#7D52FD]/35 to-transparent"/>
      </div>

      <div className="relative z-10 mx-auto max-w-300 px-6 md:px-12">

        {/* ═══════════════════════════════════════════════════
            TWO-COLUMN LAYOUT  (matches Tailark integrations-6)
            Mobile: heading → quote → cards stacked
            Desktop: left col (heading + quote) | right col (bento grid)
        ════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

          {/* ── LEFT ─────────────────────────────────────── */}
          <div
            ref={leftRef}
            className={`shrink-0 lg:w-95 xl:w-105 mb-12 lg:mb-0
              lg:sticky lg:top-28 self-start
              transition-all duration-1000
              ${leftVis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="block w-5 h-0.5 rounded-full bg-[#7D52FD]"/>
              <span className="text-[11px] font-black tracking-[.22em] text-[#9D86FF] uppercase">
                My Specialties
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-black leading-[1.08] tracking-[-0.025em] text-white mb-5"
              style={{
                fontFamily: 'var(--font-syne,"Syne",sans-serif)',
                fontSize: "clamp(2rem,3.8vw,3rem)",
              }}>
              Services built<br/>for{" "}
              <span className="bg-linear-to-r from-[#B59AFF] to-[#7D52FD] bg-clip-text text-transparent">
                real impact
              </span>
            </h2>

            <p className="text-[.93rem] leading-relaxed text-white/40 mb-8 max-w-90">
              From concept to pixel-perfect execution — end-to-end design and
              development services that elevate your product and brand.
            </p>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full
                border border-white/15 bg-white/4 px-6 py-2.75
                text-[.85rem] font-bold text-white/65
                transition-all duration-300 mb-10
                hover:border-[#7D52FD]/50 hover:bg-[#7D52FD]/10
                hover:text-white hover:-translate-y-0.5
                hover:shadow-[0_6px_24px_rgba(125,82,253,0.28)]"
              style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)' }}
            >
              Get Started
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* ── Quote block — prominent placement ── */}
            <div
              className={`relative rounded-2xl border border-[#7D52FD]/20
                bg-[#7D52FD]/6 p-6 overflow-hidden
                transition-all duration-1000 delay-300
                ${leftVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Decorative quote mark */}
              <div className="absolute -top-3 -left-1 text-[80px] leading-none
                text-[#7D52FD] opacity-20 select-none font-serif pointer-events-none">
                &ldquo;
              </div>

              {/* Violet accent top line */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] rounded-full
                bg-linear-to-r from-transparent via-[#7D52FD] to-transparent"/>

              <p className="relative text-[.88rem] leading-[1.75] text-white/70 italic mb-5 font-medium">
                &ldquo;Every pixel should have a purpose — I design with intent,
                empathy, and obsessive attention to detail.&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative shrink-0 w-10 h-10 rounded-full
                  overflow-hidden border-2 border-[#7D52FD]/40
                  shadow-[0_0_14px_rgba(125,82,253,0.4)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ubada-image.png"
                    alt="Ubaid"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-[.85rem] font-black text-white leading-tight"
                    style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)' }}>
                    Ubaid
                  </p>
                  <p className="text-[.75rem] text-white/40 mt-0.5">
                    UI/UX Designer, Bangladesh
                  </p>
                </div>

                {/* Verified badge */}
                <div className="ml-auto flex items-center gap-1.5 rounded-full
                  bg-[#7D52FD]/15 border border-[#7D52FD]/25 px-3 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#7D52FD"/>
                    <path d="M3.5 6l1.8 1.8 3.2-3.6"
                      stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[9px] font-bold tracking-wider text-[#9D86FF] uppercase">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* ── Stats row ── */}
            <div
              className={`mt-6 grid grid-cols-3 gap-3
                transition-all duration-1000 delay-500
                ${leftVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {[
                { v:"06+", l:"Years" },
                { v:"150+", l:"Projects" },
                { v:"100%", l:"Satisfaction" },
              ].map(s => (
                <div key={s.l} className="rounded-xl border border-white/[.07]
                  bg-white/3 px-3 py-3 text-center
                  hover:border-[#7D52FD]/30 hover:bg-[#7D52FD]/6
                  transition-all duration-300 group cursor-default">
                  <p className="font-black text-white leading-none mb-1"
                    style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)', fontSize:"1.3rem" }}>
                    {s.v.replace(/[+%]/g,"")}
                    <span className="text-[#9D86FF]">{s.v.match(/[+%]/)?.[0]}</span>
                  </p>
                  <p className="text-[9px] font-bold tracking-widest text-white/30 uppercase">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Bento grid ─────────────────────────── */}
          <div
            ref={rightRef}
            className={`flex-1 min-w-0
              transition-all duration-1000 delay-200
              ${rightVis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* 
              Tailark mask gradient — fades bottom of cards
              [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]
            */}
            <div className="rounded-2xl border border-white/[.07]
              bg-[#17122A]/60 backdrop-blur-sm p-3
              shadow-[0_0_60px_rgba(0,0,0,0.4)]
              mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_65%,transparent_100%)]">

              {/* Grid: 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((s, i) => (
                  <ServiceCard
                    key={s.name}
                    icon={s.icon}
                    name={s.name}
                    desc={s.desc}
                    tags={s.tags}
                    index={i}
                    visible={rightVis}
                    wide={false}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px
        bg-linear-to-r from-transparent via-[#7D52FD]/30 to-transparent pointer-events-none"/>
    </section>
  )
}