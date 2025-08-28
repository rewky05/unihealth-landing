import { motion } from "framer-motion";
import aprilImg from "../../../attached_assets/april.png";
import matImg from "../../../attached_assets/mat.png";
import melImg from "../../../attached_assets/mel.jpg";

type Developer = {
  name: string;
  role: string;
  image: string;
};

export function DevelopersSection() {
  const developers: Developer[] = [
    {
      name: "Gian Mathew Gutang",
      role: "UI / UX Designer",
      image: matImg,
    },
    {
      name: "Mel Angelo Cortes",
      role: "Software Engineer",
      image: melImg,
    },
    {
      name: "April Marie Rosales",
      role: "Backend Engineer",
      image: aprilImg,
    },
  ];

  return (
    <section className="bg-background py-24" id="developers">
      <div className="medical-container">
        <div className="text-center mb-12">
          <h2 className="medical-section-title text-foreground">Developers</h2>
          <p className="medical-section-subtitle">Meet the people building UniHealth</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              className="medical-card text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">{dev.name}</h3>
                <p className="text-muted-foreground">{dev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


