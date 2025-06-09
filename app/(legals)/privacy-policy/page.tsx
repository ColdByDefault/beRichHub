// app/privacy-policy/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>Privacy Policy</div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At berichHub, we respect your privacy and process your personal data in accordance with Regulation (EU) 2016/679 (GDPR)&#44; ensuring transparency and security in all operations.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Data We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identifiers (name, email) via Kinde Auth and GitHub OAuth.</li>
            <li>Usage data via cookies as detailed in our Cookie Policy.</li>
            <li>Technical data (IP address, browser type) for security and performance monitoring.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Legal Basis</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We rely on your consent (Art. 6(1)(a)) for non-essential cookies and on legitimate interests (Art. 6(1)(f)) for security and performance processing under GDPR :contentReference[oaicite:1].
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You have the right to access, rectify, erase, or restrict processing of your data (Arts. 15–18) and to withdraw consent at any time by contacting us.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Data Retention</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Personal data is retained only as long as necessary to fulfil the purposes described here&#44; and in compliance with EU and UK adequacy decisions for transfers to our London-based server.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            For privacy inquiries or requests, email us at <a href="mailto:developer@example.com">developer@example.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
