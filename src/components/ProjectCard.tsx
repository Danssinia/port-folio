import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Pop from "./Pop";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, className = "", eagerImage = false }: { project: Project; className?: string; eagerImage?: boolean }) {
  return (
    <Pop className={`group h-full overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#171717] transition-colors duration-300 hover:border-blue-300/30 ${className}`}>
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col" aria-label={`View ${project.title} project`}>
        <div className="relative aspect-[1.55] overflow-hidden bg-white/[0.04]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading={eagerImage ? "eager" : undefined}
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="flex flex-1 items-start justify-between gap-4 p-5 sm:p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/50">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((technology) => (
                <span key={technology} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/45">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Pop>
  );
}
