// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  CheckCircle,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  HardDrive,
  MessageSquare,
  Play,
  Settings,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Data constants
// Types for components
interface Step {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string;
}

interface UsageCardData {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  commands?: string[];
  steps?: string[];
  features?: string[];
  note?: string;
  alert?: string;
}

const FEATURES = [
  "Scrapes and processes websites/PDFs",
  "Creates vector embeddings locally", 
  "Stores chunks in vector database",
  "RAG-based question answering",
  "Streaming chat responses"
];

const TECH_STACK = ["Next.js 15.3", "Ollama", "Astra DB 2.0.1", "PostgreSQL", "Langchain.js", "Puppeteer", "TypeScript"];

const PREREQUISITES = {
  software: ["Node.js 18+ and npm/yarn", "Git", "Ollama"],
  database: ["DataStax Astra account", "PostgreSQL with pgvector"],
  system: ["8GB+ RAM (required for DeepSeek model)", "8GB+ VRAM (for GPU acceleration)", "7GB+ free disk space (5GB model + overhead)", "CUDA Toolkit 11.x+ (optional, for faster inference)"]
};

const INSTALLATION_STEPS = [
  {
    title: "Install Ollama",
    icon: Download,
    content: "installOllama"
  },
  {
    title: "Pull Required Models", 
    icon: Download,
    content: "pullModels"
  },
  {
    title: "Clone the Repository",
    icon: GitBranch,
    content: "cloneRepo"
  },
  {
    title: "Database Setup",
    icon: Database,
    content: "databaseSetup"
  },
  {
    title: "Environment Configuration",
    icon: Settings,
    content: "envConfig"
  }
];

const USAGE_CARDS = [
  {
    title: "Start the Application",
    icon: Terminal,
    commands: ["ollama serve", "npm run dev"],
    note: "Open http://localhost:3000 in your browser"
  },
  {
    title: "Load Data into Vector Database", 
    icon: Globe,
    steps: ["Update data sources in scripts/loadDb.ts", "Run the seeding script: npm run seed", "For PostgreSQL: npm run seed-postgres"],
    note: "The script will scrape websites, chunk content, create embeddings, and store them in your vector database"
  },
  {
    title: "Ask Questions",
    icon: MessageSquare,
    steps: ["Go to the chat interface", "Ask questions about the processed content", "The RAG system will answer based on your indexed data"],
    alert: "The chatbot uses RAG to answer questions based only on your processed content, providing up-to-date and accurate responses"
  },
  {
    title: "Manage Vector Data",
    icon: Database,
    features: ["View stored chunks in the admin panel", "Delete outdated content", "Monitor embedding quality", "Adjust chunk sizes and overlap"]
  }
];

const TROUBLESHOOTING = [
  { issue: "Ollama not responding", solution: "Make sure Ollama service is running: ollama serve" },
  { issue: "Models not found", solution: "Verify models are pulled: ollama list" },
  { issue: "Database connection failed", solution: "Check your environment variables and database credentials" },
  { issue: "Website scraping errors", solution: "Some websites block scraping. Try different URLs or check robots.txt" }
];

// Component helpers
const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="space-y-2">
    {features.map((feature, i) => (
      <li key={i} className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const TechBadges = ({ stack }: { stack: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {stack.map((tech, i) => (
      <Badge key={i} variant="secondary">{tech}</Badge>
    ))}
  </div>
);

const PrereqSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2">
    <h4 className="font-semibold">{title}</h4>
    <ul className="space-y-1 text-sm">
      {items.map((item, i) => <li key={i}>• {item}</li>)}
    </ul>
  </div>
);

const CodeBlock = ({ children }: { children: string }) => (
  <div className="bg-muted p-3 rounded-md font-mono text-sm">
    {children.split('\n').map((line, i) => (
      <div key={i}>{line || <br />}</div>
    ))}
  </div>
);

const InstallationStep = ({ step, index }: { step: Step; index: number }) => {
  const renderContent = () => {
    switch (step.content) {
      case "installOllama":
        return (
          <Tabs defaultValue="macos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>
            <TabsContent value="macos" className="space-y-2">
              <CodeBlock>curl -fsSL https://ollama.ai/install.sh | sh</CodeBlock>
              <p className="text-sm text-muted-foreground">Or download from the official website</p>
            </TabsContent>
            <TabsContent value="linux" className="space-y-2">
              <CodeBlock>curl -fsSL https://ollama.ai/install.sh | sh</CodeBlock>
            </TabsContent>
            <TabsContent value="windows" className="space-y-2">
              <p className="text-sm">Download the installer from:</p>
              <Button variant="outline" asChild>
                <Link href="https://ollama.ai/download" target="_blank" rel="noopener noreferrer">
                  Download Ollama for Windows <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </TabsContent>
          </Tabs>
        );
      
      case "pullModels":
        return (
          <div className="space-y-4">
            <p>Download the models you want for the RAG chatbot (default recommended models):</p>
            <CodeBlock>
              {`# Pull the main language model (default)
ollama pull deepseek-r1:7b-qwen-distill-q4_K_M

# Pull the embedding model  
ollama pull nomic-embed-text`}
            </CodeBlock>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                The DeepSeek model is approximately 4.68 GB. Ensure you have sufficient disk space and a stable internet connection. 
                This model requires at least 8GB of RAM for optimal performance.
              </AlertDescription>
            </Alert>
          </div>
        );
        
      case "cloneRepo":
        return (
          <div className="space-y-4">
            <CodeBlock>
              {`# Clone the repository
git clone https://github.com/ColdByDefault/beRichHub-LLM-Agent
cd beRichHub-LLM-Agent`}
            </CodeBlock>
            <CodeBlock>
              {`# Install dependencies
npm install
# or
yarn install`}
            </CodeBlock>
          </div>
        );
        
      case "databaseSetup":
        return (
          <Tabs defaultValue="astra" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="astra">DataStax Astra</TabsTrigger>
              <TabsTrigger value="postgres">PostgreSQL</TabsTrigger>
            </TabsList>
            <TabsContent value="astra" className="space-y-4">
              <div className="space-y-3">
                <p>1. Create a free account at DataStax Astra:</p>
                <Button variant="outline" asChild>
                  <Link href="https://astra.datastax.com/" target="_blank" rel="noopener noreferrer">
                    Sign up for Astra <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p>2. Create a new vector database</p>
                <p>3. Get your connection details and API token</p>
              </div>
            </TabsContent>
            <TabsContent value="postgres" className="space-y-4">
              <div className="space-y-3">
                <p>Install PostgreSQL with pgvector extension:</p>
                <CodeBlock>
                  {`# Install PostgreSQL
brew install postgresql
# Install pgvector
brew install pgvector`}
                </CodeBlock>
                <p>Create a database and enable the vector extension:</p>
                <CodeBlock>
                  {`createdb berichrag
psql berichrag -c "CREATE EXTENSION vector;"`}
                </CodeBlock>
                <p>Initialize Prisma (if using PostgreSQL):</p>
                <CodeBlock>
                  {`npx prisma init
npx prisma migrate dev --name init_chunks_table`}
                </CodeBlock>
              </div>
            </TabsContent>
          </Tabs>
        );
        
      case "envConfig":
        return (
          <div className="space-y-4">
            <p>Create a <code className="bg-muted px-2 py-1 rounded">.env.local</code> file in your project root:</p>
            <CodeBlock>
              {`# Ollama Configuration
NEXT_PUBLIC_OLLAMA_API_URL=http://localhost:11434
OLLAMA_CHAT_MODEL=deepseek-r1:7b-qwen-distill-q4_K_M
OLLAMA_EMBED_MODEL=nomic-embed-text
EMBEDDING_DIMENSION=768

# Database Configuration (choose one)
# For DataStax Astra:
VECTOR_STORE=astra
ASTRA_DB_NAMESPACE=your_namespace
ASTRA_DB_COLLECTION=your_collection
ASTRA_DB_API_ENDPOINT=your_endpoint
ASTRA_DB_APPLICATION_TOKEN=your_token

# For PostgreSQL:
VECTOR_STORE=postgres
POSTGRES_URL=postgresql://user:password@localhost:5432/berichrag

# Optional: PDF and scraping settings
PDF_INGESTION_ENABLED=false
MAX_CHUNK_SIZE=1000
CHUNK_OVERLAP=200`}
            </CodeBlock>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Badge className="min-w-8 h-8 rounded-full flex items-center justify-center">
            {index + 1}
          </Badge>
          {step.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderContent()}
      </CardContent>
    </Card>
  );
};

const UsageCard = ({ card }: { card: UsageCardData }) => {
  const Icon = card.icon;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {card.commands && card.commands.map((cmd: string, i: number) => (
          <CodeBlock key={i}>{cmd}</CodeBlock>
        ))}
        {card.steps && card.steps.map((step: string, i: number) => (
          <p key={i}>{i + 1}. {step}</p>
        ))}
        {card.features && (
          <div>
            {card.features.map((feature: string, i: number) => (
              <p key={i}>• {feature}</p>
            ))}
          </div>
        )}
        {card.note && (
          <p className="text-sm text-muted-foreground">{card.note}</p>
        )}
        {card.alert && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{card.alert}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GitBranch className="h-8 w-8" />
          <h1 className="text-4xl font-bold">How to Use beRichHub RAG Chatbot</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete guide to clone, setup, and run your beRichHub RAG chatbot with Next.js, Ollama, and vector databases
        </p>
      </div>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            What This RAG Chatbot Does
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Core Features:</h4>
              <FeatureList features={FEATURES} />
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Tech Stack:</h4>
              <TechBadges stack={TECH_STACK} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Prerequisites
          </CardTitle>
          <CardDescription>Make sure you have these installed before starting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <PrereqSection title="Required Software" items={PREREQUISITES.software} />
            <PrereqSection title="Database (Choose One)" items={PREREQUISITES.database} />
            <PrereqSection title="System Requirements" items={PREREQUISITES.system} />
          </div>
        </CardContent>
      </Card>

      {/* Installation Steps */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Download className="h-6 w-6" />
          Installation Steps
        </h2>
        <div className="space-y-6">
          {INSTALLATION_STEPS.map((step, index) => (
            <InstallationStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Usage Guide */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Play className="h-6 w-6" />
          Usage Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {USAGE_CARDS.map((card, index) => (
            <UsageCard key={index} card={card} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Troubleshooting */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {TROUBLESHOOTING.map((item, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold">{item.issue}</h4>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Documentation</h4>
              <div className="space-y-1">
                {[
                  { href: "https://ollama.ai/docs", label: "Ollama Docs" },
                  { href: "https://docs.datastax.com/en/astra/home/astra.html", label: "Astra Docs" },
                  { href: "https://github.com/pgvector/pgvector", label: "pgvector Docs" }
                ].map((link, i) => (
                  <Link key={i} href={link.href} target="_blank" rel="noopener noreferrer" 
                        className="flex items-center gap-1 text-sm hover:underline">
                    {link.label} <ExternalLink className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Model Options</h4>
              <div className="text-sm space-y-1">
                {[
                  "deepseek-r1:7b-qwen-distill-q4_K_M (default)",
                  "llama3.1:8b (alternative)", 
                  "llama3.1:70b (more capable, requires more resources)",
                  "mistral:7b (faster, smaller)",
                  "codellama:7b (code-focused tasks)"
                ].map((model, i) => <p key={i}>• {model}</p>)}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Performance Tips</h4>
              <div className="text-sm space-y-1">
                {[
                  "Use smaller models for faster responses",
                  "Adjust chunk sizes based on your content type",
                  "Monitor RAM usage with larger models", 
                  "Enable GPU acceleration with CUDA for better performance",
                  "Configure embedding dimensions to match your model"
                ].map((tip, i) => <p key={i}>• {tip}</p>)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4">Ready to Build Your RAG Chatbot?</h3>
        <p className="text-muted-foreground mb-6">
          Follow the steps above to get your beRichHub RAG chatbot up and running!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <Link href="https://github.com/ColdByDefault/beRichHub-LLM-Agent" target="_blank" rel="noopener noreferrer">
              <GitBranch className="mr-2 h-4 w-4" />
              Clone Repository
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://ollama.ai/" target="_blank" rel="noopener noreferrer">
              Get Ollama <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
