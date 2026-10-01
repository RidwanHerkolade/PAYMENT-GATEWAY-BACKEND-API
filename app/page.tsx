import { Hero } from "@/components/home/Hero";
import { PaymentFlow } from "@/components/home/PaymentFlow";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PaymentArtifact } from "@/components/home/PaymentArtifact";  
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <Hero />
      <PaymentFlow />
      <PaymentArtifact />
      <CTA />
      <Footer />
    </main>
  );
}