import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import banuHeroImg from '../assets/images/Image-Banu-Hero.png';

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subLeftRef = useRef(null);
  const subRightRef = useRef(null);
  const mobileSubRef = useRef(null);
  const imageRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Title lines stagger reveal
      tl.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, delay: 0.1 }
      );

      // Flanking and Mobile Subtitles reveal
      tl.fromTo(
        [subLeftRef.current, subRightRef.current, mobileSubRef.current],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        '-=0.7'
      );

      // Banu Cutout Portrait entrance
      tl.fromTo(
        imageRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.9'
      );

      // Scroll Indicator entrance
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    if (onNavigate) {
      onNavigate('#about');
    } else {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef} data-node-id="8:151" data-name="Hero">
      {/* Ambient subtle light glow */}
      <div className="hero-ambient-glow" />

      {/* Unified Hero Cluster: title and photo directly chained with negative margin */}
      <div className="hero-content-cluster" data-node-id="8:238" data-name="Title-Wrapper">
        <div className="hero-title-wrapper">
          <div className="hero-main-title" data-node-id="8:152">
            <span ref={title1Ref}>BANU</span>
            <span ref={title2Ref}>KUNCORO</span>
          </div>

          {/* Centered Subtitle for Mobile */}
          <p
            ref={mobileSubRef}
            className="hero-mobile-sub"
            data-node-id="8:210"
          >
            DATA SCIENCE & AI ENTHUSIAST
          </p>
        </div>

        {/* Desktop Flanking Subtitles: Left & Right */}
        <div 
          ref={subLeftRef}
          className="hero-sub-flank hero-sub-left desktop-flank"
          data-node-id="8:210"
        >
          DATA SCIENCE &
        </div>

        <div 
          ref={subRightRef}
          className="hero-sub-flank hero-sub-right desktop-flank"
          data-node-id="8:211"
        >
          AI ENTHUSIAST
        </div>

        {/* Hero Cutout Portrait in foreground overlapping the word KUNCORO */}
        <div 
          ref={imageRef}
          className="hero-image-wrapper" 
          data-node-id="8:208" 
          data-name="Image-Banu-Hero"
        >
          <img 
            src={banuHeroImg} 
            alt="Muh. Banu Hary Kuncoro" 
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>

      {/* Interactive Scroll Indicator: Animated Mouse on Desktop, Bouncing Down Arrow on Mobile */}
      <button
        ref={scrollIndicatorRef}
        type="button"
        className="hero-scroll-indicator"
        onClick={handleScrollDown}
        aria-label="Scroll down to About section"
      >
        {/* Desktop Mouse Scroll Animation */}
        <div className="scroll-indicator-desktop">
          <div className="scroll-mouse-track">
            <div className="scroll-mouse-wheel" />
          </div>
          <span className="scroll-text">SCROLL</span>
        </div>

        {/* Mobile Bouncing Down Arrow */}
        <div className="scroll-indicator-mobile">
          <div className="scroll-arrow-wrap">
            <ChevronDown size={20} className="scroll-arrow-icon" />
          </div>
        </div>
      </button>
    </section>
  );
}
