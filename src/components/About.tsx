import { Award, BriefcaseBusiness, Sparkles } from "lucide-react";
import {
  SiDocker,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

import Pop from "./Pop";

const card = "rounded-[28px] border border-white/[0.08] bg-[#171717]";

const skills = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Laravel", Icon: SiLaravel },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Docker", Icon: SiDocker },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
];

const certificates = [
  { date: "1 Aug 2023", title: "Become a Full-stack Developer", issuer: "CodeRed EC-Council" },
  { date: "1 Aug 2023", title: "The Complete Full-Stack JavaScript Course", issuer: "CodeRed EC-Council" },
  { date: "14 Jul 2023", title: "The Complete Front-end Web Development Course", issuer: "CodeRed EC-Council" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-28 lg:w-[77%] lg:px-0">
      <div className="mx-auto w-full">
        <SectionIntro eyebrow="A LITTLE ABOUT ME" title="The person behind the projects." />

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Pop className={`${card} relative overflow-hidden p-6 sm:p-9 lg:col-span-7`}>
            <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                <Sparkles size={22} />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/40">Profile</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Hi, I&apos;m Daniel.</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                I&apos;m a full-stack developer who enjoys building practical web applications, from polished interfaces to reliable backend systems. Security is a core concern in my work, and I care about secure coding, maintainable software, and thoughtful user experiences that solve real problems.
              </p>
            </div>
          </Pop>

          <Pop className={`${card} p-6 sm:p-8 lg:col-span-5`}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-blue-300"><BriefcaseBusiness size={20} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Career</p>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
            </div>
            <div className="space-y-6 border-l border-white/[0.1] pl-5">
              <Experience date="2022 – Present" title="Cryptography Researcher & Developer" organization="Information Network Security Administration (INSA)" />
              <Experience date="2021 – 2023" title="Backend Developer" organization="Freelance · Oraile ICT Solutions PLC" />
              <Experience date="2020 – Present" title="Full-stack Developer" organization="Freelance" />
            </div>
          </Pop>

          <Pop className={`${card} p-6 sm:p-8 lg:col-span-7`}>
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">What I work with</p>
                <h3 className="mt-1 text-2xl font-semibold">Skills & tools</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-blue-300"><Sparkles size={20} /></span>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {skills.map(({ name, Icon }) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                  <Icon aria-hidden="true" className="shrink-0 text-xl text-blue-300" />
                  <span className="text-sm font-medium text-white/80">{name}</span>
                </div>
              ))}
            </div>
          </Pop>

          <Pop className={`${card} p-6 sm:p-8 lg:col-span-5`}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-blue-300"><Award size={20} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Learning</p>
                <h3 className="text-xl font-semibold">Certificates</h3>
              </div>
            </div>
            <div className="space-y-5">
              {certificates.map((certificate) => (
                <div key={certificate.title} className="border-l border-blue-400/50 pl-4">
                  <p className="text-xs text-white/40">{certificate.date}</p>
                  <p className="mt-1 font-medium leading-6 text-white/85">{certificate.title}</p>
                  <p className="mt-1 text-sm text-white/45">{certificate.issuer}</p>
                </div>
              ))}
            </div>
          </Pop>

        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

function Experience({ date, title, organization }: { date: string; title: string; organization: string }) {
  return (
    <div className="relative">
      <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#171717] bg-blue-400" />
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-blue-300">{date}</p>
      <p className="mt-1 font-semibold leading-6 text-white/90">{title}</p>
      <p className="mt-1 text-sm leading-6 text-white/45">{organization}</p>
    </div>
  );
}
