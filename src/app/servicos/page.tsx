import ServicesBannerSection from "@/components/website/sections/service/ServicesBannerSection";
import ServicesCardGridSection from "@/components/website/sections/service/ServicesCardGridSection";
import ServicesCTASection from "@/components/website/sections/service/ServicesCTASection";
import ServicesFAQSection from "@/components/website/sections/service/ServicesFAQSection";
import ServicesParallaxSection from "@/components/website/sections/service/ServicesParallaxSection";
import ServicesProcessSection from "@/components/website/sections/service/ServicesProcessSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesBannerSection />
      <ServicesCardGridSection />
      <ServicesParallaxSection />
      <ServicesProcessSection />
      <ServicesFAQSection />
      <ServicesCTASection />
    </>
  );
}
