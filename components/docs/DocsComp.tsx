"use client"

import type React from "react"

import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

type ResourceCardProps = {
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  links: Array<{
    href: string
    label: string
  }>
}

export function ResourceCard({ title, Icon, links }: ResourceCardProps) {
  return (
    <Card className="p-4 sm:p-6 h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
          <span className="leading-tight">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 sm:space-y-3">
          {links.map(({ href, label }) => (
            <li key={href} className="flex items-start gap-2 sm:gap-3">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <Link
                href={href}
                target="_blank"
                className="text-xs sm:text-sm hover:underline leading-relaxed hover:text-primary transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


type FaqItemProps = {
  value: string
  questionKey: string
  answerKey: string
}

export function FaqItem({ value, questionKey, answerKey }: FaqItemProps) {
  const t = useTranslations("RoadmapItems")

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left">{t(questionKey)}</AccordionTrigger>
      <AccordionContent className="leading-relaxed">{t(answerKey)}</AccordionContent>
    </AccordionItem>
  )
}
