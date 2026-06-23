import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink} from "lucide-react";
import {SiGithub as Github} from "react-icons/si";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-accent-violet"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl">
          {project.title}
        </h1>

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

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-8 text-lg leading-relaxed text-foreground/70">
          {project.longDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-violet to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20 transition-transform hover:scale-105"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-accent-violet hover:text-accent-violet"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </main>
  );
}