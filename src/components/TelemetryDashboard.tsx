import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, MapPin, Signal, Compass, Gauge, AlertTriangle } from 'lucide-react';

export default function TelemetryDashboard() {
  const [alt, setAlt] = useState(120.5);
  const [speed, setSpeed] = useState(18.2);
  const [heading, setHeading] = useState(45);

  // Simulate changing telemetry data
  useEffect(() => {
    const interval = setInterval(() => {
      setAlt(prev => prev + (Math.random() * 0.4 - 0.2));
      setSpeed(prev => Math.max(0, prev + (Math.random() * 1.0 - 0.5)));
      setHeading(prev => (prev + (Math.random() * 2 - 1)) % 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
      {/* Neon glowing grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e911_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e911_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">GCS Telemetry Interface</h2>
          <p className="text-zinc-400">Real-time edge monitoring mockup</p>
        </div>

        {/* Dashboard Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0c] border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)] font-mono"
        >
          {/* Header Bar */}
          <div className="bg-surface border-b border-primary/20 px-6 py-3 flex justify-between items-center text-xs uppercase tracking-widest text-zinc-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> SYS.ONLINE</span>
              <span>UAV ID: EGL-1.A</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Signal className="w-4 h-4 text-emerald-500" /> 98%</span>
              <span className="flex items-center gap-2"><Battery className="w-4 h-4 text-emerald-500" /> 84% (48.2V)</span>
              <span>23:42:15 UTC</span>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="grid md:grid-cols-3 gap-[1px] bg-primary/20">
            
            {/* Panel 1: Primary Flight Display (Mockup) */}
            <div className="bg-[#0a0a0c] p-6 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                 {/* Artificial Horizon Lines */}
                 <div className="w-full h-[1px] bg-primary absolute top-1/2" />
                 <div className="w-[1px] h-full bg-primary absolute left-1/2" />
                 <div className="w-32 h-32 rounded-full border border-primary absolute" />
                 <div className="w-48 h-48 rounded-full border border-primary/50 absolute" />
               </div>
               
               <Compass className="w-16 h-16 text-primary mb-6 relative z-10" style={{ transform: `rotate(${heading}deg)` }} />
               <div className="text-4xl font-light text-white tracking-wider relative z-10">
                 {heading.toFixed(1)}°
               </div>
               <div className="text-primary text-xs mt-2 uppercase tracking-widest relative z-10">Heading (HDG)</div>
            </div>

            {/* Panel 2: Telemetry Stats */}
            <div className="bg-[#0a0a0c] p-6 flex flex-col justify-center space-y-8">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-accent" /> Airspeed
                  </div>
                  <div className="text-3xl text-white font-light">{speed.toFixed(1)}</div>
                </div>
                <div className="text-accent text-sm pb-1">m/s</div>
              </div>
              
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500" /> Altitude (MSL)
                  </div>
                  <div className="text-3xl text-white font-light">{alt.toFixed(2)}</div>
                </div>
                <div className="text-emerald-500 text-sm pb-1">meters</div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-zinc-400" /> GPS Coordinates
                  </div>
                  <div className="text-lg text-white font-light tracking-wider">34.0522° N, 118.2437° W</div>
                </div>
              </div>
            </div>

            {/* Panel 3: System Status */}
            <div className="bg-[#0a0a0c] p-6 flex flex-col">
              <div className="text-xs text-zinc-500 uppercase tracking-widest mb-6">Subsystem Diagnostics</div>
              
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-300">Flight Controller (PX4)</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">NOMINAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-300">Vision System (ROS 2)</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">NOMINAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-300">Payload Bay</span>
                  <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-1 rounded border border-amber-500/20">SECURED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-300">Motor ESCs</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">SYNCED</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-red-500/5 border border-red-500/20 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                <div className="text-xs text-red-400/80">
                  <span className="text-red-500 font-bold block mb-1">WARNING: High Wind Shear Detected</span>
                  Altitude hold may experience micro-fluctuations. Proceed with caution.
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
