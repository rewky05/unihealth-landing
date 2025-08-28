import { PhoneCall, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sophia Taylor",
      role: "Chief Medical Officer", 
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      rating: 4.9
    },
    {
      name: "Jane Thomas",
      role: "Internal Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      rating: 4.8
    },
    {
      name: "Mike Look", 
      role: "Cardiology Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      rating: 5.0
    }
  ];

  return (
    <section className="bg-background py-24" id="team">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">Highly Qualified Team</h2>
          <p className="medical-section-subtitle">Meet our highly qualified doctors</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="rounded-2xl bg-muted/30 p-5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`team-member-${index}`}
            >
              <div className="relative bg-white/50 rounded-2xl p-4">
                <div className="rounded-2xl bg-muted/40 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-56 w-full max-w-[260px] object-cover rounded-2xl"
                    data-testid={`img-${member.name.toLowerCase().replace(' ', '-')}`}
                  />
                </div>

                {/* name badge over image bottom */}
                <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 bg-white rounded-full shadow-sm px-4 py-1.5 text-sm font-medium text-foreground">
                  {member.name}
                </div>
              </div>

              {/* footer */}
              <div className="mt-8 flex items-center justify-between">
                <div className="text-left">
                  <div className="font-semibold text-foreground">{member.name}</div>
                  <div className="text-muted-foreground text-sm">{member.role}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="icon" aria-label="Call">
                    <PhoneCall className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" aria-label="Video call">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" aria-label="Message">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
