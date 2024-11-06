"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";

const projects = [
  {
    title: "Landing Page Profissional",
    description: "Landing page moderna e otimizada para conversão, ideal para campanhas e lançamentos digitais.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Design Premium",
        items: [
          "Layout responsivo",
          "Animações suaves",
          "Design moderno",
          "Alta conversão"
        ]
      },
      {
        title: "Funcionalidades",
        items: [
          "Formulários otimizados",
          "Integração WhatsApp",
          "Analytics avançado",
          "SEO otimizado"
        ]
      },
      {
        title: "Infraestrutura",
        items: [
          "Hospedagem inclusa",
          "Certificado SSL",
          "CDN global",
          "Backup automático"
        ]
      }
    ],
    price: "A partir de R$ 997",
    demoLink: "https://aprendaflutterflow.netlify.app/",
    contactLink: "/contato?servico=Landing Page Profissional",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    deliveryTime: "7 dias úteis",
    support: "30 dias"
  },
  {
    title: "Catálogo Digital VIP",
    description: "Catálogo digital elegante e profissional para apresentar seus produtos e serviços com estilo.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Design Premium",
        items: [
          "Layout personalizado",
          "Galeria moderna",
          "Design responsivo",
          "Interface intuitiva"
        ]
      },
      {
        title: "Funcionalidades",
        items: [
          "Painel administrativo",
          "Produtos ilimitados",
          "Categorias ilimitadas",
          "Integração WhatsApp"
        ]
      },
      {
        title: "Infraestrutura",
        items: [
          "Hospedagem premium",
          "SSL incluso",
          "CDN global",
          "Backup diário"
        ]
      }
    ],
    price: "A partir de R$ 1.497",
    demoLink: "https://catalogoflores.netlify.app/",
    contactLink: "/contato?servico=Catálogo Digital VIP",
    technologies: ["Next.js", "React", "Supabase", "TailwindCSS"],
    deliveryTime: "15 dias úteis",
    support: "60 dias"
  }
];

export function ProjectShowcase() {
  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}