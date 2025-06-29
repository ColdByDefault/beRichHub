"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Mail,
  UserCheck,
  Edit,
  Save,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  MessageSquareQuote,
} from "lucide-react";
import { updateUserProfile } from "@/actions/profile";
import { updateUserBio } from "@/actions/bio";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface ProfileCardProps {
  user: {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
    picture?: string;
  } | null;
}

export function ProfileCard({ user }: ProfileCardProps) {
  const router = useRouter();
  const { refreshData } = useKindeBrowserClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    given_name: user?.given_name || "",
    family_name: user?.family_name || "",
    email: user?.email || "",
    bio: "",
  });

  // Fetch bio on mount
  useEffect(() => {
    if (!user?.id) return;
    (async () => {
      try {
        const res = await fetch("/api/bio", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setFormData((prev) => ({ ...prev, bio: data.bio || "" }));
        }
      } catch (err) {
        console.error("Failed to load bio", err);
      }
    })();
  }, [user?.id]);

  const getInitials = (first?: string, last?: string) =>
    `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase();

  const handleSave = async () => {
    if (!user?.id) return;
    setIsLoading(true);
    setMessage(null);

    try {
      // 1) update Kinde profile
      const result = await updateUserProfile(user.id, formData);
      if (!result.success)
        throw new Error(result.error || "Failed to update profile");

      // 2) update local bio
      await updateUserBio(formData.bio);

      setMessage({ type: "success", text: "Profile updated successfully." });
      setIsDialogOpen(false);
      await refreshData();
      router.refresh();
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      setMessage({
        type: "error",
        text: err.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      given_name: user?.given_name || "",
      family_name: user?.family_name || "",
      email: user?.email || "",
      bio: formData.bio, // keep loaded bio until re-open
    });
    setIsDialogOpen(false);
    setMessage(null);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) handleCancel();
    setIsDialogOpen(open);
  };

  if (!user) {
    return (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" /> No User Information
          </CardTitle>
          <CardDescription>
            Please sign in to view your profile.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={user.picture || "/avatars/avatar.png"}
                alt="you"
              />
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
                  <UserCheck className="h-3 w-3" /> Verified User
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <User className="h-3 w-3" /> {formData.given_name}{" "}
                  {formData.family_name}
                </Badge>
              </div>
            </div>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" /> Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Some changes require re-login. Click “Save” when ready.
                </DialogDescription>
              </DialogHeader>

              {message && (
                <Alert
                  className={
                    message.type === "error"
                      ? "border-destructive"
                      : "border-green-500"
                  }
                >
                  {message.type === "success" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  )}
                  <AlertDescription
                    className={
                      message.type === "error"
                        ? "text-destructive"
                        : "text-green-600"
                    }
                  >
                    {message.text}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="given_name">First Name</Label>
                    <Input
                      id="given_name"
                      value={formData.given_name}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          given_name: e.target.value,
                        }))
                      }
                      placeholder="Enter first name"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="family_name">Last Name</Label>
                    <Input
                      id="family_name"
                      value={formData.family_name}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          family_name: e.target.value,
                        }))
                      }
                      placeholder="Enter last name"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, bio: e.target.value }))
                    }
                    placeholder="Tell us a bit about yourself (max 150 chars)"
                    maxLength={150}
                    disabled={isLoading}
                    className="w-full"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" /> Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}{" "}
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {message && !isDialogOpen && (
          <Alert
            className={
              message.type === "error"
                ? "border-destructive"
                : "border-green-500"
            }
          >
            {message.type === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-destructive" />
            )}
            <AlertDescription
              className={
                message.type === "error" ? "text-destructive" : "text-green-600"
              }
            >
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-4">
          {/* Bio display */}
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MessageSquareQuote className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Your Bio</p>
              <Badge variant="default" className="font-mono">
                {formData.bio || "—"}
              </Badge>
            </div>
          </div>

          {/* Email display */}
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
      </CardContent>
    </Card>
  );
}
