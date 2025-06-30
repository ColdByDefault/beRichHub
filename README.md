# beRichHub

**V.0.** **Flask App**

[beRich](https://coldbydefault070.pythonanywhere.com/)

**V.1.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/8021aafa-030b-41b9-9c31-71b1906659cd.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/8021aafa-030b-41b9-9c31-71b1906659cd)

**V.2.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/79c9876c-acce-48e7-b661-264f4bf514a5.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/79c9876c-acce-48e7-b661-264f4bf514a5)

**V.3.**

[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/beb9337a-f033-4377-9e03-26f96c36a41a.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/beb9337a-f033-4377-9e03-26f96c36a41a)


**V.4.** Removed

**v.5.2.1** 
[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69)

BeRichHub is an open-source web platform that helps developers track their learning journey. The application provides personalized roadmaps, curated documentation, and progress tracking so you can reach your goals faster. It is built with **Next.js** and **TypeScript**, styled with **Tailwind CSS**, and uses **Prisma** with PostgreSQL for data persistence. Authentication is handled via **Kinde**.

## Features

- **Personalized roadmaps** based on your experience and interests
- **Curated tutorials** and documentation in a searchable library
- **Progress tracking** to keep an eye on your achievements
- **Authentication** powered by [Kinde](https://kinde.com)
- **Responsive UI** built on Radix UI and Tailwind CSS

## Repository Contents

- `app` – Next.js application routes and pages
- `components` – Reusable React components
- `data` – Static data such as the roadmaps
- `hooks` – Custom React hooks used throughout the app
- `lib` – Utility functions and configuration helpers
- `prisma` – Prisma schema for the PostgreSQL database
- `public` – Static assets served by Next.js

## Tech Stack

- [Next.js](https://nextjs.org/) 15 with the App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/) with PostgreSQL
- [Kinde](https://kinde.com) for authentication

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Create a `.env.local` file** with the following environment variables:

```
DATABASE_URL=postgres://user:password@host:port/db
KINDE_ISSUER_URL=<your-kinde-issuer>
KINDE_MANAGEMENT_CLIENT_ID=<kinde-management-client-id>
KINDE_MANAGEMENT_CLIENT_SECRET=<kinde-management-client-secret>
```

3. **Run the development server**

```bash
npm run dev
```

For database setup and migrations see the files under `prisma/`.

## License

BeRichHub is open source and distributed under the terms of the modified [LicenseRef-BRH-1.0](LICENSE).



