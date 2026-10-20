# Portfolio site

## Motivation

I built this website to better showcase my coding projects. I chose to use SvelteKit instead of Svelte to learn more about the things SvelteKit has to offer. Such as routing and server-side rendering, among other optimizations.

![Site mockup](https://raw.githubusercontent.com/aleksebastian/portfolio-site/main/mockup.png)

#### Check out the live site at [aleksebastian.dev](https://aleksebastian.dev)

## How it works

- Single page built with SvelteKit, Svelte 5 and Tailwind CSS 4, deployed on Vercel.
- Projects are fetched server-side from the GitHub API: any public repo tagged with the `portfolio-project` topic shows up, using the `mockup.webp` at the root of its default branch as the cover image. Responses are cached at the edge for 30 minutes.
- Resume content (about, experience, education, skills) lives in `src/lib/data/resume.json`; shared copy such as contact details and availability lives in `src/lib/site.ts`.

## Development

```bash
pnpm install
cp .env.example .env.local   # optional: add a GITHUB_TOKEN to raise the API rate limit
pnpm dev
```

`pnpm lint` runs Prettier, ESLint and svelte-check; CI runs it plus `pnpm build` on every pull request.
