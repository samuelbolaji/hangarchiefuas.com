import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden border-primary/20">
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -mr-64 -mt-64" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-zinc-300 text-sm mb-8"
            >
              Founded 2025
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Pioneering the Future of <br className="hidden md:block"/>
              <span className="text-gradient">Industrial Autonomy</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-zinc-400"
            >
              <p>
                At HangarChief UAS, our mission is to redefine what's possible with industrial-grade autonomous systems. Born from a necessity for uncompromising reliability in extreme conditions, we engineer solutions that simply don't quit.
              </p>
              <p>
                We bridge the gap between cutting-edge AI and heavy-duty aerospace engineering. From advanced structural designs to the neural networks interpreting complex visual data at the edge, every component is purpose-built for the demands of the modern industrial landscape.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <button className="px-8 py-4 rounded-lg bg-white text-background font-bold hover:bg-zinc-200 transition-colors">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
