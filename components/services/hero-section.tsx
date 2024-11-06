"use client";

import { motion } from "framer-motion";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import Link from "next/link";
import { DotPattern } from "@/components/dot-pattern";
import { Code2, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Desenvolvimento Premium",
    description: "Soluções web e mobile com as melhores tecnologias"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção avançada e certificados SSL inclusos"
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    description: "Sites otimizados e ultra rápidos"
  }
];

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-24">
      <DotPattern className="absolute inset-0 opacity-10" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transforme sua Presença Digital
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Desenvolvimento profissional de sites, aplicativos e soluções digitais 
              para impulsionar seu negócio ao próximo nível.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonRainbow asChild size="lg">
                <Link href="/contato">Solicitar Orçamento</Link>
              </ButtonRainbow>
              <ButtonRainbow asChild variant="outline" size="lg">
                <Link href="/projetos">Ver Projetos</Link>
              </ButtonRainbow>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="rounded-lg bg-primary/10 p-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}