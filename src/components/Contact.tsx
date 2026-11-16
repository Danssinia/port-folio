import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Pop from "./Pop";

const contactMethods = [
  {
    label: "Email",
    detail: "danmerethio19@gmail.com",
    note: "For project enquiries and collaborations",
    href: "mailto:danmerethio19@gmail.com",
    Icon: Mail,
    wide: true,
  },
  {
    label: "GitHub",
    detail: "Danssinia",
    note: "Explore my code and projects",
    href: "https://github.com/Danssinia",
    Icon: FaGithub,
    wide: false,
  },
  {
    label: "LinkedIn",
    detail: "Connect with me",
    note: "Professional updates and conversations",
    href: "https://linkedin.com/in/danssinia",
    Icon: FaLinkedin,
    wide: false,
  },
];

const card = "rounded-[28px] border border-white/[0.08] bg-[#171717]";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full scroll-mt-24 px-5 pb-4 pt-24 sm:px-8 sm:pt-28 lg:w-[77%] lg:px-0">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Get in touch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s make a good idea real.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/50">
            Have a project in mind or want to connect? Choose the best way to reach me.
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to opportunities
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {contactMethods.map(({ label, detail, note, href, Icon, wide }, index) => {
          const external = href.startsWith("https://");
          return (
            <Pop
              key={label}
              duration={0.65 + index * 0.1}
              className={`${card} group relative flex min-h-[190px] flex-col justify-between overflow-hidden p-6 transition-colors duration-300 hover:border-blue-300/30 sm:p-7 ${wide ? "sm:col-span-2" : ""}`}
            >
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={`${label}: ${detail}`}
                className="absolute inset-0 z-10 rounded-[28px]"
              />
              <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.07] opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-blue-300">
                  <Icon size={21} />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white/[0.08] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div className="relative mt-7">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">{label}</p>
                <p className="mt-1 break-words text-lg font-semibold text-white">{detail}</p>
                <p className="mt-2 text-sm text-white/45">{note}</p>
              </div>
            </Pop>
          );
        })}
      </div>
    </section>
  );
}
