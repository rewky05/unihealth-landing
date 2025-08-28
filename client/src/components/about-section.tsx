import { Eye, Brain, Heart, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-muted medical-section-padding" id="about">
      <div className="medical-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="medical-section-title text-foreground">We provide a wide range of medical services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UniHealth is the Unified Patient Medical Record system designed to connect patients and doctors seamlessly. With UniHealth, patients own their medical history, while doctors gain reliable insights for better decisions.
            </p>
            
            <div className="space-y-8 pt-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Preparing your Future</h3>
                <p className="text-muted-foreground">
                  We treat each patient as family, providing comprehensive and compassionate healthcare services tailored to your individual needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Achieving Your Vision</h3>
                <p className="text-muted-foreground">
                  Planning for retirement is essential to your long-term financial well-being. Prioritize our experienced team collaborates with you to identify your personalized health goals and develop optimal solutions.
                </p>
              </div>
            </div>

            {/* Service Icons */}
            <div className="flex space-x-12 pt-8">
              <div className="text-center" data-testid="service-dental">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'hsl(var(--primary) / 0.1)'}}>
                  <Heart className="text-primary w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Dental Care</span>
              </div>
              <div className="text-center" data-testid="service-neurology">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'hsl(var(--primary) / 0.1)'}}>
                  <Brain className="text-primary w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Neurology</span>
              </div>
              <div className="text-center" data-testid="service-ophthalmology">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'hsl(var(--primary) / 0.1)'}}>
                  <Eye className="text-primary w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Ophthalmology</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
              alt="Professional doctor consultation"
              className="rounded-2xl medical-shadow w-full h-auto"
              data-testid="img-about-doctor"
            />
            
            {/* Profile Badge with Glass Morphism */}
            <div className="absolute bottom-6 left-6 glass-card">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
                  alt="Dr. John Smith"
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-profile-badge"
                />
                <div>
                  <div className="font-semibold text-sm text-foreground">John</div>
                  <div className="text-xs text-muted-foreground">Medical Director</div>
                  <div className="flex text-primary text-xs mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
