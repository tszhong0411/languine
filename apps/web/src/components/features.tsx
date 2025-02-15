"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { useScopedI18n } from "@/locales/client";

export function Features() {
  const t = useScopedI18n("features");

  const features = [
    {
      title: t("fullyOpenSource"),
      description: t("fullyOpenSourceDescription"),
    },
    {
      title: t("noVendorLockIn"),
      description: t("noVendorLockInDescription"),
    },
    {
      title: t("presetsForExpo"),
      description: t("presetsForExpoDescription"),
    },
    {
      title: t("presetForReactNative"),
      description: t("presetForReactNativeDescription"),
    },
    {
      title: t("presetForReactEmail"),
      description: t("presetForReactEmailDescription"),
    },
    {
      title: t("readyForI18nLibraries"),
      description: t("readyForI18nLibrariesDescription"),
    },
  ];

  return (
    <div>
      <h3>{t("title")}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {features.map((feature) => (
          <div
            className="border border-primary p-1 -mt-[1px]"
            key={feature.title}
          >
            <Card className="rounded-none border-none p-4">
              <CardHeader>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <p className="text-secondary text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
