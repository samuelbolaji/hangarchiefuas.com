import { motion } from 'framer-motion';

const technologies = [
  {
    name: "ArduPilot",
    category: "Flight Control",
    description: "Robust, open-source autopilot software powering reliable autonomous flight."
  },
  {
    name: "PX4",
    category: "Autopilot Engine",
    description: "Industry-standard flight control stack tailored for advanced drone capabilities."
  },
  {
    name: "ROS / ROS 2",
    category: "Robotics Middleware",
    description: "Robot Operating System for complex sensor fusion, navigation, and state management."
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-surface/20 border-y border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Powered by <br/> <span className="text-primary">Industry Standards</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 mb-8"
            >
              We integrate the most reliable and advanced open-source software stacks to ensure mission-critical stability and customizability for enterprise clients.
            </motion.p>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`glass p-6 rounded-2xl border border-white/10 ${idx === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
              >
                <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{tech.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-zinc-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
