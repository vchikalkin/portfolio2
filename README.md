# vchikalkin.dev

Personal portfolio of **Vlad Chikalkin** — Full Stack developer with 7+ years of experience in fintech and enterprise.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-intl (RU / EN)
- next-themes (dark default)

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/ru](http://localhost:3000/ru)

## Build

```bash
# Standard build
pnpm build

# Static export with image optimization (Cloudflare / static hosting)
pnpm build:static
```

## Project structure

```
app/              Routes and layouts
components/
  layout/         Header, footer, through-line
  sections/       Page sections (hero, about, experience…)
  motion/         Reusable animation primitives
config/           Site URLs and constants
data/             Structured content (experience, projects, skills)
messages/         i18n translations
```

## TODO content

- Company achievements in `messages/*.json`
- Skill tags marked `TODO` in `data/skills.ts`
- LinkedIn URL in `config/site.ts`
- Resume PDF link in `config/site.ts`
- Project screenshots in `public/images/projects/`
- Profile photo (currently initials placeholder)

## License

MIT
