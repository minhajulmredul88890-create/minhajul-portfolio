# Minhajul Islam — Personal Portfolio

A premium, responsive personal portfolio built with Next.js, TypeScript, Framer Motion, and Lucide icons.

## Included

- Personal hero section using the supplied profile photo
- About, leadership highlights, experience, skills, education, achievements, and contact sections
- Mobile navigation
- Light / dark theme toggle
- Responsive layout and reduced-motion support
- SEO metadata and Open Graph basics
- Contact through the supplied email address

## Run locally

Install Node.js (current LTS), then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify the production build:

```bash
npm run typecheck
npm run build
```

## Personal details to review before publishing

1. Confirm that **Deli Campus Ambassador** and **LCB Campus Lead** are the exact role titles you want displayed. Their dates and detailed responsibilities were not supplied, so they are marked as current and described briefly.
2. Confirm the wording of the **Earth Lab** visit and **Perfetti** visit. They are presented as student industry-exposure visits organized during your AIBA Business Club presidency.
3. LinkedIn profile is connected: https://www.linkedin.com/in/minhajulislam01. Review that it opens the correct public profile before publishing.
4. The phone number from the uploaded CV has intentionally not been placed on the public website. The email address is included as the contact method.
5. The original uploaded CV is not bundled as a public download because it contains a personal phone number. If you want a CV download button, add a public/redacted PDF to `public/resume/` and then add the button.
6. Review all dates and metrics before publishing.

## Update your profile photo

Replace `public/images/minhajul-islam.jpg` with your preferred photo, keeping the same filename. Use a clear, high-resolution portrait.

## Deploy free with Vercel

1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com using GitHub.
3. Select **Add New → Project** and import the repository.
4. Keep the detected Next.js settings and select **Deploy**.
5. Vercel will provide a `*.vercel.app` URL.

For a personal, non-commercial portfolio, Vercel's Hobby plan may be suitable. Check the current plan terms if the site is used for commercial activity.

## Edit content

The main content is in `app/page.tsx`. Search for the experience, initiatives, skillGroups, and education arrays to update the portfolio details.
