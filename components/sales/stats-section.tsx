"use client";

import { motion } from "framer-motion";
import { Users, Code2, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Code2,
    value: "1000+",
    label: "Projetos Entregues",
  },
  {
    icon: Award,
    value: "10+",
    label: "Anos de Experiência",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Suporte Disponível",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}