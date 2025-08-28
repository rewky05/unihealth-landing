import { Button } from "@/components/ui/button";
import { Apple, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background hero-section relative overflow-hidden">
      <div className="medical-container h-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Unifying Health,<br />
                <span className="text-primary">One Record</span> at a Time
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                UniHealth bridges patients and doctors with a unified medical record system. Empower patients with control, and help doctors deliver faster, safer diagnoses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="medical-button-primary flex items-center justify-center"
                data-testid="button-download-app"
              >
                <Apple className="w-5 h-5" />
                <span>Download App</span>
              </Button>
              <Button 
                className="medical-button-secondary flex items-center justify-center gap-2"
                onClick={scrollToWaitlist}
                data-testid="button-join-waitlist"
              >
                <Mail className="w-5 h-5" />
                <span>Join Waitlist</span>
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
          </motion.div>

          {/* Right Content - Doctors Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative h-full min-h-[500px] lg:min-h-[600px] lg:mr-[-2rem]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=900" 
                alt="Professional medical team" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                data-testid="img-hero-doctors"
              />
              
              {/* Glass Morphism Statistic Overlay */}
              <div className="absolute bottom-6 right-6 glass-card min-w-[200px]" data-testid="glass-stats-overlay">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">265K</div>
                  <div className="text-sm text-foreground font-medium">Patients Served</div>
                  <div className="flex items-center justify-center space-x-1 pt-1">
                    <div className="text-2xl font-bold text-primary">96%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
