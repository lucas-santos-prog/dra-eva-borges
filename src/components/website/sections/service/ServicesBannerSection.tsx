import { treatmentLaser } from "@/database/data";
import AnimatedSection from "../../template/AnimatedSection";

export default function ServicesBannerSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <img
          src={treatmentLaser}
          alt="Serviços de estética Eva Estetic"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary">
              Nossos Serviços
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Soluções Completas Para Sua Pele
            </h1>
            <p className="font-body text-lg text-muted-foreground md:text-xl">
              A Dra. Eva Borges oferece tratamentos seguros e personalizados
              para remoção de tatuagem, micropigmentação e cuidados com a pele.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
