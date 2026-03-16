"use client"

import React from "react"
import { HeroHeader } from "./header"
import { AnimatedGroup } from "./ui/animated-group"
import { TextEffect } from "./ui/text-effect"

// ─── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { type: "spring" as const, bounce: 0.25, duration: 1.4 },
  },
}

const stagger = (delay = 0.2) => ({
  container: {
    visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
  },
  item: fadeUp,
})

// ─── Ticker skills ───────────────────────────────────────────────────────────
const SKILLS = [
  "UI/UX Design",
  "Web Design",
  "App Design",
  "Web Development",
  "Brand Strategy",
]

// ─── Sparkle icon ────────────────────────────────────────────────────────────
const Sparkle = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 0L9.796 6.204L16 8L9.796 9.796L8 16L6.204 9.796L0 8L6.204 6.204L8 0Z"
      fill="#9D86FF"
    />
  </svg>
)

// ════════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  return (
    <>
      {/*
        ── FONT: Add Syne to your project one of two ways:
        
        Option A (next/font — recommended):
          In layout.tsx:
            import { Syne } from 'next/font/google'
            const syne = Syne({ subsets: ['latin'], weight: ['700','800'], variable: '--font-syne' })
            <html className={syne.variable}>

        Option B (globals.css):
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
          :root { --font-syne: 'Syne', sans-serif; }
      */}

      <HeroHeader />

      <main
        className="relative overflow-hidden"
        style={{ background: "#151022", minHeight: "100vh" }}
      >
        {/* ── 4 blurred ellipse glows (exact match to SVG design) ─────────── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div
            style={{
              position: "absolute",
              left: "-30px",
              top: "-80px",
              width: 220,
              height: 650,
              background: "#7D52FD",
              transform: "rotate(-32deg)",
              filter: "blur(100px)",
              opacity: 0.32,
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "240px",
              top: "-150px",
              width: 220,
              height: 650,
              background: "#7D52FD",
              transform: "rotate(-30deg)",
              filter: "blur(100px)",
              opacity: 0.28,
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "-50px",
              top: "-110px",
              width: 220,
              height: 650,
              background: "#7D52FD",
              transform: "rotate(32deg)",
              filter: "blur(100px)",
              opacity: 0.28,
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "220px",
              top: "-190px",
              width: 220,
              height: 650,
              background: "#7D52FD",
              transform: "rotate(30deg)",
              filter: "blur(100px)",
              opacity: 0.22,
              borderRadius: "50%",
            }}
          />
          {/* Dot grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.025,
              backgroundImage:
                "radial-gradient(circle,#fff 1px,transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="home"
          className="relative z-10 mx-auto"
          style={{ maxWidth: 1380, padding: "0 60px" }}
        >
          <div
            className="flex flex-col-reverse items-center justify-between lg:flex-row"
            style={{
              minHeight: "calc(100vh - 80px)",
              paddingTop: 96,
              paddingBottom: 60,
              gap: 32,
            }}
          >
            {/* ── LEFT: Copy ──────────────────────────────────────────────── */}
            <div style={{ flex: 1, maxWidth: 560 }}>
              {/* Badge */}
              <AnimatedGroup variants={stagger(0.1)}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    marginBottom: 28,
                    border: "1px solid rgba(157,134,255,0.28)",
                    borderRadius: 999,
                    padding: "5px 16px 5px 10px",
                    background: "rgba(125,82,253,0.12)",
                  }}
                >
                  <Sparkle size={11} />
                  <span
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: "#C4B5FD",
                      textTransform: "uppercase",
                    }}
                  >
                    Available For Opportunities
                  </span>
                </div>
              </AnimatedGroup>

              {/* ── H1 with Syne font + gradient on "UI/UX Designer" ── */}
              {/*
                NOTE: TextEffect renders each word. To get the gradient on a specific
                line you can split into two TextEffect calls or use a plain h1.
                Using plain h1 here for full typography control:
              */}
              <AnimatedGroup variants={stagger(0.2)}>
                <h1
                  style={{
                    // Use CSS variable set from layout.tsx, fallback to system
                    fontFamily:
                      'var(--font-syne, "Syne", system-ui, sans-serif)',
                    fontSize: "clamp(2.4rem, 4.8vw, 3.85rem)",
                    fontWeight: 800,
                    lineHeight: 1.06,
                    letterSpacing: "-0.025em",
                    color: "#fff",
                    marginBottom: 18,
                  }}
                >
                  {/* Gradient line */}
                  <span
                    style={{
                      display: "block",
                      background:
                        "linear-gradient(90deg, #B59AFF 0%, #7D52FD 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    UI/UX Designer
                  </span>
                  {/* Plain white lines */}
                  <span style={{ display: "block" }}>Hey, I&apos;m Ubaid,</span>
                  <span style={{ display: "block" }}>Based in Bangladesh.</span>
                </h1>
              </AnimatedGroup>

              {/* Subtitle */}
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.28}
                delay={0.42}
                as="p"
                style={
                  {
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.38)",
                    maxWidth: 380,
                    marginBottom: 38,
                    whiteSpace: "pre-line",
                  } as React.CSSProperties
                }
              >
                {`Building professional, User-Friendly interfaces that support\nRelationship and foster user engagement.`}
              </TextEffect>

              {/* CTA Buttons */}
              <AnimatedGroup
                variants={stagger(0.75)}
                className="flex flex-wrap items-center gap-3"
              >
                {/* Let's Talk — primary */}
                <button
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#7D52FD",
                    color: "#fff",
                    borderRadius: 999,
                    border: "none",
                    padding: "13px 32px",
                    fontFamily: 'var(--font-syne, "Syne", sans-serif)',
                    fontSize: "0.87rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translateY(-2px)"
                    el.style.boxShadow = "0 6px 28px rgba(125,82,253,0.55)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translateY(0)"
                    el.style.boxShadow = "none"
                  }}
                >
                  Let&apos;s Talk
                </button>

                {/* My Works — ghost */}
                <button
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.72)",
                    borderRadius: 999,
                    padding: "12px 28px",
                    fontFamily: 'var(--font-syne, "Syne", sans-serif)',
                    fontSize: "0.87rem",
                    fontWeight: 700,
                    border: "1px solid rgba(255,255,255,0.13)",
                    cursor: "pointer",
                    transition:
                      "transform 0.25s, border-color 0.25s, color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translateY(-2px)"
                    el.style.borderColor = "rgba(255,255,255,0.3)"
                    el.style.color = "#fff"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = "translateY(0)"
                    el.style.borderColor = "rgba(255,255,255,0.13)"
                    el.style.color = "rgba(255,255,255,0.72)"
                  }}
                >
                  My Works &nbsp;→
                </button>
              </AnimatedGroup>
            </div>

            {/* ── RIGHT: Profile image ─────────────────────────── */}
            <div className="group relative h-[clamp(340px,40vw,480px)] w-[clamp(300px,35vw,400px)] shrink-0 animate-in duration-1000 fade-in">
              {/* ১. Ambient Purple Glow */}
              <div className="pointer-events-none absolute -inset-[15%] z-0 bg-[radial-gradient(circle_at_center,rgba(125,82,253,0.35)_0%,transparent_70%)] blur-[60px]" />

              {/* ২. Rounded Hexagon SVG Container */}
              <svg
                className="absolute inset-0 h-full w-full drop-shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
                viewBox="0 0 100 110"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="roundedHexMask">
                    <path d="M42,2.1 C47,-0.7 53,-0.7 58,2.1 L91.4,21.4 C96.4,24.2 99.5,29.6 99.5,35.4 V74.1 C99.5,79.9 96.4,85.3 91.4,88.1 L58,107.4 C53,110.2 47,110.2 42,107.4 L8.6,88.1 C3.6,85.3 0.5,79.9 0.5,74.1 V35.4 C0.5,29.6 3.6,24.2 8.6,21.4 Z" />
                  </clipPath>

                  <linearGradient
                    id="imageBgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#E2DDF2" />
                    <stop offset="50%" stopColor="#9B88D4" />
                    <stop offset="100%" stopColor="#1E0F4A" />
                  </linearGradient>
                </defs>

                {/* ৩. Background with Gradient and Lines */}
                <g clipPath="url(#roundedHexMask)">
                  <rect width="100" height="110" fill="url(#imageBgGradient)" />

                  {/* Decorative Lines */}
                  <g opacity="0.3" stroke="white" strokeWidth="0.8" fill="none">
                    <path d="M-10,90 Q20,60 15,20 Q12,5 20,-10" />
                    <path
                      d="M5,100 Q35,65 30,25 Q28,10 35,-5"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                    <path d="M110,80 Q80,50 85,15 Q88,0 80,-15" />
                    <path
                      d="M95,95 Q65,60 70,20 Q72,5 65,-10"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  </g>

                  {/* ৪. Profile Image */}
                  <image
                    href="/ubada-image.png"
                    x="0"
                    y="0"
                    width="100"
                    height="110"
                    preserveAspectRatio="xMidYMid slice"
                    className="mix-blend-soft-light transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:mix-blend-normal"
                    style={{ transformOrigin: "center" }}
                    aria-label="Ubaid - UI/UX Designer and Web Developer"
                    role="img"
                  />

                  {/* ৫. Bottom Overlay Fade */}
                  <rect
                    x="0"
                    y="80"
                    width="100"
                    height="30"
                    fill="url(#bottomShadow)"
                  />
                  <linearGradient id="bottomShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor="#120637" stopOpacity="0.8" />
                  </linearGradient>
                </g>
              </svg>

              {/* ৭. Rotating Badge & Button — পারফেক্টলি এলাইনড */}
              <div className="absolute bottom-5 left-1/2 z-20 h-15 w-15 -translate-x-1/2 md:bottom-10 md:h-25 md:w-25">
                {/* রোটেশনাল টেক্সট এবং বাইরের বর্ডার */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* টেক্সটকে বর্ডার এবং বাটনের মাঝখানে রাখার জন্য পাথের রেডিয়াস ৩৮ করা হয়েছে */}
                    <path
                      id="middleCirclePath"
                      d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      fill="none"
                    />
                  </defs>

                  {/* সাদা বর্ডার (Outer Ring) - আপনার চাহিদা মতো মোটা করা হয়েছে */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.9"
                  />

                  {/* ঘুরন্ত টেক্সট - গ্যাপ এবং এলাইনমেন্ট ঠিক করা হয়েছে */}
                  <g
                    className="animate-[spin_12s_linear_infinite]"
                    style={{ transformOrigin: "center" }}
                  >
                    <text
                      className="fill-white text-[7px] font-black tracking-[3px] uppercase"
                      style={{ letterSpacing: "0.35em" }}
                    >
                      <textPath href="#middleCirclePath" startOffset="0%">
                        DOWNLOAD CV • &nbsp;&nbsp; DOWNLOAD CV • &nbsp;&nbsp;
                      </textPath>
                    </text>
                  </g>
                </svg>

                {/* সেন্টারের ভায়োলেট বাটন - সাইজ ও আইকন এলাইনমেন্ট */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/btn flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#9b88d4] text-white shadow-[0_4px_20px_rgba(125,82,253,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#7D52FD] md:h-16 md:w-16">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v13M7 12l5 5 5-5M5 20h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
    PURPLE SECTION WITH SLANTED TICKER (TEXT ALSO SLANTED)
    ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-[#7D52FD] py-2">
          {/* ↑ এইটা আপনার মেইন পার্পল সেকশন */}

          <div className="relative flex h-11 w-full items-center justify-center">
            {/* ১. ব্যাকগ্রাউন্ড ফিতা (The Slanted Ribbon) */}
            <div
              className="absolute left-[-5%] h-11 w-[110%] bg-[#E2DDF2] shadow-xl"
              style={{ transform: "rotate(-1deg)" }}
            />

            {/* ২. এনিমেটেড টেক্সট কন্টেইনার - এবার লেখাও বাঁকা */}
            <div
              className="relative flex overflow-hidden whitespace-nowrap"
              style={{ transform: "rotate(-1deg)" }} // পুরো কন্টেইনার বাঁকা করায় লেখাও এখন বাঁকা হয়ে যাবে
            >
              <div className="flex animate-[tickerRoll_50s_linear_infinite] items-center py-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    {SKILLS.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-6 px-12"
                      >
                        {/* ৩. স্টার আইকন */}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#7D52FD"
                        >
                          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>

                        {/* ৪. টেক্সট - যা এখন ফিতার সাথে পারফেক্টলি অ্যালাইনড */}
                        <span
                          className="text-[15px] font-black tracking-[0.2em] text-[#120637] uppercase"
                          style={{
                            fontFamily: 'var(--font-syne, "Syne", sans-serif)',
                            lineHeight: "1",
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes tickerRoll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>
        {/* ── Keyframes ───────────────────────────────────────────────────── */}
        <style>{`
          @keyframes carouselScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes rotateBadge {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes tickerRoll {
            from { transform: translateX(0); }
            to   { transform: translateX(-100%); }
          }
          @keyframes spFloat {
            0%, 100% { transform: translateY(0)     scale(1);    opacity: 1;   }
            50%       { transform: translateY(-9px)  scale(1.25); opacity: 0.4; }
          }
        `}</style>
      </main>
    </>
  )
}
