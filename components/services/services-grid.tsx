"use client";

import { ServiceCard } from "@/components/services/service-card";

const services = [
  {
    title: "Landing Page",
    description: "Página única otimizada para conversão",
    price: "Sob Consulta",
    features: [
      "Design personalizado",
      "Otimização para SEO",
      "Mobile-first",
      "Analytics integrado",
      "Hospedagem inclusa",
      "Suporte 30 dias"
    ],
    ctaText: "Começar Projeto",
    ctaLink: "/contato?servico=landing-page"
  },
  {
    title: "Site Institucional",
    description: "Presença profissional completa",
    price: "Sob Consulta",
    features: [
      "Até 8 páginas",
      "Blog integrado",
      "Painel administrativo",
      "SEO avançado",
      "Hospedagem premium",
      "Suporte 60 dias"
    ],
    popular: true,
    ctaText: "Escolher Plano",
    ctaLink: "/contato?servico=site-institucional"
  },
  {
    title: "E-commerce",
    description: "Loja virtual completa",
    price: "Sob Consulta",
    features: [
      "Produtos ilimitados",
      "Gateway de pagamento",
      "Gestão de estoque",
      "Painel completo",
      "Hospedagem dedicada",
      "Suporte 90 dias"
    ],
    ctaText: "Criar Loja",
    ctaLink: "/contato?servico=ecommerce"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-muted-foreground">
            Soluções personalizadas para cada fase do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}