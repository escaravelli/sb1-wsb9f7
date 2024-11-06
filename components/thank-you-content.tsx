"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ThankYouContentProps {
  name?: string;
  service?: string;
}

export function ThankYouContent({ name, service }: ThankYouContentProps) {
  const whatsappNumber = "5511941565335";
  const message = encodeURIComponent(
    `Olá! Acabei de solicitar um orçamento${service ? ` para ${service}` : ''} e gostaria de mais informações.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <Card className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Obrigado{name ? `, ${name}` : ''}!
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Recebemos sua solicitação{service ? ` para ${service}` : ''} com sucesso!
          Nossa equipe entrará em contato em breve.
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600"
              asChild
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground">
            Atendimento imediato via WhatsApp
          </p>
        </div>
      </Card>
    </div>
  );
}