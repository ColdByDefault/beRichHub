// SPDX-License-Identifier: LicenseRef-BRH-1.0

/**
 * Utility functions for handling user avatars
 */

/**
 * Checks if a given URL is a Gravatar URL
 * @param url - The URL to check
 * @returns true if the URL is from Gravatar
 */
export function isGravatarUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  // Common Gravatar domains
  const gravatarDomains = [
    "gravatar.com",
    "www.gravatar.com",
    "secure.gravatar.com",
    "s.gravatar.com",
  ];

  try {
    const urlObj = new URL(url);
    return gravatarDomains.some((domain) => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
}

/**
 * Gets the appropriate avatar URL, preferring custom avatars over Gravatar
 * @param kindeProfilePicture - The picture URL from Kinde Auth (might be Gravatar)
 * @param customAvatarPath - Optional custom avatar path (defaults to /avatars/avatar.png)
 * @param forceCustom - If true, always use custom avatar regardless of source
 * @returns The best avatar URL to use
 */
export function getAvatarUrl(
  kindeProfilePicture: string | null | undefined,
  customAvatarPath: string = "/avatars/avatar.png",
  forceCustom: boolean = false
): string {
  // If forced to use custom avatar
  if (forceCustom) {
    return customAvatarPath;
  }

  // If no picture from Kinde, use custom avatar
  if (!kindeProfilePicture) {
    return customAvatarPath;
  }

  // If it's a Gravatar URL, prefer our custom avatar
  if (isGravatarUrl(kindeProfilePicture)) {
    console.log(
      `🔄 Replacing Gravatar URL with custom avatar: ${kindeProfilePicture} -> ${customAvatarPath}`
    );
    return customAvatarPath;
  }

  // Otherwise, use the Kinde profile picture (could be uploaded by user, social login, etc.)
  console.log(`✅ Using Kinde profile picture: ${kindeProfilePicture}`);
  return kindeProfilePicture;
}

/**
 * Generates user initials from first and last name
 * @param firstName - User's first name
 * @param lastName - User's last name
 * @returns Formatted initials (e.g., "JD" for John Doe)
 */
export function getUserInitials(
  firstName?: string | null,
  lastName?: string | null
): string {
  const first = firstName?.trim()?.[0]?.toUpperCase() || "";
  const last = lastName?.trim()?.[0]?.toUpperCase() || "";
  return `${first}${last}`;
}
