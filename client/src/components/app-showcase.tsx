import { Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppShowcase() {
  return (
    <section className="bg-background medical-section-padding">
      <div className="medical-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Phone Mockup */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-800 p-2 rounded-3xl medical-shadow">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="px-4 py-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Heart className="text-primary-foreground w-4 h-4" />
                        </div>
                        <span className="font-semibold">UniHealth</span>
                      </div>
                      <Bell className="text-muted-foreground w-5 h-5" />
                    </div>

                    {/* Calendar View */}
                    <div className="bg-muted rounded-xl p-4">
                      <h3 className="font-semibold mb-2">Upcoming Appointments</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40"
                            alt="Dr. Smith"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">Dr. Smith</div>
                            <div className="text-xs text-muted-foreground">Cardiology - 2:30 PM</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40"
                            alt="Dr. Johnson"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">Dr. Johnson</div>
                            <div className="text-xs text-muted-foreground">General - Tomorrow</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="medical-section-title text-foreground mb-4">Treatment is Easy with UniHealth</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience seamless healthcare management with our intuitive mobile app. Schedule appointments, access your medical records, and connect with healthcare providers all in one place.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                data-testid="button-app-store"
              >
                <i className="fab fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button 
                className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                data-testid="button-google-play"
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
