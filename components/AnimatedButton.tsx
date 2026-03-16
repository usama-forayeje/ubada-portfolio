"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

export default function AnimatedButton({
  text,
  variant = "primary",
  href,
  onClick,
}: AnimatedButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg ${
        isPrimary
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
          : "glass text-slate-800 dark:text-white border-2 border-slate-300 dark:border-slate-600"
      }`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {text}
    </motion.a>
  );
}
