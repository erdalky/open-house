# Raindrop Middle School Open House

A responsive information hub for the Raindrop Education 2026–2027 Boys Middle School mentorship program. The site brings the annual calendar, parent and student expectations, curriculum resources, reading plans, permission forms, payments, camp registration, PMA information, and program-home support into one mobile-friendly experience.

**Live site:** [raindrop-open-house.pages.dev](https://raindrop-open-house.pages.dev/)

## Highlights

- Component-based React and TypeScript architecture
- Data-driven calendar, book catalog, expectations, and resource sections
- Interactive 7th/8th grade reading-plan tabs
- Generated QR codes for the website and winter camp registration
- Preserved QR assets for WhatsApp groups, permission forms, book fees, and Zelle support
- Responsive navigation and layouts for phones, tablets, and desktops
- Scroll progress indicator and accessible semantic sections
- Downloadable annual calendar and sample daily program PDFs
- Cloudflare Pages-compatible Vite build

## Tech stack

- **Frontend:** React, TypeScript, Vite
- **QR generation:** qrcode.react
- **Styling:** Responsive CSS, CSS Grid, custom design tokens
- **Testing:** Vitest
- **Deployment:** Cloudflare Pages

## Project structure

```text
src/
├── components/
│   ├── BookCatalog.tsx     # Interactive grade-level book tabs
│   ├── BrandMark.tsx       # Reusable Raindrop visual mark
│   ├── QrCard.tsx          # Generated or image-based QR cards
│   ├── Schedule.tsx        # Two-day program schedule
│   └── SectionHeading.tsx  # Shared section typography
├── data/
│   ├── content.ts          # Calendar, books, links, forms, and program data
│   └── content.test.ts     # Content integrity tests
├── App.tsx                 # Page composition and navigation behavior
├── main.tsx                # React entry point
└── styles.css              # Complete responsive design system

public/
├── assets/                 # QR codes and book-cover assets
├── annual-calendar.pdf
└── daily-program.pdf
```

## Run locally

```bash
npm install
npm run dev
```

## Test and build

```bash
npm test
npm run build
```

The optimized production output is generated in `dist/`.

## Deploy to Cloudflare Pages

1. Import this repository into Cloudflare Pages.
2. Use `npm run build` as the build command.
3. Use `dist` as the build output directory.
4. No environment variables are required.

## Updating program content

Most annual updates can be made in `src/data/content.ts` without changing the React layout. Replace files in `public/assets/` when QR codes or book covers change, and keep the same filenames to avoid component edits.

## Privacy

This is a public information website. It does not collect, store, or transmit visitor data and does not require a database or backend service.
