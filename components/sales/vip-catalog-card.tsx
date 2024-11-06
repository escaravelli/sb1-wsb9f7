"use client";

import { Card } from "@/components/ui/card";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import Image from "next/image";
import Link from "next/link";

export function VipCatalogCard() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
            alt="Catálogo Digital"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Catálogo Digital VIP</h2>
          <p className="text-muted-foreground mb-6">
            Apresente seus produtos de forma profissional com nosso catálogo digital personalizado.
            Ideal para empresas que buscam uma presença online elegante e eficiente.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              ✓ Design responsivo e moderno
            </li>
            <li className="flex items-center gap-2">
              ✓ Integração com WhatsApp
            </li>
            <li className="flex items-center gap-2">
              ✓ Painel administrativo intuitivo
            </li>
            <li className="flex items-center gap-2">
              ✓ Hospedagem inclusa
            </li>
          </ul>
          <ButtonRainbow asChild className="w-full">
            <Link href="/contato?servico=Catálogo Digital VIP">
              Solicitar Demonstração
            </Link>
          </ButtonRainbow>
        </div>
      </div>
    </Card>
  );
}