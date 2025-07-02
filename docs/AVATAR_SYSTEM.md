# Custom Avatar System Documentation

## Overview

This system automatically detects when Kinde Auth returns only Gravatar URLs and replaces them with your custom avatar (`/avatars/avatar.png`). This provides a consistent user experience while still supporting genuine profile pictures from social logins or user uploads.

## How It Works

### 1. Gravatar Detection

The system identifies Gravatar URLs by checking for these domains:

- `gravatar.com`
- `www.gravatar.com`
- `secure.gravatar.com`
- `s.gravatar.com`

### 2. Avatar Selection Logic

```typescript
// If Kinde returns a Gravatar URL → Use custom avatar
// If Kinde returns social login picture → Use that picture
// If Kinde returns null/undefined → Use custom avatar
```

### 3. Implementation Files

#### `utils/avatar.ts`

Core utility functions:

- `isGravatarUrl()` - Detects Gravatar URLs
- `getAvatarUrl()` - Returns the best avatar URL to use
- `getUserInitials()` - Generates fallback initials

#### Updated Components

- `app/(protected)/dashboard/page.tsx` - Dashboard avatar logic
- `app/(protected)/profile/[userId]/page.tsx` - Profile page avatar logic
- `components/main/Navbar.tsx` - Navigation avatar display
- `components/profile/profile-card.tsx` - Profile card avatar display

## Usage Examples

### Basic Usage

```typescript
import { getAvatarUrl, getUserInitials } from "@/utils/avatar";

// In your component
const avatarUrl = getAvatarUrl(user.picture); // Automatically handles Gravatar detection
const initials = getUserInitials(user.given_name, user.family_name);
```

### Force Custom Avatar

```typescript
// Force use of custom avatar regardless of source
const avatarUrl = getAvatarUrl(user.picture, "/avatars/avatar.png", true);
```

### Custom Avatar Path

```typescript
// Use a different custom avatar
const avatarUrl = getAvatarUrl(user.picture, "/avatars/special-avatar.png");
```

## Benefits

1. **Consistent Branding** - Users see your custom avatar instead of generic Gravatar images
2. **Better UX** - No broken or default Gravatar images
3. **Flexible** - Still supports real profile pictures from social logins
4. **Automatic** - Works without any user intervention
5. **Fallback Initials** - Generates meaningful initials for avatar fallbacks

## Console Logging

The system includes helpful console logs:

- `🔄 Replacing Gravatar URL with custom avatar` - When Gravatar is detected and replaced
- `✅ Using Kinde profile picture` - When using a genuine profile picture

## Testing

The system was tested with various URL types:

- ✅ Gravatar URLs (replaced with custom avatar)
- ✅ Social login avatars (preserved)
- ✅ Null/undefined values (use custom avatar)
- ✅ Empty strings (use custom avatar)

## Future Enhancements

Potential improvements you could add:

1. **Avatar Upload** - Allow users to upload custom avatars to your server
2. **Multiple Fallbacks** - Support different custom avatars based on user role/type
3. **Avatar Service** - Integration with other avatar services beyond Gravatar
4. **Caching** - Cache avatar URLs for better performance
