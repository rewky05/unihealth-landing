import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I no longer worry about carrying records — UniHealth keeps everything organized for me. It's made my doctor visits so much more efficient.",
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      rating: 5
    },
    {
      quote: "Having full history at my fingertips improves treatment accuracy. UniHealth has revolutionized how I practice medicine.",
      name: "Dr. Michael Chen", 
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      rating: 5
    }
  ];

  return (
    <section className="bg-background medical-section-padding" id="testimonials">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">What Our Users Say</h2>
          <p className="medical-section-subtitle">Trusted by patients and doctors worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="glass-card hover:shadow-xl transition-all duration-300" data-testid={`testimonial-${index}`}>
              <div className="flex text-primary mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
