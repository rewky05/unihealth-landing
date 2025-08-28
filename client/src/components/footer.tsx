import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="medical-container">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand + blurb + contact */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Heart className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="text-2xl font-bold">UniHealth</span>
            </div>
            <p className="text-background/70 max-w-md">
              Empowering patients and healthcare providers with unified medical records. Secure, accessible, and
              patient-owned healthcare data management.
            </p>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3"><Mail size={18} /> <span>support@unihealth.com</span></div>
              <div className="flex items-center gap-3"><Phone size={18} /> <span>1-800-UNIHEALTH</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} /> <span>Cebu City, Cebu, Philippines</span></div>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:col-span-3">
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li><a className="hover:text-background transition-colors" href="#features">Features</a></li>
                <li><a className="hover:text-background transition-colors" href="#how">How it Works</a></li>
                <li><a className="hover:text-background transition-colors" href="#security">Security</a></li>
                <li><a className="hover:text-background transition-colors" href="#pricing">Pricing</a></li>
                <li><a className="hover:text-background transition-colors" href="#api">API Documentation</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li><a className="hover:text-background transition-colors" href="#about">About Us</a></li>
                <li><a className="hover:text-background transition-colors" href="#careers">Careers</a></li>
                <li><a className="hover:text-background transition-colors" href="#press">Press Kit</a></li>
                <li><a className="hover:text-background transition-colors" href="#blog">Blog</a></li>
                <li><a className="hover:text-background transition-colors" href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-background/70">
                <li><a className="hover:text-background transition-colors" href="#privacy">Privacy Policy</a></li>
                <li><a className="hover:text-background transition-colors" href="#terms">Terms of Service</a></li>
                <li><a className="hover:text-background transition-colors" href="#hipaa">HIPAA Notice</a></li>
                <li><a className="hover:text-background transition-colors" href="#cookie">Cookie Policy</a></li>
                <li><a className="hover:text-background transition-colors" href="#compliance">Compliance</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><a className="hover:text-background transition-colors" href="#help">Help Center</a></li>
                <li><a className="hover:text-background transition-colors" href="#faq">FAQ</a></li>
                <li><a className="hover:text-background transition-colors" href="#support">Contact Support</a></li>
                <li><a className="hover:text-background transition-colors" href="#status">System Status</a></li>
                <li><a className="hover:text-background transition-colors" href="#reports">Security Reports</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-10" />

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h5 className="text-lg font-semibold">Stay Updated</h5>
            <p className="text-background/70 max-w-2xl">Get the latest updates on UniHealth features and healthcare technology.</p>
          </div>
          <form className="w-full max-w-xl flex gap-3">
            <Input type="email" placeholder="Enter your email" className="bg-background/10 border-background/20 text-background placeholder:text-background/50" />
            <Button className="bg-primary text-primary-foreground px-6">Subscribe</Button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-background/70">© 2024 UniHealth. All rights reserved. | HIPAA Compliant | SOC 2 Certified</p>
          <div className="flex items-center gap-4">
            <a aria-label="Twitter" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors" href="#"><Twitter size={18} /></a>
            <a aria-label="LinkedIn" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors" href="#"><Linkedin size={18} /></a>
            <a aria-label="Instagram" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors" href="#"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
