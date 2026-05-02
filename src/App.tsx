import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TelemetryDashboard from './components/TelemetryDashboard';
import TechStack from './components/TechStack';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TelemetryDashboard />
        <TechStack />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
