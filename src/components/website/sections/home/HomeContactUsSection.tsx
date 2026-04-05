import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import AppointmentForm from "../../forms/AppointmentForm";

export default function HomeContactUsSection() {
  return (
    <section id="agendamento" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <AnimatedSection>
            <div className="mb-8 text-center">
              <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                Agendamento
              </span>
              <h2 className="mb-4 text-3xl font-bold">Agende Sua Consulta</h2>
              <p className="font-body text-muted-foreground">
                Preencha seus dados e finalize pelo WhatsApp
              </p>
            </div>
            <Card className="border-none shadow-medium">
              <CardContent className="p-6 md:p-8">
                <AppointmentForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
