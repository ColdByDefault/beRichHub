// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ProfileCard } from "@/components/profile/profile-card";
import { BlogList } from "@/components/profile/BlogList";
import { notFound } from "next/navigation";

interface UserProfilePageProps {
  params: Promise<{
    userId: string;
  }>;
}

async function getUserById(userId: string) {
  try {
    // Get management API token
    const tokenResponse = await fetch(
      `${process.env.KINDE_ISSUER_URL}/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.KINDE_MANAGEMENT_CLIENT_ID!,
          client_secret: process.env.KINDE_MANAGEMENT_CLIENT_SECRET!,
          audience: `${process.env.KINDE_ISSUER_URL}/api`,
        }),
      }
    );

    if (!tokenResponse.ok) {
      throw new Error("Failed to get management token");
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user by ID
    const userResponse = await fetch(
      `${process.env.KINDE_ISSUER_URL}/api/v1/user?id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch user");
    }

    return await userResponse.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export default async function UserProfilePage({
  params,
}: UserProfilePageProps) {
  const { getUser } = getKindeServerSession();
  const currentUser = await getUser();

  if (!currentUser) {
    notFound();
  }

  // Await the params Promise in Next.js 15
  const { userId } = await params;

  const profileUser = await getUserById(userId);

  if (!profileUser) {
    notFound();
  }

  // Map user fields to ensure they are strings (not null)
  const mappedUser = {
    id: profileUser.id ?? "",
    given_name: profileUser.given_name ?? profileUser.first_name ?? "",
    family_name: profileUser.family_name ?? profileUser.last_name ?? "",
    email: profileUser.email ?? "",
    picture: profileUser.picture ?? undefined,
    roles: "", // We don't expose roles for other users for privacy
  };

  const isOwnProfile = currentUser.id === userId;

  return (
    <div className="flex flex-col min-h-screen mt-20 items-center">
      <div className="space-y-2 mb-8">
        <p className="text-muted-foreground">
          {isOwnProfile ? "Your Profile" : `${mappedUser.given_name}'s Profile`}
        </p>
      </div>
      <ProfileCard user={mappedUser} isOwnProfile={isOwnProfile} />
      <div className="container mx-auto py-10">
        <BlogList userId={userId} />
      </div>
    </div>
  );
}
