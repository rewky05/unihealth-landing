import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="medical-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="text-xl font-bold">UniHealth</span>
            </div>
            <p className="text-background/70">Unifying Health, One Record at a Time</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
                data-testid="footer-link-features"
              >
                Features
              </button>
              <button 
                onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
                data-testid="footer-link-security"
              >
                Security
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors text-left"
                data-testid="footer-link-testimonials"
              >
                Testimonials
              </button>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors" data-testid="footer-link-privacy">Privacy Policy</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors" data-testid="footer-link-terms">Terms of Service</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors" data-testid="footer-link-hipaa">HIPAA Compliance</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors" data-testid="footer-link-contact">Contact Us</a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: 'hsl(var(--background) / 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.1)'}
                data-testid="social-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: 'hsl(var(--background) / 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.1)'}
                data-testid="social-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: 'hsl(var(--background) / 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--background) / 0.1)'}
                data-testid="social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">&copy; 2024 UniHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
