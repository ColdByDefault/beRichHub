# beRichHub - Complete Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Features](#features)
6. [Database Schema](#database-schema)
7. [Authentication System](#authentication-system)
8. [API Routes](#api-routes)
9. [UI Components](#ui-components)
10. [Internationalization](#internationalization)
11. [Deployment](#deployment)
12. [Development Guide](#development-guide)

## Overview

beRichHub is a comprehensive web platform designed for developers, offering personalized learning roadmaps, AI-powered chat assistance, user profiles with blogging capabilities, and curated resources. Built with modern web technologies, it provides a seamless experience across multiple languages and devices.

**Version:** 5.3.1  
**License:** LicenseRef-BRH-1.0  
**Website:** https://www.berich-hub.vercel.app

### Key Features

- 🤖 AI-powered chat interface (beRich-LLM)
- 👤 User authentication and profile management
- 📝 Personal blogging system
- 🗺️ Interactive developer roadmaps
- 🔍 User search and discovery
- 🌍 Multi-language support (EN, DE, ES, SW)
- 🎨 Dark/Light theme support
- 📱 Fully responsive design

## Architecture

beRichHub follows a modern full-stack architecture:

### Frontend Architecture

- **Framework:** Next.js 15 with App Router
- **UI Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS with shadcn/ui components
- **State Management:** React hooks and context
- **Animations:** Framer Motion
- **Forms:** React Hook Form with Zod validation

### Backend Architecture

- **API:** Next.js API Routes (RESTful)
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Kinde Auth
- **AI Integration:** Vercel AI SDK with Google/OpenAI providers
- **File Storage:** Local file system for avatars

### Deployment Architecture

- **Platform:** Vercel (recommended)
- **Database:** PostgreSQL (production)
- **CDN:** Vercel Edge Network
- **Analytics:** Vercel Analytics

## Tech Stack

### Core Technologies

```json
{
  "runtime": "Node.js",
  "framework": "Next.js 15.3.3",
  "language": "TypeScript 5.x",
  "ui": "React 19.0.0",
  "styling": "Tailwind CSS 4.x",
  "database": "PostgreSQL",
  "orm": "Prisma 6.10.1"
}
```

### Key Dependencies

```json
{
  "authentication": "@kinde-oss/kinde-auth-nextjs",
  "ui_components": "@radix-ui/*",
  "ai": "@ai-sdk/google, @ai-sdk/openai",
  "forms": "react-hook-form, @hookform/resolvers",
  "validation": "zod",
  "animations": "framer-motion",
  "i18n": "next-intl",
  "themes": "next-themes",
  "icons": "lucide-react, react-icons",
  "charts": "recharts",
  "carousel": "embla-carousel-react",
  "notifications": "sonner"
}
```

## Project Structure

```
berichhub@latest/
├── app/                          # Next.js App Router
│   ├── (docs)/                   # Documentation pages group
│   │   └── roadmaps/            # Developer roadmaps
│   ├── (legals)/                # Legal pages group
│   │   ├── cookies/             # Cookie policy
│   │   ├── impressum/           # Legal notice
│   │   ├── privacy-policy/      # Privacy policy
│   │   └── terms/               # Terms of service
│   ├── (protected)/             # Authentication-protected routes
│   │   ├── dashboard/           # User dashboard
│   │   ├── profile/[userId]/    # Dynamic user profiles
│   │   └── search-users/        # User search page
│   ├── api/                     # API routes
│   │   ├── auth/[kindeAuth]/    # Kinde authentication
│   │   ├── bio/                 # User bio management
│   │   ├── chat/                # AI chat endpoint
│   │   ├── posts/               # Blog posts API
│   │   └── search-user/         # User search API
│   ├── berich-llm/             # AI chat interface
│   ├── favicon.ico
│   ├── global-error.tsx        # Global error boundary
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Home page
├── components/                  # React components
│   ├── chat-llm/               # AI chat components
│   ├── docs/                   # Documentation components
│   ├── landing/                # Landing page components
│   ├── main/                   # Main layout components
│   ├── motions/                # Animation components
│   ├── profile/                # User profile components
│   ├── search/                 # Search components
│   ├── themes/                 # Theme providers
│   ├── toggles/                # Toggle components
│   └── ui/                     # shadcn/ui components
├── actions/                    # Server actions
├── data/                       # Static data
├── docs/                       # Additional documentation
├── hooks/                      # Custom React hooks
├── i18n/                       # Internationalization config
├── lib/                        # Utility libraries
├── messages/                   # Translation files
├── prisma/                     # Database schema and migrations
├── public/                     # Static assets
├── utils/                      # Utility functions
├── middleware.ts               # Next.js middleware
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── prisma/schema.prisma        # Database schema
└── tsconfig.json               # TypeScript configuration
```

## Features

### 1. Landing Page (`app/page.tsx`)

- **Hero Section:** Dynamic introduction with animated background
- **Timeline:** Interactive development history
- **Responsive Design:** Mobile-first approach
- **Internationalization:** Multi-language support

### 2. AI Chat Interface (`app/berich-llm/`)

- **Real-time Chat:** Powered by Vercel AI SDK
- **Multiple Providers:** Google and OpenAI integration
- **Chat Management:** Create, select, and delete conversations
- **Sidebar Navigation:** Organized chat history
- **Loading States:** Smooth user experience

### 3. User Authentication & Profiles

- **Authentication:** Kinde OAuth integration
- **User Profiles:** Editable profiles with bio
- **Avatar System:** Custom avatar support
- **Role Management:** User role assignments

### 4. Blogging System

- **Personal Blogs:** Users can create and manage posts
- **CRUD Operations:** Full blog post management
- **User-specific Content:** Profile-based blog viewing
- **Real-time Updates:** Dynamic content loading

### 5. Developer Roadmaps (`app/(docs)/roadmaps/`)

- **Interactive Roadmaps:** Step-by-step learning paths
- **Multiple Paths:** Web, Mobile, Backend development
- **FAQ Section:** Common questions answered
- **Resource Links:** Curated learning resources

### 6. User Discovery & Search

- **User Search:** Find other platform users
- **Profile Viewing:** View other users' profiles and blogs
- **Search API:** Backend user search functionality

### 7. Multi-language Support

- **Languages:** English, German, Spanish, Swedish
- **Dynamic Translation:** Real-time language switching
- **Localized Content:** All UI elements translated

### 8. Theme System

- **Dark/Light Mode:** Toggle between themes
- **System Preference:** Automatic theme detection
- **Persistent Settings:** Theme preference storage

## Database Schema

### User Model

```prisma
model User {
  id         String   @id @default(cuid())
  kindeId    String   @unique     // Kinde user ID
  givenName  String               // First name
  familyName String               // Last name
  email      String   @unique     // Email address
  bio        String?  @db.VarChar(150) // User biography

  posts      Post[]   @relation("UserPosts")
}
```

### Post Model

```prisma
model Post {
  id        String   @id @default(cuid())
  user      User     @relation("UserPosts", fields: [userId], references: [id])
  userId    String                // Foreign key to User
  title     String                // Post title
  content   String   @db.VarChar(500) // Post content
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
}
```

### Database Features

- **PostgreSQL:** Production-ready relational database
- **Prisma ORM:** Type-safe database access
- **Migrations:** Version-controlled schema changes
- **Indexing:** Optimized query performance

## Authentication System

### Kinde Integration

beRichHub uses Kinde for authentication, providing:

```typescript
// Environment Variables Required
KINDE_ISSUER_URL=<your-kinde-issuer>
KINDE_MANAGEMENT_CLIENT_ID=<client-id>
KINDE_MANAGEMENT_CLIENT_SECRET=<client-secret>
```

### Authentication Flow

1. **Login:** Users authenticate via Kinde OAuth
2. **Session Management:** Server-side session handling
3. **User Creation:** Automatic user record creation
4. **Role Assignment:** Dynamic role management
5. **Profile Sync:** User data synchronization

### Protected Routes

```typescript
// middleware.ts - Route Protection
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|cookies|impressum|privacy-policy|terms|$|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
```

## API Routes

### Authentication API

```typescript
// app/api/auth/[kindeAuth]/route.ts
export const GET = handleAuth();
```

### User Bio API

```typescript
// app/api/bio/route.ts
GET    /api/bio           # Get current user's bio
POST   /api/bio           # Update current user's bio
DELETE /api/bio           # Delete current user's bio

// app/api/bio/[userId]/route.ts
GET    /api/bio/[userId]  # Get specific user's bio
```

### Posts API

```typescript
// app/api/posts/route.ts
GET    /api/posts                    # Get user's posts
POST   /api/posts                    # Create new post
GET    /api/posts?userId=[userId]    # Get posts by user ID

// app/api/posts/[id]/route.ts
DELETE /api/posts/[id]               # Delete specific post
```

### User Search API

```typescript
// app/api/search-user/route.ts
GET    /api/search-user?q=[query]    # Search users by query
```

### AI Chat API

```typescript
// app/api/chat/route.ts
POST   /api/chat                     # Send message to AI
```

## UI Components

### Core Component Library

beRichHub uses shadcn/ui components built on Radix UI:

#### Navigation Components

- **NavigationMenu:** Main navigation system
- **Breadcrumb:** Page navigation breadcrumbs
- **Pagination:** Content pagination

#### Data Display

- **Card:** Content containers
- **Badge:** Status indicators
- **Avatar:** User profile images
- **Tooltip:** Contextual information
- **Accordion:** Collapsible content sections

#### Form Components

- **Input:** Text input fields
- **Textarea:** Multi-line text input
- **Button:** Interactive buttons
- **Select:** Dropdown selections
- **Checkbox:** Boolean inputs
- **Form:** Form wrapper with validation

#### Feedback Components

- **Alert:** Important messages
- **Dialog:** Modal dialogs
- **Sheet:** Slide-out panels
- **Sonner:** Toast notifications
- **Progress:** Loading indicators

#### Layout Components

- **Separator:** Visual dividers
- **Sidebar:** Collapsible navigation
- **Tabs:** Content organization
- **Scroll Area:** Custom scrollbars

### Custom Components

#### Chat Interface (`components/chat-llm/`)

```typescript
// Chat-specific components for AI interaction
- AppSidebar: Chat history management
- ChatHeader: Chat session header
- ChatInterface: Main chat interface
```

#### Profile Components (`components/profile/`)

```typescript
// User profile management
- ProfileCard: User profile display/edit
- BlogForm: Blog post creation
- BlogList: Blog post listing
```

#### Layout Components (`components/main/`)

```typescript
// Main application layout
- Navbar: Primary navigation
- NavbarHeader: Navigation menu
- Footer: Site footer
```

#### Landing Components (`components/landing/`)

```typescript
// Homepage components
- Hero: Main hero section
- History: Development timeline
```

## Internationalization

### Supported Languages

- **English (en):** Default language
- **German (de):** Deutsch
- **Spanish (es):** Español
- **Swedish (sw):** Svenska

### Translation Structure

```
messages/
├── en.json              # English translations
├── de.json              # German translations
├── es.json              # Spanish translations
└── sw.json              # Swedish translations
```

### Usage Example

```typescript
import { useTranslations } from "next-intl";

function Component() {
  const t = useTranslations("Namespace");

  return <h1>{t("title")}</h1>;
}
```

### Translation Namespaces

- **Navbar:** Navigation menu items
- **RoadmapItems:** Learning roadmap content
- **Landing:** Homepage content
- **Profile:** User profile interface
- **Chat:** AI chat interface
- **Legal:** Legal pages content

## Deployment

### Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
KINDE_ISSUER_URL=https://your-domain.kinde.com
KINDE_MANAGEMENT_CLIENT_ID=your_client_id
KINDE_MANAGEMENT_CLIENT_SECRET=your_client_secret

# AI (Optional)
OPENAI_API_KEY=your_openai_key
GOOGLE_AI_API_KEY=your_google_ai_key
```

### Vercel Deployment

1. **Connect Repository:** Link your GitHub repository
2. **Configure Environment:** Set environment variables
3. **Database Setup:** Configure PostgreSQL database
4. **Deploy:** Automatic deployment on push

### Build Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production Server
npm run start

# Linting
npm run lint

# Database Operations
npx prisma generate
npx prisma migrate deploy
```

## Development Guide

### Getting Started

1. **Clone Repository**

   ```bash
   git clone <repository-url>
   cd berichhub@latest
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Database Setup**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

### Development Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "all": "npm run lint && npm run build && npm run start",
  "postinstall": "prisma generate && prisma migrate deploy"
}
```

### Code Organization

#### Component Structure

```typescript
// Component template
// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client"; // For client components

import { useState } from 'react';
import { ComponentProps } from '@/types';

interface Props {
  // Define props
}

export function Component({ props }: Props) {
  // Component logic
  return (
    // JSX
  );
}
```

#### API Route Structure

```typescript
// API route template
// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: Request) {
  // Authentication check
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // API logic
  return NextResponse.json(data);
}
```

### Styling Guidelines

- **Tailwind CSS:** Utility-first approach
- **Component Variants:** Use class-variance-authority
- **Responsive Design:** Mobile-first breakpoints
- **Dark Mode:** Support both themes
- **Animations:** Framer Motion for complex animations

### Performance Optimization

- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic with App Router
- **Lazy Loading:** React.lazy for heavy components
- **Database Indexing:** Prisma indexes for queries
- **Caching:** Server-side and client-side caching

### Testing Strategy

- **Type Safety:** TypeScript for compile-time checks
- **Linting:** ESLint for code quality
- **Format:** Prettier for code formatting
- **Manual Testing:** Cross-browser testing

### Security Considerations

- **Authentication:** Kinde OAuth integration
- **Authorization:** Route-level protection
- **Data Validation:** Zod schemas
- **SQL Injection:** Prisma ORM protection
- **XSS Prevention:** React built-in protection
- **CSRF Protection:** Next.js built-in protection

---

_This documentation covers the complete beRichHub application architecture, features, and development guidelines. For specific implementation details, refer to the source code and inline comments._
