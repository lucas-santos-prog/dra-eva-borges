import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { evaBorges, heroAbout } from "@/database/data";
import ParallaxSection from "../../template/ParallaxSection";

export default function AboutBannerSection() {
  return (
    <ParallaxSection
      imageSrc={heroAbout}
      imageAlt="Consultório Eva Estetic — Clínica de estética no Tatuapé"
      className="py-28 md:py-40"
      speed={0.4}
    >
      <div className="container mx-auto px-4 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div>
              <span className="mb-4 inline-block rounded-full bg-background/80 px-4 py-1.5 font-body text-sm font-medium text-primary backdrop-blur">
                Sobre a Eva Estetic
              </span>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Conheça a Dra. Eva Borges
              </h1>
              <p className="font-body text-lg text-muted-foreground md:text-xl">
                Especialista em remoção de tatuagem, micropigmentação e limpeza
                de pele. Anos de experiência e tecnologia de ponta para cuidar
                da sua pele com segurança e carinho.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={evaBorges}
                  alt="Dra. Eva Borges — Eva Estetic"
                  className="aspect-3/4 w-full object-cover h-125 object-top"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </ParallaxSection>
  );
}
