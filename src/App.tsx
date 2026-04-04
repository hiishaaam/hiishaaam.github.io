/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import HeroFloatingBadges from './components/HeroFloatingBadges';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <HeroFloatingBadges />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
