// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Impressum() {
  const t = useTranslations("Impressum");
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{t("page.title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("page.description")}
          </p>
        </div>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              {t("sections.legalStatus.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{t("sections.legalStatus.projectInfoTitle")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("sections.legalStatus.projectInfoDescription")}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                {t("sections.legalStatus.legalBasisTitle")}
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {t("sections.legalStatus.legalBasisDescription")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("sections.anotherProject.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("sections.anotherProject.text", { year: new Date().getFullYear() })}
            </p>
          </CardContent>
        </Card>

        <div className="text-center pt-6">
          <p className="text-xs">
            {t("footer.lastUpdated", { date: new Date().toLocaleDateString("de-DE") })}
          </p>
        </div>
      </div>
    </div>
  );
}
