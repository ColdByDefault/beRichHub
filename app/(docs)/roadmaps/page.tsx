// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import type React from "react";
import { useTranslations } from "next-intl";
import { paths, items } from "@/data/roadmap";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ResourceCard } from "@/components/docs/DocsComp";
import { resources } from "@/data/roadmap";
import { Badge } from "@/components/ui/badge";

const sectionKeys = ["1", "2", "3", "4", "5", "6"] as const;
const faqKeys = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6"] as const;

const GettingStartedRoadmap: React.FC = () => {
  const t = useTranslations("RoadmapItems");

  const roadmapData = sectionKeys.map((key) => ({
    title: t(`sections.${key}.title`),
    description: t(`sections.${key}.description`),
  }));

  return (
    <div className="flex flex-col justify-center items-center flex-grow px-4 sm:px-6 lg:px-8 mt-20 sm:mt-12 lg:mt-0">
      {/* Roadmap Section */}
      <section id="roadmap" className="w-full max-w-7xl mt-20">
        <Badge>START HERE!</Badge>
        <div className="mx-auto grid items-start gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 grid-cols-1 lg:grid-cols-2">
          {roadmapData.map((item, idx) => (
            <Card key={sectionKeys[idx]} className="p-4 sm:p-6 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl">
                  <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold">
                    {sectionKeys[idx]}
                  </span>
                  <span className="leading-tight">{item.title}</span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="ml-2 sm:ml-4 space-y-2 sm:space-y-3">
                  {items[idx]?.map((_, stepIdx) => (
                    <li
                      key={stepIdx}
                      className="flex items-start gap-2 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">
                        {t(`sections.${sectionKeys[idx]}.steps.${stepIdx}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Choose Your Path */}
      <section id="paths" className="w-full max-w-7xl mt-8 sm:mt-12 lg:mt-16">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Choose Your Path
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-auto">
          {paths.map((path) => (
            <Card
              key={path.id}
              className="flex flex-col items-center p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <path.Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 mb-3 sm:mb-4 text-primary flex-shrink-0" />
              <CardTitle className="flex items-center gap-2 text-center text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">
                {t(`paths.${path.id}.title`)}
              </CardTitle>
              <CardContent className="p-0 text-center">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t(`paths.${path.id}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-4xl mt-8 sm:mt-12 lg:mt-16">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqKeys.map((key) => (
              <AccordionItem
                key={key}
                value={key}
                className="border rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg py-4 sm:py-6">
                  {t(`faqs.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed">
                  {t(`faqs.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="w-full max-w-7xl mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Developer Resources
          </h2>
          <p className="max-w-3xl mx-auto mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed px-4">
            Browse a list of free courses, guides, practice platforms,
            open-source projects, and tools.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-8 lg:mt-12">
          {resources.map((res) => (
            <ResourceCard
              key={res.id}
              title={res.title}
              Icon={res.Icon}
              links={res.links}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GettingStartedRoadmap;
