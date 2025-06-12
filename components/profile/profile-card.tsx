"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Mail, UserCheck, Edit, Save, X, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { updateUserProfile } from "@/actions/profile"


interface ProfileCardProps {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}

export function ProfileCard({ user }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    given_name: user?.given_name || "",
    family_name: user?.family_name || "",
    email: user?.email || "",
  })

  const getInitials = (firstName?: string, lastName?: string) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase()
  }

  const handleSave = async () => {
    if (!user?.id) return

    setIsLoading(true)
    setMessage(null)

    try {
      const result = await updateUserProfile(user.id, formData)

      if (result.success) {
        setMessage({ type: "success", text: "Your profile has been successfully updated." })
        setIsEditing(false)
        // Clear message after 5 seconds
        setTimeout(() => setMessage(null), 5000)
      } else {
        setMessage({ type: "error", text: result.error || "Failed to update profile. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred. Please try again." + error})
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      given_name: user?.given_name || "",
      family_name: user?.family_name || "",
      email: user?.email || "",
    })
    setIsEditing(false)
    setMessage(null)
  }

  if (!user) {
    return (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            No User Information
          </CardTitle>
          <CardDescription>No user information available. Please sign in to view your dashboard.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.picture || "https://github.com/shadcn.png"} alt="you" />
              <AvatarFallback className="text-lg">
                {getInitials(formData.given_name, formData.family_name)}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-2xl">
                Welcome, {formData.given_name}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <UserCheck className="h-3 w-3" />
                  Verified User
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {formData.given_name} {formData.family_name}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {!isEditing ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSave} disabled={isLoading} className="flex items-center gap-2">
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {message && (
          <Alert className={message.type === "error" ? "border-destructive" : "border-green-500"}>
            {message.type === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
            <AlertDescription className={message.type === "error" ? "text-destructive" : "text-green-600"}>
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        {isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="given_name">First Name</Label>
                <Input
                  id="given_name"
                  value={formData.given_name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, given_name: e.target.value }))}
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="family_name">Last Name</Label>
                <Input
                  id="family_name"
                  value={formData.family_name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, family_name: e.target.value }))}
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email address"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Email Address</p>
                <Badge variant="default" className="font-mono">
                  {formData.email}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
