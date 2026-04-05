import AnimatedSection from "../../template/AnimatedSection";
import { Clock, Heart, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomeWhyUsSection() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
              Por Que Nos Escolher
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Sua Segurança é Nossa Prioridade
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Segurança",
              desc: "Protocolos rigorosos e equipamentos certificados pela ANVISA",
            },
            {
              icon: Sparkles,
              title: "Tecnologia",
              desc: "Laser de última geração com resultados comprovados",
            },
            {
              icon: Clock,
              title: "Praticidade",
              desc: "Sessões rápidas com acompanhamento personalizado",
            },
            {
              icon: Heart,
              title: "Humanização",
              desc: "Atendimento acolhedor do início ao fim do tratamento",
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
