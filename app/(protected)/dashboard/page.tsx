import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, UserCheck } from "lucide-react"

export default async function Dashboard() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const getInitials = (firstName?: string, lastName?: string) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase()
  }

  return (
    <div className="flex flex-col min-h-screen mt-20 items-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your personal dashboard</p>
      </div>

      {user ? (
        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.picture || "https://github.com/shadcn.png"} alt="https://github.com/shadcn.png" />
                <AvatarFallback className="text-lg">CN</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <CardTitle className="text-2xl">
                  Welcome, {user.given_name} {user.family_name}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <UserCheck className="h-3 w-3" />
                    Verified User
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {user.given_name}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Email Address</p>
                  <Badge variant="default" className="font-mono">
                    {user.email}
                  </Badge>
                </div>
              </div>

              {user.id && (
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <User className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">User ID</p>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {user.id}
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              No User Information
            </CardTitle>
            <CardDescription>No user information available. Please sign in to view your dashboard.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
