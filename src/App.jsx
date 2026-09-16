import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoreExpertise from './components/CoreExpertise';
import SelectedWorks from './components/SelectedWorks';
import FooterCTA from './components/FooterCTA';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Pause Lenis smooth scroll when fullscreen project view is active
  useEffect(() => {
    if (selectedProject) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [selectedProject]);

  const handleScrollTo = (target) => {
    if (target === '#about') {
      const trigger = ScrollTrigger.getById('about-trigger');
      const targetScroll = trigger ? trigger.end : document.getElementById('about')?.offsetTop;
      if (targetScroll !== undefined && lenisRef.current) {
        lenisRef.current.scrollTo(targetScroll, {
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        return;
      } else if (targetScroll !== undefined) {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        return;
      }
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3200);
  };

  const handleSelectExpertise = (expertise) => {
    setSelectedProject({
      title: expertise.title,
      category: expertise.category || 'Core Expertise Area',
      tagClass: 'tag-mono',
      summary: expertise.description,
      details: expertise.details || `Specialized focus in ${expertise.title} with industry standard methodologies, research-backed model architectures, and production-ready deployments.`,
      stack: expertise.stack || ['Python', 'Scikit-learn', 'IBM SPSS']
    });
  };

  return (
    <div className="app-container" data-node-id="4:147" data-name="Portfolio Website">
      {/* Floating Navigation */}
      <Navbar onNavigate={handleScrollTo} />

      {/* Hero Section - Dark with GSAP Typography Reveal */}
      <Hero onNavigate={handleScrollTo} />

      {/* About Section - Light with GSAP Word-by-Word Scroll Reveal */}
      <AboutSection onNavigate={handleScrollTo} />

      {/* Core Expertise Section - Cream with GSAP Parallax & Card Lift */}
      <CoreExpertise onSelectExpertise={handleSelectExpertise} />

      {/* Selected Works - Dark List View with GSAP Stagger Reveal */}
      <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

      {/* Footer CTA - Dark Massive Headline with GSAP Masked Reveal */}
      <FooterCTA onShowToast={showToast} />

      {/* Full Viewport Project Page View */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

      {/* Feedback Toast */}
      <Toast 
        message={toast.message} 
        visible={toast.visible} 
      />
    </div>
  );
}
