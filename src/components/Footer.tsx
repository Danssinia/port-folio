import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import logo from "../../public/images/logo.png";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Selected work", href: "/#works" },
  { label: "All projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.08] bg-[#0F0F0F]">
      <div className="mx-auto w-full px-5 sm:px-8 lg:w-[77%] lg:px-0">
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-12">
          <div>
            <Link href="/#home" aria-label="Danssinia home" className="group inline-flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] transition group-hover:border-blue-300/40">
                <Image src={logo} alt="" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-wide text-white">DANSSINIA</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/40">Full-stack developer</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Building thoughtful digital experiences with a focus on quality, security, and the details that make products useful.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Explore</p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map(({ label, href }) => (
                <Link key={label} href={href} className="w-fit text-sm text-white/55 transition hover:text-blue-300">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Connect</p>
            <a href="mailto:danmerethio19@gmail.com" className="group inline-flex items-center gap-2 break-all text-sm font-medium text-white/75 transition hover:text-blue-300">
              danmerethio19@gmail.com
              <ArrowUpRight size={15} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="mt-4 flex gap-2.5">
              <SocialLink href="https://github.com/Danssinia" label="GitHub"><FaGithub size={17} /></SocialLink>
              <SocialLink href="https://linkedin.com/in/danssinia" label="LinkedIn"><FaLinkedin size={17} /></SocialLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Daniel Merkebu. All rights reserved.</p>
          <p className="hidden sm:block">Thoughtfully made in Addis Ababa.</p>
          <Link href="/#home" aria-label="Back to top" className="inline-flex w-fit items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-blue-200"
    >
      {children}
    </a>
  );
}
