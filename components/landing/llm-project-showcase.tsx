import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Bot,
  Database,
  Zap,
  Globe,
  HardDrive,
  Search,
  MessageSquare,
  Brain,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function LLMProjectShowcase() {
  const useCases = [
    "Customer Support Automation",
    "Document Q&A Systems",
    "Code Assistant & Review",
    "Content Generation",
    "Data Analysis & Insights",
    "Personal Knowledge Base",
  ]

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Flexible Deployment",
      description: "Run locally with Ollama or scale globally with OpenAI",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Multiple Database Options",
      description: "Choose between AstraDB for cloud or PostgreSQL for local deployment",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Advanced RAG System",
      description: "Retrieval-augmented generation with vector embeddings for accurate responses",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart Vector Stores",
      description: "Efficient semantic search with state-of-the-art embedding models",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          <Bot className="h-4 w-4 mr-2" />
          Next-Gen AI Platform
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-4">Intelligent Chat Agent & LLM Platform</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Build powerful AI applications with our flexible chat agent platform. Deploy locally or in the cloud, with
          advanced RAG capabilities and vector search for enterprise-grade AI solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Deployment Options */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              Deployment Flexibility
            </CardTitle>
            <CardDescription>Choose the deployment option that fits your needs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <HardDrive className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Local Deployment</h4>
                <p className="text-sm text-muted-foreground">
                  Run with Ollama + PostgreSQL for complete data privacy and control
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-semibold">Cloud Deployment</h4>
                <p className="text-sm text-muted-foreground">
                  Scale with OpenAI + AstraDB for global reach and performance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              Versatile Use Cases
            </CardTitle>
            <CardDescription>Endless possibilities for AI-powered applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technical Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Powered by Advanced AI Technology</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
        <CardHeader className="text-center">
          <CardTitle>Complete AI Stack</CardTitle>
          <CardDescription>Everything you need for production-ready AI applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-3">LLM Models</h4>
              <div className="space-y-2">
                <Badge variant="outline">Ollama (Local)</Badge>
                <Badge variant="outline">OpenAI GPT-4</Badge>
                <Badge variant="outline">Custom Models</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Vector Databases</h4>
              <div className="space-y-2">
                <Badge variant="outline">PostgreSQL + pgvector</Badge>
                <Badge variant="outline">AstraDB</Badge>
                <Badge variant="outline">Vector Search</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">AI Capabilities</h4>
              <div className="space-y-2">
                <Badge variant="outline">RAG System</Badge>
                <Badge variant="outline">Embeddings</Badge>
                <Badge variant="outline">Semantic Search</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button size="lg" className="gap-2">
          Get Started Today
          <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-sm text-muted-foreground mt-2">Deploy in minutes, scale to millions</p>
      </div>
    </section>
  )
}
