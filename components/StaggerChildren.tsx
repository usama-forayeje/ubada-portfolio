"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage and convert users.",
    icon: "🎨",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications.",
    icon: "📱",
  },
  {
    title: "Consulting",
    description: "Expert advice to help you make better technical decisions.",
    icon: "💡",
  },
];

export default function StaggerChildren() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass p-8 rounded-2xl text-center cursor-pointer"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            {service.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
