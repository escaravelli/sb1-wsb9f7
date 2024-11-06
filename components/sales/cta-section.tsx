"use client";

import { motion } from "framer-motion";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { DotPattern } from "@/components/dot-pattern";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <DotPattern className="absolute inset-0 opacity-10" />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato agora e receba uma consultoria gratuita para seu projeto.
            Nossa equipe está pronta para ajudar você a alcançar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonRainbow asChild size="lg" className="text-lg">
              <Link href="/contato">
                Solicitar Orçamento
              </Link>
            </ButtonRainbow>
            <ButtonRainbow asChild variant="outline" size="lg" className="text-lg">
              <Link href="/about">
                Conhecer Mais
              </Link>
            </ButtonRainbow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}