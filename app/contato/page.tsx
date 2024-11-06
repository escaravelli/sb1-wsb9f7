import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contato | Elvio Sites",
  description: "Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { servico?: string };
}) {
  return (
    <div className="container max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Solicite um Orçamento</h1>
        <p className="text-xl text-muted-foreground">
          Preencha o formulário abaixo e entraremos em contato em até 24 horas úteis
        </p>
      </div>

      <ContactForm selectedService={searchParams.servico} />
    </div>
  );
}