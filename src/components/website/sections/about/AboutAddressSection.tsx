import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { laserDevice } from "@/database/data";

export default function AboutAddressSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <img
                src={laserDevice}
                alt="Equipamento laser Eva Estetic"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <div>
              <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                Localização
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Onde Estamos
              </h2>
              <div className="space-y-4 font-body">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Serra de Bragança, 50 — Tatuapé, São Paulo, SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Horários</p>
                    <p className="text-muted-foreground">Seg–Sex: 8h às 19h</p>
                    <p className="text-muted-foreground">Sáb: 8h às 16h</p>
                    <p className="text-muted-foreground">Dom: Fechado</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 rounded-full font-body">
                <a
                  href="https://wa.me/5511991198988?text=Olá, vim pelo site e gostaria de agendar um horário."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Sua Visita
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
