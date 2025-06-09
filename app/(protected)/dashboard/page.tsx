import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { ProfileCard } from "@/components/profile/profile-card"

export default async function Dashboard() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <div className="flex flex-col min-h-screen mt-20 items-center">
      <div className="space-y-2 mb-8">

        <p className="text-muted-foreground">Welcome to your personal dashboard</p>
      </div>

      <ProfileCard user={user} />
    </div>
  )
}
