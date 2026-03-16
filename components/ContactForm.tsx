"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactForm() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      formRef.current?.reset();
    }, 3000);
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div ref={ref} className="glass p-8 rounded-2xl">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={inputVariants}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
            placeholder="Your name"
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={inputVariants}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
            placeholder="your@email.com"
          />
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={inputVariants}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all resize-none"
            placeholder="Your message..."
          />
        </motion.div>

        <motion.button
          type="submit"
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={inputVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/30"
        >
          {isSubmitted ? "Message Sent! ✓" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
}
