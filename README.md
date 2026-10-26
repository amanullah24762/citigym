# Citi Gym — Next.js demo website

A premium, mobile-first multi-page fitness website built with Next.js App Router and TypeScript.

## Sitemap

- `/` — Home
- `/about` — About Us
- `/services` — Training overview
- `/strength-training` — Strength training detail
- `/personal-coaching` — Personal coaching detail
- `/group-classes` — Group classes detail
- `/gallery` — Gallery
- `/pricing` — Memberships and pricing
- `/testimonials` — Member stories
- `/blog` — Journal
- `/blog/train-smarter` — Sample article
- `/blog/recovery-guide` — Sample article
- `/blog/build-consistency` — Sample article
- `/faq` — Frequently asked questions
- `/contact` — Contact, form, map and hours
- `/privacy` — Privacy policy
- `/terms` — Terms and conditions
- Custom `404` page

## Design system

- **Palette:** Graphite `#090b0a`, warm ivory `#f3f1e8`, acid lime `#caff2f`, white `#ffffff`
- **Display type:** Barlow Condensed
- **Body type:** Manrope
- **Logo:** Original SVG wordmark and barbell mark inspired by the supplied stacked Citi Gym reference

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deployment

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings and deploy.

The project also uses `output: "export"`, so `npm run build` produces a static `out` directory suitable for Netlify, Cloudflare Pages or standard static hosting.

## Before production

Replace the illustrative contact details, membership prices, team names, testimonials and map location with verified business information. Connect the demo forms to an email, CRM or server action.
