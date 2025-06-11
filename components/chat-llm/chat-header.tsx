"use client"

import { Brain, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

import type { Chat } from "@/app/berich-llm/page"
//%28berich-llm%29

interface ChatHeaderProps {
  selectedModel: string
  onModelChange: (model: string) => void
  currentChat?: Chat
}

const models = [
  { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" },
  { id: "gpt-4o-mini", name: "GPT-4o Mini", description: "Faster and more affordable" },
  { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Previous generation" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Fast and efficient" },
]

export function ChatHeader({ selectedModel, onModelChange }: ChatHeaderProps) {
//export function ChatHeader({ selectedModel, onModelChange, currentChat }: ChatHeaderProps) {
  const currentModel = models.find((m) => m.id === selectedModel)

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
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              {currentModel?.name || selectedModel}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            {models.map((model) => (
              <DropdownMenuItem
                key={model.id}
                onClick={() => onModelChange(model.id)}
                className="flex flex-col items-start gap-1 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{model.name}</span>
                  {selectedModel === model.id && <div className="h-2 w-2 rounded-full bg-green-500" />}
                </div>
                <span className="text-xs text-muted-foreground">{model.description}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
