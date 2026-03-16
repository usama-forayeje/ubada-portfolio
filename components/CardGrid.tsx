"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Smooth Animations",
    description: "Framer Motion powered animations for fluid user experiences.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Responsive Design",
    description: "Looks great on all devices with mobile-first approach.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Modern Stack",
    description: "Built with Next.js 15, React 19, and TailwindCSS v4.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Accessible",
    description: "WCAG compliant with proper ARIA labels and keyboard navigation.",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "SEO Optimized",
    description: "Server-side rendering and optimal performance for search engines.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Developer Friendly",
    description: "Clean code structure with TypeScript support.",
    gradient: "from-amber-500 to-yellow-500",
  },
];

export default function CardGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="group"
        >
          <div className="glass p-8 rounded-2xl h-full cursor-pointer relative overflow-hidden">
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 flex items-center justify-center`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
