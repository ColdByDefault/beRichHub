import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Info } from "lucide-react";

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
          <p className="text-muted-foreground text-lg">
            Rechtliche Hinweise und Informationen
          </p>
        </div>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Rechtlicher Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Projektinformationen:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diese Website ist ein rein privates, nicht kommerzielles Projekt
                und dient ausschließlich experimentellen und persönlichen
                Lernzwecken. Es erfolgt weder eine geschäftsmäßige Nutzung noch
                eine Gewinnerzielungsabsicht.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                Rechtliche Grundlage:
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Gemäß § 5 TMG besteht daher keine Pflicht zur Angabe eines
                Impressums.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AnotherProject</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ColdByDefault © {new Date().getFullYear()} beRich.Hub
            </p>
          </CardContent>
        </Card>

        <div className="text-center pt-6">
          <p className="text-xs">
            Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
          </p>
        </div>
      </div>
    </div>
  );
}
