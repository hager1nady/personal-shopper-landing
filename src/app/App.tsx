import { FadeUpGlobalStyles } from "../components/common/FadeUpGlobalStyles";
import { LanguageProvider } from "../i18n/LanguageContext";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Gallery } from "../components/sections/Gallery";
import { HowItWorks } from "../components/sections/HowItWorks";
import { ServicePolicy } from "../components/sections/ServicePolicy";
import { CustomerInfo } from "../components/sections/CustomerInfo";
import { SocialMedia } from "../components/sections/SocialMedia";
import { Testimonials } from "../components/sections/Testimonials";
import { FinalCta } from "../components/sections/FinalCta";

export default function App() {
  return (
    <LanguageProvider>
      <FadeUpGlobalStyles />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#5A0018] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}
      >
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <HowItWorks />
          <ServicePolicy />
          <CustomerInfo />
          <SocialMedia />
          <Testimonials />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
