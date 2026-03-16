import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

/**
 * Skeleton loader component for loading states
 * Matches the website's purple/violet theme
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-linear-to-r from-[#2d1f4a] via-[#3d2a5c] to-[#2d1f4a]",
        className
      )}
    />
  )
}

/**
 * Hero Section Skeleton - matches HeroSection layout
 */
export function HeroSkeleton() {
  return (
    <div className="w-full min-h-screen bg-[#151022] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-32 rounded-full" />
            <Skeleton className="h-12 w-28 rounded-full" />
          </div>
        </div>
        
        {/* Right image skeleton */}
        <div className="flex justify-center">
          <Skeleton className="w-[300px] h-[350px] lg:w-[400px] lg:h-[480px] rounded-full" />
        </div>
      </div>
    </div>
  )
}

/**
 * About Section Skeleton - matches AboutSection layout
 */
export function AboutSkeleton() {
  return (
    <div className="w-full min-h-[60vh] bg-[#1E182B] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Skeleton className="h-10 w-32" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Skeleton className="w-full h-80 rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-10 w-24 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Services Section Skeleton - matches ServicesSection layout
 */
export function ServicesSkeleton() {
  return (
    <div className="w-full min-h-[50vh] bg-[#1A1428] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-40 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 p-6 rounded-2xl bg-[#251a35]">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Portfolio Section Skeleton - matches PortfolioSection layout
 */
export function PortfolioSkeleton() {
  return (
    <div className="w-full min-h-[60vh] bg-[#151022] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-40 mx-auto" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Contact Section Skeleton - matches CallToAction layout
 */
export function ContactSkeleton() {
  return (
    <div className="w-full min-h-[40vh] bg-[#151022] p-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
        <Skeleton className="h-14 w-40 rounded-full mx-auto mt-8" />
      </div>
    </div>
  )
}

/**
 * Full Page Loading Skeleton
 * Shows all section skeletons at once
 */
export function PageSkeleton() {
  return (
    <>
      <HeroSkeleton />
      <AboutSkeleton />
      <ServicesSkeleton />
      <PortfolioSkeleton />
      <ContactSkeleton />
    </>
  )
}
