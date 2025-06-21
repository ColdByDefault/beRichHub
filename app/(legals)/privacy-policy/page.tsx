import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6";


export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal data in accordance with GDPR
            regulations.
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">GDPR Compliant</Badge>
            <Badge variant="outline">EU Regulation 2016/679</Badge>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At berichHub, we respect your privacy and process your personal data in accordance with Regulation (EU)
              2016/679 (GDPR), ensuring transparency and security in all operations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Data We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Personal Identifiers</p>
                    <p className="text-sm text-muted-foreground">Name and email via Kinde Auth and GitHub OAuth</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Usage Data</p>
                    <p className="text-sm text-muted-foreground">
                      Cookies and analytics as detailed in our Cookie Policy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Technical Data</p>
                    <p className="text-sm text-muted-foreground">
                      IP address and browser type for security and performance monitoring
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
              Legal Basis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm leading-relaxed">
                We rely on your consent (Art. 6(1)(a)) for non-essential cookies and on legitimate interests (Art.
                6(1)(f)) for security and performance processing under GDPR.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <span>Right to access (Art. 15)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>Right to rectification (Art. 16)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>Right to erasure (Art. 17)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>Right to restrict processing (Art. 18)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">You can withdraw consent at any time by contacting us.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Data Retention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <p className="text-sm leading-relaxed">
                Personal data is retained only as long as necessary to fulfill the purposes described here, and in
                compliance with EU and UK adequacy decisions for transfers to our London-based server.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                For privacy inquiries, data requests, or any questions about this policy, please contact us:
              </p>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Link href="https://github.com/ColdByDefault" target="_blanck" 
                  rel='noopener noreferrer'
                  aria-label="GitHub">
                  <span className="sr-only">GitHub</span>
                  <FaGithub />
                </Link>
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
            This policy is effective immediately and applies to all users of berichHub.
          </p>
        </div>
      </div>
    </div>
  )
}
