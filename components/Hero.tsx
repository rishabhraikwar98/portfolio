"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      {/* Animated background blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-violet/30 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-cyan/30 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-3xl flex-col items-center"
      >
        <motion.span
          variants={item}
          className="mb-4 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 text-sm font-medium text-accent-violet-text"
        >
          Available for new opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] gradient-text"
        >
          Hi, I'm Rishabh
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-foreground/70"
        >
          I build fast, accessible, and beautifully designed web experiences
          using modern tools like Next.js and Framer Motion.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-full bg-linear-to-r from-accent-violet to-accent-cyan px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: "var(--accent-violet)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold text-foreground/80 hover:text-accent-violet"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
