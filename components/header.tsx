'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

// ─── Nav links (Ubaid's design) ──────────────────────────────────────────────
const menuItems = [
    { name: 'Home',      href: '#home' },
    { name: 'About',     href: '#about' },
    { name: 'Services',  href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
]

// ─── Logo: "+ Ubaid." ────────────────────────────────────────────────────────
const UbaidLogo = () => (
    <Link
        href="/"
        aria-label="Ubaid home"
        className="flex items-center gap-1.5 select-none group"
    >
        {/* Plus icon */}
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 18,
                height: 18,
                color: '#9D86FF',
                fontWeight: 900,
                fontSize: '1.1rem',
                lineHeight: 1,
                transition: 'transform 0.3s',
            }}
            className="group-hover:rotate-90"
        >
            +
        </span>
        <span
            style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: '#fff',
            }}
        >
            Ubaid.
        </span>
    </Link>
)

// ─── "Hire Me" pill button ────────────────────────────────────────────────────
const HireMeBtn = ({ className = '' }: { className?: string }) => (
    <Link
        href="#contact"
        className={cn(
            'relative overflow-hidden inline-flex items-center justify-center',
            'font-bold text-white rounded-full transition-all duration-300',
            'hover:-translate-y-0.5',
            className,
        )}
        style={{
            background: '#7D52FD',
            padding: '9px 24px',
            fontSize: '0.83rem',
            letterSpacing: '0.02em',
            boxShadow: '0 0 0 0 rgba(125,82,253,0)',
            transition: 'transform 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(125,82,253,0.55)'
        }}
        onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(125,82,253,0)'
        }}
    >
        {/* Shimmer sweep */}
        <span
            aria-hidden
            style={{
                position: 'absolute',
                inset: 0,
                background:
                    'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease',
                pointerEvents: 'none',
            }}
            onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.transform = 'translateX(100%)')
            }
        />
        <span className="relative">Hire Me</span>
    </Link>
)

// ════════════════════════════════════════════════════════════════════════════
export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled]   = React.useState(false)
    const [isLoaded, setIsLoaded]       = React.useState(false)
    const [scrollProgress, setScrollProgress] = React.useState(0)
    const headerRef = React.useRef<HTMLElement>(null)

    React.useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 100)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            const docH = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            clearTimeout(t)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header ref={headerRef}>
            <nav
                data-state={menuState ? 'active' : undefined}
                className="fixed z-20 w-full px-2"
            >
                <div
                    className={cn(
                        'relative mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12',
                        isScrolled &&
                            'max-w-4xl rounded-2xl border border-white/8 backdrop-blur-xl lg:px-6',
                        // entrance animation
                        isLoaded
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0',
                    )}
                    style={{
                        background: isScrolled ? 'rgba(21,16,34,0.82)' : 'transparent',
                        transition:
                            'max-width 0.4s, padding 0.4s, background 0.4s, border-color 0.4s, transform 0.6s cubic-bezier(.22,1,.36,1), opacity 0.6s',
                        boxShadow: isScrolled
                            ? '0 4px 32px rgba(0,0,0,0.35)'
                            : 'none',
                    }}
                >
                    {/* Scroll progress bar */}
                    <div
                        aria-hidden
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: 2,
                            width: `${scrollProgress}%`,
                            background:
                                'linear-gradient(90deg, #7D52FD, #9D86FF, #7D52FD)',
                            backgroundSize: '200% 100%',
                            animation: 'shimBar 2s linear infinite',
                            borderRadius: 999,
                            transition: 'width 0.1s',
                            opacity: scrollProgress > 2 ? 1 : 0,
                        }}
                    />

                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

                        {/* ── Logo + mobile toggle ──────────────────────── */}
                        <div className="flex w-full items-center justify-between lg:w-auto">
                            <UbaidLogo />

                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <span
                                    style={{
                                        display: 'block',
                                        width: 22,
                                        height: 2,
                                        background: menuState ? 'transparent' : '#fff',
                                        borderRadius: 2,
                                        margin: '5px 0',
                                        transform: menuState ? 'none' : 'none',
                                        transition: 'all 0.25s',
                                    }}
                                />
                                <span
                                    style={{
                                        display: 'block',
                                        width: 22,
                                        height: 2,
                                        background: '#fff',
                                        borderRadius: 2,
                                        margin: '5px 0',
                                        transform: menuState
                                            ? 'translateY(-7px) rotate(45deg)'
                                            : 'none',
                                        transition: 'all 0.25s',
                                        position: menuState ? 'relative' : 'static',
                                        top: menuState ? '7px' : 0,
                                    }}
                                />
                                <span
                                    style={{
                                        display: 'block',
                                        width: 22,
                                        height: 2,
                                        background: '#fff',
                                        borderRadius: 2,
                                        margin: '5px 0',
                                        transform: menuState
                                            ? 'translateY(-14px) rotate(-45deg)'
                                            : 'none',
                                        transition: 'all 0.25s',
                                    }}
                                />
                            </button>
                        </div>

                        {/* ── Desktop nav — absolutely centered ────────── */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.href}
                                            className="group relative block py-1 font-medium transition-colors duration-200"
                                            style={{
                                                color: 'rgba(255,255,255,0.65)',
                                                transitionDelay: `${i * 50}ms`,
                                            }}
                                            onMouseEnter={e =>
                                                ((e.currentTarget as HTMLElement).style.color =
                                                    '#fff')
                                            }
                                            onMouseLeave={e =>
                                                ((e.currentTarget as HTMLElement).style.color =
                                                    'rgba(255,255,255,0.65)')
                                            }
                                        >
                                            {item.name}
                                            {/* Underline accent */}
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: -2,
                                                    left: 0,
                                                    height: 2,
                                                    width: 0,
                                                    background:
                                                        'linear-gradient(90deg, #7D52FD, #9D86FF)',
                                                    borderRadius: 999,
                                                    transition: 'width 0.25s',
                                                }}
                                                className="group-hover:w-full!"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ── Desktop CTA ───────────────────────────────── */}
                        <div
                            className="hidden lg:flex items-center gap-3"
                            style={{
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? 'translateY(0)' : 'translateY(-8px)',
                                transition: 'opacity 0.5s 0.4s, transform 0.5s 0.4s',
                            }}
                        >
                            <HireMeBtn />
                        </div>

                        {/* ── Mobile dropdown menu ──────────────────────── */}
                        <div
                            className={cn(
                                'w-full overflow-hidden rounded-3xl transition-all duration-500 ease-in-out lg:hidden',
                                menuState ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0',
                            )}
                            style={{
                                background: 'rgba(21,16,34,0.92)',
                                backdropFilter: 'blur(20px)',
                                border: menuState
                                    ? '1px solid rgba(157,134,255,0.15)'
                                    : '1px solid transparent',
                            }}
                        >
                            <ul className="space-y-1 p-5">
                                {menuItems.map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            transform: menuState
                                                ? 'translateX(0)'
                                                : 'translateX(-16px)',
                                            opacity: menuState ? 1 : 0,
                                            transition: `transform 0.35s ${i * 60 + 80}ms, opacity 0.35s ${i * 60 + 80}ms`,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuState(false)}
                                            className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-150"
                                            style={{ color: 'rgba(255,255,255,0.65)' }}
                                            onMouseEnter={e => {
                                                const el = e.currentTarget as HTMLElement
                                                el.style.color = '#fff'
                                                el.style.background = 'rgba(125,82,253,0.12)'
                                            }}
                                            onMouseLeave={e => {
                                                const el = e.currentTarget as HTMLElement
                                                el.style.color = 'rgba(255,255,255,0.65)'
                                                el.style.background = 'transparent'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile CTA */}
                            <div className="border-t border-white/8 p-5 pt-4">
                                <HireMeBtn className="w-full text-center justify-center" />
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Shimmer bar keyframe */}
            <style>{`
                @keyframes shimBar {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}</style>
        </header>
    )
}