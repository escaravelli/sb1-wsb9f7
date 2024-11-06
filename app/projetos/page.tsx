import { Metadata } from "next";
import { ProjectShowcase } from "@/components/projects/project-showcase";

export const metadata: Metadata = {
  title: "Projetos Prontos | Elvio Scaravelli",
  description: "Soluções prontas para impulsionar seu negócio. Landing pages e catálogos digitais personalizáveis.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Projetos Prontos para Seu Negócio
          </h1>
          <p className="text-lg text-muted-foreground">
            Soluções completas e personalizáveis para acelerar sua presença digital
          </p>
        </div>

        <ProjectShowcase />
      </div>
    </div>
  );
}