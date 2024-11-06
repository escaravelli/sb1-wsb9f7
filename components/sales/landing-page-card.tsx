"use client";

import { Card } from "@/components/ui/card";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import Image from "next/image";
import Link from "next/link";

export function LandingPageCard() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Landing Page"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Landing Page Profissional</h2>
          <p className="text-muted-foreground mb-6">
            Converta visitantes em clientes com uma landing page otimizada e profissional.
            Design moderno e focado em resultados.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              ✓ Alta taxa de conversão
            </li>
            <li className="flex items-center gap-2">
              ✓ Otimizada para SEO
            </li>
            <li className="flex items-center gap-2">
              ✓ Integração com analytics
            </li>
            <li className="flex items-center gap-2">
              ✓ Suporte técnico
            </li>
          </ul>
          <ButtonRainbow asChild className="w-full">
            <Link href="/contato?servico=Landing Page Profissional">
              Solicitar Orçamento
            </Link>
          </ButtonRainbow>
        </div>
      </div>
    </Card>
  );
}