// app/terms-of-service/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>Terms of Service</div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            By accessing berichHub&#44; you agree to these Terms of Service and all applicable laws.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>2. Modification</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We reserve the right to modify or replace these Terms at any time&#44; with changes effective upon posting.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>3. User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You must provide accurate information and refrain from unauthorized use of our services.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>4. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            All content and code are the property of the developer unless stated otherwise.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>5. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The service is provided &#34;as is&#34; without warranties; we are not liable for indirect damages.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>6. Governing Law</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            These Terms are governed by the laws of Germany and EU regulations.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Questions? Email <a href="mailto:developer@example.com">developer@example.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
