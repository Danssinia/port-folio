# Daniel Merkebu - Portfolio (Next.js)

Single-page version of the original Create React App portfolio, rebuilt with
**Next.js (App Router)**, **TypeScript**, **Tailwind CSS 3**, **Framer Motion**,
**react-icons** and **lucide-react**.

## Structure

```
src/
  app/
    layout.tsx              Shared navbar + footer, metadata
    page.tsx                One page: Home, About, Services, Works, Contact
    projects/[slug]/page.tsx  Project detail page (the only extra page)
  components/               One component per section + shared pieces
  data/projects.ts          Project cards AND detail-page content
  images/                   Static images (imported, auto-optimized)
public/                     CV (Danssinia-CV.pdf), logo, favicon, manifest
```

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Contact form (EmailJS)

The form works out of the box with the same EmailJS IDs as the original site.
To use your own, copy `.env.example` to `.env.local` and change the values.

## Editing content

- Project cards and their detail pages: `src/data/projects.ts`
  (the detail text, year, role, client, stack and links are placeholders)
- Skills, certificates, experience, education: `src/components/About.tsx`
- Services lists: `src/components/Services.tsx`
- Contact details: `src/components/Contact.tsx`
