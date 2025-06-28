"use client";

import { Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge" 
import { SidebarTrigger } from "@/components/ui/sidebar";



// es
export function ChatHeader() {


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
