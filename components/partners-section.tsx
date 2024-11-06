"use client";

import { Grid } from "@/components/ui/grid";
import { affiliatePartners } from "@/lib/projects";
import { PartnerCard } from "@/components/partner-card";

export function PartnersSection() {
  return (
    <section className="container relative space-y-4 sm:space-y-6 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-[64rem] text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">
          Nossos Parceiros Premium
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Trabalhamos com as melhores empresas do mercado para oferecer soluções de qualidade
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {affiliatePartners.map((partner, i) => (
          <div key={i}>
            <PartnerCard partner={partner} />
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto px-4">
          Estes são apenas alguns exemplos dos projetos que desenvolvemos. 
          Cada cliente é único e merece uma solução personalizada para suas necessidades específicas.
        </p>
      </div>
    </section>
  );
}