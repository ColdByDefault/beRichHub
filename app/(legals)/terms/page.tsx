// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TermsOfServicePage() {
  const t = useTranslations("TermsOfServicePage");

  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            {t("page.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("page.description")}
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">{t("badges.legallyBinding")}</Badge>
            <Badge variant="outline">{t("badges.euGermanLaw")}</Badge>
          </div>
        </div>

        <Alert>
          <AlertDescription>
            <strong>{t("alert.importantLabel")}</strong>{" "}
            {t("alert.description")}
          </AlertDescription>
        </Alert>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.acceptance.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.acceptance.description")}
              </p>
              <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200">
                  {t("sections.acceptance.updateNote")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.modification.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.modification.description")}
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>{t("sections.modification.noticeLabel")}</strong>{" "}
                  {t("sections.modification.noticeDescription")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.responsibilities.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.responsibilities.description")}
              </p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">
                      {t("sections.responsibilities.items.accurateInfo.title")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "sections.responsibilities.items.accurateInfo.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">
                      {t("sections.responsibilities.items.authorizedUse.title")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "sections.responsibilities.items.authorizedUse.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">
                      {t(
                        "sections.responsibilities.items.accountSecurity.title"
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "sections.responsibilities.items.accountSecurity.description"
                      )}
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
              {t("sections.intellectualProperty.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.intellectualProperty.description")}
              </p>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>
                    {t("sections.intellectualProperty.educationalUseLabel")}
                  </strong>{" "}
                  {t("sections.intellectualProperty.educationalUseDescription")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.liability.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Alert>
                <AlertDescription>
                  <strong>{t("sections.liability.disclaimerLabel")}</strong>{" "}
                  {t("sections.liability.disclaimerDescription")}
                </AlertDescription>
              </Alert>
              <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
                  {t("sections.liability.details")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.governingLaw.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                {t("sections.governingLaw.description")}
              </p>
              <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <div>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    <strong>
                      {t("sections.governingLaw.jurisdictionLabel")}
                    </strong>{" "}
                    {t("sections.governingLaw.jurisdictionDescription")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            {t("footer.lastUpdatedLabel")}{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t("footer.effective")}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t("footer.versionInfo")}
          </p>
        </div>
      </div>
    </div>
  );
}
