import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function HomeCTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-primary" />
      <div className="container relative mx-auto px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Pronta Para Cuidar da Sua Pele?
            </h2>
            <p className="mb-8 font-body text-lg text-primary-foreground/80">
              Agende sua consulta com a Dra. Eva Borges e comece sua
              transformação hoje
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full font-body shadow-medium"
            >
              <a
                href="https://wa.me/5511991198988?text=Olá, vim pelo site e gostaria de agendar um horário."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Pelo WhatsApp
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
