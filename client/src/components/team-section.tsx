import { Star } from "lucide-react";

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
    <section className="bg-background medical-section-padding" id="team">
      <div className="medical-container">
        <div className="text-center mb-16">
          <h2 className="medical-section-title text-foreground">Highly Qualified Team</h2>
          <p className="medical-section-subtitle">Meet our highly qualified doctors</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="text-center space-y-4" data-testid={`team-member-${index}`}>
              <img 
                src={member.image}
                alt={member.name}
                className="medical-team-photo mx-auto"
                data-testid={`img-${member.name.toLowerCase().replace(' ', '-')}`}
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({member.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
