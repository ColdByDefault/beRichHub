// SPDX-License-Identifier: LicenseRef-BRH-1.0
/**
 * The main home page component for the application.
 *
 * Renders the animated background, the landing hero section, and the timeline/history section.
 *
 * @returns {JSX.Element} The rendered home page.
 */
//
import { Background } from "@/components/motions/motion-background";
import BeRichHome from "@/components/landing/Hero";
import { Timeline } from "@/components/landing/History";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background />
      <div className="flex-grow grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <BeRichHome />
        <Timeline />
      </div>
    </div>
  );
}
