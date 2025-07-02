# Database Schema Documentation

## Overview

beRichHub uses PostgreSQL as its primary database with Prisma as the ORM. The database is designed to store user information, blog posts, and support the application's social features while maintaining data integrity and performance.

## Database Configuration

### Connection

```typescript
// DATABASE_URL format
DATABASE_URL = "postgresql://username:password@host:port/database_name";

// Example
DATABASE_URL = "postgresql://user:pass@localhost:5432/berichhub";
```

### Prisma Configuration

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Schema Models

### User Model

```prisma
model User {
  id         String   @id @default(cuid())
  kindeId    String   @unique
  givenName  String
  familyName String
  email      String   @unique
  bio        String?  @db.VarChar(150)

  posts      Post[]   @relation("UserPosts")
}
```

#### Field Descriptions

- **id**: Primary key, CUID (Collision-resistant Unique Identifier)
- **kindeId**: Unique identifier from Kinde OAuth service
- **givenName**: User's first name from OAuth profile
- **familyName**: User's last name from OAuth profile
- **email**: User's email address (unique constraint)
- **bio**: Optional user biography (150 character limit)
- **posts**: One-to-many relationship with Post model

#### Constraints

- `kindeId` must be unique
- `email` must be unique
- `bio` is optional with 150 character limit

### Post Model

```prisma
model Post {
  id         String   @id @default(cuid())
  user       User     @relation("UserPosts", fields: [userId], references: [id])
  userId     String
  title      String
  content    String   @db.VarChar(500)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([userId])
}
```

#### Field Descriptions

- **id**: Primary key, CUID
- **user**: Foreign key relationship to User model
- **userId**: Foreign key referencing User.id
- **title**: Post title (required)
- **content**: Post content (500 character limit)
- **createdAt**: Timestamp when post was created
- **updatedAt**: Timestamp when post was last updated

#### Constraints

- `userId` is indexed for performance
- `content` has 500 character limit
- `createdAt` defaults to current timestamp
- `updatedAt` automatically updates on modification

## Relationships

### User-Post Relationship

```
User (1) ←→ (Many) Post
```

- One user can have many posts
- Each post belongs to exactly one user
- Relationship is named "UserPosts"
- Cascade delete: When user is deleted, all their posts are deleted

## Indexes

### Existing Indexes

```sql
-- Automatic indexes
CREATE UNIQUE INDEX "User_kindeId_key" ON "User"("kindeId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Explicit indexes
CREATE INDEX "Post_userId_idx" ON "Post"("userId");
```

### Performance Considerations

- **User.kindeId**: Fast OAuth user lookups
- **User.email**: Email-based searches
- **Post.userId**: Efficient post queries by user

## Database Operations

### User Operations

#### Create User (First Login)

```typescript
const user = await prisma.user.create({
  data: {
    kindeId: oauthUser.id,
    givenName: oauthUser.given_name,
    familyName: oauthUser.family_name,
    email: oauthUser.email,
  },
});
```

#### Find User by Kinde ID

```typescript
const user = await prisma.user.findUnique({
  where: { kindeId: userId },
});
```

#### Update User Bio

```typescript
await prisma.user.upsert({
  where: { kindeId: userId },
  update: { bio: newBio },
  create: {
    kindeId: userId,
    givenName: userInfo.givenName,
    familyName: userInfo.familyName,
    email: userInfo.email,
    bio: newBio,
  },
});
```

### Post Operations

#### Create Post

```typescript
const post = await prisma.post.create({
  data: {
    title: "Post Title",
    content: "Post content",
    userId: user.id,
  },
});
```

#### Get User's Posts

```typescript
const posts = await prisma.post.findMany({
  where: { userId: user.id },
  orderBy: { createdAt: "desc" },
});
```

#### Delete Post

```typescript
await prisma.post.deleteMany({
  where: {
    id: postId,
    userId: user.id, // Ensure user owns the post
  },
});
```

### Complex Queries

#### Get User with Posts

```typescript
const userWithPosts = await prisma.user.findUnique({
  where: { kindeId: userId },
  include: {
    posts: {
      orderBy: { createdAt: "desc" },
    },
  },
});
```

#### Get Recent Posts

```typescript
const recentPosts = await prisma.post.findMany({
  take: 10,
  orderBy: { createdAt: "desc" },
  include: {
    user: {
      select: {
        givenName: true,
        familyName: true,
      },
    },
  },
});
```

## Migration Management

### Migration Files

```
prisma/migrations/
├── migration_lock.toml
├── 20250629094151_init/
│   └── migration.sql
├── 20250629100812_add_posts/
│   └── migration.sql
└── 20250702170034_add_user_avatar_url/
    └── migration.sql
```

### Running Migrations

#### Development

```bash
npx prisma migrate dev --name migration_name
```

#### Production

```bash
npx prisma migrate deploy
```

#### Reset Database (Development Only)

```bash
npx prisma migrate reset
```

### Migration Examples

#### Initial Migration (20250629094151_init)

```sql
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "kindeId" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_kindeId_key" ON "User"("kindeId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
```

#### Add Posts Migration (20250629100812_add_posts)

```sql
-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_userId_idx" ON "Post"("userId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
```

#### Add User Bio Migration (20250702170034_add_user_avatar_url)

```sql
-- AlterTable
ALTER TABLE "User" ADD COLUMN "bio" VARCHAR(150);
```

## Data Validation

### Application-Level Validation

```typescript
// Using Zod for validation
const userBioSchema = z.object({
  bio: z.string().max(150, "Bio must be 150 characters or less"),
});

const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title too long"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(500, "Content too long"),
});
```

### Database-Level Constraints

- NOT NULL constraints on required fields
- UNIQUE constraints for kindeId and email
- VARCHAR length limits for bio (150) and content (500)
- Foreign key constraints maintaining referential integrity

## Performance Optimization

### Query Optimization

```typescript
// Efficient: Select only needed fields
const users = await prisma.user.findMany({
  select: {
    id: true,
    givenName: true,
    familyName: true,
  },
});

// Efficient: Use includes instead of separate queries
const userWithRecentPosts = await prisma.user.findUnique({
  where: { kindeId: userId },
  include: {
    posts: {
      take: 5,
      orderBy: { createdAt: "desc" },
    },
  },
});
```

### Connection Pooling

Prisma automatically handles connection pooling. For production:

```typescript
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  // Connection pooling is handled automatically
}
```

## Backup and Recovery

### Database Backup

```bash
# Create backup
pg_dump -h hostname -U username -d database_name > backup.sql

# Restore from backup
psql -h hostname -U username -d database_name < backup.sql
```

### Data Export/Import

```bash
# Export data using Prisma
npx prisma db seed

# Custom seed script in package.json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

## Security Considerations

### Data Protection

- **Password Storage**: Not handled by beRichHub (delegated to Kinde)
- **SQL Injection**: Protected by Prisma's query builder
- **Data Sanitization**: All inputs are validated before database operations

### Access Control

- Users can only modify their own bio and posts
- Email addresses are private to the user
- All database operations require authentication

### Audit Trail

- Posts have `createdAt` and `updatedAt` timestamps
- User creation is logged through OAuth flow
- Consider adding audit table for compliance requirements

## Monitoring and Maintenance

### Database Monitoring

```typescript
// Connection status
const result = await prisma.$queryRaw`SELECT 1`;

// Database size monitoring
const stats = await prisma.$queryRaw`
  SELECT 
    schemaname,
    tablename,
    attname,
    n_distinct,
    correlation
  FROM pg_stats
  WHERE tablename IN ('User', 'Post');
`;
```

### Maintenance Tasks

- Regular VACUUM for PostgreSQL optimization
- Monitor slow queries and add indexes as needed
- Regular backup verification
- Connection pool monitoring

This database schema documentation provides comprehensive information about beRichHub's data layer, including structure, operations, and best practices for maintenance and optimization.
