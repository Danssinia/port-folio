"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Download,
  Globe,
  Mail,
} from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";
import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Pop from "./Pop";
import { ThemeToggle } from "./layout/theme-toggle";
import { projects } from "@/data/projects";

/* ------------------------------------------------------------------ */
/*  Images (put these files in /public/images)                         */
/* ------------------------------------------------------------------ */
const BASE_PATH = "/port-folio";
const DAN = `${BASE_PATH}/images/dan.jpg`;
const RESUME = `${BASE_PATH}/Daniel-Merkebu-Fullstack.pdf`;

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/danssinia", icon: FaLinkedin },
  { label: "Email", href: "mailto:danmerethio19@gmail.com", icon: Mail },
  { label: "Github", href: "https://github.com/Danssinia", icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/Danssinia", icon: FaXTwitter },
  { label: "Telegram", href: "https://t.me/Danssinia", icon: FaTelegram },
  { label: "Instagram", href: "https://www.instagram.com/Danssinia", icon: FaInstagram },
];

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
];

/* ------------------------------------------------------------------ */
/*  Shared styles / small pieces                                       */
/* ------------------------------------------------------------------ */
const card =
  "relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#171717] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]";

function CircleArrow({
  href,
  label,
  className = "",
  glass = false,
}: {
  href: string;
  label: string;
  className?: string;
  glass?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`absolute flex h-[42px] w-[42px] items-center justify-center rounded-full border text-white/90 transition-all duration-300 hover:bg-white hover:text-black ${
        glass ? "border-white/20 bg-black/50 backdrop-blur-sm" : "border-white/10 bg-white/[0.04]"
      } ${className}`}
    >
      <ArrowUpRight size={16} />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [firstProject, secondProject, featuredProject] = projects;

  return (
    <section id="home" className="mx-auto w-full scroll-mt-24 px-4 pt-8 sm:px-6 lg:w-[77%] lg:px-0">
        {/* ============================ Main grid ============================ */}
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,0.79fr)] lg:grid-rows-[244px_254px] lg:gap-3.5">
          {/* ---------- Intro ---------- */}
          <Pop className={`${card} order-1 col-span-2 flex flex-col p-6 sm:p-7 lg:order-none`}>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src={DAN} alt="Daniel" fill sizes="48px" className="object-cover object-[center_15%]" />
              </div>
              <div className="leading-snug">
                <p className="text-[15px] font-medium text-white">Hi, I&apos;m Daniel.</p>
                <p className="text-[13px] text-white/45">Full-Stack Developer</p>
              </div>
            </div>

            <h1 className="mt-4 text-[24px] font-medium leading-[29px] tracking-[-0.015em] text-white sm:text-[24px] sm:leading-[30px]">
              Building digital experiences with purpose, engineering with passion.
            </h1>

            <p className="mt-3.5 max-w-[470px] text-[13px] leading-5 text-white/40">
              I constantly explore modern architectures and scalable technologies to build impactful,
              reliable, and user-friendly digital solutions.
            </p>
          </Pop>

          {/* ---------- First project (center crop) ---------- */}
          <Pop className={`${card} order-2 group h-[220px] lg:order-none lg:h-auto`}>
            <Image
              src={firstProject.image}
              alt={firstProject.title}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </Pop>

          {/* ---------- Second project (center crop) ---------- */}
          <Pop className={`${card} order-2 group h-[220px] lg:order-none lg:h-auto`}>
            <Image
              src={secondProject.image}
              alt={secondProject.title}
              fill
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </Pop>

          {/* ---------- Right column: theme toggle / socials / resources ---------- */}
          <div className="order-4 col-span-2 flex flex-col gap-3.5 lg:order-none lg:col-span-1 lg:col-start-5 lg:row-span-2 lg:row-start-1">
            {/* Theme toggle (first, so it is the first thing a new visitor sees) */}
            <Pop className={`${card} flex h-[87px] items-center justify-center`}>
              <ThemeToggle />
            </Pop>

            {/* Social buttons: outer ring + inner raised tile */}
            <div className="grid grid-cols-6 gap-2.5 lg:grid-cols-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Pop key={label} className="aspect-square">
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex h-full w-full items-center justify-center rounded-[22px] border border-white/[0.06] bg-[#161616] p-2 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="flex h-full w-full items-center justify-center rounded-2xl border border-white/[0.08] bg-[#2a2a2a] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <Icon size={16} />
                    </span>
                  </a>
                </Pop>
              ))}
            </div>

            <Pop className={`${card} group min-h-[190px] flex-1 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.16),transparent_58%),#171717] p-[22px]`}>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.1em] text-white/50">Resources</p>
              </div>
              <h2 className="mt-3 text-lg font-medium leading-[22px] text-white">
                Want the full picture?
              </h2>
              <p className="mt-1.5 text-xs leading-[18px] text-white/50">
                Explore my experience, skills, and professional background.
              </p>
              <a
                href={RESUME}
                download
                className="mt-4 flex w-full items-center justify-between rounded-xl border border-indigo-300/25 bg-indigo-300/[0.1] px-3.5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-200/50 hover:bg-indigo-300/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
              >
                <span className="flex items-center gap-2.5">
                  <Download size={16} className="text-indigo-200" />
                  Download my resume
                </span>
                <ArrowUpRight size={16} className="text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Pop>
          </div>

          {/* ---------- Portrait ---------- */}
          <Pop className={`${card} order-5 col-span-2 hidden h-[272px] sm:col-span-1 sm:block lg:order-none lg:h-auto`}>
            <Image src={DAN} alt="Daniel Merkebu" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover object-top" />
          </Pop>

          {/* ---------- Tech stack ---------- */}
          <Pop className={`${card} order-6 col-span-2 p-5 sm:col-span-1 lg:order-none`}>
            <p className="text-xs text-white/40">Tech Arsenal</p>
            <h2 className="mt-1.5 text-lg font-medium text-white">Stack I Use</h2>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stack.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group aspect-square rounded-2xl border border-white/[0.06] bg-[#161616] p-1"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.08] bg-[#2a2a2a] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 group-hover:text-white">
                    <Icon size={15} />
                    <span className="whitespace-nowrap text-[8px] font-medium leading-none text-white/65">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Pop>

          {/* ---------- Featured project ---------- */}
          <Pop className={`${card} order-3 group col-span-2 h-[260px] lg:order-none lg:h-auto`}>
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-7 left-[26px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/80">
                Featured Project
              </p>
            </div>
            <CircleArrow href="/#works" label="View selected projects" glass className="bottom-7 right-7" />
          </Pop>
        </div>

        {/* ============================ Bottom row ============================ */}
        <div className="mt-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-[822fr_583fr]">
          {/* ---------- Currently exploring ---------- */}
          <Pop className={`${card} p-6 sm:p-7 lg:h-[194px]`}>
            <p className="text-xs uppercase tracking-[0.08em] text-white/45">Currently Exploring</p>
            <h2 className="mt-2 max-w-[470px] text-xl font-medium leading-[26px] text-white sm:text-2xl sm:leading-[28px]">
              Shipping full-stack apps from code to production.
            </h2>
            <p className="mt-2.5 max-w-[470px] text-xs leading-[18px] text-white/40">
              I’m exploring reliable deployment workflows, CI/CD, and release practices that make
              applications easier to ship and maintain.
            </p>

            {/* Chip decoration */}
            <div className="absolute right-[46px] top-0 hidden h-full w-[86px] flex-col items-center justify-center gap-1 md:flex">
              <Lines position="top" />
              <div className="flex h-[86px] w-[86px] items-center justify-center rounded-[22px] border border-white/[0.06] bg-[#1d1d1d] shadow-[0_0_32px_rgba(255,255,255,0.04)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#262626] text-white">
                  <Cpu size={26} strokeWidth={1.5} />
                </div>
              </div>
              <Lines position="bottom" />
            </div>
          </Pop>

          {/* ---------- Say hello ---------- */}
          <Pop className={`${card} p-6 max-sm:pb-16 sm:p-7 lg:h-[194px]`}>
            <p className="text-sm text-white/45">Say hello 👋</p>
            <h2 className="mt-3 text-2xl font-medium leading-8 text-white">Let&apos;s Work Together</h2>
            <p className="mt-2.5 max-w-[380px] text-[13px] leading-5 text-white/40">
              Let&apos;s create something unique together! I&apos;m excited to collaborate on your next project.
            </p>
            <CircleArrow href="/#contact" label="Get in touch" className="bottom-5 right-5 sm:bottom-7 sm:right-7" />
          </Pop>
        </div>
    </section>
  );
}

/** Three thin vertical lines that fade out, used above/below the chip. */
function Lines({ position }: { position: "top" | "bottom" }) {
  const fade = position === "top" ? "bg-gradient-to-b" : "bg-gradient-to-t";
  return (
    <div className="flex h-10 items-center gap-[13px]">
      {[0, 1, 2].map((i) => (
        <span key={i} className={`h-full w-px ${fade} from-transparent to-white/25`} />
      ))}
    </div>
  );
}
