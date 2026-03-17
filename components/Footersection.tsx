import Link from "next/link"
import { UbaidLogo } from "./logo"

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
]

export default function FooterSection() {
  return (
    <footer className="border-t border-white/6 bg-[#0d0a1a] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* ── Logo ── */}
        <div className="flex justify-center">
          <UbaidLogo />
        </div>

        {/* ── Nav links ── */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white/45 transition-colors duration-150 hover:text-white"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        {/* ── Social icons ── */}
        <div className="my-8 flex flex-wrap justify-center gap-5">
          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/ubaid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>

          {/* Dribbble */}
          <Link
            href="https://dribbble.com/ubaid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.01-.814zm-9.76-2.063c.24-.406 3.08-5.055 8.326-6.758.06-.017.116-.033.176-.05-.22-.507-.456-1.01-.708-1.507-5.13 1.546-10.086 1.48-10.558 1.47l-.012.01c.002 2.575.88 4.944 2.376 6.836zm-2.23-8.43c.48.014 4.704.038 9.555-1.24a57.494 57.494 0 00-4.29-5.74c-2.96 1.4-5.01 4.18-5.265 7.14l-.001-.2zm7.81-7.89c1.465 2.07 2.82 4.37 4.17 6.91.266-.115.534-.24.802-.37C14.48 4.836 13.33 3.5 12 3.5c-.13 0-.26.008-.39.02zm1.23-.172c1.43 1.75 2.65 3.96 3.72 6.32 2.53-.95 3.93-2.4 4.1-2.58-.97-1.67-2.39-3.04-4.08-3.96-.638.015-.7-.015-.7-.02z" />
            </svg>
          </Link>

          {/* Behance */}
          <Link
            href="https://behance.net/ubaid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.513-1.987-5.513-5.517 0-3.58 2.583-5.499 5.444-5.499 2.68 0 4.47 1.497 5.07 3.674.163.59.234 1.235.21 1.981H14.925c.05 2.077 1.39 2.7 2.595 2.7.944 0 1.664-.323 2.108-1.339H23zm-8.63-4h5.04c-.135-1.41-1.17-2.042-2.418-2.042-1.337 0-2.376.71-2.622 2.042zm-7.82 6.432H0V5h6.65c2.6 0 4.72 1.004 4.72 3.508 0 1.485-.698 2.48-1.888 3.075 1.65.472 2.518 1.696 2.518 3.306C11.999 17.98 9.665 19.432 7.276 19.432zm-4.558-8.944h3.75c.904 0 1.748-.472 1.748-1.592 0-1.16-.843-1.553-1.748-1.553H2.718v3.145zm0 5.918h4.107c1.051 0 1.98-.506 1.98-1.74 0-1.274-.938-1.75-1.98-1.75H2.718v3.49z" />
            </svg>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/ubaid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/ubadaforayaje?igsh=MWk0NThiZGZtZWJ1eg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3" />
            </svg>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/+8801602503907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="block text-white/35 transition-all duration-150 hover:-translate-y-0.5 hover:text-white"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52 -.075-.149-.669-1.612-.916-2.207 -.242 -.579 -.487 -.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.0₁₆ -₁₀₄ ₂₄₇₉ ₀ ₁₄₆₂ ₁₀₆₅ ₂₈₇₅ ₁₂₁₃ ₃₀₇₄ .₁₄₉ .₁₉₈ ₂₀₉₆ ³² ⁵₀⁷⁷ ⁴⁴⁸⁷ .⁷⁰⁹ .³⁰⁶ ₁²⁶² .⁴⁸⁹ ₁⁶⁹⁴ .⁶²⁵ .⁷¹² .²²⁷ ₁³⁶ .¹⁹⁵ ₁⁸⁷¹ .¹¹⁸ .៥𝟕¹ -." />
            </svg>
          </Link>
        </div>

        {/* ── Divider ── */}
        <div className="mb-6 h-px bg-white/6" />

        {/* ── Bottom: copyright + dev credit ── */}
        <div className="flex flex-col items-center gap-2 text-xs text-white/25 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Ubaid. All rights reserved.</span>
          <span>
            Developed by{" "}
            <Link
              href="https://linkedin.com/in/usama-forayaje"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 underline decoration-white/15 underline-offset-2 transition-colors duration-150 hover:text-[#9D86FF] hover:decoration-[#9D86FF]/50"
            >
              Usama Forayaje
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
