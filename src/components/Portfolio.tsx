import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import eagle1Image from '../../images/eagle1.png';
import blackEagleImage from '../../images/black_eagle2.png';

type Specification = {
  label: string;
  value: string;
};

type Product = {
  id: string;
  name: string;
  image: string;
  video?: string;
  description: string;
  specs: Specification[];
};

const products: Product[] = [
  {
    id: 'eagle-1',
    name: 'Eagle-1',
    image: eagle1Image,
    video: '/videos/11%20October%202026.publer.com.mp4',
    description:
      'A high-endurance surveillance drone built for autonomous patrol and search and rescue. Equipped with real-time human detection and tracking technology, making it ideal for monitoring restricted zones.',
    specs: [
      
      { label: 'Max Takeoff Weight', value: '1.6 kg' },
      { label: 'Empty Weight', value: '1. kg' },
      { label: 'Max Payload', value: '600 g ' },
      { label: 'Flight Time (No Payload)', value: '10–15 minutes ' },
      { label: 'Flight Time (Max Payload)', value: '7–10 minutes' },
      { label: 'Cruising Speed', value: 'Not yet tested' },
      { label: 'Max Speed', value: 'Not yet tested' },
      { label: 'Wind Resistance', value: 'Not yet tested' },
    ],
  },
  {
    id: 'black-eagle',
    name: 'Black Eagle',
    image: blackEagleImage,
    description:
      'A high-endurance surveillance drone built for autonomous patrol and search and rescue. Equipped with real-time human detection and tracking technology, making it ideal for monitoring restricted zones.',
    specs: [
            
      { label: 'Max Takeoff Weight', value: '4.0 kg' },
      { label: 'Empty Weight', value: '2.7 kg' },
      { label: 'Max Payload', value: '1.3 kg ' },
      { label: 'Flight Time (No Payload)', value: '18–27 minutes' },
      { label: 'Flight Time (Max Payload)', value: '8–13 minutes' },
      { label: 'Cruising Speed', value: 'Not yet tested' },
      { label: 'Max Speed', value: 'Not yet tested' },
      { label: 'Wind Resistance', value: 'Not yet tested' },

    ],
  },
];

function ProductShowcase({ product }: { product: Product }) {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const orderFormId = `${product.id}-order-form`;

  function handleOrderSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = `Order request: ${product.name}`;
    const body = [
      `Product: ${product.name}`,
      `Customer name: ${formData.get('customerName')}`,
      `Customer email: ${formData.get('customerEmail')}`,
      `Quantity: ${formData.get('quantity')}`,
      `Delivery notes: ${formData.get('deliveryNotes') || 'None'}`,
    ].join('\n');

    window.location.href =
      `mailto:contact@hangarchiefuas.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id={product.id} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

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
            {product.name}{' '}
            <span className="text-zinc-500 font-light">
              | Advanced Surveillance Platform
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            {product.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 text-zinc-600 font-mono tracking-widest opacity-20 rotate-90 md:rotate-0 text-6xl md:text-8xl font-bold select-none flex items-center justify-center pointer-events-none"
              >
                {product.name.toUpperCase()}
              </div>

              <img
                src={product.image}
                alt={`${product.name} Advanced Surveillance Platform`}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_0_40px_rgba(14,165,233,0.3)]"
              />

              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute inset-8 border border-white/5 rounded-2xl pointer-events-none"
              >
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/50" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/50" />
              </div>

              {/* Scanning line */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_10px_rgba(14,165,233,0.8)] animate-[slide_4s_ease-in-out_infinite] pointer-events-none"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
          </motion.div>

          {/* Technical specifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 sm:p-8 border-white/10 min-w-0"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full inline-block shrink-0" />
              Technical Specifications
            </h3>

            <dl className="divide-y divide-white/5">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-4 flex justify-between items-center gap-4 group"
                >
                  <dt className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {spec.label}
                  </dt>
                  <dd className="text-white font-mono font-medium text-sm md:text-base text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                Status: Production Ready
              </span>

              <button
                type="button"
                aria-expanded={isOrderFormOpen}
                aria-controls={orderFormId}
                onClick={() => setIsOrderFormOpen((isOpen) => !isOpen)}
                className="px-6 py-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/20 rounded-lg transition-all font-medium"
              >
                {isOrderFormOpen ? 'Close Order Form' : 'Place Order'}
              </button>
            </div>

            {isOrderFormOpen && (
              <form
                id={orderFormId}
                onSubmit={handleOrderSubmit}
                className="mt-6 space-y-4 border-t border-white/5 pt-6"
              >
                <p className="text-sm text-zinc-400">
                  Send an order request for {product.name}. Your email app will open
                  with the details; review and send the message to submit your request.
                  Payment is arranged separately.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <label className="block text-sm text-zinc-300">
                  Quantity
                  <input
                    name="quantity"
                    type="number"
                    min="1"
                    step="1"
                    defaultValue="1"
                    required
                    className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-white"
                  />
                </label>

                <label className="block text-sm text-zinc-300">
                  Delivery notes (optional)
                  <textarea
                    name="deliveryNotes"
                    rows={3}
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
          </motion.div>
        </div>

        {product.video && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              {product.name} in Flight
            </h3>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster={product.image}
                aria-label={`${product.name} flight demonstration`}
                className="block w-full aspect-video object-contain"
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        )}

        {/* External Video Link Section (e.g. YouTube/Vimeo link)
        {product.videoLink && (
          <div className="mt-6 text-center">
            <a
              href={product.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:text-white transition-all font-medium text-sm"
            >

              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio">
      {products.map((product) => (
        <ProductShowcase key={product.id} product={product} />
      ))}
    </div>
  );
}
