import { Button } from "@/components/ui/button";
import { heroClinic } from "@/database/data";
import Link from "next/link";
import AnimatedSection from "../../template/AnimatedSection";

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroClinic}
          alt="Consultório Eva Estetic — Remoção de tatuagem e limpeza de pele no Tatuapé"
          className="h-full w-full object-cover z-10"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/85 to-background/30" />
      </div>
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Do skincare ao adeus à tatuagem,{" "}
              <span className="text-primary">cuidamos de você</span> por
              completo
            </h1>
            <p className="mb-8 font-body text-lg text-muted-foreground md:text-xl">
              Remoção de tatuagem, micropigmentação e limpeza de pele com
              segurança, tecnologia avançada e o cuidado que a sua pele merece.
              Consultório no Tatuapé, São Paulo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full font-body shadow-medium"
              >
                <Link
                  href="https://wa.me/5511991198988?text=Olá, vim pelo site e gostaria de agendar um horário."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-background/50 font-body backdrop-blur"
              >
                <Link href="/servicos">Conhecer Serviços</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 font-body">
              <div>
                <p className="text-3xl font-bold text-primary">+5.000</p>
                <p className="text-sm text-muted-foreground">
                  Clientes Atendidos
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
