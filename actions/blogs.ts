// SPDX-License-Identifier: LicenseRef-BRH-1.0

"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

export async function createBlog(title: string, content: string) {
  // 1) Auth
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  // 2) Validation
  if (!title.trim() || !content.trim()) {
    throw new Error("Title and content are required.");
  }
  if (content.length > 500) {
    throw new Error("Content must be 500 characters or less.");
  }

  // 3) Ensure local User exists (upsert on kindeId)
  const localUser = await prisma.user.upsert({
    where: { kindeId: user.id },
    create: {
      kindeId: user.id,
      givenName: user.given_name ?? "",
      familyName: user.family_name ?? "",
      email: user.email ?? "",
    },
    update: {
      // Optionally keep your local User row in sync
      givenName: user.given_name ?? "",
      familyName: user.family_name ?? "",
      email: user.email ?? "",
    },
  });

  // 4) Create the blog post against localUser.id
  const post = await prisma.post.create({
    data: {
      userId: localUser.id,
      title: title.trim(),
      content: content.trim(),
    },
  });

  return post;
}
