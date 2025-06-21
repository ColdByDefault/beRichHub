"use client"
import { useState, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/chat-llm/app-sidebar"
import { ChatInterface } from "@/components/chat-llm/chat-interface"
import { ChatHeader } from "@/components/chat-llm/chat-header"
import { LoadingScreen } from "@/components/motions/loading"

export interface Chat {
  id: string
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any[]
  createdAt: Date
}


function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([])
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [selectedModel, setSelectedModel] = useState("gpt-4o")

  const currentChat = chats.find((chat) => chat.id === currentChatId)

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
    body: {
      model: selectedModel,
    },
    onFinish: (message) => {
      if (currentChatId) {
        setChats((prev) =>
          prev.map((chat) => (chat.id === currentChatId ? { ...chat, messages: [...chat.messages, message] } : chat)),
        )
      }
    },
  })

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
    }
    setChats((prev) => [newChat, ...prev])
    setCurrentChatId(newChat.id)
    setMessages([])
  }

  const selectChat = (chatId: string) => {
    const chat = chats.find((c) => c.id === chatId)
    if (chat) {
      setCurrentChatId(chatId)
      setMessages(chat.messages)
    }
  }

  const deleteChat = (chatId: string) => {
    setChats((prev) => prev.filter((chat) => chat.id !== chatId))
    if (currentChatId === chatId) {
      setCurrentChatId(null)
      setMessages([])
    }
  }

  const updateChatTitle = (chatId: string, title: string) => {
    setChats((prev) => prev.map((chat) => (chat.id === chatId ? { ...chat, title } : chat)))
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full mt-12">
        <AppSidebar
          chats={chats}
          currentChatId={currentChatId}
          onNewChat={createNewChat}
          onSelectChat={selectChat}
          onDeleteChat={deleteChat}
        />
        <SidebarInset className="flex flex-col">
          <ChatHeader selectedModel={selectedModel} onModelChange={setSelectedModel} currentChat={currentChat} />
          <ChatInterface
            messages={messages}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={(e) => {
              if (!currentChatId) {
                createNewChat()
              }

              // Update chat title with first message if it's still "New Chat"
              if (currentChat && currentChat.title === "New Chat" && input.trim()) {
                const title = input.trim().slice(0, 50) + (input.length > 50 ? "..." : "")
                updateChatTitle(currentChatId!, title)
              }

              handleSubmit(e)
            }}
            isLoading={isLoading}
            disabled={!currentChatId && chats.length === 0}
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}



export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 200) {
          clearInterval(interval)
          // Hide loading screen after a brief delay
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return <LoadingScreen progress={Math.min(progress, 100)} />
  }

  return <ChatPage />
}