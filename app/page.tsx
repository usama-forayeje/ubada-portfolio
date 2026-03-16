import AboutSection from "@/components/Aboutsection";
import CallToAction from "@/components/Calltoaction";
import FooterSection from "@/components/Footersection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/Portfoliosection";
import ServicesSection from "@/components/Servicessection";
import { Suspense } from "react";
import { AboutSkeleton, ContactSkeleton, HeroSkeleton, PortfolioSkeleton, ServicesSkeleton } from "@/components/ui/skeleton";

// ═══════════════════════════════════════════════════════════════════════════════
// SEO METADATA - Comprehensive optimization for search engines
// ═══════════════════════════════════════════════════════════════════════════════

export const metadata = {
  // Basic Meta Tags
  title: {
    default: "Ubaid | UI/UX Designer & Web Developer Bangladesh",
    template: "%s | Ubaid Portfolio"
  },
  description: {
    en: "Professional UI/UX Designer & Web Developer based in Bangladesh. Creating user-friendly interfaces that foster engagement and build relationships. Available for opportunities.",
    bn: "পেশাদার ইউআই/ইউএক্স ডিজাইনার এবং ওয়েব ডেভেলপার। বাংলাদেশ ভিত্তিক। ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি করি যা সম্পর্ক ও ব্যবহারকারী সম্পৃক্ততা তৈরি করে।"
  },
  keywords: [
    "UI/UX Designer",
    "Web Designer",
    "Web Developer",
    "App Designer",
    "Portfolio",
    "Bangladesh",
    "Freelancer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    // Bengali keywords
    "ইউআই ডিজাইনার",
    "ওয়েব ডেভেলপার",
    "বাংলাদেশ",
    "পোর্টফোলিও"
  ],
  authors: [{ name: "Ubaid", url: "https://ubada-portfolio.vercel.app" }],
  creator: "Ubaid",
  publisher: "Ubaid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Canonical URL
  alternates: {
    canonical: "https://ubada-portfolio.vercel.app",
    languages: {
      "en": "https://ubada-portfolio.vercel.app",
      "bn": "https://ubada-portfolio.vercel.app?lang=bn",
    },
  },

  // Open Graph - Social Media Sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "bn_BD",
    url: "https://ubada-portfolio.vercel.app",
    siteName: "Ubaid Portfolio",
    title: "Ubaid | UI/UX Designer & Web Developer Bangladesh",
    description: "Professional UI/UX Designer & Web Developer based in Bangladesh. Creating user-friendly interfaces that foster engagement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ubaid - UI/UX Designer & Web Developer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ubaid | UI/UX Designer & Web Developer",
    description: "Professional UI/UX Designer & Web Developer based in Bangladesh.",
    creator: "@ubaid",
    images: ["/og-image.png"],
  },

  // robots.txt
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Rich Search Results
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
  sameAs: [
    // Add your social media links here
    // "https://twitter.com/ubaid",
    // "https://linkedin.com/in/ubaid",
    // "https://github.com/ubaid",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function Page() {
  return (
    <main id="main-content" role="main" aria-label="Ubaid Portfolio - UI/UX Designer and Web Developer">
      <Suspense fallback={<HeroSection />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<PortfolioSkeleton />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <CallToAction />
      </Suspense>
      <FooterSection />
    </main>
  )
}
