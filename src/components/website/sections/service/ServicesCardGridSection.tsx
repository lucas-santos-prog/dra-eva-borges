import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/database/data";

export default function ServicesCardGridSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Tratamentos
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Escolha o Serviço Ideal
            </h2>
            <p className="mx-auto max-w-2xl font-body text-muted-foreground">
              Selecione o serviço que precisa e tire suas dúvidas diretamente
              pelo WhatsApp
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group relative h-full overflow-hidden border-none shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
                <CardHeader className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="font-body text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 font-body">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full rounded-full font-body">
                    <a
                      href={`https://wa.me/5511991198988?text=${encodeURIComponent(service.whatsapp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero Saber Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
