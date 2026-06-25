"use client";

import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-violet">
            Experience
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Where I've worked
          </h2>
        </div>

        <div className="mt-16">
          {/* Timeline wrapper — line is scoped to just this */}
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-1/2 top-0 hidden h-full w-px bg-linear-to-b from-accent-violet to-accent-cyan md:block"
            />

            <div className="space-y-8 md:space-y-12">
              {experience.map((entry, index) => (
                <div
                  key={`${entry.company}-${entry.role}`}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-1/2 top-0 z-10 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br from-accent-violet to-accent-cyan text-white ring-4 ring-background md:flex">
                    <Briefcase size={14} />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -3 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-foreground/10 bg-linear-to-br from-foreground/4 to-foreground/1 p-6 transition-colors hover:border-accent-violet/30">
                      <span className="inline-block rounded-full bg-accent-cyan/10 px-3 py-1 text-xs font-semibold text-accent-cyan">
                        {entry.duration}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                        {entry.role}
                      </h3>
                      <p className="text-sm font-medium text-accent-violet">
                        {entry.company}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {entry.points.map((point: string) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-relaxed text-foreground/70"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-violet/60" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume button — outside the line's scope now */}
          <div className="mt-16 flex justify-center">
            <motion.a
              href={process.env.NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-violet to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20"
            >
              <Download
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
