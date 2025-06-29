// add updating username as well


"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"

interface UpdateProfileData {
  given_name: string;
  family_name: string;
  email: string;
  roles?: string;
}

export async function updateUserProfile(userId: string, data: UpdateProfileData) {
  try {
    // Verify the user is authenticated and authorized
    const { getUser } = getKindeServerSession()
    const currentUser = await getUser()

    if (!currentUser || currentUser.id !== userId) {
      return { success: false, error: "Unauthorized" }
    }

    // Get management API token using the correct audience
    const tokenResponse = await fetch(`${process.env.KINDE_ISSUER_URL}/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    body: new URLSearchParams({
      grant_type:    "client_credentials",
      client_id:     process.env.KINDE_MANAGEMENT_CLIENT_ID!,
      client_secret: process.env.KINDE_MANAGEMENT_CLIENT_SECRET!,
      audience:      `${process.env.KINDE_ISSUER_URL}/api`,
    }),
    })

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text()
      console.error("Failed to get management token:", errorText)
      return { success: false, error: "Failed to authenticate with Kinde API. Please check your API configuration." }
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Update user profile using the correct Kinde Management API endpoint
    const updateResponse = await fetch(
      `${process.env.KINDE_ISSUER_URL}/api/v1/user`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: userId,
          given_name: data.given_name,
          family_name: data.family_name,
          email: data.email,
          roles: data.roles?.split(",").map((r) => r.trim()),
        }),
      }
    );

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text()
      console.error("Failed to update user:", errorText)

      // Handle specific error cases
      if (updateResponse.status === 403) {
        return { success: false, error: "Insufficient permissions to update user profile" }
      } else if (updateResponse.status === 404) {
        return { success: false, error: "User not found" }
      } else if (updateResponse.status === 400) {
        return { success: false, error: "Invalid user data provided" }
      }

      return { success: false, error: "Failed to update profile" }
    }

    const updatedUser = await updateResponse.json()
    console.log("User updated successfully:", updatedUser)

    // Revalidate the dashboard page to show updated data
    revalidatePath("/dashboard")

    return { success: true }
  } catch (error) {
    console.error("Error updating user profile:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
