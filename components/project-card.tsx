"use client";

import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const patterns = ["card-pattern-1", "card-pattern-2", "card-pattern-3"];
  const pattern = patterns[index % patterns.length];

  return (
    <div className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
      <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col ${pattern}`}>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        <div className="relative z-10 flex flex-col h-full">
          <div className="relative aspect-video bg-muted overflow-hidden">
            {!imageError ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
                loading={index < 6 ? "eager" : "lazy"}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <Code2 className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground/50" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          </div>
          
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-1">{project.name}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2 text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              asChild
              className="w-full transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Visitar Site
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}