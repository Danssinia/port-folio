import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Works() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section id="works" className="mx-auto w-full scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-28 lg:w-[77%] lg:px-0">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Selected projects</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/50">
            A few examples of the digital experiences and products I&apos;ve worked on.
          </p>
        </div>

        <Link
          href="/projects"
          className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-300/30 hover:bg-white/[0.07]"
        >
          Explore all {projects.length} projects
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.08] text-blue-200 transition group-hover:translate-x-0.5">
            <ArrowUpRight size={15} />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
