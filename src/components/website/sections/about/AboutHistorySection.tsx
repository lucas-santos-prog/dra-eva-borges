import { CheckCircle } from "lucide-react";
import React from "react";
import AnimatedSection from "../../template/AnimatedSection";

export default function AboutHistorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                  Nossa História
                </span>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Compromisso com Sua Segurança
                </h2>
                <p className="mb-4 font-body text-muted-foreground">
                  A Eva Estetic nasceu da paixão da Dra. Eva Borges por devolver
                  às pessoas a confiança e o bem-estar com a própria pele. Cada
                  procedimento é realizado com o mais alto padrão de segurança e
                  equipamentos certificados.
                </p>
                <p className="mb-6 font-body text-muted-foreground">
                  Do skincare ao adeus à tatuagem, acreditamos que cada pessoa
                  merece um cuidado completo, personalizado e acolhedor.
                </p>
                <ul className="space-y-3 font-body">
                  {[
                    "Equipamentos com certificação ANVISA",
                    "Atendimento individualizado e humanizado",
                    "Ambiente clínico limpo, seguro e acolhedor",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4 font-body">
                {[
                  { num: "10+", label: "Anos de Experiência" },
                  { num: "98%", label: "Satisfação" },
                  { num: "15k+", label: "Sessões Realizadas" },
                  { num: "5k+", label: "Clientes" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-primary/10 p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-primary">{s.num}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
