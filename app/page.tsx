'use client'
import { Background } from "@/components/background/motion-background";
import Footer from "@/components/main/Footer";
import BeRichHome from "@/components/landing/Landing-page";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background />
      <div className="flex-grow grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <BeRichHome />
      </div>
      <Footer />
    </div>
  );
}
