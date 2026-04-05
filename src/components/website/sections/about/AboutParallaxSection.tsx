import React from "react";
import ParallaxSection from "../../template/ParallaxSection";
import { clinicInterior } from "@/database/data";
import AnimatedSection from "../../template/AnimatedSection";

export default function AboutParallaxSection() {
  return (
    <ParallaxSection
      imageSrc={clinicInterior}
      imageAlt="Interior do consultório Eva Estetic"
      className="py-32 md:py-44"
      speed={0.3}
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Tecnologia e Conforto Para Você
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Um ambiente pensado para o seu bem-estar, com equipamentos de
              última geração e protocolos rigorosos de segurança.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </ParallaxSection>
  );
}
