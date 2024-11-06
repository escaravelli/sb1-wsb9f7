import { Server, Globe, Box, Database, Cloud, Shield } from 'lucide-react';

export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    name: "Ocyan Reef",
    description: "Criação e venda de corais marinhos. Disseminando a cultura da aquariofilia marinha no Brasil de maneira sustentável.",
    url: "https://ocyanreef.com.br",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    technologies: ["WooCommerce", "WordPress", "DigitalOcean", "PHP", "HTML", "SEO"]
  },
  {
    name: "Dra. Luciana Maluf",
    description: "Médica dermatologista com mais de 21 anos de experiência, formada pela PUC de Campinas, com especialização em Dermatologia.",
    url: "https://lucianamaluf.com.br",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "Hostgator", "Cloudflare", "WhatsApp Link", "SEO"]
  },
  {
    name: "InfoEnem",
    description: "O maior portal do Enem. Sisu, Prouni, provas, gabaritos, notícias e resultados. Portal completo com notícias, artigos, apostilas, simulados e vídeos-aulas.",
    url: "https://infoenem.com.br",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "HTML", "PHP", "Cloudflare", "DigitalOcean", "SEO"]
  },
  {
    name: "Ateliê da Flor",
    description: "Especializado em criar arranjos florais únicos e deslumbrantes para todas as ocasiões em Itu, SP.",
    url: "https://ateliedaflor.com.br",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "HTML", "Site Estático", "Galleria", "WhatsApp Link", "SEO"]
  },
  {
    name: "Instituto Santa Luzia",
    description: "Referência no atendimento à Pessoa com Deficiência Visual, colaborando para a quebra de barreiras e inclusão social.",
    url: "https://institutosantaluzia.org.br",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Colégio Alfa",
    description: "Educação infantil para crianças de 02 a 06 anos, com trabalho lúdico, criativo e construtivo.",
    url: "https://colegioalfasalto.com.br",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    technologies: ["PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Be More Clínica",
    description: "Clínica especializada com amplo leque de exames e tecnologia avançada para atendimento personalizado.",
    url: "https://bemoreclinica.com.br",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Rio do Céu",
    description: "Onde Cavalos Voltam a Ser Cavalos. Alojamentos, pensão integral e cuidados especializados em Araçoiaba da Serra.",
    url: "https://riodoceu.com.br",
    image: "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Itu Motors",
    description: "Loja de veículos novos e seminovos multimarcas localizada em Itu.",
    url: "https://itumotors.com.br",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "JavaScript", "HTML", "SEO"]
  },
  {
    name: "Lar Candelária",
    description: "Irmandade do Lar Nossa Senhora da Candelária de Itu, entidade sem fins lucrativos desde 1982.",
    url: "https://larcandelaria.com.br",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Beriflex",
    description: "Especializada em brincos identificadores visuais.",
    url: "https://beriflex.com.br",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "Berigo",
    description: "Especializada na fabricação, montagem e manutenção de moldes para injeção de plástico e alumínio desde 2006.",
    url: "https://berigo.com.br",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "Locaweb", "SEO"]
  },
  {
    name: "SemCodigoBR",
    description: "Plataforma dedicada ao desenvolvimento no-code, permitindo criar aplicações sem necessidade de codificação.",
    url: "https://semcodigobr.com.br",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "Easypanel", "VPS", "SEO"]
  },
  {
    name: "Armazém das Flores Itu",
    description: "Variedades de flores, buquês, cestas, arranjos e soluções para empresas.",
    url: "https://armazemdasfloresitu.com.br",
    image: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "HTML", "ValueHost", "SEO"]
  },
  {
    name: "ATR Automóveis",
    description: "Agência de automóveis especializada em veículos novos e seminovos.",
    url: "https://atrautomoveis.netlify.app",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "JavaScript", "HTML", "SEO"]
  }
];