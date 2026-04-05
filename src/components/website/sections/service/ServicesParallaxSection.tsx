"use client";
import ParallaxSection from "../../template/ParallaxSection";
import { clinicInterior } from "@/database/data";
import AnimatedSection from "../../template/AnimatedSection";

export default function ServicesParallaxSection() {
  return (
    <ParallaxSection
      imageSrc={clinicInterior}
      imageAlt="Consultório Eva Estetic — ambiente seguro e acolhedor"
      className="py-32 md:py-44"
      speed={0.3}
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Segurança em Cada Detalhe
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Equipamentos certificados, ambiente clínico impecável e protocolos
              rigorosos para o seu bem-estar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </ParallaxSection>
  );
}
