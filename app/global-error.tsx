"use client";


import NextError from "next/error";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <h2>Something went wrong!</h2>
        <Button variant="ghost" onClick={() => {
          console.log(error);
          reset();
        }}>
          Try again
        </Button>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}