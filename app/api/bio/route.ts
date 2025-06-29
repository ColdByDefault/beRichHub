import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";

async function requireUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
  return {
    id: user.id,
    givenName: user.given_name,
    familyName: user.family_name,
    email: user.email,
  };
}

export async function GET() {
  const { id } = await requireUser();
  const row = await prisma.user.findUnique({
    where: { kindeId: id },
    select: { bio: true },
  });
  return NextResponse.json({ bio: row?.bio ?? "" });
}

export async function POST(req: Request) {
  const { id, givenName, familyName, email } = await requireUser();
  const { bio } = await req.json();

  if (typeof bio !== "string" || bio.length > 150) {
    return NextResponse.json(
      { error: "Bio must be a string ≤ 150 characters." },
      { status: 400 }
    );
  }

  // Ensure these fields are always strings
  const safeGivenName = givenName ?? "";
  const safeFamilyName = familyName ?? "";
  const safeEmail = email ?? "";

  const user = await prisma.user.upsert({
    where: { kindeId: id },
    create: {
      kindeId: id,
      givenName: safeGivenName,
      familyName: safeFamilyName,
      email: safeEmail,
      bio,
    },
    update: {
      // keep your local profile in sync, plus update bio
      givenName: safeGivenName,
      familyName: safeFamilyName,
      email: safeEmail,
      bio,
    },
  });

  return NextResponse.json({ bio: user.bio });
}

export async function DELETE() {
  const { id } = await requireUser();

  await prisma.user.updateMany({
    where: { kindeId: id },
    data: { bio: null },
  });

  return NextResponse.json({ bio: null });
}
