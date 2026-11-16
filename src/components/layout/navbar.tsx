"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "../../../public/images/logo.png";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Works", id: "works" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;

    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    closeMenu();
    if (!onHome) return;

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    setActive(id);

    const hash = `/#${id}`;
    if (`${window.location.pathname}${window.location.hash}` !== hash) {
      window.history.pushState(null, "", hash);
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0F0F0F]/90 shadow-[0_8px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <nav className="relative mx-auto flex h-[78px] w-[92%] max-w-[1440px] items-center justify-between gap-5">
        <Link href="/#home" aria-label="Danssinia home" onClick={closeMenu} className="group flex shrink-0 items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] transition group-hover:border-blue-300/40">
            <Image src={logo} alt="" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-wide text-white">DANSSINIA</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/40">Developer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1.5 lg:flex">
          {links.map(({ label, id }) => (
            <Link
              key={id}
              href={`/#${id}`}
              onClick={(event) => navigateToSection(event, id)}
              aria-current={onHome && active === id ? "location" : undefined}
              className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                onHome && active === id
                  ? "bg-white/[0.08] text-white"
                  : "text-white/50 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#contact"
            onClick={(event) => navigateToSection(event, "contact")}
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-black transition hover:bg-blue-200 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white transition hover:bg-white/[0.1] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[calc(100%+10px)] origin-top rounded-3xl border border-white/[0.08] bg-[#171717] p-3 shadow-2xl transition-all duration-200 lg:hidden ${
            menuOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="grid gap-1">
            {links.map(({ label, id }, index) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={(event) => navigateToSection(event, id)}
                tabIndex={menuOpen ? 0 : -1}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition ${
                  onHome && active === id ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-blue-300/70">0{index + 1}</span>
                  {label}
                </span>
                {onHome && active === id ? <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> : null}
              </Link>
            ))}
          </div>
          <Link href="/#contact" onClick={(event) => navigateToSection(event, "contact")} className="mt-2 flex items-center justify-between rounded-2xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:hidden">
            Let&apos;s talk <ArrowUpRight size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
