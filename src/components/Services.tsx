import { Check, Globe2, ShieldCheck, Wrench } from "lucide-react";

import Pop from "./Pop";

const card = "rounded-[28px] border border-white/[0.08] bg-[#171717]";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Thoughtful websites built around your goals, with responsive layouts and a clear experience on every screen.",
    Icon: Globe2,
    items: [
      "Custom website design and development",
      "Responsive, accessible interfaces",
      "E-commerce and CMS implementation",
      "Performance and search optimization",
    ],
  },
  {
    number: "02",
    title: "Maintenance & Support",
    description:
      "Ongoing care that keeps your website dependable, up to date, and ready to grow with your needs.",
    Icon: Wrench,
    items: [
      "Bug fixes and feature improvements",
      "Software updates and upgrades",
      "Performance monitoring and tuning",
      "Security updates and support",
    ],
  },
  {
    number: "03",
    title: "Software Testing",
    description:
      "Practical quality checks that find problems early and give you more confidence in every release.",
    Icon: ShieldCheck,
    items: [
      "Functional and regression testing",
      "Performance and load testing",
      "Security-focused testing",
      "Usability and test automation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-28 lg:w-[77%] lg:px-0">
      <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">How I can help</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Build it well. Keep it working.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/50">
            Focused web services for creating dependable digital products and looking after them over time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium text-white/50 lg:justify-end">
          <Stage label="Build" />
          <Stage label="Maintain" />
          <Stage label="Validate" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ number, title, description, Icon, items }, index) => (
          <Pop
            key={number}
            duration={0.7 + index * 0.1}
            className={`${card} group relative flex min-h-[390px] flex-col overflow-hidden p-6 sm:p-7`}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/[0.07] opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-blue-300">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <span className="font-mono text-sm tracking-[0.14em] text-white/30">{number}</span>
            </div>

            <div className="relative mt-7">
              <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/50">{description}</p>
            </div>

            <ul className="relative mt-5 space-y-3 border-t border-white/[0.08] pt-5 text-sm text-white/65">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-5">
                  <Check size={16} className="mt-0.5 shrink-0 text-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </Pop>
        ))}
      </div>
    </section>
  );
}

function Stage({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2">
      {label}
    </span>
  );
}
