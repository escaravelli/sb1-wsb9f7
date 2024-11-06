import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonRainbow } from "@/components/ui/button-rainbow";
import { Briefcase, Code2, GraduationCap, Languages, Mail, MapPin, Phone, Star, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre | Elvio Scaravelli",
  description: "Desenvolvedor Full Stack especializado em WordPress, soluções web modernas e aplicações móveis.",
  openGraph: {
    title: "Sobre | Elvio Scaravelli",
    description: "Desenvolvedor Full Stack especializado em WordPress, soluções web modernas e aplicações móveis.",
  }
};

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "FlutterFlow"],
  backend: ["WordPress", "Node.js", "Python", "Supabase", "PostgreSQL"],
  ferramentas: [
    "Git",
    "Docker",
    "Vercel",
    "Easypanel",
    "Netlify",
    "Cloudflare Pages",
    "Google Analytics",
    "Bing Web Tools",
    "Google Search Console"
  ],
  soft: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas"]
};

const experiences = [
  {
    title: "Desenvolvedor Full Stack Senior",
    company: "Elvio Scaravelli",
    period: "2020 - Presente",
    description: "Desenvolvimento de soluções web completas com WordPress e aplicações móveis usando tecnologias modernas como React, Next.js, Flutter e Node.js.",
    achievements: [
      "Implementação de arquitetura serverless com mais de 99.9% de uptime",
      "Redução de 40% no tempo de carregamento das aplicações"
    ]
  }
];

const education = [
  {
    degree: "Gestão de TI",
    institution: "UNISEB",
    period: "2012 - 2016",
    description: "Formação em Gestão de Tecnologia da Informação com foco em desenvolvimento de software e gestão de projetos"
  }
];

const certifications = [
  "Experienced in FlutterFlow and FlutterFlow CLI",
  "Tableless by Visie"
];

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Elvio Scaravelli</h1>
        <p className="text-xl text-muted-foreground">
          Desenvolvedor Full Stack & Especialista WordPress
        </p>
        <div className="flex justify-center gap-4">
          <ButtonRainbow asChild>
            <Link href="mailto:elviosc@hotmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contato
            </Link>
          </ButtonRainbow>
        </div>
      </section>

      {/* Contact Info */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>elviosc@hotmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>+55 11 9 4156-5335</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Itu, SP - Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-primary" />
            <span>Português</span>
          </div>
        </div>
      </Card>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Code2 className="h-6 w-6" />
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-4">
              <h3 className="font-medium mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Experiência Profissional
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
              <ul className="mt-3 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          Formação Acadêmica
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-primary font-medium">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="mt-2">{edu.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          Certificações
        </h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}