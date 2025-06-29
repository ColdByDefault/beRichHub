// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // await the promise before extracting id
  const { id } = await params;

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const local = await prisma.user.findUnique({
    where: { kindeId: user.id },
  });
  if (!local) {
    return NextResponse.json({ success: false }, { status: 200 });
  }

  await prisma.post.deleteMany({
    where: {
      id,
      userId: local.id,
    },
  });

  return NextResponse.json({ success: true });
}
