"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRef } from "react"

const timelineData = [
  {
    version: "v1.0",
    title: "Desktop Foundation",
    subtitle: "Python & Tkinter Era",
    description:
      "Native desktop application offering automated, pre-populated daily report generation.",
    technologies: ["Python 3.8", "Tkinter", "SQLite"],
    color: "bg-gray-500",
    shadowColor: "shadow-blue-500/20",
    year: "2023",
    status: "Legacy",
    metrics: { users: "4+", features: "2" },
  },
  {
    version: "v2.0",
    title: "Web Revolution",
    subtitle: "Flask & Server-Side Rendering",
    description:
      "Complete shift to a web-based platform, enabling multi-user access and real-time collaboration, with integrated learning documents.",
    technologies: ["Python 3.9", "Flask", "PostgreSQL", "Bootstrap", "jQuery"],
    color: "bg-gray-500",
    shadowColor: "shadow-blue-500/20",
    year: "2023",
    status: "Deprecated",
    metrics: { users: "20+", features: "8" },
  },
  {
    version: "v3.0",
    title: "Modern Stack",
    subtitle: "React & Component Architecture",
    description:
      "Comprehensive rebuild with the React ecosystem, introducing component-based architecture and modern development workflows.",
    technologies: ["Next.js 13", "React 17", "Tailwind CSS", "JavaScript"],
    color: "bg-gray-500",
    shadowColor: "shadow-blue-500/20",
    year: "2024",
    status: "Stable",
    metrics: { users: "30+", features: "20" },
  },
  {
    version: "v4.0",
    title: "Performance Leap",
    subtitle: "App Router & Server Components",
    description:
      "Advanced performance optimizations using Next.js App Router, React Server Components, and strategic caching.",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS 4", "Vercel"],
    color: "bg-gray-500",
    shadowColor: "shadow-blue-500/20",
    year: "2024",
    status: "Production",
    metrics: { users: "48+", features: "28" },
  },
  {
    version: "v5.0",
    title: "Enterprise Ready",
    subtitle: "AI-Powered, Scalable & Multi-Language",
    description:
      "Flagship release delivering AI-driven insights, enterprise-grade security, unlimited scalability, multi-language support, plus an LLM chatbot with RAG integration and offline repositories.",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS 4", "AI SDK", "Edge Runtime"],
    color: "bg-blue-500",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-200",
    year: "2025",
    status: "Current",
    metrics: { users: "130+", features: "63" },
  },
];


export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Project Evolution
            </motion.div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From desktop prototype to enterprise-grade platform.
              <br />
              <span className="text-primary font-medium">5 versions. 2 years. Countless innovations.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 pb-20" ref={containerRef}>
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30" />
          <motion.div
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-violet-700 via-violet-400 to-violet-200 origin-top"
            style={{ height: lineHeight }}/>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.version}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative flex items-start">
                {/* Animated Knot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`flex-shrink-0 w-4 h-4 ${item.color} rounded-full ${item.shadowColor} shadow-lg z-10 relative overflow-hidden ml-2`}>
                  {/* Animated pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 ${item.color} rounded-full`}
                  />

                  {/* Inner glow */}
                  <div className="absolute inset-2 bg-white/20 rounded-full" />
                  <div className="absolute inset-4 bg-white/40 rounded-full" />
                </motion.div>

                {/* Content Card */}
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="ml-8 flex-1">
                  <Card
                    className={`group border-2 ${item.borderColor} shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:${item.shadowColor}`}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              variant="outline"
                              className="text-lg font-bold px-3 py-1 bg-primary/10 text-primary border-primary/20"
                            >
                              {item.version}
                            </Badge>
                            <Badge variant={item.status === "Current" ? "default" : "secondary"} className="text-xs">
                              {item.status}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-primary font-medium text-sm">{item.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.year}</span>
                        </div>
                      </div>

                      <Separator className="mb-4" />

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{item.description}</p>

                      {/* Metrics */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{item.metrics.users} Users</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${item.color} rounded-full`} />
                          <span className="text-sm font-medium">{item.metrics.features} Features</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-muted/50 hover:bg-muted transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full" />
            <span className="font-medium">Continuously evolving since 2023</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
