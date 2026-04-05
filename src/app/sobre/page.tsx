import AboutAddressSection from "@/components/website/sections/about/AboutAddressSection";
import AboutBannerSection from "@/components/website/sections/about/AboutBannerSection";
import AboutCTASection from "@/components/website/sections/about/AboutCTASection";
import AboutHistorySection from "@/components/website/sections/about/AboutHistorySection";
import AboutOurValuesSection from "@/components/website/sections/about/AboutOurValuesSection";
import AboutParallaxSection from "@/components/website/sections/about/AboutParallaxSection";

export default function AboutPage() {
  return (
    <>
      <AboutBannerSection />
      <AboutHistorySection />
      <AboutParallaxSection />
      <AboutOurValuesSection />
      <AboutAddressSection />
      <AboutCTASection />
    </>
  );
}
