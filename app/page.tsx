"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import StaggerChildren from "../components/StaggerChildren";
import AnimatedButton from "../components/AnimatedButton";
import ParallaxHero from "../components/ParallaxHero";
import CardGrid from "../components/CardGrid";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Features Section with Staggered Animation */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Premium <span className="gradient-text">Animations</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-16">
            Built with Next.js 15, React 19, TailwindCSS v4, and Framer Motion
          </p>
        </FadeIn>
        <CardGrid />
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Services
            </h2>
          </FadeIn>
          <StaggerChildren />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
              Let's create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                text="Contact Us"
                variant="primary"
                href="#contact"
              />
              <AnimatedButton
                text="View Projects"
                variant="secondary"
                href="#projects"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Get in <span className="gradient-text">Touch</span>
            </h2>
          </FadeIn>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Obada Portfolio. Built with Next.js & Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
