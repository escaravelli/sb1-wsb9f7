"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { 
  Clock, 
  ExternalLink, 
  MessageSquare, 
  Shield,
  Check,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  items: string[];
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    features: Feature[];
    price: string;
    demoLink: string;
    contactLink: string;
    technologies: string[];
    deliveryTime: string;
    support: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/50">
      <div className="p-8 grid gap-8 lg:grid-cols-2">
        {/* Left Column - Image and Basic Info */}
        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Entrega em {project.deliveryTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Suporte por {project.support}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Features and CTA */}
        <div className="space-y-6">
          <div className="grid gap-6">
            {project.features.map((feature, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  {feature.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Investimento</div>
              <div className="text-2xl font-bold text-primary">{project.price}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonRainbow asChild size="lg" variant="outline" className="flex-1">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver Demonstração
                </a>
              </ButtonRainbow>
              <ButtonRainbow asChild size="lg" className="flex-1 group">
                <Link 
                  href={project.contactLink}
                  className="flex items-center justify-center gap-2"
                >
                  Solicitar Agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ButtonRainbow>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}