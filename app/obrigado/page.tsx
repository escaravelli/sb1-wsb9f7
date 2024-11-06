import { Metadata } from "next";
import { ThankYouContent } from "@/components/thank-you-content";

export const metadata: Metadata = {
  title: "Obrigado | Elvio Sites",
  description: "Agradecemos seu contato! Em breve retornaremos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { name?: string; service?: string };
}) {
  return <ThankYouContent name={searchParams.name} service={searchParams.service} />;
}