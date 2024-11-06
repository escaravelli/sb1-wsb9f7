import { ButtonRainbow } from "@/components/ui/button-rainbow";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container relative space-y-4 sm:space-y-6 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-3 sm:gap-4 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Elvio Scaravelli
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground text-base sm:text-lg lg:text-xl">
          Soluções completas em desenvolvimento web, hospedagem e tecnologia para seu negócio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto">
          <Link 
            href="/contato" 
            className="text-base sm:text-lg lg:text-xl font-bold animated-gradient-text hover:cursor-pointer text-center sm:text-left"
          >
            Solicitar Orçamento →
          </Link>
          <ButtonRainbow size="lg" variant="outline" asChild>
            <Link href="/about">Sobre Mim</Link>
          </ButtonRainbow>
        </div>
      </div>
    </section>
  );
}