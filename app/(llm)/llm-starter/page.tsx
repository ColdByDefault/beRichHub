// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Brain,
  Code,
  Database,
  ExternalLink,
  Lightbulb,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="h-8 w-8" />
          <h1 className="text-4xl font-bold">LLM Starter Pack</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to understand and start building with Large
          Language Models
        </p>
      </div>

      {/* What is LLM Starter Pack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            What is an LLM Starter Pack?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            An <strong>LLM Starter Pack</strong> is a curated collection of
            resources, tools, and knowledge designed to help beginners
            understand and start working with Large Language Models (LLMs) like
            GPT, Claude, or Llama.
          </p>
          <p>
            It typically includes foundational concepts, practical tutorials,
            code examples, and links to essential tools that make the learning
            journey smoother and more structured.
          </p>
        </CardContent>
      </Card>

      {/* Key Components */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Code className="h-6 w-6" />
          Key Components of an LLM Starter Pack
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Core Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">Theory</Badge>
                  <span>What are LLMs and how they work</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">Prompting</Badge>
                  <span>Prompt engineering techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">Fine-tuning</Badge>
                  <span>Model customization basics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Practical Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">APIs</Badge>
                  <span>Integration with LLM services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">Frameworks</Badge>
                  <span>LangChain, LlamaIndex, etc.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary">Deployment</Badge>
                  <span>Hosting and scaling solutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Free Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Database className="h-6 w-6" />
          Free Resources to Get Started
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Learning Platforms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Learning Platforms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="https://www.deeplearning.ai/courses/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>DeepLearning.AI</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://huggingface.co/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Hugging Face Learn</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.coursera.org/learn/generative-ai-with-llms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Coursera GenAI</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Tools & APIs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Free Tools & APIs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="https://huggingface.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Hugging Face Hub</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://colab.research.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Google Colab</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://ollama.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Ollama (Local LLMs)</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Documentation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="https://python.langchain.com/docs/get_started/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>LangChain Docs</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://docs.llamaindex.ai/en/stable/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>LlamaIndex Docs</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://platform.openai.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>OpenAI API Docs</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Getting Started Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Getting Started Steps
          </CardTitle>
          <CardDescription>
            Follow these steps to begin your LLM journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Badge className="min-w-8 h-8 rounded-full flex items-center justify-center">
                1
              </Badge>
              <div>
                <h4 className="font-semibold">Learn the Basics</h4>
                <p className="text-muted-foreground">
                  Start with understanding what LLMs are and how they work
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Badge className="min-w-8 h-8 rounded-full flex items-center justify-center">
                2
              </Badge>
              <div>
                <h4 className="font-semibold">Try Free Tools</h4>
                <p className="text-muted-foreground">
                  Experiment with Hugging Face models and Google Colab
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Badge className="min-w-8 h-8 rounded-full flex items-center justify-center">
                3
              </Badge>
              <div>
                <h4 className="font-semibold">Practice Prompting</h4>
                <p className="text-muted-foreground">
                  Learn prompt engineering techniques and best practices
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Badge className="min-w-8 h-8 rounded-full flex items-center justify-center">
                4
              </Badge>
              <div>
                <h4 className="font-semibold">Build Projects</h4>
                <p className="text-muted-foreground">
                  Start with simple applications using APIs and frameworks
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4">
          Ready to Start Your LLM Journey?
        </h3>
        <p className="text-muted-foreground mb-6">
          Pick a resource above and begin exploring the world of Large Language
          Models today!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <Link
              href="https://huggingface.co/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Learning
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://colab.research.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Colab
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
