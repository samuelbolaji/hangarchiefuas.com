import { motion } from 'framer-motion';

const specs = [
  { label: "Max Takeoff Weight", value: "25.0 kg" },
  { label: "Empty Weight", value: "12.5 kg" },
  { label: "Max Payload", value: "10.0 kg" },
  { label: "Flight Time (No Payload)", value: "120 minutes" },
  { label: "Flight Time (Max Payload)", value: "45 minutes" },
  { label: "Cruising Speed", value: "18 m/s" },
  { label: "Max Speed", value: "28 m/s" },
  { label: "Wind Resistance", value: "15 m/s (Continuous)" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
          >
            Project Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Eagle-1 <span className="text-zinc-500 font-light">| Advanced Surveillance Platform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            A high-endurance surveillance drone built for autonomous patrol and search and rescue. Equipped with real-time human detection and tracking technology, making it ideal for monitoring restricted zones.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image / Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center p-8">
               <div className="absolute inset-0 text-zinc-600 font-mono tracking-widest opacity-20 rotate-90 md:rotate-0 text-6xl md:text-8xl font-bold select-none flex items-center justify-center pointer-events-none">
                 EAGLE-1
               </div>
               <img 
                 src="/eagle1.png" 
                 alt="Eagle-1 Advanced Surveillance Platform" 
                 className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_0_40px_rgba(14,165,233,0.3)]"
               />
               {/* Abstract geometric frame of a drone */}
               <div className="absolute inset-8 border border-white/5 rounded-2xl">
                 <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
                 <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50" />
                 <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/50" />
                 <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/50" />
               </div>
               
               {/* Scanning line animation */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_10px_rgba(14,165,233,0.8)] animate-[slide_4s_ease-in-out_infinite]" />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </motion.div>

          {/* Right: Technical Specs Table */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full inline-block" />
              Technical Specifications
            </h3>
            
            <div className="divide-y divide-white/5">
              {specs.map((spec, idx) => (
                <div key={idx} className="py-4 flex justify-between items-center group">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-white font-mono font-medium text-sm md:text-base">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
               <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Status: Production Ready</span>
               <button className="px-6 py-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/20 rounded-lg transition-all font-medium">
                 Download Datasheet
               </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
