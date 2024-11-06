"use client";

import { ServicePlan } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface PriceCardProps {
  plan: ServicePlan;
  index: number;
}

export function PriceCard({ plan, index }: PriceCardProps) {
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem('selectedService', plan.title);
    router.push(`/contato?servico=${encodeURIComponent(plan.title)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="magic-card p-8 h-full flex flex-col">
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-blue-400 animate-glow" />
              <h3 className="text-2xl font-bold">{plan.title}</h3>
            </div>
            <div className="flex items-baseline mb-2">
              <span className="text-xl text-blue-400 font-semibold">Consulte valores</span>
              {plan.period && (
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
              )}
            </div>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              {plan.deliveryTime && (
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Prazo de entrega:</strong> {plan.deliveryTime}
                </p>
              )}
              {plan.supportTime && (
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Suporte incluso:</strong> {plan.supportTime}
                </p>
              )}
              {plan.revisions && (
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Revisões:</strong> {plan.revisions}
                </p>
              )}
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              className="magic-button w-full py-3 px-4"
              onClick={handleClick}
            >
              {plan.ctaText || "Solicitar Orçamento"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}