export interface ServicePlan {
  title: string;
  price: string;
  features: string[];
  period?: string;
  deliveryTime?: string;
  supportTime?: string;
  revisions?: string;
  ctaText?: string;
  note?: string;
}

export interface ServiceCategory {
  title: string;
  description?: string;
  note?: string;
  plans: ServicePlan[];
}

export const services: ServiceCategory[] = [
  {
    title: "Websites e Landing Pages",
    note: "Projeto completo e código fonte do cliente após finalização do pagamento.",
    plans: [
      {
        title: "Landing Page Premium",
        price: "Consulte valores",
        features: [
          "Design personalizado e otimizado para conversão",
          "Até 8 seções/dobras",
          "Integração com sistemas de pagamento",
          "Otimização para SEO",
          "Copywriting persuasivo",
          "Analytics e pixel de rastreamento",
        ],
        revisions: "3 revisões inclusas",
        deliveryTime: "7 dias úteis",
        supportTime: "30 dias",
        ctaText: "Contratar Landing Page"
      },
      {
        title: "Site Institucional",
        price: "Consulte valores",
        features: [
          "Até 8 páginas otimizadas",
          "Blog integrado",
          "Painel administrativo",
          "Design responsivo premium",
          "Integração com redes sociais",
          "Formulários personalizados",
          "Chat online",
          "Otimização para SEO",
        ],
        revisions: "4 revisões inclusas",
        deliveryTime: "15 dias úteis",
        supportTime: "60 dias",
        ctaText: "Contratar Site Institucional"
      },
      {
        title: "E-commerce Completo",
        price: "Consulte valores",
        features: [
          "Design personalizado para e-commerce",
          "Cadastro de até 100 produtos",
          "Painel administrativo completo",
          "Integração com meios de pagamento",
          "Cálculo de frete automático",
          "Controle de estoque",
          "Cupons de desconto",
          "Relatórios de vendas",
          "Integração com marketplaces",
          "Treinamento da equipe (4h)",
        ],
        revisions: "5 revisões inclusas",
        deliveryTime: "30 dias úteis",
        supportTime: "90 dias",
        ctaText: "Contratar E-commerce"
      }
    ]
  },
  {
    title: "Aplicativos com FlutterFlow",
    note: "Projeto completo e código fonte do cliente após finalização do pagamento.",
    plans: [
      {
        title: "App Basic",
        price: "Consulte valores",
        features: [
          "Até 5 telas principais",
          "Autenticação de usuários",
          "Banco de dados Supabase Free",
          "Design responsivo",
          "Push notifications",
          "Publicação nas lojas (Play Store/App Store) valor à parte",
        ],
        revisions: "3 revisões inclusas",
        deliveryTime: "20 dias úteis",
        supportTime: "60 dias",
        ctaText: "Contratar App Basic"
      },
      {
        title: "App Pro",
        price: "Consulte valores",
        features: [
          "Até 12 telas interativas",
          "Sistema de login complexo",
          "Banco de dados Supabase Free",
          "Chat em tempo real",
          "Geolocalização",
          "Integração com APIs externas",
          "Sistema de pagamentos",
          "Analytics avançado",
          "Push notifications segmentadas",
          "Publicação nas lojas (Play Store/App Store) valor à parte",
          "Treinamento (6h)",
        ],
        revisions: "5 revisões inclusas",
        deliveryTime: "45 dias úteis",
        supportTime: "90 dias",
        ctaText: "Contratar App Pro"
      },
      {
        title: "App Enterprise",
        price: "Consulte valores",
        features: [
          "Telas ilimitadas",
          "Sistema completo de admin",
          "Banco de dados Supabase Free",
          "Chat em tempo real com mídias",
          "Geolocalização avançada",
          "Múltiplas integrações",
          "Sistema de pagamentos completo",
          "Analytics personalizado",
          "Marketing automation",
          "Painel administrativo web",
          "Publicação nas lojas (Play Store/App Store) valor à parte",
          "Treinamento completo (12h)",
        ],
        revisions: "8 revisões inclusas",
        deliveryTime: "90 dias úteis",
        supportTime: "180 dias",
        ctaText: "Contratar App Enterprise"
      }
    ]
  },
  {
    title: "Planos de Manutenção Mensal",
    plans: [
      {
        title: "Básico",
        price: "Consulte valores",
        period: "mês",
        features: [
          "Atualizações de segurança",
          "Backup diário",
          "Monitoramento 24/7",
          "2h de alterações mensais",
          "Suporte por email",
        ],
        ctaText: "Contratar Plano Básico"
      },
      {
        title: "Premium",
        price: "Consulte valores",
        period: "mês",
        features: [
          "Atualizações de segurança",
          "Backup diário",
          "Monitoramento 24/7",
          "5h de alterações mensais",
          "Suporte prioritário",
          "Relatórios mensais",
          "Otimização de SEO",
          "CDN Premium",
        ],
        ctaText: "Contratar Plano Premium"
      },
      {
        title: "Enterprise",
        price: "Consulte valores",
        period: "mês",
        features: [
          "Atualizações de segurança",
          "Backup em tempo real",
          "Monitoramento 24/7",
          "12h de alterações mensais",
          "Suporte VIP",
          "Relatórios semanais",
          "Otimização de SEO",
          "CDN Premium",
          "Consultoria mensal",
        ],
        ctaText: "Contratar Plano Enterprise"
      }
    ]
  }
];