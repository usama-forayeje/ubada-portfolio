"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

// ── IntersectionObserver hook ─────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const TOOLS = [
  {
    // Figma — #1 UI/UX design tool
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="7"  y="2"  width="5" height="5" rx="2.5" fill="#F24E1E"/>
        <rect x="12" y="2"  width="5" height="5" rx="2.5" fill="#FF7262"/>
        <rect x="7"  y="7"  width="5" height="5" rx="2.5" fill="#A259FF"/>
        <rect x="7"  y="12" width="5" height="5" rx="2.5" fill="#0ACF83"/>
        <circle cx="14.5" cy="14.5" r="2.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    // Framer — top no-code UI tool with AI features
    name: "Framer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M5 3h14v7.5H12L5 3z"  fill="#0099FF"/>
        <path d="M5 10.5h7l7 10.5H5v-10.5z" fill="#0066CC"/>
        <line x1="12" y1="10.5" x2="12" y2="21" stroke="#66CCFF" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    // Spline — 3D design tool, trending for UI/UX
    name: "Spline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#0AFFE5" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#0AFFE5" strokeWidth="1" opacity="0.5"/>
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#0AFFE5" strokeWidth="1" opacity="0.5"/>
        <circle cx="12" cy="12" r="2.5" fill="#0AFFE5"/>
      </svg>
    ),
  },
  {
    // Webflow — visual dev & CMS powerhouse
    name: "Webflow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 7.5l3.5 9L9 12l2.5 4.5L15 7.5h1.5L12 19l-2.5-4.5L7 19 3 7.5z" fill="#4353FF"/>
        <path d="M15.5 7.5c0 0 2 5.5 2.5 7 .5-1.5 2.5-7 2.5-7h-5z" fill="#4353FF"/>
      </svg>
    ),
  },
  {
    // Lottie / After Effects — motion design & micro-animations
    name: "After FX",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#00005B"/>
        <text x="4.5" y="16.5" fontSize="9.5" fill="#9999FF" fontWeight="900"
          fontFamily="Arial,sans-serif">Ae</text>
      </svg>
    ),
  },
  {
    // Notion — design docs, system docs, PM tool
    name: "Notion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="2" width="18" height="20" rx="3" fill="#fff" opacity="0.9"/>
        <path d="M7 7h6M7 11h8M7 15h5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="15" r="2" fill="#000" opacity="0.15"/>
      </svg>
    ),
  },
  {
    // Lottie Files — animation workflow tool
    name: "Lottie",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" fill="#0BCEAF" opacity="0.15"/>
        <circle cx="12" cy="12" r="10" stroke="#0BCEAF" strokeWidth="1.5"/>
        <path d="M8 9l8 3-8 3V9z" fill="#0BCEAF"/>
      </svg>
    ),
  },
  {
    // Protopie — advanced interactive prototyping
    name: "ProtoPie",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" fill="#FF3C6F" opacity="0.15"/>
        <circle cx="12" cy="12" r="10" stroke="#FF3C6F" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="5" fill="#FF3C6F" opacity="0.4"/>
        <circle cx="12" cy="12" r="2" fill="#FF3C6F"/>
      </svg>
    ),
  },
  {
    // Illustrator — vector graphics & branding
    name: "Illustrator",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#300000"/>
        <text x="4" y="17" fontSize="10" fill="#FF9A00" fontWeight="900"
          fontFamily="Arial,sans-serif">Ai</text>
      </svg>
    ),
  },
]


function IconSlot({ startIndex = 0 }: { startIndex?: number }) {
  const [idx, setIdx] = useState(startIndex % TOOLS.length)
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("show")

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>, t3: ReturnType<typeof setTimeout>
    if (phase === "enter") {
      t1 = setTimeout(() => setPhase("show"), 50)
    } else if (phase === "show") {
      t2 = setTimeout(() => setPhase("exit"), 2000)
    } else {
      t3 = setTimeout(() => {
        setIdx((i) => (i + 1) % TOOLS.length)
        setPhase("enter")
      }, 380)
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [phase])

  return (
    <div
      className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${phase === "show" ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-90 opacity-0"}`}
    >
      <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] p-2.75 shadow-xl backdrop-blur-xl transition-all hover:border-[#7D52FD]/50">
        {TOOLS[idx].icon}
      </div>
      <span className="text-[8px] font-bold tracking-widest text-white/40 uppercase">
        {TOOLS[idx].name}
      </span>
    </div>
  )
}

export default function AboutSection() {
  const { ref: wrapRef, visible: wrapVis } = useInView()
  const { ref: rightRef, visible: rightVis } = useInView()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1E182B] py-24 md:py-36"
    >
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#7D52FD] opacity-20 blur-[130px]" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#7D52FD] opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-325 px-6">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-24">
          {/* ── LEFT: Image ────────────────────────────────── */}
          <div
            ref={wrapRef}
            className={`relative shrink-0 transition-all duration-1000 ${wrapVis ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
          >
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="popOutClip" clipPathUnits="objectBoundingBox">
                  {/* নিচে একটি বড় সার্কেল যা ইমেজকে নিচ থেকে কাটবে */}
                  <circle cx="0.5" cy="0.78" r="0.48" />
                  {/* উপরে একটি চারকোনা বক্স যা মাথার অংশকে "খোলা" রাখবে */}
                  <rect x="0" y="0" width="1" height="0.6" />
                </clipPath>
              </defs>
            </svg>

            <div className="relative h-75 w-75 md:h-105 md:w-105">
              <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-[#7D52FD]/30 shadow-[0_0_60px_rgba(125,82,253,0.2)]">
                <div className="absolute inset-0 bg-[linear-gradient(175deg,#cec5ee_0%,#8b78cc_40%,#2a1060_75%,#160838_100%)]" />
              </div>

              <Image
                src="/ubada-image 1.png"
                width={500}
                height={500}
                alt="Profile"
                className="absolute left-1/2 z-20 -translate-x-1/2 object-contain"
                style={{
                  bottom: "-30px",
                  width: "100%",
                  height: "140%",
                  clipPath: "url(#popOutClip)",
                }}
              />

              <div className="absolute top-[40%] -left-6 z-30 md:-left-10">
                <IconSlot startIndex={0} />
              </div>
              <div className="absolute top-[55%] -right-6 z-30 md:-right-10">
                <IconSlot startIndex={2} />
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ──────────────────────────────────────── */}
          <div
            ref={rightRef}
            className={`max-w-xl flex-1 transition-all delay-300 duration-1000 ${rightVis ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#7D52FD]" />
              <span className="text-xs font-black tracking-widest text-[#9D86FF] uppercase">
                About Me
              </span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black text-white md:text-6xl">
              I&apos;m a Professional <br />
              <span className="bg-linear-to-r from-[#B59AFF] to-[#7D52FD] bg-clip-text text-transparent italic">
                UI/UX Designer
              </span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-white/50 md:text-lg">
              I am a UI/UX Designer passionate about creating user-friendly,
              intuitive digital experiences. I combine user research, design
              principles, and creativity to build clean interfaces that improve
              engagement and satisfaction.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              {/* Primary Button with Shine Effect */}
              <button className="group relative cursor-pointer overflow-hidden rounded-full bg-white px-8 py-4 font-black text-[#120637] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(125,82,253,0.4)]">
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-linear-to-r from-[#7D52FD] to-[#B59AFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Download CV
                </span>
                {/* Shine Sweep */}
                <div className="group-hover:animate-shine absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-linear-to-r from-transparent to-white/40 opacity-40" />
              </button>

              <button className="group flex cursor-pointer items-center gap-2 font-bold text-white transition-all">
                Let&apos;s Talk
                <span className="text-[#7D52FD] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Stats Cards ──────────────────────────────────────── */}
        {/* <div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-32"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/5 bg-[#17122A] p-10 transition-all duration-700 hover:-translate-y-2 hover:border-[#7D52FD]/40 ${statsVis ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#7D52FD]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="font-syne mb-2 text-5xl font-black text-white">
                {stat.value}
                <span className="text-[#7D52FD]">{stat.suffix}</span>
              </h3>
              <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.8s underline;
        }
      `}</style>
    </section>
  )
}
