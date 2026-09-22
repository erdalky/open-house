# Open House Information Hub

A responsive single-page site that gives families everything they need about a
school mentorship program in one place. Built to replace a stack of printed
handouts that went out of date the moment they were printed.

The site pulls the annual calendar, program expectations, curriculum resources,
reading plans, registration information, and support contacts into one
mobile-first page, so a parent standing in a hallway on their phone can find the
same thing an administrator would look up on a desktop.

## Why it looks like this

Open house material changes every year, but the shape of it doesn't. So the
layout is fixed and the content lives in a single data file — a coordinator can
update next year's calendar, book list, or schedule without touching a component.

QR codes are generated at build time rather than pasted in as images, which means
a link can change without anyone having to regenerate and re-upload a picture.

## A note on the live site

The deployed site isn't linked here. It carries information specific to one
community — schedules, contacts, forms, and payment details meant for the
families enrolled in the program — and that doesn't belong in a public
repository. This README covers the architecture and the code, which is the part
worth reading anyway.

If you're reviewing my work and want to see it running, ask me and I'll share it
directly.

## Features

- Data-driven calendar, book catalog, expectations, and resource sections
- Interactive grade-level reading-plan tabs
- Generated QR codes for page links and registration forms
- Two-day program schedule component
- Responsive navigation and layouts for phones, tablets, and desktops
- Scroll progress indicator and accessible semantic sections
- Downloadable calendar and sample daily program PDFs
- Content integrity tests so a bad data edit fails the build instead of the page

## Tech stack

- **Frontend:** React, TypeScript, Vite
- **QR generation:** qrcode.react
- **Styling:** Responsive CSS, CSS Grid, custom design tokens
- **Testing:** Vitest
- **CI/CD:** GitHub Actions
- **Deployment:** Cloudflare Pages

## Project structure

```text
src/
├── components/
│   ├── BookCatalog.tsx     # Interactive grade-level book tabs
│   ├── BrandMark.tsx       # Reusable visual mark
│   ├── QrCard.tsx          # Generated or image-based QR cards
│   ├── Schedule.tsx        # Two-day program schedule
│   └── SectionHeading.tsx  # Shared section typography
├── data/
│   ├── content.ts          # Calendar, books, links, forms, and program data
│   └── content.test.ts     # Content integrity tests
├── App.tsx                 # Page composition and navigation behavior
├── main.tsx                # React entry point
└── styles.css              # Responsive design system

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
2. Set the build command to `npm run build`.
3. Set the build output directory to `dist`.
4. No environment variables are required.

## Updating content

Most annual updates happen in `src/data/content.ts` without touching the React
layout. Replace files in `public/assets/` when QR codes or cover images change,
keeping the same filenames so no component edits are needed.

## Privacy

A public information site with no backend. It does not collect, store, or
transmit visitor data, and requires no database or external service at runtime.