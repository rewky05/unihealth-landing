import { Download, RefreshCw, UserPlus, Heart } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "Patient downloads UniHealth from App Store or Google Play"
    },
    {
      icon: RefreshCw,
      title: "Sync Records", 
      description: "Medical history securely synced and unified in one place"
    },
    {
      icon: UserPlus,
      title: "Doctor Access",
      description: "Doctor accesses complete records instantly with patient permission"
    },
    {
      icon: Heart,
      title: "Better Care",
      description: "Faster, more accurate diagnosis and treatment"
    }
  ];

  return (
    <section className="bg-muted medical-section-padding" id="how-it-works">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">How UniHealth Works</h2>
          <p className="medical-section-subtitle max-w-2xl mx-auto">
            Simple steps to unified healthcare records
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center space-y-4" data-testid={`step-${index + 1}`}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <step.icon className="text-primary-foreground w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
