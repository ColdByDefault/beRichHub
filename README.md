# beRichHub

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
- [Drizzle ORM](https://orm.drizzle.team/) and PostgreSQL
- [Kinde](https://kinde.com) for auth

## Project Structure

```
actions/         // Server actions (e.g. update profile)
app/             // Route handlers and pages
components/      // Reusable UI components
  ui/            // Radix-based component wrappers
  landing/       // Landing page sections
  profile/       // Dashboard profile components
hooks/           // Custom React hooks
lib/             // Utility functions and queries
  queries/       // Database query helpers
public/          // Static files and images
db/              // Database schema and migrations
```

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

3. **Run database migrations**

```bash
npm run db:migrate
```

4. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Useful Scripts

- `npm run dev` – start the dev server
- `npm run build` – create a production build
- `npm run start` – run the built app
- `npm run lint` – run ESLint
- `npm run db:migrate` – run pending database migrations
- `npm run db:generate` – generate migration files from the schema

## Deployment

beRichHub can be deployed to any platform that supports Node.js. The project was initially created with the intention to deploy on [Vercel](https://vercel.com/), but any environment with the above environment variables will work.

---

Feel free to open issues or submit pull requests if you find problems or have suggestions.
