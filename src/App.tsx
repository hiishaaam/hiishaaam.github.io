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
import { NotFound } from './components/NotFound';

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const is404 = urlParams.has('404');
  const path = window.location.pathname;

  // Render 404 page if redirect caught from public/404.html or if the direct path isn't root
  if (is404 || (path !== '/' && path !== '/index.html')) {
    return <NotFound />;
  }

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
