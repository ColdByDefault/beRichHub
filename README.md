# beRichHub

v.5.2.1 
[![wakatime](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69.svg)](https://wakatime.com/badge/user/c4621892-41e0-4c29-a8bc-05597d124f63/project/54a8cd7c-b451-4676-8695-4e701a4bda69)

beRichHub is a web platform that provides personalized learning roadmaps and curated resources to help developers reach their goals faster. It is built with Next.js and TypeScript, uses Tailwind CSS for styling, Drizzle ORM for database access, and Kinde for authentication.

## Features

- **Personalized roadmaps** tailored to each user's experience and interests
- **Curated documentation** and tutorials collected in a searchable library
- **Progress tracking** so learners can monitor their achievements
- **Authentication** powered by [Kinde](https://kinde.com)
- **Responsive UI** built with the Radix UI component library and Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/) 15 with the App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Prisma ORM](https://www.prisma.io/) and PostgreSQL
- [Kinde](https://kinde.com) for auth


See [`db/README.md`](db/README.md) for details on setting up the database and running migrations.

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Create `.env.local`**

Define the following environment variables:

```
DATABASE_URL=postgres://user:password@host:port/db
KINDE_ISSUER_URL=<your-kinde-issuer>
KINDE_MANAGEMENT_CLIENT_ID=<kinde-management-client-id>
KINDE_MANAGEMENT_CLIENT_SECRET=<kinde-management-client-secret>
```



