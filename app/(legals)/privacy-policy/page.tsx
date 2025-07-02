// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Shield } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("page.description")}
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">{t("badges.gdprCompliant")}</Badge>
            <Badge variant="outline">{t("badges.euRegulation")}</Badge>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.introduction.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t("sections.introduction.description")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.dataWeCollect.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{t("sections.dataWeCollect.items.personalIdentifiers.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("sections.dataWeCollect.items.personalIdentifiers.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{t("sections.dataWeCollect.items.usageData.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("sections.dataWeCollect.items.usageData.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{t("sections.dataWeCollect.items.technicalData.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("sections.dataWeCollect.items.technicalData.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.legalBasis.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm leading-relaxed">
                {t("sections.legalBasis.description")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.yourRights.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.yourRights.description")}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <span>{t("sections.yourRights.rightsList.access")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>{t("sections.yourRights.rightsList.rectification")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>{t("sections.yourRights.rightsList.erasure")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>{t("sections.yourRights.rightsList.restrictProcessing")}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("sections.yourRights.withdrawConsent")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.dataRetention.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <p className="text-sm leading-relaxed">
                {t("sections.dataRetention.description")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.contactInformation.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                {t("sections.contactInformation.description")}
              </p>
              <div className="flex items-center justify-evenly gap-2 p-3 bg-muted/50 rounded-lg">
                <Link
                  href="https://github.com/ColdByDefault"
                  target="_blanck"
                  rel="noopener noreferrer"
                  aria-label={t("sections.contactInformation.githubAria")}
                >
                  <span className="sr-only">{t("sections.contactInformation.githubAria")}</span> 
                  <FaGithub />
                </Link>
                <Link
                  href="https://github.com/ColdByDefault"
                  target="_blanck"
                  rel="noopener noreferrer"
                  aria-label={t("sections.contactInformation.githubAria")}
                >
                  <span className="sr-only">{t("sections.contactInformation.githubAria")}</span>
                  <Mail />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            {t("footer.lastUpdated", {
              date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t("footer.effective")}
          </p>
        </div>
      </div>
    </div>
  );
}
