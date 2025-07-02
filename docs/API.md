# API Documentation

## Overview

beRichHub provides a comprehensive RESTful API built with Next.js API routes. All API endpoints follow REST conventions and return JSON responses. Authentication is handled via Kinde OAuth tokens.

## Base URL

```
Production: https://berich-hub.vercel.app/api
Development: http://localhost:3000/api
```

## Authentication

Most API endpoints require authentication. Users must be logged in via Kinde OAuth. Authentication is handled server-side using session tokens.

### Authentication Flow

1. User authenticates via Kinde OAuth
2. Session is established server-side
3. API requests are authenticated using session data
4. Protected routes return 401 if user is not authenticated

## API Endpoints

### 1. Authentication API

#### Handle OAuth Authentication

```http
GET /api/auth/[kindeAuth]
```

**Description:** Handles all Kinde OAuth authentication flows including login, logout, and callbacks.

**Parameters:**

- `kindeAuth`: Dynamic route parameter handled by Kinde

**Response:**
Redirects based on authentication flow.

---

### 2. User Bio API

#### Get Current User's Bio

```http
GET /api/bio
```

**Description:** Retrieves the bio for the currently authenticated user.

**Authentication:** Required

**Response:**

```json
{
  "bio": "User's bio text or empty string"
}
```

**Status Codes:**

- `200`: Success
- `401`: Unauthorized

#### Update Current User's Bio

```http
POST /api/bio
```

**Description:** Updates the bio for the currently authenticated user.

**Authentication:** Required

**Request Body:**

```json
{
  "bio": "New bio text (max 150 characters)"
}
```

**Response:**

```json
{
  "message": "Bio updated successfully"
}
```

**Status Codes:**

- `200`: Success
- `400`: Invalid bio (too long or invalid format)
- `401`: Unauthorized

#### Delete Current User's Bio

```http
DELETE /api/bio
```

**Description:** Deletes the bio for the currently authenticated user.

**Authentication:** Required

**Response:**

```json
{
  "message": "Bio deleted successfully"
}
```

**Status Codes:**

- `200`: Success
- `401`: Unauthorized

#### Get User Bio by ID

```http
GET /api/bio/[userId]
```

**Description:** Retrieves the bio for a specific user by their ID.

**Authentication:** Required

**Parameters:**

- `userId`: The Kinde user ID

**Response:**

```json
{
  "bio": "User's bio text or empty string"
}
```

**Status Codes:**

- `200`: Success
- `401`: Unauthorized
- `404`: User not found

---

### 3. Posts API

#### Get Posts

```http
GET /api/posts
GET /api/posts?userId=[userId]
```

**Description:**

- Without parameters: Gets posts for the authenticated user
- With userId: Gets posts for a specific user (public access)

**Authentication:**

- Required for personal posts
- Optional for public user posts

**Query Parameters:**

- `userId` (optional): Kinde user ID to get posts for

**Response:**

```json
[
  {
    "id": "post_id",
    "title": "Post Title",
    "content": "Post content",
    "createdAt": "2023-07-02T10:00:00.000Z",
    "updatedAt": "2023-07-02T10:00:00.000Z",
    "userId": "user_id"
  }
]
```

**Status Codes:**

- `200`: Success (returns empty array if no posts or user not found)
- `401`: Unauthorized (only when accessing personal posts without auth)

#### Create New Post

```http
POST /api/posts
```

**Description:** Creates a new blog post for the authenticated user.

**Authentication:** Required

**Request Body:**

```json
{
  "title": "Post Title",
  "content": "Post content (max 500 characters)"
}
```

**Response:**

```json
{
  "id": "new_post_id",
  "title": "Post Title",
  "content": "Post content",
  "createdAt": "2023-07-02T10:00:00.000Z",
  "updatedAt": "2023-07-02T10:00:00.000Z",
  "userId": "user_id"
}
```

**Status Codes:**

- `201`: Created successfully
- `400`: Invalid request body
- `401`: Unauthorized

#### Delete Post

```http
DELETE /api/posts/[id]
```

**Description:** Deletes a specific post. Users can only delete their own posts.

**Authentication:** Required

**Parameters:**

- `id`: The post ID to delete

**Response:**

```json
{
  "success": true
}
```

**Status Codes:**

- `200`: Success
- `401`: Unauthorized
- `403`: Forbidden (not the post owner)
- `404`: Post not found

---

### 4. User Search API

#### Search Users

```http
GET /api/search-user?q=[query]
```

**Description:** Searches for users by name or email using Kinde Management API.

**Authentication:** Required

**Query Parameters:**

- `q` (required): Search query string

**Response:**

```json
[
  {
    "id": "user_id",
    "given_name": "John",
    "family_name": "Doe",
    "email": "john@example.com",
    "picture": "profile_picture_url"
  }
]
```

**Status Codes:**

- `200`: Success (returns empty array if no results)
- `400`: Missing query parameter
- `401`: Unauthorized
- `500`: Search service error

---

### 5. AI Chat API

#### Send Chat Message

```http
POST /api/chat
```

**Description:** Sends a message to the AI chat system and receives a streaming response.

**Authentication:** Optional (but recommended for personalization)

**Request Body:**

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Your message here"
    }
  ],
  "model": "Ella"
}
```

**Response:**
Streaming response with AI-generated content.

**Status Codes:**

- `200`: Success (streaming response)
- `400`: Invalid request format
- `500`: AI service error

---

## Error Handling

### Standard Error Response Format

```json
{
  "error": "Error message describing what went wrong",
  "code": "ERROR_CODE" // Optional error code
}
```

### Common Error Codes

- `401`: Unauthorized - User is not authenticated
- `403`: Forbidden - User doesn't have permission
- `404`: Not Found - Resource doesn't exist
- `400`: Bad Request - Invalid request format or parameters
- `500`: Internal Server Error - Server-side error

### Error Examples

#### Unauthorized Access

```json
{
  "error": "Unauthorized",
  "status": 401
}
```

#### Validation Error

```json
{
  "error": "Bio must be 150 characters or less",
  "status": 400
}
```

#### Not Found

```json
{
  "error": "User not found",
  "status": 404
}
```

---

## Rate Limiting

Currently, no rate limiting is implemented, but it's recommended to implement it for production use:

- **User Actions:** 100 requests per minute per user
- **Search API:** 30 requests per minute per user
- **Chat API:** 20 requests per minute per user

---

## Data Validation

### Bio Validation

- Maximum length: 150 characters
- Can be empty string
- HTML tags are escaped for security

### Post Validation

- Title: Required, maximum 255 characters
- Content: Required, maximum 500 characters
- Both fields are sanitized for security

### Search Query Validation

- Minimum length: 1 character
- Maximum length: 100 characters
- Special characters are escaped

---

## Database Integration

### User Management

- Users are automatically created when they first authenticate
- User data is synchronized with Kinde on login
- Local user records store additional data (bio, posts)

### Data Relationships

```sql
User (1) -> (Many) Post
- User.kindeId -> Kinde OAuth user ID
- Post.userId -> User.id (local database ID)
```

### Indexes

- `User.kindeId` - Unique index for OAuth integration
- `User.email` - Unique index for email lookups
- `Post.userId` - Index for efficient post queries

---

## Security Considerations

### Authentication Security

- All sensitive operations require authentication
- Session tokens are handled securely by Kinde
- No API keys are exposed to client-side code

### Data Security

- All user inputs are validated and sanitized
- SQL injection protection via Prisma ORM
- XSS protection through React's built-in escaping

### Privacy Protection

- User emails are only visible to the user themselves
- Bio and posts are public by design
- User search respects Kinde's privacy settings

---

## API Testing

### Example cURL Commands

#### Get User Bio

```bash
curl -X GET \
  'http://localhost:3000/api/bio' \
  -H 'Cookie: your-session-cookie'
```

#### Update Bio

```bash
curl -X POST \
  'http://localhost:3000/api/bio' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: your-session-cookie' \
  -d '{"bio": "New bio text"}'
```

#### Create Post

```bash
curl -X POST \
  'http://localhost:3000/api/posts' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: your-session-cookie' \
  -d '{"title": "My Post", "content": "Post content here"}'
```

#### Search Users

```bash
curl -X GET \
  'http://localhost:3000/api/search-user?q=john' \
  -H 'Cookie: your-session-cookie'
```

---

## WebSocket Support

Currently, the API does not support WebSocket connections. All communication is via HTTP requests. For real-time features, consider implementing:

- Server-Sent Events for live updates
- Polling for periodic data refresh
- WebSocket support for real-time chat

---

## API Versioning

The current API is version 1 (v1) and is not explicitly versioned in the URL. Future versions should be implemented as:

- `/api/v2/posts`
- `/api/v2/bio`

This ensures backward compatibility while allowing for API evolution.

---

This API documentation provides comprehensive information for integrating with beRichHub's backend services. For additional support or questions, refer to the main documentation or contact the development team.
