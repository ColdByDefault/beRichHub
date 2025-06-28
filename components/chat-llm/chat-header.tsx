"use client";

import { Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge" 
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { Chat } from "@/app/berich-llm/page";


interface ChatHeaderProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
  currentChat?: Chat;
}

const models = [
  { id: "Gemini", name: "Gemini 2.5 Pro", description: "Most capable model" },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    description: "Not Available",
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    description: "Not Available",
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    description: "Not Available",
  },
];

export function ChatHeader({ selectedModel, onModelChange }: ChatHeaderProps) {
  const currentModel = models.find((m) => m.id === selectedModel);

  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          <span className="font-semibold">AI Assistant</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="outline">Gemini 2.5 Pro with RAGs</Badge>
      </div>
    </header>
  );
}
