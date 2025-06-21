import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using berichHub. By accessing our service, you agree to be bound by
            these terms.
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">Legally Binding</Badge>
            <Badge variant="outline">EU & German Law</Badge>
          </div>
        </div>

        <Alert>
          <AlertDescription>
            <strong>Important:</strong> This is a private, non-commercial project for educational purposes. These terms
            reflect our commitment to transparency and user protection.
          </AlertDescription>
        </Alert>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              1. Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                By accessing berichHub, you agree to these Terms of Service and all applicable laws.
              </p>
              <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200">
                  Your continued use of our service constitutes acceptance of any updates to these terms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              2. Modification of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time, with changes effective upon posting.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Notice:</strong> We will make reasonable efforts to notify users of significant changes
                  through our platform or via email.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              3. User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a user of berichHub, you agree to the following responsibilities:
              </p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Accurate Information</p>
                    <p className="text-sm text-muted-foreground">
                      Provide truthful and accurate information during registration and use
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Authorized Use</p>
                    <p className="text-sm text-muted-foreground">
                      Use our services only for lawful purposes and in accordance with these terms
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Account Security</p>
                    <p className="text-sm text-muted-foreground">
                      Maintain the security of your account credentials and notify us of any unauthorized access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              4. Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                All content, code, and intellectual property on berichHub are the property of the developer unless
                stated otherwise.
              </p>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>Educational Use:</strong> This project is for learning purposes. Any code or content may be
                  referenced for educational use with proper attribution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              5. Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Alert>
                <AlertDescription>
                  <strong>Important Disclaimer:</strong> The service is provided &quot;as is&quot; without warranties of any kind.
                </AlertDescription>
              </Alert>
              <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
                  We are not liable for any indirect, incidental, special, consequential, or punitive damages arising
                  from your use of berichHub. This limitation applies to the fullest extent permitted by law.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              6. Governing Law & Jurisdiction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of Germany and applicable EU regulations.
              </p>
              <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    <strong>Jurisdiction:</strong> Any disputes will be resolved under German jurisdiction, with EU
                    consumer protection laws applying where relevant.
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
            These terms are effective immediately and apply to all users of berichHub.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Version 1.0 • This document is part of our legal framework ensuring transparency and user protection.
          </p>
        </div>
      </div>
    </div>
  )
}
