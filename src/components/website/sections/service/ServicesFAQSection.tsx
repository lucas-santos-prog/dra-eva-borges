import React from "react";
import AnimatedSection from "../../template/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesFAQSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Dúvidas Frequentes
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mx-auto max-w-2xl font-body text-muted-foreground">
              Esclarecemos as dúvidas mais comuns. Para outras perguntas, fale
              conosco pelo WhatsApp.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              q: "Quantas sessões são necessárias?",
              a: "Em média, de 6 a 10 sessões com intervalos de 6 a 8 semanas, dependendo do caso.",
            },
            {
              q: "O procedimento dói?",
              a: "A sensação é similar a um estalo. Utilizamos resfriamento para máximo conforto.",
            },
            {
              q: "Fica cicatriz?",
              a: "Com profissionais qualificados e equipamentos adequados, não deixa cicatrizes.",
            },
            {
              q: "Removem micropigmentação?",
              a: "Sim! Sobrancelhas, lábios e outras áreas com a mesma segurança.",
            },
            {
              q: "Como funciona a limpeza de pele?",
              a: "Limpeza profunda com extração, hidratação e tonificação para pele renovada.",
            },
            {
              q: "Qual o valor?",
              a: "Cada caso é avaliado individualmente. Entre em contato para orçamento.",
            },
            {
              q: "É seguro?",
              a: "Todos os equipamentos possuem certificação ANVISA e seguimos protocolos rigorosos.",
            },
            {
              q: "Como agendar?",
              a: "Pelo WhatsApp! Clique em qualquer botão de agendamento neste site.",
            },
          ].map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Card className="h-full border-none shadow-soft">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-sm font-semibold">{faq.q}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {faq.a}
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
