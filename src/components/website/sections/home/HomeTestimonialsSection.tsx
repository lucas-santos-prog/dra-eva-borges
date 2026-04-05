import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function HomeTestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Depoimentos
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              O Que Nossos Clientes Dizem
            </h2>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Camila R.",
              text: "A Dra. Eva é maravilhosa! Fiz a remoção de uma tatuagem antiga e o resultado ficou incrível.",
            },
            {
              name: "Fernanda S.",
              text: "Fiz a limpeza de pele e já saí apaixonada pelo resultado. Ambiente super profissional!",
            },
            {
              name: "Juliana M.",
              text: "Me senti acolhida desde a primeira consulta. Recomendo de olhos fechados!",
            },
            {
              name: "Patricia L.",
              text: "Profissionalismo e segurança em cada detalhe. A melhor clínica da região.",
            },
          ].map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full border-none shadow-soft">
                <CardContent className="p-6">
                  <Quote className="mb-3 h-6 w-6 text-primary/20" />
                  <p className="mb-4 font-body text-sm text-muted-foreground">
                    "{t.text}"
                  </p>
                  <p className="font-body text-sm font-semibold">{t.name}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
