import { ClientShowcase } from "@/components/clients/client-showcase";

export const metadata = {
  title: "Clientes | Elvio Scaravelli",
  description: "Portfólio dos nossos projetos e casos de sucesso em desenvolvimento web e aplicativos.",
  openGraph: {
    title: "Clientes | Elvio Scaravelli",
    description: "Portfólio dos nossos projetos e casos de sucesso em desenvolvimento web e aplicativos.",
  }
};

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative container py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Clientes</h1>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos e as histórias de sucesso que ajudamos a construir
          </p>
        </div>

        <ClientShowcase />

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estes são apenas alguns exemplos dos projetos que desenvolvemos. 
            Cada cliente é único e merece uma solução personalizada para suas necessidades específicas.
          </p>
        </div>
      </div>
    </div>
  );
}