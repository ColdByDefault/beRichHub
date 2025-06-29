"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

export async function updateUserBio(bio: string) {
  // 1. auth
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("Unauthorized");
  }

  // 2. validation
  if (bio.length > 150) {
    throw new Error("Bio must be 150 characters or less.");
  }

  // 3. upsert into your local User table
  const saved = await prisma.user.upsert({
    where: { kindeId: user.id },
    create: {
      kindeId: user.id,
      givenName: user.given_name ?? "",
      familyName: user.family_name ?? "",
      email: user.email ?? "",
      bio,
    },
    update: {
      bio,
    },
  });

  return saved.bio;
}
