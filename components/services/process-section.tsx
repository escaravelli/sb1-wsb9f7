"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Briefing",
    description: "Entendemos suas necessidades e objetivos em detalhes"
  },
  {
    icon: Palette,
    title: "2. Design",
    description: "Criamos o design perfeito para seu projeto"
  },
  {
    icon: Code,
    title: "3. Desenvolvimento",
    description: "Implementamos com as melhores tecnologias"
  },
  {
    icon: Rocket,
    title: "4. Lançamento",
    description: "Seu projeto online com suporte completo"
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-muted-foreground">
            Processo simplificado e transparente do início ao fim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2 transform -translate-x-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}