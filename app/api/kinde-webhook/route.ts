import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

import { drizzle } from "drizzle-orm/neon-http";
import { users } from "@/db/schema";
import "dotenv/config";

// 1️⃣ Initialize Drizzle → Neon
//    (your `.env.local` must include DATABASE_URL)
const db = drizzle(process.env.DATABASE_URL!);

// 2️⃣ Point at Kinde’s JWKs endpoint
const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(request: Request) {
  try {
    // 3️⃣ Read the raw JWT from the request body
    const token = await request.text();

    // 4️⃣ Decode header to find which key ("kid") signed it
    const { header } = jwt.decode(token, { complete: true }) as {
      header: { kid: string };
    };

    // 5️⃣ Fetch the correct public key and verify signature
    const key = await client.getSigningKey(header.kid);
    const signingKey = key.getPublicKey();
    const event = jwt.verify(token, signingKey) as {
      type: string;
      data: any;
    };

    // 6️⃣ Only handle new-user events
    if (event.type === "user.created") {
      const u = event.data as {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        created_at: string;
      };

      // 7️⃣ Insert into Neon via Drizzle
      await db
        .insert(users)
        .values({
          kindeId: u.id,
          email: u.email,
          firstName: u.first_name,
          lastName: u.last_name,
          createdAt: new Date(u.created_at),
          password: "", // Password is not provided by Kinde
          isActive: true, // Default to active
        })
        // If you want to ignore duplicates:
        // .onConflictDoNothing()
        ;
    }

    return NextResponse.json({ status: "ok" });
  } catch (err: any) {
    console.error("Webhook error:", err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
