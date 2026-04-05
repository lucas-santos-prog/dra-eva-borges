"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { toast } from "sonner";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const msg = `Olá, meu nome é ${formData.name}, vim pelo website e gostaria de agendar um horário para o dia ${formData.date}. Meu telefone é ${formData.phone}.`;
    window.open(
      `https://wa.me/5511991198988?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    toast.success("Redirecionando para o WhatsApp...");
    setFormData({ name: "", phone: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-body text-sm">
          Seu Nome
        </Label>
        <Input
          id="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-full border-border bg-background font-body"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="font-body text-sm">
          WhatsApp
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="rounded-full border-border bg-background font-body"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date" className="font-body text-sm">
          Data Preferencial
        </Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="rounded-full border-border bg-background font-body"
          required
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <Button type="submit" className="w-full rounded-full font-body" size="lg">
        <Calendar className="mr-2 h-5 w-5" />
        Agendar via WhatsApp
      </Button>
      <p className="text-center font-body text-xs text-muted-foreground">
        Você será redirecionada ao WhatsApp para confirmar o agendamento.
      </p>
    </form>
  );
}
