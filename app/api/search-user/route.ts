// SPDX-License-Identifier: LicenseRef-BRH-1.0
//app\api\search-user\route.ts
import { NextResponse } from "next/server";
import { searchUsers } from "../../../actions/profile";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";

  if (!q) {
    return NextResponse.json(
      { error: "Query parameter 'q' is required" },
      { status: 400 }
    );
  }

  try {
    const response = await searchUsers(q);

    // Extract the results array from the Kinde API response
    if (response && response.results && Array.isArray(response.results)) {
      return NextResponse.json(response.results, { status: 200 });
    } else {
      // If response format is unexpected, return empty array
      return NextResponse.json([], { status: 200 });
    }
  } catch (err: unknown) {
    console.error("/api/search-user error:", err);
    const errorMessage = err instanceof Error ? err.message : "Failed to search users";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
