import { motion } from 'framer-motion';

export default function Navbar({ onNavigate }) {
  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(`#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="navbar-wrapper">
      <motion.nav 
        className="navbar-inner"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="nav-brand"
        >
          <span>BANU KUNCORO</span>
        </a>

        <ul className="nav-links">
          <li>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
              className="nav-link"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#expertise" 
              onClick={(e) => { e.preventDefault(); scrollToSection('expertise'); }} 
              className="nav-link"
            >
              Expertise
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} 
              className="nav-link"
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#works" 
              onClick={(e) => { e.preventDefault(); scrollToSection('works'); }} 
              className="nav-link"
            >
              Works
            </a>
          </li>
        </ul>

        <a 
          href="#resume" 
          onClick={(e) => { 
            e.preventDefault(); 
            window.open('/resume.pdf', '_blank');
          }}
          className="nav-cta"
          title="Download or view Resume"
        >
          Resume
        </a>
      </motion.nav>
    </header>
  );
}
