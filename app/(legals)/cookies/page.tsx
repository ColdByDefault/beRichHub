// app/cookie-policy/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div>Cookie Policy</div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>What Are Cookies?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Cookies are small text files stored on your device by your browser when you visit a website&#44; used to remember your preferences and enhance functionality.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>How We Use Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vercel hosting cookies for performance monitoring and routing stability.</li>
            <li>Kinde Auth cookies for authentication sessions and user identity management.</li>
            <li>Session cookies to keep you signed in across visits and theme preference cookies to store your UI theme choice.</li>
            <li>Supabase connectivity cookies for secure communication with our London-based database server.</li>
            <li>OAuth cookies for GitHub sign-in flows.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Your Choices</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You can manage or disable non-essential cookies in your browser settings at any time&#44; though disabling may affect core functionality.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you have any questions about our Cookie Policy&#44; please contact us at <a href="mailto:developer@example.com">developer@example.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
