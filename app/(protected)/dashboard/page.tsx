import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="mt-20 space-y-2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <div className="space-y-1">
          <p>
            Welcome, {user.given_name} {user.family_name}
          </p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
}
