# Development Guide

## Overview

This guide provides comprehensive information for developers working on beRichHub, including setup instructions, coding standards, development workflow, and contribution guidelines.

## Getting Started

### Prerequisites

- **Node.js**: Version 18.17 or higher
- **npm**: Version 9 or higher (comes with Node.js)
- **Git**: For version control
- **PostgreSQL**: For local database (optional, can use cloud)
- **Code Editor**: VS Code recommended with extensions

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-typescript.typescript",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "prisma.prisma",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Initial Setup

#### 1. Clone Repository

```bash
git clone https://github.com/yourusername/berichhub.git
cd berichhub
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Environment Configuration

```bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your configuration
DATABASE_URL="postgresql://user:password@localhost:5432/berichhub"
KINDE_ISSUER_URL="https://your-domain.kinde.com"
KINDE_MANAGEMENT_CLIENT_ID="your_client_id"
KINDE_MANAGEMENT_CLIENT_SECRET="your_client_secret"
```

#### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Optional: Seed database with test data
npx prisma db seed
```

#### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure Deep Dive

### File Organization Principles

- **Feature-based organization**: Group related files together
- **Clear separation of concerns**: API, components, utilities
- **Consistent naming conventions**: kebab-case for files, PascalCase for components
- **Co-location**: Keep related files close to where they're used

### Directory Structure

```
berichhub@latest/
├── app/                          # Next.js App Router
│   ├── (docs)/                   # Route groups for organization
│   ├── (legals)/                 # Legal pages (not in main nav)
│   ├── (protected)/              # Auth-protected routes
│   ├── api/                      # API endpoints
│   ├── berich-llm/              # AI chat feature
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── chat-llm/               # Feature-specific components
│   ├── landing/                # Homepage components
│   ├── main/                   # Layout components
│   └── profile/                # User profile components
├── lib/                         # Utilities and configurations
├── hooks/                       # Custom React hooks
├── actions/                     # Server actions
├── data/                        # Static data
├── utils/                       # Helper functions
├── messages/                    # i18n translations
├── prisma/                      # Database schema and migrations
└── public/                      # Static assets
```

## Development Workflow

### Branch Strategy

```bash
# Main branches
main                    # Production-ready code
develop                 # Integration branch for features

# Feature branches
feature/user-profiles   # New features
fix/auth-bug           # Bug fixes
hotfix/critical-issue  # Critical production fixes
```

### Commit Message Convention

```bash
# Format: type(scope): description

# Examples:
feat(auth): add user profile editing
fix(api): resolve post deletion bug
docs(readme): update installation instructions
style(ui): improve button hover states
refactor(chat): extract message component
test(api): add user search tests
chore(deps): update Next.js to 15.3.3
```

### Development Commands

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run dev:db          # Start database in development mode

# Building
npm run build           # Build for production
npm run start           # Start production server
npm run type-check      # Run TypeScript type checking

# Linting and Formatting
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues automatically
npm run format          # Format code with Prettier

# Database
npx prisma studio       # Open Prisma Studio (database GUI)
npx prisma migrate dev  # Create and apply new migration
npx prisma generate     # Generate Prisma client
npx prisma db push      # Push schema changes (development)
npx prisma db pull      # Pull schema from database

# Testing (if implemented)
npm run test            # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report
```

## Coding Standards

### TypeScript Guidelines

```typescript
// Use explicit types for function parameters and return values
function createUser(userData: UserData): Promise<User> {
  return prisma.user.create({ data: userData });
}

// Use interfaces for object shapes
interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
}

// Use enums for constants
enum UserRole {
  USER = "user",
  ADMIN = "admin",
  MODERATOR = "moderator",
}

// Use generic types when appropriate
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then((res) => res.json());
}
```

### React Component Guidelines

```typescript
// Component file structure
// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client"; // Only if client component

import React from "react";
import { ComponentProps } from "./types";

interface Props {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export function MyComponent({ title, isActive = false, onClick }: Props) {
  // Hooks at the top
  const [isLoading, setIsLoading] = React.useState(false);

  // Event handlers
  const handleClick = () => {
    setIsLoading(true);
    onClick();
  };

  // Early returns
  if (!title) return null;

  // Main render
  return (
    <div className={`component-class ${isActive ? "active" : ""}`}>
      <h2>{title}</h2>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Click me"}
      </button>
    </div>
  );
}
```

### API Route Guidelines

```typescript
// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { z } from "zod";

// Input validation schema
const createPostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1).max(500),
});

export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Input validation
    const body = await request.json();
    const validatedData = createPostSchema.parse(body);

    // Business logic
    const post = await createPost(user.id, validatedData);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### CSS/Tailwind Guidelines

```css
/* Use Tailwind utilities first */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors;
}

/* Custom CSS only when Tailwind isn't sufficient */
.animated-loader {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Use CSS variables for theme consistency */
:root {
  --color-primary: theme("colors.blue.500");
  --spacing-unit: 0.25rem;
}
```

## Component Development

### Creating New Components

#### 1. UI Components (shadcn/ui style)

```typescript
// components/ui/new-component.tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "default-styles",
      secondary: "secondary-styles",
    },
    size: {
      sm: "small-styles",
      lg: "large-styles",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";

export { Component, componentVariants };
```

#### 2. Feature Components

```typescript
// components/feature/feature-component.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureComponentProps {
  data: FeatureData[];
  onAction: (id: string) => void;
}

export function FeatureComponent({ data, onAction }: FeatureComponentProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    // Side effects here
  }, [data]);

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
            <Button
              onClick={() => onAction(item.id)}
              variant={selectedId === item.id ? "default" : "outline"}
            >
              Select
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### Custom Hooks

```typescript
// hooks/use-feature.ts
import { useState, useEffect, useCallback } from "react";

interface UseFeatureOptions {
  initialValue?: string;
  onUpdate?: (value: string) => void;
}

export function useFeature({
  initialValue = "",
  onUpdate,
}: UseFeatureOptions = {}) {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateValue = useCallback(
    async (newValue: string) => {
      setIsLoading(true);
      setError(null);

      try {
        // Async operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setValue(newValue);
        onUpdate?.(newValue);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    },
    [onUpdate]
  );

  return {
    value,
    setValue,
    updateValue,
    isLoading,
    error,
  };
}
```

## Database Development

### Prisma Workflow

```bash
# 1. Modify schema.prisma
# 2. Create migration
npx prisma migrate dev --name descriptive_name

# 3. Generate client
npx prisma generate

# 4. Update application code
# 5. Test changes
```

### Database Best Practices

```prisma
// Good: Descriptive model names
model User {
  id        String @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Good: Explicit field types
  email     String @unique @db.VarChar(255)

  // Good: Optional fields marked properly
  bio       String? @db.VarChar(150)

  // Good: Proper relations
  posts     Post[]

  // Good: Indexes for performance
  @@index([email])
}
```

### Query Patterns

```typescript
// Good: Use select for performance
const users = await prisma.user.findMany({
  select: {
    id: true,
    email: true,
    posts: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});

// Good: Use transactions for related operations
const result = await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: userData });
  const profile = await tx.profile.create({
    data: { ...profileData, userId: user.id },
  });
  return { user, profile };
});

// Good: Handle errors appropriately
try {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
  });
} catch (error) {
  if (error instanceof Prisma.NotFoundError) {
    throw new Error("User not found");
  }
  throw error;
}
```

## Testing Strategy

### Unit Testing Setup (if implemented)

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Create test files alongside components
components/
├── ui/
│   ├── button.tsx
│   └── button.test.tsx
```

### Example Test

```typescript
// components/ui/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant styles correctly", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByText("Delete");
    expect(button).toHaveClass("bg-destructive");
  });
});
```

## Internationalization Development

### Adding New Translations

```json
// messages/en.json
{
  "Navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "NewFeature": {
    "title": "New Feature",
    "description": "This is a new feature"
  }
}
```

### Using Translations

```typescript
import { useTranslations } from "next-intl";

function Component() {
  const t = useTranslations("NewFeature");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

## Performance Guidelines

### Code Splitting

```typescript
// Use dynamic imports for heavy components
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // If component doesn't need SSR
});
```

### Image Optimization

```typescript
import Image from "next/image";

function ProfileImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="rounded-full"
      priority // For above-the-fold images
    />
  );
}
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

## Debugging

### Common Debug Tools

```typescript
// React Developer Tools
// Add to any component for debugging
useEffect(() => {
  console.log("Component mounted with props:", props);
}, []);

// Database query debugging
const users = await prisma.user.findMany();
console.log("Query result:", users);

// API debugging
console.log("Request received:", request.method, request.url);
```

### VS Code Debug Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "env": {
        "NODE_OPTIONS": "--inspect"
      }
    }
  ]
}
```

## Contributing Guidelines

### Before Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Create a pull request

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
```

This development guide provides comprehensive information for working on beRichHub effectively, following best practices and maintaining code quality.
