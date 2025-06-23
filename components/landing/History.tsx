"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";


const styles = [
  { color: "bg-gray-100", shadowColor: "shadow-blue-500/20" },
  { color: "bg-gray-200", shadowColor: "shadow-blue-500/20" },
  { color: "bg-gray-300", shadowColor: "shadow-blue-500/20" },
  { color: "bg-gray-400", shadowColor: "shadow-blue-500/20" },
  { color: "bg-blue-500", shadowColor: "shadow-blue-500/20" }
] as const;


const techStacks = [
  ["Python 3.8", "Tkinter", "SQLite"],
  ["Python 3.9", "Flask", "PostgreSQL", "Bootstrap", "jQuery"],
  ["Next.js 13", "React 17", "Tailwind CSS", "JavaScript"],
  ["Next.js 15", "React 19", "Tailwind CSS 4", "Vercel"],
  ["Next.js 15", "React 19", "Tailwind CSS 4", "AI SDK", "Edge Runtime"]
];

const sectionKeys = ["v1", "v2", "v3", "v4", "v5"] as const;

export function Timeline() {
  const t = useTranslations("History");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  const timelineData = sectionKeys.map((key, i) => ({
    ...styles[i],
    technologies: techStacks[i],
    version: t(`sections.${key}.version`),
    title: t(`sections.${key}.title`),
    subtitle: t(`sections.${key}.subtitle`),
    description: t(`sections.${key}.description`),
    year: t(`sections.${key}.year`),
    status: t(`sections.${key}.status`),
    metrics: {
      users: t(`sections.${key}.metrics.users`),
      features: t(`sections.${key}.metrics.features`)
    }
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
        ><TrendingUp className="w-4 h-4" />
          {t("badge")}
        </motion.div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {t("intro1")}
          <br />
          <span className="text-primary font-medium">{t("intro2")}</span>
        </p>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/30" />
          <motion.div
            className="absolute left-8 top-0 w-px bg-gradient-to-b from-violet-700 via-violet-400 to-violet-200 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.version}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex items-start"
              >
                {/* Knot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2 }}
                  className={`flex-shrink-0 w-4 h-4 ${item.color} rounded-full ${item.shadowColor} shadow-lg z-10 relative ml-2`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 ${item.color} rounded-full`}
                  />
                  <div className="absolute inset-2 bg-white/20 rounded-full" />
                  <div className="absolute inset-4 bg-white/40 rounded-full" />
                </motion.div>

                {/* Card */}
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="ml-8 flex-1">
                  <Card className={`group border-2 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:${item.shadowColor}`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-lg font-bold px-3 py-1 bg-primary/10 text-primary border-primary/20">
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
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{item.description}</p>

                      {/* Metrics */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">
                            {item.metrics.users} {t("Users")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${item.color} rounded-full`} />
                          <span className="text-sm font-medium">
                            {item.metrics.features} {t("Features")}
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">{t("techStack")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors text-xs">
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
            <span className="font-medium">{t("endSentence")}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
