# Vladislav Chikalkin

**Senior Frontend Engineer (React / TypeScript) | Fullstack Product**

Moscow · Remote / Hybrid  
Phone: +7 (926) 925-08-68 · Telegram: @vchikalkin · Email: i@vchikalkin.ru  
Portfolio: https://vchikalkin.dev

---

## Summary

8+ years in leasing. I built the sales calculator from scratch: React and Next.js on the UI, a .NET/C# service for the payment schedule and commercial-proposal formulas, deploys in Docker. About 500 people use it across cities, and peaks hit 10–20 proposals a second. The CRM API and SQL are slow, so I cache the reference fields in Redis with a TTL on each field.

---

## Technical Skills

- **Languages:** TypeScript, JavaScript, C#
- **Frontend:** React, Next.js (SSR), MobX, GraphQL, tRPC, Zod, Ant Design, Tailwind CSS, styled-components, shadcn/ui, PWA
- **Backend:** Node.js, Nest.js, REST, JWT, LDAP / Active Directory, .NET
- **Data:** Redis, PostgreSQL, MongoDB, WebSocket
- **Deploy:** Docker, nginx, Traefik, GitLab CI, Azure DevOps, Linux (Ubuntu), Jest, Vitest, Sentry
- **Also:** Telegram bots on long polling and webhooks, LLM APIs (Google AI Studio)

---

## Professional Experience

### Senior Fullstack Developer — LK Evolution (evoleasing.ru)

**Moscow · Aug 2020 – Present**

I joined as one of the first ~20 people. I owned the calculator UI, the .NET calculation service, and deploys. The team was 5 people: me, one other senior, two developers, one junior. Other developers wrote the CRM .NET backend. On the calculator I reviewed code and mentored juniors and mids.

- In 3 months I shipped the calculator MVP, about 70% of the fields: a React UI and a .NET/C# service with payment-schedule and commercial-proposal formulas. The company started sales on that build. I added the rest of the fields over the next year.
- The calculator serves ~500 users and holds peaks of 10–20 proposals a second. I run the schedule and proposal formulas in .NET, and I cache ~100+ CRM reference fields in Redis with a TTL on each field. The slow part is the CRM API and SQL.
- I rewrote the calculator from a client SPA to Next.js SSR. On a weak office PC the page comes back rendered, and the JS bundle loads after that.
- The form has 100+ fields. With the analyst I wrote MobX reactions: you change one field, and 10+ related fields recalculate from that change.
- I connected Next.js and Node with tRPC and Zod, so the client and the server share types. GraphQL and CRM REST stayed. I also shipped a responsive layout, PWA install, and insurance quotes via ELT-Poisk.
- I built one login for the company apps. Nest.js checks LDAP/Active Directory and issues a JWT. From the internet you also pass Telegram 2FA. I put the calculator behind nginx `auth_request`. From Nest.js services I talk to PostgreSQL and MongoDB directly.
- I deploy with Docker, Traefik, and SSL: feature branch, test, a `-dev` stand, then production. I ran the pipeline in Azure DevOps, then moved it to GitLab CI. At launch I covered the calculator and auth with Jest. Unit tests now run on Vitest.
- I built an app for insurance edits on assets we already leased. A manager changes the contract in the form, and I send that change to CRM over REST.

**Stack:** TypeScript, React, Next.js, MobX, GraphQL, tRPC, Zod, Ant Design, Nest.js, PostgreSQL, MongoDB, Redis, Docker, nginx, Traefik, GitLab CI, Azure DevOps, Jest, Vitest, Sentry

### Fullstack Developer — Carcade Leasing (carcade.com)

**Russia · Jul 2018 – Aug 2020**

- I built an internal auction for written-off equipment. I take WebSocket bids into a queue and keep them in millisecond order.
- I built the agent app on React Native (Expo): a lead into CRM, status tracking, commission math, document export. I published it on Google Play and the App Store. Another developer wrote the ASP.NET API. I handed the app over before I left.
- I kept extending the leasing calculator: the screens and the calculation rules salespeople use.
- I wrote a Node.js Telegram bot on top of MS CRM. The client checks status and gets notices in the bot. I wrote bots both on long polling and on webhooks.
- I wrote a C# console job that pulls SPARK-Interfax data into CRM and updates client cards.
- I worked on the company site and the client account, and hooked both up to CRM and external APIs.

**Stack:** JavaScript, React, MobX, Node.js, C#, ASP.NET, REST, WebSocket, React Native, Expo, MS CRM

---

## Additional

- A small internal UI kit on shadcn/ui, Tailwind, CVA, and `cn`: text input, select, textarea, buttons.
- On a later job, outside LK Evolution: an n8n flow that checks a Pyrus task and emails participants when the check passes.
- Integrations with Google AI Studio. I read the model output before a user sees it.
- Open source: [XKeen-UI](https://github.com/zxc-rv/XKeen-UI), [Pixel-Modem-Fix](https://github.com/vchikalkin/Pixel-Modem-Fix), [TiktokPatchXposed](https://github.com/vchikalkin/TiktokPatchXposed), [next-downloader-bot](https://github.com/vchikalkin/next-downloader-bot). Sites: [vchikalkin.dev](https://vchikalkin.dev/ru), [victoriachikalkina.com](https://victoriachikalkina.com). At home I run a Linux homelab and home automation.

---

## Education

**Master’s degree — Informatics and Computer Engineering**  
Ryazan State Radio Engineering University · 2018

**Bachelor’s — Design and Technology of Electronic Means**  
Ryazan State Radio Engineering University · 2016

---

## Languages

- Russian — Native
- English — B1 (Intermediate)
