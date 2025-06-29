// SPDX-License-Identifier: LicenseRef-BRH-1.0
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat - LLM Interface",
  description: "Professional AI chat interface powered by OpenAI",
};

export default function LLMLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen">{children}</div>;
}
