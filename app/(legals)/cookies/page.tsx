// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cookie, Info, Settings, Github, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";


export default function CookiePolicyPage() {
  const t = useTranslations("Cookies");
  
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{t("page.title")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("page.description")}
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="secondary">{t("badges.gdprCompliant")}</Badge>
            <Badge variant="outline">{t("badges.transparentUsage")}</Badge>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              {t("sections.whatAreCookies.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                {t("sections.whatAreCookies.description")}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.howWeUseCookies.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-sm">{t("sections.howWeUseCookies.essential.label")}</span>
                  <Badge variant="secondary" className="text-xs">
                    {t("sections.howWeUseCookies.essential.badge")}
                  </Badge>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        {t("sections.howWeUseCookies.essential.items.authentication.title")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("sections.howWeUseCookies.essential.items.authentication.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{t("sections.howWeUseCookies.essential.items.performance.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("sections.howWeUseCookies.essential.items.performance.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-sm">
                    {t("sections.howWeUseCookies.functional.label")}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {t("sections.howWeUseCookies.functional.badge")}
                  </Badge>
                </div>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{t("sections.howWeUseCookies.functional.items.themePreferences.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("sections.howWeUseCookies.functional.items.themePreferences.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{t("sections.howWeUseCookies.functional.items.oauthIntegration.title")}</p>
                      <p className="text-sm text-muted-foreground flex gap-2">
                        <Github className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                        {t("sections.howWeUseCookies.functional.items.oauthIntegration.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{t("sections.howWeUseCookies.functional.items.sessionManagement.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("sections.howWeUseCookies.functional.items.sessionManagement.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("sections.yourChoices.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  {t("sections.yourChoices.notImplemented")}
                </span>
                <p className="text-sm text-indigo-900 dark:text-indigo-100 leading-relaxed mb-3">
                  {t("sections.yourChoices.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="w-3 h-3 mr-1" />
                    {t("sections.yourChoices.buttons.browserSettings")}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Cookie className="w-3 h-3 mr-1" />
                    {t("sections.yourChoices.buttons.cookiePreferences")}
                  </Button>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-2">
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    <strong>{t("sections.yourChoices.noteLabel")}</strong> {t("sections.yourChoices.noteDescription")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            {t("footer.lastUpdated")}{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t("footer.policyDescription")}
          </p>
        </div>
      </div>
    </div>
  );
}
