import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import banuHeroImg from '../assets/images/Image-Banu-Hero.png';
import { Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FooterCTA({ onShowToast }) {
  const footerRef = useRef(null);
  const portraitRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const emailPillRef = useRef(null);
  const linkedinPillRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline lines stagger reveal
      gsap.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Portrait lift entrance
      gsap.fromTo(
        portraitRef.current,
        { opacity: 0, y: 70, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Action pills pop entrance with spring bounce
      gsap.fromTo(
        emailPillRef.current,
        { opacity: 0, scale: 0.6, rotate: -20 },
        {
          opacity: 1,
          scale: 1,
          rotate: -8,
          duration: 0.9,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo(
        linkedinPillRef.current,
        { opacity: 0, scale: 0.6, rotate: 20 },
        {
          opacity: 1,
          scale: 1,
          rotate: 6,
          duration: 0.9,
          delay: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Bottom bar reveal
      gsap.fromTo(
        bottomBarRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bottomBarRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'bkuncoro701@gmail.com';
    navigator.clipboard.writeText(email);

    // Fire confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#b8ffff', '#e8fea7', '#feafaf', '#ffffff']
    });

    if (onShowToast) {
      onShowToast('Email copied to clipboard! (bkuncoro701@gmail.com)');
    }

    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 800);
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/muh-banu-kuncoro-07a892325/', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer 
      ref={footerRef}
      id="contact" 
      className="footer-cta-section" 
      data-node-id="18:621" 
      data-name="Section-Subheadline"
    >
      <div className="footer-layout-row" data-node-id="19:646" data-name="Title-Wrapper">
        {/* Left Side: Banu Cutout Portrait sitting at the bottom */}
        <div 
          ref={portraitRef}
          className="footer-portrait-col" 
          data-node-id="19:644" 
          data-name="Image-Banu-Hero"
        >
          <img 
            src={banuHeroImg} 
            alt="Muh. Banu Hary Kuncoro" 
            className="footer-side-img"
          />
        </div>

        {/* Right Side: Massive Left-Aligned Headline + Action Pills */}
        <div className="footer-text-cta-col">
          <h2 
            className="footer-side-title" 
            data-node-id="18:622"
          >
            <span ref={line1Ref} style={{ display: 'block' }}>LET'S BUILD</span>
            <span ref={line2Ref} style={{ display: 'block' }}>INTELLIGENT</span>
            <span ref={line3Ref} style={{ display: 'block' }}>SOLUTIONS.</span>
          </h2>

          {/* Action Pills below SOLUTIONS. */}
          <div className="footer-side-pills-wrap">
            <div 
              ref={emailPillRef}
              className="pill-anim-wrap pill-left-tilt" 
              data-node-id="19:647"
            >
              <button 
                type="button"
                className="massive-pill-btn"
                onClick={handleEmailClick}
                data-node-id="19:648"
                title="Click to copy email and connect"
              >
                Email
              </button>
            </div>

            <div 
              ref={linkedinPillRef}
              className="pill-anim-wrap pill-right-tilt" 
              data-node-id="19:652"
            >
              <button 
                type="button"
                className="massive-pill-btn"
                onClick={handleLinkedinClick}
                data-node-id="19:653"
                title="Open LinkedIn profile"
              >
                Linkedin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div ref={bottomBarRef} className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} Muh. Banu Hary Kuncoro. All rights reserved.</p>
        
        <div className="footer-social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muh-banu-kuncoro-07a892325/" target="_blank" rel="noreferrer" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:bkuncoro701@gmail.com" className="footer-social-link">
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
