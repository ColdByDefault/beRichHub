# Database Setup

This directory contains the database schema, migration scripts and connection configuration for the application.

## Environment

Ensure the `.env.local` file defines `DATABASE_URL` pointing to your database. Migrations rely on this value.

## Running Migrations

Use the following npm script to run pending migrations:

```bash
npm run db:migrate
```

Migrations are stored in `db/drizzle` and managed with **drizzle-kit**.
