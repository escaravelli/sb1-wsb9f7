"use client";

import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

interface ClientCardProps {
  project: Project;
}

export function ClientCard({ project }: ClientCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative aspect-video bg-muted overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.name}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            asChild
            className="w-full transition-all duration-300 hover:scale-105"
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
  );
}