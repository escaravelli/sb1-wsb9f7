import { ServicesHero } from "@/components/services/hero-section";
import { ServicesGrid } from "@/components/services/services-grid";
import { FlutterFlowSection } from "@/components/services/flutterflow-section";
import { ProcessSection } from "@/components/services/process-section";
import { FAQSection } from "@/components/faq-section";
import { CtaSection } from "@/components/sales/cta-section";

export default function Home() {
  return (
    <div className="flex-1">
      <ServicesHero />
      <ServicesGrid />
      <FlutterFlowSection />
      <ProcessSection />
      <FAQSection />
      <CtaSection />
    </div>
  );
}