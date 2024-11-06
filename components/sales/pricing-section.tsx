"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { PriceCard } from "@/components/services/price-card";

export function PricingSection() {
  const websiteServices = services[0]; // Get the first category (Websites e Landing Pages)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planos e Preços
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteServices.plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}