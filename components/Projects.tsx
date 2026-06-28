"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "SaaS",
  "Web App",
  "Realtime",
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    Project["category"] | "All"
  >("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-violet-text">
            Projects
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Things I've built
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative min-w-22 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-full bg-accent-violet"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 block text-center">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={item}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}