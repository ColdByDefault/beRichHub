import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";


import "dotenv/config";

const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(request: Request) {
  try {

    const token = await request.text();


    const { header } = jwt.decode(token, { complete: true }) as {
      header: { kid: string };
    };

    
    const key = await client.getSigningKey(header.kid);
    const signingKey = key.getPublicKey();
    const event = jwt.verify(token, signingKey) as {
      type: string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any;
    };


    if (event.type === "user.created") {
      const u = event.data as {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        created_at: string;
      };
    }
    return NextResponse.json({ status: "ok" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Webhook error:", err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
