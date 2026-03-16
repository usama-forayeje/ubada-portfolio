import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// JSON-LD Structured Data for SEO
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ubaid",
  url: "https://ubada-portfolio.vercel.app",
  jobTitle: "UI/UX Designer & Web Developer",
  nationality: {
    "@type": "Country",
    name: "Bangladesh"
  },
  knowsAbout: [
    "UI/UX Design",
    "Web Design", 
    "Web Development",
    "App Design",
    "Brand Strategy"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        {/* JSON-LD Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
