import { Heart, Sparkles, Star } from "lucide-react";

export const clinicInterior: string = "/assets/clinic-interior.jpeg";
export const evaBorges: string = "/assets/dr-eva-borges.jpg";
export const happyPatient: string = "/assets/happy-patient.jpeg";
export const heroAbout: string = "/assets/hero-about.jpeg";
export const heroClinic: string = "/assets/hero-clinic.jpeg";
export const laserDevice: string = "/assets/laser-device.jpeg";
export const laserEquipment: string = "/assets/laser-equipment.jpeg";
export const skincareProducts: string = "/assets/skincare-products.jpeg";
export const teamClinic: string = "/assets/team-clinic.jpeg";
export const treatmentLaser: string = "/assets/treatment-laser.jpeg";

export const navLinks = [
  { path: "/", label: "Início" },
  { path: "/sobre", label: "Sobre" },
  { path: "/servicos", label: "Serviços" },
];

export const services = [
  {
    title: "Remoção de Tatuagem",
    description:
      "Tecnologia laser Q-Switched e Picosegundos para remoção segura e eficaz de tatuagens de qualquer tamanho e cor.",
    icon: Sparkles,
    features: [
      "Avaliação personalizada gratuita",
      "Resultados visíveis desde a 1ª sessão",
      "Sessões rápidas de 15 a 30 minutos",
      "Cuidados pós-tratamento orientados",
    ],
    whatsapp: "Olá, gostaria de mais informações sobre remoção de tatuagem.",
  },
  {
    title: "Remoção de Micropigmentação",
    description:
      "Correção e remoção de micropigmentação em sobrancelhas, lábios e outras áreas com precisão e delicadeza.",
    icon: Heart,
    features: [
      "Sobrancelhas, lábios e delineador",
      "Tratamento delicado e preciso",
      "Resultados naturais e seguros",
      "Acompanhamento completo",
    ],
    whatsapp:
      "Olá, gostaria de mais informações sobre remoção de micropigmentação.",
  },
  {
    title: "Limpeza de Pele Profissional",
    description:
      "Limpeza profunda que renova sua pele, removendo impurezas e promovendo uma aparência saudável e radiante.",
    icon: Star,
    features: [
      "Análise do tipo de pele",
      "Extração segura de comedões",
      "Hidratação e tonificação",
      "Orientação de skincare em casa",
    ],
    whatsapp: "Olá, gostaria de mais informações sobre limpeza de pele.",
  },
];

export const procedures = [
  {
    step: "01",
    title: "Consulta Inicial",
    desc: "Avaliamos seu caso e definimos o melhor plano de tratamento.",
  },
  {
    step: "02",
    title: "Procedimento",
    desc: "Realizamos o tratamento com segurança e tecnologia de ponta.",
  },
  {
    step: "03",
    title: "Acompanhamento",
    desc: "Monitoramos sua recuperação e ajustamos conforme necessário.",
  },
  {
    step: "04",
    title: "Resultado",
    desc: "Você sai com a pele renovada, confiante e segura.",
  },
];
