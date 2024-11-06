"use client";

import { services } from "@/lib/services";
import { PriceCard } from "@/components/services/price-card";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Soluções Digitais</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje
          </p>
        </motion.div>

        {services.map((category, i) => (
          <div key={i} className="mb-12 sm:mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.title}</h3>
              {category.description && (
                <p className="text-muted-foreground">{category.description}</p>
              )}
              {category.note && (
                <p className="text-sm text-primary mt-2 font-medium">{category.note}</p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {category.plans.map((plan, j) => (
                <PriceCard key={j} plan={plan} index={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}