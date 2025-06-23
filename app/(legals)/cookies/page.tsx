import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Cookie,
  Info,
  Settings,
  Github,
  AlertCircle,
} from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about how we use cookies to enhance your experience and ensure our website functions properly.
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">GDPR Compliant</Badge>
            <Badge variant="outline">Transparent Usage</Badge>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                Cookies are small text files stored on your device by your browser when you visit a website, used to
                remember your preferences and enhance functionality.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              How We Use Cookies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-sm">Essential Cookies</span>
                  <Badge variant="secondary" className="text-xs">
                    Required
                  </Badge>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Authentication Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Kinde Auth cookies for secure authentication sessions and user identity management
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Performance Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Vercel hosting cookies for performance monitoring and routing stability
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-sm">Functional Cookies</span>
                  <Badge variant="outline" className="text-xs">
                    Optional
                  </Badge>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Theme Preferences</p>
                      <p className="text-sm text-muted-foreground">
                        Store your UI theme choice (light/dark mode) for a consistent experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">OAuth Integration</p>
                      <p className="text-sm text-muted-foreground flex gap-2">
                        <Github className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                        GitHub OAuth cookies for seamless sign-in flows and account linking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Session Management</p>
                      <p className="text-sm text-muted-foreground">
                        Keep you signed in across visits and maintain your session state
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Your Choices & Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />Not Implemented yet!</span>
                <p className="text-sm text-indigo-900 dark:text-indigo-100 leading-relaxed mb-3">
                  You have full control over your cookie preferences. You can manage or disable non-essential cookies at
                  any time through your browser settings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="w-3 h-3 mr-1" />
                    Browser Settings
                  </Button>
                  <Button size="sm" variant="outline">
                    <Cookie className="w-3 h-3 mr-1" />
                    Cookie Preferences
                  </Button>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-2">
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    <strong>Note:</strong> Disabling essential cookies may affect core functionality such as
                    authentication and data persistence.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            This cookie policy is part of our comprehensive privacy framework and GDPR compliance.
          </p>
        </div>
      </div>
    </div>
  )
}
