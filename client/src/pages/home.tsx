import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { TeamSection } from "@/components/team-section";
import { AboutSection } from "@/components/about-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { AppShowcase } from "@/components/app-showcase";
import { FeaturesSection } from "@/components/features-section";
import { SecuritySection } from "@/components/security-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { DevelopersSection } from "@/components/developers-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <AboutSection />
      <HowItWorksSection />
      <AppShowcase />
      <FeaturesSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
