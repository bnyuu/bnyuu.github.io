import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  BarChart3, 
  Layers, 
  Image as ImageIcon,
  ArrowUp,
  Activity,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectGalleryGrid from './ProjectGalleryGrid';

export default function ProjectModal({ project, onClose, onSelectProject }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Lock background page scroll on both body and html
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Scroll to top of full view whenever project changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [project?.id]);

  if (!project) return null;

  // Find index for next/prev project navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        ref={containerRef}
        className="project-page-fullscreen"
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Sticky Top Header Navigation */}
        <header className="project-page-topbar">
          <div className="topbar-inner">
            <button 
              type="button" 
              className="page-back-btn" 
              onClick={onClose}
              aria-label="Back to portfolio"
            >
              <ArrowLeft size={18} />
              <span>BACK TO WORKS</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="project-page-main">
          <div className="project-page-container">

            {/* Hero Header Block */}
            <section className="project-page-hero">
              <div className="project-meta-pills">
                <span className="project-id-badge">{project.number || '01 -'}</span>
                <span className={`work-tag ${project.tagClass}`}>
                  {project.tag || project.category}
                </span>
              </div>

              <h1 className="project-headline">
                {project.title}
              </h1>

              <p className="project-lead-desc">
                {project.summary}
              </p>
            </section>

            {/* Key Empirical Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <section className="project-section-block">
                <div className="section-mini-heading">
                  <Activity size={16} />
                  <span>KEY EMPIRICAL METRICS & PERFORMANCE</span>
                </div>
                <div className="project-metrics-grid">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="project-metric-card">
                      <span className="p-metric-val">{metric.value}</span>
                      <span className="p-metric-lbl">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Project Image & Architecture Showcase Grid */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="project-section-block">
                <ProjectGalleryGrid 
                  gallery={project.gallery} 
                  projectTitle={project.title} 
                />
              </section>
            )}

            {/* Key Highlights & Methodology */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="project-section-block">
                <div className="section-mini-heading">
                  <Layers size={16} />
                  <span>METHODOLOGY & KEY HIGHLIGHTS</span>
                </div>
                <div className="project-highlights-wrap">
                  {project.highlights.map((point, i) => (
                    <div key={i} className="project-highlight-row">
                      <div className="p-highlight-num">{String(i + 1).padStart(2, '0')}</div>
                      <div className="p-highlight-content">
                        <CheckCircle2 size={18} className="p-highlight-icon" />
                        <p className="p-highlight-text">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Hardware Bill of Materials (BOM) for SmartSawit */}
            {project.hardwareBOM && (
              <section className="project-section-block">
                <div className="bom-header-row">
                  <div className="section-mini-heading">
                    <Cpu size={16} />
                    <span>HARDWARE & COMPONENT BREAKDOWN (BOM)</span>
                  </div>
                  <span className="bom-budget-pill">Total Budget: {project.hardwareBOM.budget}</span>
                </div>

                <div className="project-bom-table-wrap">
                  <table className="project-bom-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Hardware / Component</th>
                        <th style={{ textAlign: 'right' }}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.hardwareBOM.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="bom-col-idx">{String(idx + 1).padStart(2, '0')}</td>
                          <td className="bom-col-name">{item.name}</td>
                          <td className="bom-col-cost">{item.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Tech Stack & Frameworks */}
            {project.stack && project.stack.length > 0 && (
              <section className="project-section-block">
                <div className="section-mini-heading">
                  <BarChart3 size={16} />
                  <span>TECHNOLOGIES & TOOLS USED</span>
                </div>
                <div className="project-stack-pills">
                  {project.stack.map((item, i) => (
                    <span key={i} className="p-stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Page Navigation & Footer */}
            <footer className="project-page-footer">
              <div className="footer-nav-left">
                <button 
                  type="button" 
                  className="footer-scroll-top-btn" 
                  onClick={scrollToTop}
                >
                  <ArrowUp size={16} />
                  <span>BACK TO TOP</span>
                </button>
              </div>

              <div className="footer-nav-right">
                {nextProject && onSelectProject && (
                  <button 
                    type="button" 
                    className="footer-next-btn" 
                    onClick={() => onSelectProject(nextProject)}
                  >
                    <span>NEXT PROJECT: {nextProject.title}</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </footer>

          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
