import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Award, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutOurValuesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Nossos Valores
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              O Que Nos Guia
            </h2>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Target,
              title: "Missão",
              desc: "Devolver a confiança e o cuidado que sua pele merece",
            },
            {
              icon: Heart,
              title: "Cuidado",
              desc: "Ética, transparência e atenção em cada detalhe",
            },
            {
              icon: Award,
              title: "Excelência",
              desc: "Tecnologia avançada e atualização constante",
            },
            {
              icon: Users,
              title: "Confiança",
              desc: "Relacionamento próximo do início ao fim",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group h-full border-none shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.desc}
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
