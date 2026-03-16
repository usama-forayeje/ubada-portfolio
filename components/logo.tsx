import Link from 'next/link'

export const UbaidLogo = () => (
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
