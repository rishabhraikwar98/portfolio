"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink} from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import type { Project } from "@/data/projects";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/3"
    >
      {/* Image area */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live site"
              className="rounded-full bg-accent-violet p-3 text-white transition-transform hover:scale-110"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              className="rounded-full bg-foreground/10 p-3 text-foreground transition-transform hover:scale-110"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-display text-lg font-bold text-foreground transition-colors hover:text-accent-violet">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-foreground/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
