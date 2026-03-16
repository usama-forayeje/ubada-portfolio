"use client"

import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

// ── Smooth scroll helper ──────────────────────────────────────────────────────
const smoothScrollTo = (href: string) => {
  if (!href.startsWith("#")) return
  const el = document.querySelector(href)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const UbaidLogo = () => (
    <Link href="/" aria-label="Ubaid home" className="flex items-center gap-2 select-none group">
        {/* Layers icon — stacked design layers like Figma/UX tools */}
        <svg
            viewBox="0 0 22 22"
            fill="none"
            width="20" height="20"
            style={{ flexShrink:0, transition:'transform 0.4s cubic-bezier(.22,1,.36,1)' }}
            className="group-hover:-translate-y-0.5"
        >
            {/* Bottom layer */}
            <path
                d="M3 15.5l8 4 8-4"
                stroke="#7D52FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition:'opacity 0.3s' }}
                className="group-hover:opacity-60"
            />
            {/* Middle layer */}
            <path
                d="M3 11.5l8 4 8-4"
                stroke="#9D86FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
            />
            {/* Top layer — brightest */}
            <path
                d="M3 7.5l8 4 8-4-8-4-8 4z"
                stroke="#C4B5FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
                fill="rgba(196,181,253,0.12)"
                className="group-hover:fill-[rgba(196,181,253,0.22)]"
                style={{ transition:'fill 0.3s' }}
            />
        </svg>
        <span style={{ fontSize:'1.05rem', fontWeight:800, letterSpacing:'-0.01em', color:'#fff' }}>
            Ubaid.
        </span>
    </Link>
)

const HireMeBtn = ({ className = "" }: { className?: string }) => (
  <Link
    href="#contact"
    className={cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-0.5",
      className
    )}
    style={{
      background: "#7D52FD",
      padding: "9px 24px",
      fontSize: "0.83rem",
      letterSpacing: "0.02em",
      transition: "transform 0.25s, box-shadow 0.25s",
    }}
    onMouseEnter={(e) => {
      ;(e.currentTarget as HTMLElement).style.boxShadow =
        "0 4px 24px rgba(125,82,253,0.55)"
    }}
    onMouseLeave={(e) => {
      ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
    }}
  >
    <span
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
        transform: "translateX(-100%)",
        transition: "transform 0.6s ease",
        pointerEvents: "none",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.transform = "translateX(100%)")
      }
    />
    <span className="relative">Hire Me</span>
  </Link>
)

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const headerRef = React.useRef<HTMLElement>(null)
  const navRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    // Close mobile menu when clicking outside
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuState(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      clearTimeout(t)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  const barVisible = scrollProgress > 1

  return (
    <header ref={headerRef}>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed z-20 w-full px-2"
      >
        <div
          ref={navRef}
          className={cn(
            "relative mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border border-white/8 backdrop-blur-xl lg:px-6",
            isLoaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          )}
          style={{
            background: isScrolled ? "rgba(21,16,34,0.82)" : "transparent",
            transition:
              "max-width 0.4s, padding 0.4s, background 0.4s, border-color 0.4s, transform 0.6s cubic-bezier(.22,1,.36,1), opacity 0.6s",
            boxShadow: isScrolled ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
          }}
        >
          {/* ═══════════════════════════════════════════════════
                        SCROLL PROGRESS BAR — 4-layer animated system

                        Layer 1 │ Faint track          → always-on bg line
                        Layer 2 │ Gradient fill         → spring-eased width
                        Layer 3 │ Shimmer sweep          → travelling light
                        Layer 4 │ Leading glow dot       → pulse at tip
                    ═══════════════════════════════════════════════════ */}

          {/* Layer 1 — dim track */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "rgba(125,82,253,0.12)",
              borderRadius: 999,
              opacity: barVisible ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: "none",
            }}
          />

          {/* Layer 2 — main fill */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: `${scrollProgress}%`,
              background:
                "linear-gradient(90deg, #5B35D0 0%, #7D52FD 40%, #9D86FF 75%, #C4B5FD 100%)",
              borderRadius: 999,
              // spring cubic-bezier — snappy feel
              transition: `width 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease`,
              opacity: barVisible ? 1 : 0,
              pointerEvents: "none",
            }}
          />

          {/* Layer 3 — shimmer sweep (travelling highlight) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              width: `${scrollProgress}%`,
              borderRadius: 999,
              overflow: "hidden",
              transition: `width 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease`,
              opacity: barVisible ? 1 : 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.6) 50%, transparent 80%)",
                backgroundSize: "50% 100%",
                animation: "progressShimmer 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Layer 4 — leading edge glow dot */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: -2,
              // offset half of dot width so it sits centered on the tip
              left: `clamp(0px, calc(${scrollProgress}% - 5px), calc(100% - 10px))`,
              width: 10,
              height: 6,
              background: "#E0D4FF",
              borderRadius: 999,
              boxShadow:
                "0 0 6px 2px rgba(196,181,253,0.9), 0 0 14px 4px rgba(125,82,253,0.6)",
              transition: `left 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease`,
              opacity: scrollProgress > 2 && scrollProgress < 98 ? 1 : 0,
              pointerEvents: "none",
              animation: "dotPulse 1.5s ease-in-out infinite",
            }}
          />

          {/* ─── Nav content ─── */}
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo + mobile toggle */}
            <div className="flex w-full items-center justify-between lg:w-auto">
              <UbaidLogo />
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: menuState ? "transparent" : "#fff",
                    borderRadius: 2,
                    margin: "5px 0",
                    transition: "all 0.25s",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                    margin: "5px 0",
                    transform: menuState
                      ? "translateY(-7px) rotate(45deg)"
                      : "none",
                    transition: "all 0.25s",
                    position: menuState ? "relative" : "static",
                    top: menuState ? "7px" : 0,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                    margin: "5px 0",
                    transform: menuState
                      ? "translateY(-14px) rotate(-45deg)"
                      : "none",
                    transition: "all 0.25s",
                  }}
                />
              </button>
            </div>

            {/* Desktop nav — absolutely centered */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        smoothScrollTo(item.href)
                      }}
                      className="group relative block cursor-pointer py-1 font-medium transition-colors duration-200"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        transitionDelay: `${i * 50}ms`,
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.65)")
                      }
                    >
                      {item.name}
                      <span
                        style={{
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          height: 2,
                          width: 0,
                          background:
                            "linear-gradient(90deg, #7D52FD, #9D86FF)",
                          borderRadius: 999,
                          transition: "width 0.25s",
                        }}
                        className="group-hover:w-full!"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div
              className="hidden items-center gap-3 lg:flex"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.5s 0.4s, transform 0.5s 0.4s",
              }}
            >
              <HireMeBtn />
            </div>

            {/* Mobile dropdown */}
            <div
              className={cn(
                "w-full overflow-hidden rounded-3xl transition-all duration-500 ease-in-out lg:hidden",
                menuState ? "mb-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
              style={{
                background: "rgba(21,16,34,0.92)",
                backdropFilter: "blur(20px)",
                border: menuState
                  ? "1px solid rgba(157,134,255,0.15)"
                  : "1px solid transparent",
              }}
            >
              <ul className="space-y-1 p-5">
                {menuItems.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      transform: menuState
                        ? "translateX(0)"
                        : "translateX(-16px)",
                      opacity: menuState ? 1 : 0,
                      transition: `transform 0.35s ${i * 60 + 80}ms, opacity 0.35s ${i * 60 + 80}ms`,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setMenuState(false)
                        setTimeout(() => smoothScrollTo(item.href), 300)
                      }}
                      className="block cursor-pointer rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = "#fff"
                        el.style.background = "rgba(125,82,253,0.12)"
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = "rgba(255,255,255,0.65)"
                        el.style.background = "transparent"
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/8 p-5 pt-4">
                <HireMeBtn className="w-full justify-center text-center" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
                @keyframes progressShimmer {
                    0%   { background-position: -60% 0;   }
                    100% { background-position: 160% 0;   }
                }
                @keyframes dotPulse {
                    0%, 100% { box-shadow: 0 0 6px 2px rgba(196,181,253,0.9), 0 0 14px 4px rgba(125,82,253,0.6); }
                    50%      { box-shadow: 0 0 10px 4px rgba(196,181,253,1),   0 0 22px 8px rgba(125,82,253,0.8); }
                }
                @keyframes shimBar {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}</style>
    </header>
  )
}
