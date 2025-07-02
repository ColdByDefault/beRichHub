// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { kindeId: userId },
      select: { bio: true },
    });

    return NextResponse.json({ bio: user?.bio ?? "" });
  } catch (error) {
    console.error("Error fetching user bio:", error);
    return NextResponse.json(
      { error: "Failed to fetch user bio" },
      { status: 500 }
    );
  }
}
