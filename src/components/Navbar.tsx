import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/hangar_logo.png" alt="HangarChief UAS Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md" />
            <span className="font-bold text-xl md:text-2xl tracking-wider text-white uppercase">HangarChief <span className="text-primary">UAS</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hover:text-shadow-sm"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:contact@hangarchiefuas.com"
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 text-white text-sm font-medium transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:contact@hangarchiefuas.com"
              className="block w-full mt-4 px-5 py-3 rounded-lg bg-primary/20 border border-primary/50 text-white font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
