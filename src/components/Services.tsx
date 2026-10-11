import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Wind, Cpu, Plane, Map, Wrench } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "UAV Structural Design",
    description: "Advanced composite structures engineered for strength, durability, and reduced weight."
  },
  {
    icon: <Wind className="w-8 h-8 text-accent" />,
    title: "CFD Simulation",
    description: "Aerodynamic simulations to optimize flight efficiency, stability, and performance."
  },
  {
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    title: "Drone AI & Vision",
    description: "AI-powered computer vision for human detection, obstacle awareness, and intelligent drone operations."
  },
  {
    icon: <Wrench className="w-8 h-8 text-secondary" />,
    title: "Drone Maintenance & Repair",
    description: "We diagnose, repair, and maintain drones for reliable performance."
  },
  {
    icon: <Plane className="w-8 h-8 text-secondary" />,
    title: "Drone Pilot Training",
    description: "Practical drone flight training to develop safe flying skills and operational confidence."
  },
  {
    icon: <Map className="w-8 h-8 text-secondary" />,
    title: "Drone Aerial Mapping & Surveying",
    description: "Accurate drone aerial mapping and surveying for land, farms, and infrastructure."
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
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formId = `service-request-${index}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Service request: ${service.title}`;
    const body = [
      `Service: ${service.title}`,
      `Customer name: ${formData.get('customerName')}`,
      `Customer email: ${formData.get('customerEmail')}`,
      `Drone make/model: ${formData.get('droneModel') || 'Not provided'}`,
      `Request details: ${formData.get('requestDetails')}`,
    ].join('\n');

    window.location.href =
      `mailto:contact@hangarchiefuas.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <motion.div
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

      <button
        type="button"
        aria-expanded={isFormOpen}
        aria-controls={formId}
        onClick={() => setIsFormOpen((isOpen) => !isOpen)}
        className="mt-6 rounded-lg border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-primary/20 hover:text-white"
      >
        {isFormOpen ? 'Close Request Form' : 'Request This Service'}
      </button>

      {isFormOpen && (
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 border-t border-white/10 pt-6"
        >
          <p className="text-sm text-zinc-400">
            Tell us what you need for {service.title}. Your email app will open
            with your request for you to review and send.
          </p>

          <label className="block text-sm text-zinc-300">
            Name
            <input
              name="customerName"
              autoComplete="name"
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-white"
            />
          </label>

          <label className="block text-sm text-zinc-300">
            Email
            <input
              name="customerEmail"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-white"
            />
          </label>

          <label className="block text-sm text-zinc-300">
            Drone make/model (optional)
            <input
              name="droneModel"
              className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-white"
            />
          </label>

          <label className="block text-sm text-zinc-300">
            How can we help?
            <textarea
              name="requestDetails"
              rows={4}
              required
              className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-white"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/80"
          >
            Continue to email
          </button>
        </form>
      )}

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
