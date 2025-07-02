# Deployment Guide

## Overview

This guide covers deployment strategies for beRichHub, including environment setup, platform-specific configurations, and best practices for production deployment.

## Supported Platforms

### Primary Platform: Vercel (Recommended)

Vercel is the recommended deployment platform due to:

- Seamless Next.js integration
- Automatic deployments from Git
- Built-in edge network and CDN
- Serverless function support
- Easy environment variable management

### Alternative Platforms

- **Netlify**: Good Next.js support
- **Railway**: Full-stack app deployment
- **DigitalOcean App Platform**: Container-based deployment
- **AWS Amplify**: Amazon's hosting solution
- **Self-hosted**: Docker containers or VPS

## Environment Configuration

### Required Environment Variables

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"

# Kinde Authentication
KINDE_ISSUER_URL="https://your-domain.kinde.com"
KINDE_MANAGEMENT_CLIENT_ID="your_management_client_id"
KINDE_MANAGEMENT_CLIENT_SECRET="your_management_client_secret"

# AI Configuration (Optional)
OPENAI_API_KEY="your_openai_api_key"
GOOGLE_AI_API_KEY="your_google_ai_api_key"

# Optional: Additional Configuration
NODE_ENV="production"
NEXTAUTH_URL="https://your-domain.com"
```

### Environment Variable Security

- Never commit `.env` files to version control
- Use platform-specific secret management
- Rotate secrets regularly
- Use different values for staging and production

## Vercel Deployment

### Quick Deployment

1. **Connect Repository**

   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Deploy from repository root
   vercel
   ```

2. **GitHub Integration**
   - Connect GitHub repository to Vercel dashboard
   - Enable automatic deployments
   - Configure preview deployments for pull requests

### Vercel Configuration

#### `vercel.json` (Optional)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

#### Environment Variables Setup

```bash
# Using Vercel CLI
vercel env add DATABASE_URL
vercel env add KINDE_ISSUER_URL
vercel env add KINDE_MANAGEMENT_CLIENT_ID
vercel env add KINDE_MANAGEMENT_CLIENT_SECRET

# Or via Vercel Dashboard:
# 1. Go to project settings
# 2. Navigate to Environment Variables
# 3. Add each variable with appropriate scope (Production, Preview, Development)
```

### Build Configuration

```json
// package.json
{
  "scripts": {
    "build": "next build",
    "start": "next start",
    "postinstall": "prisma generate && prisma migrate deploy"
  }
}
```

## Database Setup

### PostgreSQL Database Options

#### 1. Vercel Postgres (Recommended for Vercel)

```bash
# Install Vercel Postgres
vercel postgres create

# Connect to your project
vercel postgres connect

# Get connection string
vercel env add DATABASE_URL
```

#### 2. Railway PostgreSQL

```bash
# Create Railway account and project
# Add PostgreSQL service
# Copy connection string to environment variables
DATABASE_URL="postgresql://username:password@hostname:port/database"
```

#### 3. Supabase PostgreSQL

```bash
# Create Supabase project
# Navigate to Settings > Database
# Copy connection string (ensure direct connection is enabled)
DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"
```

#### 4. PlanetScale (MySQL Alternative)

```bash
# Note: Requires schema.prisma modifications for MySQL
DATABASE_URL="mysql://username:password@hostname:port/database?sslaccept=strict"
```

### Database Migration in Production

```bash
# Automatic migration on deployment (recommended)
# Add to package.json postinstall script:
"postinstall": "prisma generate && prisma migrate deploy"

# Manual migration
npx prisma migrate deploy
npx prisma generate
```

## Authentication Setup (Kinde)

### Kinde Configuration

1. **Create Kinde Application**

   - Go to Kinde dashboard
   - Create new application
   - Set application type to "Web Application"

2. **Configure URLs**

   ```
   Allowed callback URLs:
   - https://your-domain.com/api/auth/kinde_callback
   - https://your-domain.com/api/auth/login

   Allowed logout redirect URLs:
   - https://your-domain.com

   Allowed origins:
   - https://your-domain.com
   ```

3. **Get Credentials**
   ```bash
   KINDE_ISSUER_URL="https://your-domain.kinde.com"
   KINDE_MANAGEMENT_CLIENT_ID="your_client_id"
   KINDE_MANAGEMENT_CLIENT_SECRET="your_client_secret"
   ```

### Kinde Management API Setup

1. **Create Management API Application**

   - Separate from web application
   - Machine-to-machine type
   - Enable required scopes (users:read, users:write)

2. **Configure Permissions**
   - Grant user management permissions
   - Enable user search capabilities

## AI Integration Setup

### OpenAI Configuration

```bash
# Get API key from OpenAI dashboard
OPENAI_API_KEY="sk-..."

# Optional: Configure organization
OPENAI_ORG_ID="org-..."
```

### Google AI Configuration

```bash
# Get API key from Google AI Studio
GOOGLE_AI_API_KEY="AI..."
```

### AI Model Configuration

Update the chat API to use your preferred model:

```typescript
// app/api/chat/route.ts
const model = google("gemini-1.5-flash"); // or openai('gpt-4')
```

## Custom Domain Setup

### Vercel Custom Domain

1. **Add Domain in Vercel Dashboard**

   - Go to project settings
   - Navigate to Domains
   - Add your custom domain

2. **Configure DNS**

   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Automatically provisioned by Vercel
   - Let's Encrypt certificates
   - Auto-renewal enabled

### Domain Configuration for Authentication

Update Kinde settings with new domain:

```
Callback URLs: https://yourdomain.com/api/auth/kinde_callback
Logout URLs: https://yourdomain.com
Origins: https://yourdomain.com
```

## Performance Optimization

### Next.js Optimization

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "@radix-ui"],
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Compression
  compress: true,

  // PoweredByHeader
  poweredByHeader: false,
};

export default nextConfig;
```

### Database Optimization

```typescript
// Connection pooling for production
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  // Vercel handles connection pooling automatically
}
```

### Caching Strategy

```typescript
// API route caching
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
```

## Monitoring and Analytics

### Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Monitoring

Consider integrating:

- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and logging
- **DataDog**: Infrastructure monitoring

### Performance Monitoring

```typescript
// Add performance monitoring
import { WebVitals } from "next/web-vitals";

export function reportWebVitals(metric: any) {
  // Send to analytics service
  console.log(metric);
}
```

## Security Configuration

### Security Headers

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};
```

### Content Security Policy

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  );

  return response;
}
```

## Backup and Recovery

### Database Backup Strategy

```bash
# Automated backups (platform-specific)
# Vercel Postgres: Automatic daily backups
# Railway: Point-in-time recovery
# Supabase: Automatic backups with restore points

# Manual backup
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql
```

### Code Backup

- Git repository with multiple remotes
- Regular pushes to main branch
- Tagged releases for versions
- Branch protection rules

## Deployment Checklist

### Pre-Deployment

- [ ] All environment variables configured
- [ ] Database migrations tested
- [ ] Authentication flow tested
- [ ] AI integration working
- [ ] Build process successful
- [ ] Tests passing (if applicable)

### Deployment

- [ ] Deploy to staging environment first
- [ ] Run smoke tests
- [ ] Check all critical paths
- [ ] Verify database connectivity
- [ ] Test authentication flow

### Post-Deployment

- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify all features working
- [ ] Test from different devices/browsers
- [ ] Update documentation if needed

## Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Check TypeScript errors
npm run type-check
```

#### Database Connection Issues

```bash
# Test database connection
npx prisma db pull

# Reset database (development only)
npx prisma migrate reset

# Deploy migrations
npx prisma migrate deploy
```

#### Authentication Issues

- Verify Kinde callback URLs
- Check environment variables
- Ensure domain matches configuration
- Test in incognito mode

#### Performance Issues

- Check bundle size: `npm run build`
- Analyze with Lighthouse
- Monitor Core Web Vitals
- Check database query performance

## Scaling Considerations

### Horizontal Scaling

- Vercel automatically scales functions
- Database connection pooling
- CDN for static assets
- Consider Redis for sessions (if needed)

### Vertical Scaling

- Upgrade database plan
- Optimize queries and indexes
- Implement caching strategies
- Consider read replicas for heavy read workloads

This deployment guide provides comprehensive instructions for successfully deploying beRichHub to production environments with proper configuration, security, and monitoring.
