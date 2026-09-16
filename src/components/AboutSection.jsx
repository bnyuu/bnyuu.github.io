import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT = "TRANSFORMING COMPLEX DATA INTO ACTIONABLE AI SOLUTIONS. A BUSINESS INFORMATION TECHNOLOGY STUDENT SPECIALIZING IN MACHINE LEARNING AND PREDICTIVE ANALYTICS TO SOLVE REAL-WORLD CHALLENGES.";

export default function AboutSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const buttonsRef = useRef(null);

  const scrollTo = (id) => {
    if (onNavigate) {
      onNavigate(`#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray('.about-char', sectionRef.current);
      
      // Pin Section 2 to 100% Viewport and scrub through character typing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1400', // Scroll distance while pinned
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Kinetic Typing animation: character-by-character smooth lift and reveal
      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: 12,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.02,
          ease: 'power1.out',
        }
      );

      // Buttons smooth entrance when typing finishes
      tl.fromTo(
        buttonsRef.current,
        { 
          opacity: 0, 
          y: 32,
          scale: 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'power2.out',
        },
        '+=0.03'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = ABOUT_TEXT.split(' ');

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="about-section" 
      data-node-id="8:225" 
      data-name="Section-Subheadline"
    >
      <div ref={containerRef} className="about-content-container">
        <p className="about-text" data-node-id="8:264">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="about-word">
              {word.split('').map((char, charIdx) => (
                <span key={charIdx} className="about-char">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>

        <div 
          ref={buttonsRef}
          className="button-wrapper"
          data-node-id="8:266"
          data-name="Button-Wrapper"
        >
          <button 
            className="pill-button"
            data-node-id="8:267"
            onClick={() => scrollTo('works')}
          >
            <span data-node-id="8:268">View My Work</span>
          </button>

          <button 
            className="pill-button"
            data-node-id="8:269"
            onClick={() => scrollTo('contact')}
          >
            <span data-node-id="8:270">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
}
