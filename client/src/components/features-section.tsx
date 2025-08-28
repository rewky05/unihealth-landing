import { FolderOpen, Share2, Shield, Bell, History, Gauge, AlertTriangle, Users } from "lucide-react";

export function FeaturesSection() {
  const patientFeatures = [
    {
      icon: FolderOpen,
      title: "Unified Records",
      description: "All medical records in one secure place"
    },
    {
      icon: Share2,
      title: "Easy Sharing", 
      description: "Share records with doctors instantly"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Access your health data anywhere, anytime"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss appointments or medications"
    }
  ];

  const doctorFeatures = [
    {
      icon: History,
      title: "Complete History",
      description: "Access complete patient medical history"
    },
    {
      icon: Gauge,
      title: "Efficient Workflow",
      description: "Streamlined diagnosis and treatment process"
    },
    {
      icon: AlertTriangle,
      title: "Reduced Errors",
      description: "Minimize medical errors with complete data"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Seamless collaboration with specialists"
    }
  ];

  return (
    <section className="bg-muted medical-section-padding" id="features">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">Features</h2>
          <p className="medical-section-subtitle">Powerful features for patients and doctors</p>
        </div>

        {/* For Patients */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Patients</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientFeatures.map((feature, index) => (
              <div key={feature.title} className="medical-card space-y-4" data-testid={`patient-feature-${index}`}>
                <div className="medical-feature-icon">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Doctors */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Doctors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorFeatures.map((feature, index) => (
              <div key={feature.title} className="medical-card space-y-4" data-testid={`doctor-feature-${index}`}>
                <div className="medical-feature-icon">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
