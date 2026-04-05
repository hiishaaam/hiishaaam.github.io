import { Navbar } from './components/Navbar';
import { PageLoader } from './components/PageLoader';
import HeroFloatingBadges from './components/HeroFloatingBadges';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LiveDemo } from './components/LiveDemo';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { IEDC } from './components/IEDC';
import { Testimonials } from './components/Testimonials';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-white">
      <PageLoader />
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroFloatingBadges />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <LiveDemo />
        <Services />
        <Experience />
        <IEDC />
        <Testimonials />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
