import {} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">

            <img
              src="/images/hangar logo.png"
              alt="HangarChief UAS Logo"
              className="h-10 w-10 rounded-full object-cover drop-shadow-md"
            />

              <span className="font-bold text-lg tracking-wider text-white uppercase">HangarChief <span className="text-primary">UAS</span></span>
            </div>
            <a href="mailto:contact@hangarchiefuas.com" className="text-zinc-400 hover:text-primary transition-colors text-sm font-medium">
              contact@hangarchiefuas.com
            </a>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#tech" className="hover:text-primary transition-colors">Tech Stack</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} HangarChief UAS. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
