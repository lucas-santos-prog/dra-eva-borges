import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { procedures } from "@/database/data";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Processo
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Como Funciona
            </h2>
            <p className="mx-auto max-w-2xl font-body text-muted-foreground">
              Entenda cada etapa do seu tratamento com a Dra. Eva Borges
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full border-none shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-body text-lg font-bold text-primary-foreground">
                    {p.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
