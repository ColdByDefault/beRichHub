"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error occurred:", error);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <html>
      <body className="min-h-screen ">
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl">
                  Something went wrong!
                </CardTitle>
                <CardDescription>
                  We encountered an unexpected error.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isDevelopment && error.message && (
                <div className="p-3 bg-muted rounded-md">
                  <div className="flex items-start gap-2">
                    <Bug className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Error Details:</p>
                      <p className="text-xs text-muted-foreground font-mono break-all">
                        {error.message}
                      </p>
                      {error.digest && (
                        <p className="text-xs text-muted-foreground">
                          Error ID: {error.digest}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => {
                    console.log(
                      "Attempting to reset from global error:",
                      error
                    );
                    reset();
                  }}
                  className="flex-1"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                  className="flex-1"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  If this problem persists, please contact our support team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}
