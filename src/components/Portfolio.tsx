import { motion } from 'framer-motion';

type Specification = {
  label: string;
  value: string;
};

type Product = {
  id: string;
  name: string;
  image: string;
  video?: string;
  videoLink?: string; // Added field for an external video link (e.g. YouTube, Vimeo)
  description: string;
  specs: Specification[];
};

const products: Product[] = [
  {
    id: 'eagle-1',
    name: 'Eagle-1',
    image: '/images/eagle1.png', // Replace with your image path if local, e.g., '/eagle1.png'
    video: '/drone-flight.mp4',
    videoLink: 'https://www.youtube.com/watch?v=your-video-id', // Add your video link here
    description:
      'A high-endurance surveillance drone built for autonomous patrol and search and rescue. Equipped with real-time human detection and tracking technology, making it ideal for monitoring restricted zones.',
    specs: [
      { label: 'Max Takeoff Weight', value: '2300.0 g' },
      { label: 'Empty Weight', value: '100.0 kg' },
      { label: 'Max Payload', value: '100.0 kg' },
      { label: 'Flight Time (No Payload)', value: '15 minutes' },
      { label: 'Flight Time (Max Payload)', value: '10 minutes' },
      { label: 'Cruising Speed', value: '18 m/s' },
      { label: 'Max Speed', value: '23 m/s' },
      { label: 'Wind Resistance', value: '15 m/s (Continuous)' },
    ],
  },
  {
    id: 'black-eagle',
    name: 'Black Eagle',
    image: '/images/black_eagle2.png', // Replace with your image path if local, e.g., '/black_eagle2.png'
    videoLink: 'https://www.youtube.com/watch?v=your-video-id', // Add your video link here
    description:
      'A high-endurance surveillance drone built for autonomous patrol and search and rescue. Equipped with real-time human detection and tracking technology, making it ideal for monitoring restricted zones.',
    specs: [
      { label: 'Max Takeoff Weight', value: '2300.0 g' },
      { label: 'Empty Weight', value: '2.30.0 kg' },
      { label: 'Max Payload', value: '2.5 kg' },
      { label: 'Flight Time (No Payload)', value: '20 minutes' },
      { label: 'Flight Time (Max Payload)', value: '15 minutes' },
      { label: 'Cruising Speed', value: '20 m/s' },
      { label: 'Max Speed', value: '28 m/s' },
      { label: 'Wind Resistance', value: '15 m/s (Continuous)' },
    ],
  },
];

function ProductShowcase({ product }: { product: Product }) {
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
                className="px-6 py-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/20 rounded-lg transition-all font-medium"
              >
                Download Datasheet
              </button>
            </div>
          </motion.div>
        </div>

        {/* Flight video player: shown only for products with a local video file */}
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
                Your browser does not support video playback.{' '}
                <a href={product.video}>Download the flight video.</a>
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