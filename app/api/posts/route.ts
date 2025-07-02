// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedUserId = searchParams.get("userId");

  if (requestedUserId) {
    // Fetch posts for a specific user (public access)
    const local = await prisma.user.findUnique({
      where: { kindeId: requestedUserId },
    });
    if (!local) {
      return NextResponse.json([], { status: 200 });
    }

    const posts = await prisma.post.findMany({
      where: { userId: local.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
  }

  // Original behavior: fetch posts for authenticated user
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return NextResponse.json([], { status: 200 });
  }

  // 1) Find the local User row by kindeId
  const local = await prisma.user.findUnique({
    where: { kindeId: user.id },
  });
  if (!local) {
    // no local row means no posts
    return NextResponse.json([], { status: 200 });
  }

  // 2) Now fetch posts by the local PK
  const posts = await prisma.post.findMany({
    where: { userId: local.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}
