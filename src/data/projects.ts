import type { StaticImageData } from "next/image";

import tila_one from "../../public/images/tila_one.png"
import tila_two from "../../public/images/tila_two.png"
import tila_three from "../../public/images/tila_three.png"
import mfb_one from "../../public/images/mfb_one.png"
import mfb_two from "../../public/images/mfb_two.png"
import mfb_three from "../../public/images/mfb_three.png"
import abay_one from "../../public/images/abay_one.png"
import abay_two from "../../public/images/abay_two.png"
import merkato_one from "../../public/images/merkato_one.png"
import merkato_two from "../../public/images/merkato_two.png"
import merkato_three from "../../public/images/merkato_three.png"
import project5 from "../../public/images/project5.jpeg";
import project6 from "../../public/images/project6.jpeg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: StaticImageData;
  /** Screenshots for the detail page; falls back to the project cover image. */
  screenshots?: StaticImageData[];
  year: string;
  role: string;
  client: string;
  stack: string[];
  summary: string;
  description: string[];
  liveUrl?: string;
  repoUrl?: string;
};

/**
 * Card data (title, category, image) comes from your original Works page.
 * The detail fields below (year, role, client, stack, description, links) did
 * not exist in the original repo, so they are placeholders. Edit them freely.
 */
export const projects: Project[] = [
  {
    slug: "mfb-engineering",
    title: "MFB Engineering Company",
    category: "WEB DESIGNING",
    image: mfb_one,
    screenshots: [mfb_one, mfb_two, mfb_three],
    year: "2026",
    role: "Design & Development",
    client: "MFB Engineering Consultancy Company",
    stack: ["WordPress", "Elementor", "JavaScript", "CSS", "HTML", "PHP"],
    summary: "Dubai-based engineering consultancy firm website developed with a professional and modern design.",
    description: [
      "Dubai-based engineering consultancy firm website developed with a professional and modern design.",
      "The platform showcases the company’s expertise, key services, completed projects, and industry experience with a clean corporate look that builds trust and credibility. Fully responsive and optimized for a seamless user experience across all devices.",
    ],
    liveUrl: "https://mfbengineering.ae/",
    repoUrl: "#",
  },
  {
    slug: "tila-derma",
    title: "Tila Dermatology Clinic",
    category: "WEB DESIGNING",
    image: tila_one,
    screenshots: [tila_one, tila_two, tila_three],
    year: "2024",
    role: "Design & Development",
    client: "Tila Dermatology and Venerology Specialized Clinic",
    stack: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS", "HTML"],
    summary: "A modern and professional WordPress website designed for a dermatology and venereology clinic.",
    description: [
      "A modern and professional WordPress website designed for a dermatology and venereology clinic. The site features a clean medical-focused design, clear service sections, appointment booking options, and an easy-to-navigate layout tailored for patients seeking skin and venereology health care.",
      "Built with WordPress for flexibility, easy content management, and responsive performance across all devices.",
    ],
    liveUrl: "https://tiladermatology.com/",
    repoUrl: "#",
  },
  
  {
    slug: "abay-tours",
    title: "Abay Ethiopia Tours",
    category: "WEB DESIGNING",
    image: abay_one,
    screenshots: [abay_one, abay_two],
    year: "2023",
    role: "UI Design & Front-end",
    client: "Abay Ethiopia Tour and Travel",
    stack: ["WordPress", "CSS", "JavaScript", "PHP", "HTML"],
    summary: "A vibrant and user-friendly website designed for Abay Ethiopia Tour and Travel Agency.",
    description: [
      "A vibrant and user-friendly website designed for Abay Ethiopia Tour and Travel Agency.",
      "The platform showcases popular tour packages, destinations across Ethiopia, travel experiences, and booking options with an engaging design that captures the beauty and culture of the country. Fully responsive and optimized to provide a seamless experience for both local and international travelers.",
    ],
    liveUrl: "https://abayethiopiatour.com/",
    repoUrl: "#",
  },
  {
    slug: "merkato-shopping",
    title: "E-commerce Website",
    category: "FRONT-END DEVELOPMENT",
    image: merkato_one,
    screenshots: [merkato_one, merkato_two, merkato_three],
    year: "2024",
    role: "Brand & Web Design",
    client: "Personal project",
    stack: ["Figma", "React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    summary: "A modern e-commerce website frontend designed as a personal project.",
    description: [
      "A modern e-commerce website frontend designed as a personal project. Merkato Shopping features a clean product listing, category browsing, product details, and a responsive shopping experience inspired by local marketplace culture.",
      "Built with a focus on smooth user interface and mobile-first design.",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/Danssinia/merkato",
  },
  {
    slug: "ermp",
    title: "ERMP",
    category: "SAAS",
    image: project6,
    year: "2026",
    role: "Full Stack Developer",
    client: "Hirut Pharmacy",
    stack: ["Next.js", "Nest.js", "PostgreSQL", "Tailwind CSS", "JavaScript", "TypeScript"],
    summary: "A dynamic multi-tenant ERMP (Enterprise Resource Management Platform) system designed primarily for Hirut Pharmacy, with the flexibility to serve any retail business.",
    description: [
      "A dynamic multi-tenant ERMP (Enterprise Retail Management Platform) system designed primarily for Hirut Pharmacy, with the flexibility to serve any retail business.",
      "The platform manages inventory, sales, purchases, suppliers, and reporting in a centralized and scalable way. Built as a modern full-stack solution to streamline daily operations and support multi-branch retail management.",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "tesema-tours",
    title: "Tesema Ethiopia Tours",
    category: "WEB DESIGNING",
    image: project5,
    year: "2025",
    role: "UI Design & Development",
    client: "Tesema Ethiopia Tour and Travel Agency",
    stack: ["WordPress", "PHP", "JavaScript", "CSS", "HTML", "Elementor"],
    summary: "A modern and visually engaging website developed for Tesema Ethiopia Tour and Travel Agency.",
    description: [
      "A modern and visually engaging website developed for Tesema Ethiopia Tour and Travel Agency. The platform highlights curated tour packages, popular destinations, cultural experiences, and travel services across Ethiopia.",
      "Designed with a clean layout and intuitive navigation to attract both local and international travelers while making booking information easy to access.",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
