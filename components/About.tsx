"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import personalPhoto from "../public/images/portrait.png";

const stats = [
  { label: "Years of Experience", value: 2 },
  { label: "Projects Shipped", value: 12 },
  { label: "Technologies Used", value: 12 },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl"
        >
          <Image
            src={personalPhoto}
            alt="Portrait photo"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-violet">
            About Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Crafting digital experiences with code and curiosity
          </h2>
          <p className="mt-5 text-foreground/70">
            I'm a developer who loves{" "}
            <span className="font-semibold text-foreground">
              turning complex problems into clean, intuitive interfaces
            </span>
            . With a background in full-stack development, I focus on building{" "}
            <span className="font-semibold text-foreground">
              products that feel as good to use as they look
            </span>
            .
          </p>
          <p className="mt-4 text-foreground/70">
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open source, or experimenting with the latest web
            technologies.
          </p>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 rounded-3xl border border-foreground/10 bg-foreground/3 px-8 py-10 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-4xl font-bold text-accent-violet">
              <Counter value={stat.value} />+
            </div>
            <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
