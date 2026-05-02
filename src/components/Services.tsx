import { motion } from 'framer-motion';
import { PenTool, Wind, Cpu } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "UAV Structural Design",
    description: "Advanced composite structures engineered for maximum payload capacity and minimal weight, ensuring durability in extreme industrial environments."
  },
  {
    icon: <Wind className="w-8 h-8 text-accent" />,
    title: "CFD Simulation",
    description: "High-fidelity Computational Fluid Dynamics simulating real-world aerodynamics to optimize flight efficiency, thermal management, and high-speed stability."
  },
  {
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    title: "Drone AI & Vision",
    description: "Integration of edge computing and computer vision models for real-time autonomous navigation, obstacle avoidance, and intelligent payload processing."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Engineering Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Delivering comprehensive aerospace solutions from structural conception to intelligent autonomous operation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle bottom border glow on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
