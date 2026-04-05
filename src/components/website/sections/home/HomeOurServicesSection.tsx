"use client";
import AnimatedSection from "../../template/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles, Star } from "lucide-react";

export default function HomeOurServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Nossos Serviços
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Cuidados Completos Para Sua Pele
            </h2>
            <p className="mx-auto max-w-2xl font-body text-muted-foreground">
              Escolha o serviço ideal e tire suas dúvidas diretamente pelo
              WhatsApp
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Sparkles,
              title: "Remoção de Tatuagem",
              desc: "Tecnologia laser avançada para remover tatuagens com segurança.",
              whatsapp:
                "Olá, gostaria de mais informações sobre remoção de tatuagem.",
            },
            {
              icon: Heart,
              title: "Remoção de Micropigmentação",
              desc: "Correção e remoção de micropigmentação com precisão e delicadeza.",
              whatsapp:
                "Olá, gostaria de mais informações sobre remoção de micropigmentação.",
            },
            {
              icon: Star,
              title: "Limpeza de Pele",
              desc: "Limpeza profunda para uma pele renovada, saudável e radiante.",
              whatsapp:
                "Olá, gostaria de mais informações sobre limpeza de pele.",
            },
            {
              icon: Shield,
              title: "Avaliação Gratuita",
              desc: "Agende sua avaliação sem compromisso e conheça o melhor tratamento.",
              whatsapp: "Olá, gostaria de agendar uma avaliação gratuita.",
            },
          ].map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group h-full border-none shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 font-body text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between rounded-full font-body"
                  >
                    <a
                      href={`https://wa.me/5511991198988?text=${encodeURIComponent(service.whatsapp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saber Mais
                      <ArrowRight className="h-4 w-4" />
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
