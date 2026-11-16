import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Calendar, Github, User } from "lucide-react";

import { getProject, projects } from "@/data/projects";
import Pop from "@/components/Pop";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

const card = "rounded-3xl border-[0.25px] border-[#313131] bg-[#1A1A1A]";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const gallery = project.screenshots?.length ? project.screenshots : [project.image];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { icon: Calendar, label: "YEAR", value: project.year },
    { icon: Briefcase, label: "ROLE", value: project.role },
    { icon: User, label: "CLIENT", value: project.client },
  ];

  return (
    <main className="mx-auto mt-10 w-full px-5 pb-8 sm:px-8 lg:mt-12 lg:w-[77%] lg:px-0">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[gray] transition-all duration-300 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to all projects
      </Link>

      <div className="mt-6 flex gap-6 max-xl:flex-col">
        {/* Image */}
        <Pop className={`${card} flex items-center justify-center p-4 sm:p-5 xl:w-[55%]`}>
          <ProjectImageCarousel images={gallery} title={project.title} />
        </Pop>

        {/* Info */}
        <div className="flex flex-col gap-6 xl:w-[45%]">
          <Pop className={`${card} p-8`}>
            <p className="text-sm text-[gray]">{project.category}</p>
            <h1 className="mt-1 text-5xl font-bold max-sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-lg text-[#C2C2B3]">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-black transition-all duration-300 hover:bg-[#E8E8E8]"
                >
                  Live preview <ArrowUpRight size={18} />
                </a>
              )}
              {project.repoUrl && project.repoUrl !== "#" && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#272727] px-5 py-3 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <Github size={18} /> Source code
                </a>
              )}
            </div>
          </Pop>

          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            {meta.map(({ icon: Icon, label, value }, index) => (
              <Pop key={label} duration={0.6 + index * 0.1} className={`${card} p-5`}>
                <Icon size={22} className="text-[gray]" />
                <p className="mt-3 text-xs text-[gray]">{label}</p>
                <p className="mt-1 font-bold">{value}</p>
              </Pop>
            ))}
          </div>
        </div>
      </div>

      {/* Overview + stack */}
      <div className="mt-6 flex gap-6 max-xl:flex-col">
        <Pop className={`${card} p-8 xl:w-[66%]`}>
          <p className="mb-4 text-lg font-bold">OVERVIEW</p>
          <div className="space-y-4 text-lg text-[gray]">
            {project.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </Pop>

        <Pop className={`${card} p-8 xl:w-[34%]`}>
          <p className="mb-4 text-lg font-bold">TECH STACK</p>
          <ul className="flex flex-wrap gap-3">
            {project.stack.map((s) => (
              <li key={s} className="rounded-lg bg-[#272727] px-4 py-2 text-sm text-[#C2C2B3]">
                {s}
              </li>
            ))}
          </ul>
        </Pop>
      </div>

      {/* Prev / next */}
      <div className="mt-6 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <Pop>
          <Link
            href={`/projects/${prev.slug}`}
            className={`${card} group flex items-center gap-4 p-6 transition-all duration-300 hover:border-white/40`}
          >
            <ArrowLeft className="text-[gray] transition-all duration-300 group-hover:text-white" />
            <div>
              <p className="text-xs text-[gray]">PREVIOUS</p>
              <p className="text-xl font-bold">{prev.title}</p>
            </div>
          </Link>
        </Pop>
        <Pop>
          <Link
            href={`/projects/${next.slug}`}
            className={`${card} group flex items-center justify-end gap-4 p-6 text-right transition-all duration-300 hover:border-white/40`}
          >
            <div>
              <p className="text-xs text-[gray]">NEXT</p>
              <p className="text-xl font-bold">{next.title}</p>
            </div>
            <ArrowRight className="text-[gray] transition-all duration-300 group-hover:text-white" />
          </Link>
        </Pop>
      </div>
    </main>
  );
}
