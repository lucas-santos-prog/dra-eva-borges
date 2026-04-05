import HomeAboutMeSection from "@/components/website/sections/home/HomeAboutMeSection";
import HomeContactUsSection from "@/components/website/sections/home/HomeContactUsSection";
import HomeCTASection from "@/components/website/sections/home/HomeCTASection";
import HomeHeroSection from "@/components/website/sections/home/HomeHeroSection";
import HomeOurServicesSection from "@/components/website/sections/home/HomeOurServicesSection";
import HomeTestimonialsSection from "@/components/website/sections/home/HomeTestimonialsSection";
import HomeWhyUsSection from "@/components/website/sections/home/HomeWhyUsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeOurServicesSection />
      <HomeAboutMeSection />
      <HomeWhyUsSection />
      <HomeTestimonialsSection />
      <HomeCTASection />
      <HomeContactUsSection />
    </>
  );
}
