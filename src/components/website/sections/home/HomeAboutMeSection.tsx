import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { evaBorges } from "@/database/data";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeAboutMeSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={evaBorges}
                  alt="Dra. Eva Borges — Eva Estetic"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                Quem Cuida de Você
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Dra. Eva Borges
              </h2>
              <p className="mb-4 font-body text-muted-foreground">
                Especialista em remoção de tatuagem, micropigmentação e limpeza
                de pele, a Dra. Eva Borges alia experiência clínica a
                equipamentos de última geração para oferecer resultados seguros
                e eficazes.
              </p>
              <p className="mb-6 font-body text-muted-foreground">
                Seu compromisso com a segurança e o bem-estar de cada paciente é
                o que torna a Eva Estetic uma referência no Tatuapé e região.
              </p>
              <div className="mb-6 flex items-center gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Rua Serra de Bragança, 50 — Tatuapé, SP
              </div>
              <Button variant="outline" className="rounded-full font-body">
                <Link href="/sobre-nos">Conheça Nossa História</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
