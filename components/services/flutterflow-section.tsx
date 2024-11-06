"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { Smartphone, Zap, Cloud, Palette, Shield, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: Zap,
    title: "Desenvolvimento Rápido",
    description: "Apps prontos em semanas, não meses"
  },
  {
    icon: Cloud,
    title: "Backend Integrado",
    description: "Supabase e APIs REST"
  },
  {
    icon: Palette,
    title: "Design Nativo",
    description: "Interface seguindo Material 3"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Autenticação e permissões"
  },
  {
    icon: Smartphone,
    title: "Multi-plataforma",
    description: "iOS, Android e Web"
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Código nativo otimizado"
  }
];

export function FlutterFlowSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                Desenvolvimento de Apps com FlutterFlow
              </h2>
              <p className="text-muted-foreground mb-6">
                Transforme sua ideia em um aplicativo profissional com a tecnologia mais moderna do mercado. 
                Apps nativos para iOS e Android com desenvolvimento acelerado e qualidade premium.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 mt-1">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <ButtonRainbow asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contato?servico=app-flutterflow">
                  Criar Meu Aplicativo
                </Link>
              </ButtonRainbow>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] lg:min-h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1024&q=80"
                alt="Desenvolvimento de Aplicativos"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}