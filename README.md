# Daniel Merkebu | Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</p>

<p align="center">
  A personal portfolio showcasing my projects, technical skills, services, and professional journey as a Full-Stack Developer.
</p>

<p align="center">
  <a href="https://danssinia.github.io/port-folio/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-6C63FF?style=for-the-badge" />
  </a>
</p>

---

## 📌 Overview

This project is my personal developer portfolio, rebuilt from the original Create React App implementation using **Next.js App Router** and a modern TypeScript-based frontend stack.

The portfolio brings together my professional introduction, skills, services, selected projects, and contact information in a single-page experience, with dedicated detail pages for individual projects.

It is designed to give visitors a clear overview of my development capabilities, work, and professional background.

## ✨ Features

- **Home Section** — Introduction and personal developer branding.
- **About Section** — Technical skills, certifications, experience, and education.
- **Services Section** — Overview of professional services.
- **Projects Showcase** — Display of selected projects and their details.
- **Project Detail Pages** — Dedicated pages for individual projects.
- **Contact Section** — Contact form powered by EmailJS.
- **Animations** — Interactive motion effects using Framer Motion.
- **Reusable Components** — Organized, component-based application structure.
- **SEO Metadata** — Shared metadata configured through the Next.js App Router layout.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js (App Router) | React framework and application routing |
| TypeScript | Type-safe development |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Icons | Icon library |
| Lucide React | Additional interface icons |
| EmailJS | Contact form integration |

## 📂 Project Structure

```text
port-folio/
│
├── public/
│   ├── Danssinia-CV.pdf
│   ├── logo
│   ├── favicon
│   └── manifest
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── projects.ts
│   │
│   └── images/
│
├── .env.example
├── package.json
└── README.md
```

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Danssinia/port-folio.git
```

### 2. Navigate into the project

```bash
cd port-folio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Update the EmailJS configuration values in `.env.local` if you want to use your own EmailJS account.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for production

```bash
npm run build
npm start
```

## 📧 Contact Form Configuration

The portfolio uses **EmailJS** to handle contact form submissions.

The existing implementation uses the EmailJS configuration from the original portfolio.

To configure your own EmailJS account:

1. Create an EmailJS account.
2. Configure your email service and template.
3. Copy `.env.example` to `.env.local`.
4. Replace the placeholder configuration values with your own credentials.

**Note:** Never commit your actual environment variables or private credentials to GitHub.

## ✏️ Customization

The project is structured to make content updates straightforward.

| Content | File |
|---|---|
| Project cards and project details | `src/data/projects.ts` |
| Skills, certifications, experience, education | `src/components/About.tsx` |
| Services | `src/components/Services.tsx` |
| Contact information | `src/components/Contact.tsx` |
| Shared layout and metadata | `src/app/layout.tsx` |

Project detail content, year, role, client, technology stack, and links currently contain placeholders that should be customized before presenting individual projects publicly.

## 🌐 Live Portfolio

**Explore the live website:**

[https://danssinia.github.io/port-folio/](https://danssinia.github.io/port-folio/)

## 👨‍💻 Author

**Daniel Merkebu**

Full-Stack Developer passionate about building modern web applications, scalable backend systems, and meaningful digital products.

- GitHub: [@Danssinia](https://github.com/Danssinia)
- LinkedIn: [Danssinia](https://www.linkedin.com/in/danssinia)
- Portfolio: [Visit Website](https://danssinia.github.io/port-folio/)
- Email: [danmerethio19@gmail.com](mailto:danmerethio19@gmail.com)

---

<p align="center">
  <i>"Great software isn't just written. It's thoughtfully engineered."</i>
</p>

<p align="center">
  ⭐ If you find this project interesting, feel free to explore the repository and connect!
</p>
