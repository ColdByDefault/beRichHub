// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserSearch } from "@/components/search/user-search";
import { redirect } from "next/navigation";

export default async function SearchUsersPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex flex-col min-h-screen mt-20 items-center">
      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold">Find Users</h1>
        <p className="text-muted-foreground">
          Search for other users and view their profiles
        </p>
      </div>

      <UserSearch />
    </div>
  );
}
