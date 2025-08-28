import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background medical-section-padding">
      <div className="medical-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="medical-hero-title text-foreground">
                Unifying Health,<br />
                <span className="text-primary">One Record</span> at a Time
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                UniHealth bridges patients and doctors with a unified medical record system. Empower patients with control, and help doctors deliver faster, safer diagnoses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="medical-button-primary flex items-center justify-center space-x-2"
                data-testid="button-download-app"
              >
                <Apple className="w-5 h-5" />
                <span>Download App</span>
              </Button>
              <Button 
                className="medical-button-secondary"
                onClick={scrollToWaitlist}
                data-testid="button-join-waitlist"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center" data-testid="stat-records">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Records Unified</div>
              </div>
              <div className="text-center" data-testid="stat-doctors">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Doctors Connected</div>
              </div>
              <div className="text-center" data-testid="stat-diagnoses">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Faster Diagnoses</div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctors Image */}
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional medical team" 
              className="rounded-2xl medical-shadow w-full h-auto"
              data-testid="img-hero-doctors"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
