import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Timeline />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
