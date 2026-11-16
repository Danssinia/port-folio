import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A complete collection of Daniel Merkebu's web, design, and software projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full px-5 pb-8 pt-10 sm:px-8 sm:pt-14 lg:w-[77%] lg:px-0">
      <Link href="/#works" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white">
        <ArrowLeft size={16} />
        Back to selected work
      </Link>

      <div className="mb-8 mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Project archive</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">All projects</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/50">
            Browse the complete collection of projects, experiments, and digital work.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/60">
          <FolderOpen size={18} className="text-blue-300" />
          {projects.length} projects
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
