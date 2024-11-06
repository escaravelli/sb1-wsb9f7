"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    content: "Excelente trabalho! O site superou todas as nossas expectativas. A equipe foi muito profissional e entregou antes do prazo.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Diretora, MS Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    content: "O aplicativo desenvolvido transformou nosso negócio. A interface é intuitiva e nossos clientes adoraram!",
    rating: 5
  },
  {
    name: "Pedro Costa",
    role: "Fundador, EcoVerde",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    content: "Profissionalismo e qualidade excepcionais. O suporte pós-projeto tem sido fundamental para nosso crescimento.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de sucesso de quem confiou em nosso trabalho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}