import AnimatedSection from "../../template/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-primary" />
      <div className="container relative mx-auto px-4">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Conheça Nossos Serviços
            </h2>
            <p className="mb-8 font-body text-lg text-primary-foreground/80">
              Tratamentos personalizados para cada necessidade da sua pele
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full font-body shadow-medium"
            >
              <Link href="/servicos">Ver Serviços</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
