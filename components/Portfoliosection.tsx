"use client"

import React, { useEffect, useRef, useState } from "react"

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

// ── Filters ───────────────────────────────────────────────────────────────────
const FILTERS = ["All", "UI/UX Design", "Development", "Marketing"] as const
type Filter   = (typeof FILTERS)[number]

// ── Projects ──────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, cat: "UI/UX Design",
    title: "Luxury Fashion E-Commerce",
    desc:  "Editorial layouts, micro-interactions, and immersive product storytelling for a high-end fashion brand.",
    img:   "/projects/project-1.jpg",
    grad:  "linear-gradient(135deg,#9b88d4 0%,#3d1a6e 60%,#0d0a1a 100%)",
    // bento size classes — desktop
    col: "lg:col-span-7", row: "lg:row-span-6",
    // mobile height
    mh: "h-[320px]",
    showDesc: true,
  },
  {
    id: 2, cat: "Development",
    title: "Wildlife Conservation Dashboard",
    desc:  "Real-time analytics, interactive maps and species tracking for a global NGO.",
    img:   "/projects/project-2.jpg",
    grad:  "linear-gradient(160deg,#2d6a4f 0%,#1a3d2b 50%,#0d0a1a 100%)",
    col: "lg:col-span-5", row: "lg:row-span-6",
    mh: "h-[280px]",
    showDesc: true,
  },
  {
    id: 3, cat: "UI/UX Design",
    title: "Mobile Banking App Redesign",
    desc:  "Clean, accessible fintech UX with gesture-first navigation and dark-mode system.",
    img:   "/projects/project-3.jpg",
    grad:  "linear-gradient(135deg,#7D52FD 0%,#3d1a6e 50%,#0d0a1a 100%)",
    col: "lg:col-span-7", row: "lg:row-span-4",
    mh: "h-[240px]",
    showDesc: false,
  },
  {
    id: 4, cat: "Marketing",
    title: "Campaign Landing Page",
    desc:  "Scroll-driven storytelling with animated sections and conversion-focused copy.",
    img:   "/projects/project-4.jpg",
    grad:  "linear-gradient(135deg,#5a3fa8 0%,#0d0a1a 100%)",
    col: "lg:col-span-5", row: "lg:row-span-4",
    mh: "h-[240px]",
    showDesc: false,
  },
  {
    id: 5, cat: "UI/UX Design",
    title: "SaaS Analytics Dashboard",
    desc:  "Data-dense UI with clean hierarchy, dark theme, and real-time chart components.",
    img:   "/projects/project-5.jpg",
    grad:  "linear-gradient(135deg,#1a1235 0%,#7D52FD 100%)",
    col: "lg:col-span-4", row: "lg:row-span-4",
    mh: "h-[220px]",
    showDesc: false,
  },
  {
    id: 6, cat: "Development",
    title: "Portfolio Website Build",
    desc:  "Next.js + Tailwind portfolio with fluid animations and perfect Lighthouse scores.",
    img:   "/projects/project-6.jpg",
    grad:  "linear-gradient(135deg,#3d1a6e 0%,#0d0a1a 100%)",
    col: "lg:col-span-4", row: "lg:row-span-4",
    mh: "h-[220px]",
    showDesc: false,
  },
  {
    id: 7, cat: "Marketing",
    title: "Brand Identity System",
    desc:  "Full visual identity — logo, typography, colour tokens, and brand guidelines.",
    img:   "/projects/project-7.jpg",
    grad:  "linear-gradient(135deg,#0d2137 0%,#1a4a7a 100%)",
    col: "lg:col-span-4", row: "lg:row-span-4",
    mh: "h-[220px]",
    showDesc: false,
  },
]

// ── Arrow icon ────────────────────────────────────────────────────────────────
const ArrowIcon = ({ color = "currentColor", size = 14 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 13L13 3M13 3H6M13 3v7"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Bento card ────────────────────────────────────────────────────────────────
function BentoCard({
  project, index, visible, dimmed,
}: {
  project: (typeof PROJECTS)[0]
  index:   number
  visible: boolean
  dimmed:  boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[20px] cursor-pointer",
        "border border-white/[0.07]",
        project.col,
        project.row,
        // mobile height
        project.mh,
        // desktop height fills grid rows
        "lg:h-auto",
      ].join(" ")}
      style={{
        // entrance animation
        opacity:   visible ? (dimmed ? 0.14 : 1) : 0,
        transform: visible ? (dimmed ? "scale(.97)" : "translateY(0)") : "translateY(32px)",
        transition: [
          `opacity .65s ${index * 80}ms`,
          `transform .65s ${index * 80}ms cubic-bezier(.22,1,.36,1)`,
          "box-shadow .3s",
          "border-color .3s",
        ].join(", "),
        pointerEvents: dimmed ? "none" : "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient / image */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          background: project.grad,
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />

      {/* Real image — uncomment when ready */}
      {/*
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />
      */}

      {/* Violet tint overlay on hover */}
      <div
        className="absolute inset-0 bg-[#7D52FD]/18 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-[20px] transition-all duration-300"
        style={{
          boxShadow: hovered ? "inset 0 0 0 1.5px rgba(125,82,253,.55), 0 20px 50px rgba(125,82,253,.22)" : "none",
        }}
      />

      {/* Arrow button — top right */}
      <div
        className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center
          w-9 h-9 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,.35)]
          transition-all duration-300"
        style={{
          opacity:   hovered ? 1 : 0,
          transform: hovered ? "scale(1) translateY(0)" : "scale(.75) translateY(5px)",
        }}
      >
        <ArrowIcon color="#120637" size={13} />
      </div>

      {/* Category badge */}
      <div className="absolute top-3.5 left-3.5 z-20">
        <span className="inline-block rounded-full px-3 py-1 text-[9.5px] font-bold
          tracking-[.12em] uppercase backdrop-blur-md
          border border-white/20 bg-black/30 text-white/80">
          {project.cat}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 z-10 px-5 py-4
        bg-linear-to-t from-[#0d0a1a]/95 via-[#0d0a1a]/55 to-transparent">
        <h3
          className="font-black text-white leading-tight mb-1"
          style={{
            fontFamily: 'var(--font-syne,"Syne",sans-serif)',
            fontSize: "clamp(.85rem,1.2vw,.95rem)",
          }}
        >
          {project.title}
        </h3>
        {project.showDesc && (
          <p className="text-[.72rem] text-white/45 leading-relaxed line-clamp-2">
            {project.desc}
          </p>
        )}
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
export default function PortfolioSection() {
  const [active, setActive] = useState<Filter>("All")
  const { ref: headerRef, visible: headerVis } = useInView()
  const { ref: gridRef,   visible: gridVis   } = useInView(0.04)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#151022] py-24 md:py-32">

      {/* bg glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-175 h-70
          rounded-full bg-[#7D52FD] opacity-[0.07] blur-[120px]"/>
        <div className="absolute -right-20 bottom-1/4 w-95 h-95
          rounded-full bg-[#7D52FD] opacity-[0.06] blur-[110px]"/>
        <div className="absolute inset-0 opacity-[0.025]
          bg-[radial-gradient(circle,#fff_1px,transparent_1px)]
          bg-size-[32px_32px]"/>
        <div className="absolute top-0 inset-x-0 h-px
          bg-linear-to-r from-transparent via-[#7D52FD]/35 to-transparent"/>
      </div>

      <div className="relative z-10 mx-auto max-w-300 px-6 md:px-12">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-1000
            ${headerVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-6 h-0.5 rounded-full bg-[#7D52FD]"/>
            <span className="text-[11px] font-black tracking-[.22em] text-[#9D86FF] uppercase">
              Portfolio
            </span>
            <span className="block w-6 h-0.5 rounded-full bg-[#7D52FD]"/>
          </div>
          <h2
            className="font-black leading-[1.1] tracking-[-0.025em] text-white mb-3"
            style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)', fontSize:"clamp(1.9rem,3.8vw,2.8rem)" }}
          >
            Projects that reflect my
            <br className="hidden sm:block"/>
            {" "}<span className="bg-linear-to-r from-[#B59AFF] to-[#7D52FD] bg-clip-text text-transparent">
              expertise and vision
            </span>
          </h2>
          <p className="text-[.88rem] text-white/38 max-w-115 mx-auto leading-relaxed">
            Handcrafted digital experiences — from brand identity to full-stack builds.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 mb-10
            transition-all duration-1000 delay-150
            ${headerVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                "rounded-full px-5 py-2 text-[12px] font-bold tracking-[.07em]",
                "transition-all duration-300 cursor-pointer",
                active === f
                  ? "bg-[#7D52FD] text-white shadow-[0_4px_20px_rgba(125,82,253,.45)]"
                  : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/9 hover:border-white/20",
              ].join(" ")}
              style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)' }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Bento grid ──────────────────────────────────────────────────── */}
        {/* Mobile: single column stack                                       */}
        {/* Desktop: 12-col CSS grid with explicit spans                      */}
        <div
          ref={gridRef}
          className="flex flex-col gap-3 lg:grid lg:gap-3"
          style={{
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gridAutoRows: "80px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <BentoCard
              key={p.id}
              project={p}
              index={i}
              visible={gridVis}
              dimmed={active !== "All" && p.cat !== active}
            />
          ))}
        </div>

        {/* View all */}
        <div
          className={`text-center mt-10 transition-all duration-1000 delay-600
            ${gridVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <button
            className="inline-flex items-center gap-2.5 rounded-full
              border border-white/12 bg-white/4 px-8 py-3.25
              text-[.87rem] font-bold text-white/65
              transition-all duration-300
              hover:border-[#7D52FD]/50 hover:bg-[#7D52FD]/10
              hover:text-white hover:-translate-y-0.5
              hover:shadow-[0_8px_28px_rgba(125,82,253,.22)]"
            style={{ fontFamily:'var(--font-syne,"Syne",sans-serif)' }}
          >
            View All Projects
            <ArrowIcon size={14} />
          </button>
        </div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px
        bg-linear-to-r from-transparent via-[#7D52FD]/30 to-transparent pointer-events-none"/>
    </section>
  )
}