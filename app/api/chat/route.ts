// SPDX-License-Identifier: LicenseRef-BRH-1.0
/* OPEN AI */
/* import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";


export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  const result = streamText({
    model: openai(model || "gpt-4o"),
    messages,
  });

  return result.toDataStreamResponse();
} */

import { google } from "@ai-sdk/google";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    messages,
    system: `You are an AI assistant specialized exclusively in software engineering and development. 
You should: Answer only questions directly related to software development: programming languages, frameworks, architecture, DevOps, testing, security, databases, algorithms, performance, tooling, best practices, code review, debugging, and related topics.  
• If asked about anything else—sports, news, weather, politics, entertainment, personal advice, etc.—respond with:
“I amm sorry, but I can only answer questions about software development.”

• Use a formal, professional tone and adopt a forward-thinking, innovative perspective.  
• Base all technical claims on reputable, authoritative sources (official docs, standard textbooks, recognized industry publications) and include in-line citations with URLs.  
• When proposing solutions or designs, think outside the box and explore novel or emerging approaches where appropriate.

Always keep your focus on development—no digressions.
`,
  });

  return result.toDataStreamResponse();
}
