import { motion } from 'framer-motion';
import { ArrowRight, Activity, Crosshair } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[120px]" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Introducing Eagle-1 System
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              Industrial-Grade <br />
              <span className="text-gradient">Autonomous Architecture</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
              An advanced surveillance drone capable of real-time human detection. Engineered for automated patrol, search and rescue operations, and precise human tracking in restricted zones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2 transition-all group">
                Explore Eagle-1
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-lg glass-card text-white font-medium hover:bg-white/5 transition-all">
                View Specifications
              </button>
            </div>
          </motion.div>

          {/* Right Content - Abstract Tech Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Drone wireframe placeholder / abstract UI */}
              <div className="absolute inset-0 glass-card border border-primary/20 rounded-full flex items-center justify-center">
                <div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-12 border border-zinc-800 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-20 border border-primary/10 border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
                
                {/* Center Core Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 flex items-center justify-center rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_30px_rgba(14,165,233,0.5)] bg-surface/50">
                  <img 
                    src="/eagle1.png" 
                    alt="Eagle-1 Drone" 
                    className="w-full h-full object-cover animate-[pulse_4s_ease-in-out_infinite]"
                  />
                </div>
                
                {/* Hovering Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 right-0 glass px-4 py-2 rounded-lg flex items-center gap-3 text-xs text-zinc-300 border-primary/30"
                >
                  <Crosshair className="w-4 h-4 text-accent" />
                  Target Lock Active
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 left-0 glass px-4 py-2 rounded-lg flex items-center gap-3 text-xs text-zinc-300 border-secondary/30"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  Telemetry: 100%
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
