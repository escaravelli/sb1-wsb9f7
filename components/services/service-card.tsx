"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  period?: string;
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  index: number;
}

export function ServiceCard({
  title,
  description,
  features,
  price,
  period,
  ctaText,
  ctaLink,
  popular,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`relative h-full p-6 ${popular ? 'border-primary shadow-lg' : ''}`}>
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
              Mais Popular
            </span>
          </div>
        )}
        
        <div className="mb-5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">{price}</span>
            {period && (
              <span className="text-muted-foreground ml-2">/{period}</span>
            )}
          </div>

          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={ctaLink}
          className={`block w-full text-center py-2 px-4 rounded-lg transition-colors ${
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          {ctaText}
        </Link>
      </Card>
    </motion.div>
  );
}