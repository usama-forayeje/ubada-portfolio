"use client"

import React, { useState } from "react"
import Link from "next/link"

// ── Send icon ─────────────────────────────────────────────────────────────────
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="size-4.5">
    <path
      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ════════════════════════════════════════════════════════════════════════════
export default function CallToAction() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmit] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmit(true)
    setTimeout(() => setSubmit(false), 3000)
    setEmail("")
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#151022] py-24 md:py-36"
    >
      {/* ── bg glows ─────────────────────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 h-100 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7D52FD] opacity-[0.13] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-size-[32px_32px] opacity-[0.025]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7D52FD]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#7D52FD]/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-190 px-6 text-center">
        {/* ── Badge ─────────────────────────────────────────────────────── */}
        <div className="mb-6 inline-flex items-center gap-2.5">
          <span className="block h-0.5 w-5 rounded-full bg-[#7D52FD]" />
          <span className="text-[11px] font-black tracking-[.22em] text-[#9D86FF] uppercase">
            Available For Opportunities
          </span>
          <span className="block h-0.5 w-5 rounded-full bg-[#7D52FD]" />
        </div>

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <h2
          className="mb-5 leading-[1.08] font-black tracking-[-0.025em] text-white"
          style={{
            fontFamily: 'var(--font-syne,"Syne",sans-serif)',
            fontSize: "clamp(2.2rem,5vw,3.8rem)",
          }}
        >
          Let&apos;s work together to
          <br className="hidden sm:block" /> transform your ideas into{" "}
          <span className="bg-linear-to-r from-[#B59AFF] to-[#7D52FD] bg-clip-text text-transparent">
            stunning designs.
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-120 text-[.95rem] leading-relaxed text-white/40">
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and let&apos;s create something amazing together.
        </p>

        {/* ── Email form ─────────────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} className="mx-auto mb-10 max-w-120">
          <div
            className="relative grid grid-cols-[1fr_auto] items-center rounded-2xl border bg-[#17122A] pr-2 shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
            style={{
              borderColor: focused
                ? "rgba(125,82,253,.55)"
                : "rgba(255,255,255,.09)",
              boxShadow: focused
                ? "0 0 0 3px rgba(125,82,253,.15), 0 8px 40px rgba(0,0,0,.4)"
                : "0 8px 40px rgba(0,0,0,.4)",
            }}
          >
            {/* Mail icon */}
            <svg
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                color: focused ? "#9D86FF" : "rgba(255,255,255,.3)",
                transition: "color .3s",
              }}
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M2 7l10 7 10-7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="your@email.com"
              className="h-13.5 w-full bg-transparent pr-3 pl-12 text-[.9rem] text-white placeholder:text-white/25 focus:outline-none"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[#7D52FD] px-5 py-2.5 text-[.85rem] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6a3fec] hover:shadow-[0_4px_20px_rgba(125,82,253,.55)] active:translate-y-0"
              style={{ fontFamily: 'var(--font-syne,"Syne",sans-serif)' }}
            >
              {submitted ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5 9-9"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="hidden sm:block">Sent!</span>
                </>
              ) : (
                <>
                  <SendIcon />
                  <span className="hidden cursor-pointer sm:block">Get Started</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-3 text-[11px] text-white/25">
            No spam. I&apos;ll reply within 24 hours. 🤝
          </p>
        </form>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div className="mx-auto mb-8 flex max-w-100 items-center gap-4">
          <div className="h-px flex-1 bg-white/[.07]" />
          <span className="text-[11px] font-bold tracking-wider text-white/25 uppercase">
            or reach me directly
          </span>
          <div className="h-px flex-1 bg-white/[.07]" />
        </div>

        {/* ── WhatsApp CTA — prominent ────────────────────────────────────── */}
        <Link
          href="https://wa.me/+8801602503907"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 inline-flex items-center gap-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3.5 text-[.9rem] font-bold text-[#25D366] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/55 hover:bg-[#25D366]/20 hover:shadow-[0_8px_28px_rgba(37,211,102,.22)]"
          style={{ fontFamily: 'var(--font-syne,"Syne",sans-serif)' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
