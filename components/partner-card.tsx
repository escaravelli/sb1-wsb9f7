"use client";

import { AffiliatePartner } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface PartnerCardProps {
  partner: AffiliatePartner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const Icon = partner.icon;
  
  return (
    <Card className="magic-card h-full flex flex-col">
      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2">
            {partner.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-4 mb-6">
            {partner.description}
          </p>
        </div>
        <Link 
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="magic-button w-full text-center"
        >
          Saiba Mais
        </Link>
      </div>
    </Card>
  );
}