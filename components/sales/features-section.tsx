"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  Gauge, 
  Search, 
  ShieldCheck, 
  Headphones,
  Rocket,
  Palette,
  Code
} from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Sites Profissionais",
    description: "Websites responsivos e otimizados para todos os dispositivos, com design moderno e personalizado."
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos para iOS e Android com FlutterFlow, garantindo performance e experiência premium."
  },
  {
    icon: Gauge,
    title: "Alta Performance",
    description: "Carregamento ultrarrápido e otimização completa para melhor experiência do usuário."
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Estratégias avançadas de SEO para melhor posicionamento nos mecanismos de busca."
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Proteção avançada contra ameaças e certificado SSL gratuito em todos os projetos."
  },
  {
    icon: Headphones,
    title: "Suporte Premium",
    description: "Atendimento personalizado e suporte técnico especializado sempre que precisar."
  },
  {
    icon: Rocket,
    title: "Hospedagem Cloud",
    description: "Servidores de alta disponibilidade com backups automáticos e monitoramento 24/7."
  },
  {
    icon: Palette,
    title: "Design Único",
    description: "Interfaces modernas e intuitivas, criadas com foco na experiência do usuário."
  },
  {
    icon: Code,
    title: "Código Limpo",
    description: "Desenvolvimento com as melhores práticas e tecnologias mais recentes do mercado."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recursos e Benefícios
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tudo que você precisa para ter sucesso no mundo digital
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border">
                  <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}