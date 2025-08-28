import { Shield, Lock, UserCheck } from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA & GDPR Compliant",
      description: "Full compliance with healthcare data protection regulations",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption", 
      description: "Military-grade encryption protects all your medical data",
      bgColor: "bg-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: UserCheck,
      title: "Patients Own Their Data",
      description: "You maintain complete control over your medical records",
      bgColor: "bg-secondary/50", 
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="bg-background medical-section-padding" id="security">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">Security & Compliance</h2>
          <p className="medical-section-subtitle">Your health data is protected with industry-leading security</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={feature.title} className="text-center space-y-4 glass-card hover:shadow-lg transition-all duration-300" data-testid={`security-feature-${index}`}>
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                <feature.icon className={`${feature.iconColor} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
