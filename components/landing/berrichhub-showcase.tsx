import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Map,
  Users,
  Rocket,
  TrendingUp,
  Code,
  Lightbulb,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react"

export default function BeRichHubShowcase() {
  const features = [
    {
      icon: <Map className="h-6 w-6" />,
      title: "Personalized Learning Roadmaps",
      description: "AI-powered roadmaps tailored to your goals, experience level, and preferred learning style",
      highlight: "Smart Path Planning",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Massive Document Library",
      description: "Access thousands of curated tutorials, guides, and documentation from industry experts",
      highlight: "500+ Resources",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Skill-Based Learning Tracks",
      description: "Structured learning paths for web development, mobile apps, AI/ML, and more",
      highlight: "15+ Tech Stacks",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and milestone achievements",
      highlight: "Real-time Insights",
    },
  ]

  const learningPaths = [
    { name: "Frontend Development", duration: "3-6 months", level: "Beginner", students: "3" },
    { name: "Backend Engineering", duration: "4-8 months", level: "Intermediate", students: "5" },
    { name: "Full-Stack Development", duration: "6-12 months", level: "Beginner", students: "1" },
    { name: "Mobile App Development", duration: "4-7 months", level: "Beginner", students: "12" },
    { name: "AI & Machine Learning", duration: "8-12 months", level: "Advanced", students: "3" },
    { name: "DevOps & Cloud", duration: "5-9 months", level: "Intermediate", students: "4" },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Main Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Everything You Need to Start Your Developer Journey</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Learning Paths */}
      <Card className="mb-12 border-2">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Code className="h-5 w-5" />
            Popular Learning Paths
          </CardTitle>
          <CardDescription>Choose your path and start building your future today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.map((path, index) => (
              <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{path.name}</h4>
                  <Badge
                    variant={
                      path.level === "Beginner"
                        ? "secondary"
                        : path.level === "Intermediate"
                          ? "default"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {path.level}
                  </Badge>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{path.students} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">How beRichHub-AI Accelerates Your Learning</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">1. Assess Your Goals</h4>
            <p className="text-sm text-muted-foreground">
              Tell us about your interests, experience level, and career aspirations to get personalized
              recommendations.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Map className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">2. Get Your Roadmap</h4>
            <p className="text-sm text-muted-foreground">
              Receive a customized learning path with curated resources, projects, and milestones tailored to you.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">3. Learn & Build</h4>
            <p className="text-sm text-muted-foreground">
              Access our vast library of documents, tutorials, and hands-on projects to build real-world skills.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-black/20 dark:to-blue-950/20 border-2 mb-12">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5" />
            Why Developers Choose beRichHub
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Structured learning paths eliminate confusion</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Curated content saves hours of research time</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Progress tracking keeps you motivated</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Industry-relevant skills and technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Community support and mentorship</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Real projects for your portfolio</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Developer Journey?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of successful developers who started their journey with beRichHub. Get your personalized
          roadmap and access our complete resource library today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Start Learning Free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Explore Learning Paths
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          No credit card required. Free forever.
        </p>
      </div>
    </section>
  )
}
