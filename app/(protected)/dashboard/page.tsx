import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ProfileCard } from "@/components/profile/profile-card";
import { BlogForm } from "@/components/profile/BlogForm";
import { BlogList } from "@/components/profile/BlogList";

export default async function Dashboard() {
  const { getUser, getClaim } = getKindeServerSession();
  const user = await getUser();
  const rolesClaim = await getClaim("roles"); 
  const rolesArray = Array.isArray(rolesClaim?.value)
    ? rolesClaim.value
    : typeof rolesClaim?.value === "string"
    ? [rolesClaim.value]
    : [];

  // Map user fields to ensure they are strings (not null)
  const mappedUser = user
    ? {
        id: user.id ?? "",
        given_name: user.given_name ?? "",
        family_name: user.family_name ?? "",
        email: user.email ?? "",
        picture: user.picture ?? undefined,
        roles: rolesArray.join(", "),
      }
    : null;

  return (
    <div className="flex flex-col min-h-screen mt-20 items-center">
      <div className="space-y-2 mb-8">
        <p className="text-muted-foreground">
          Welcome to your personal dashboard
        </p>
      </div>
      <ProfileCard user={mappedUser} />
      <div className="container mx-auto py-10">
        <BlogForm />
        <BlogList />
      </div>
    </div>
  );
}


