// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function MobileBrand() {
  const t = useTranslations("Navbar");

  return (
    <Link href="/" className="font-semibold">
      {t("brand")}
    </Link>
  );
}
