import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
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

            <div className="topbar-project-info">
              <span className="topbar-num">{project.number || 'PROJECT'}</span>
              <span className="topbar-divider">/</span>
              <span className="topbar-title">{project.title}</span>
            </div>

            <button 
              type="button" 
              className="page-close-pill" 
              onClick={onClose}
              aria-label="Close project view"
            >
              <X size={16} />
              <span className="esc-hint">ESC</span>
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
                <span className="status-indicator-badge">
                  <span className="live-pulse-dot" />
                  CASE STUDY COMPLETE
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

            {/* Visual Blueprint / Image Slot Showcase */}
            <section className="project-section-block">
              <div className="section-mini-heading">
                <ImageIcon size={16} />
                <span>PROJECT VISUAL & ARCHITECTURE DEMONSTRATION</span>
              </div>

              <div className="project-visual-container">
                <div className="visual-slot-topbar">
                  <div className="v-topbar-left">
                    <Terminal size={15} />
                    <span>SYSTEM TELEMETRY & DATA ARCHITECTURE</span>
                  </div>
                  <span className="v-badge-pill">INTERACTIVE PREVIEW</span>
                </div>

                <div className="visual-slot-content">
                  {project.id === '01' && (
                    <div className="mono-diagram-box">
                      <div className="mono-diag-header">
                        <span>ROC CURVE & FEATURE IMPORTANCE MATRIX (SHAP)</span>
                        <span>AUC = 0.923 (SMOTE APPLIED)</span>
                      </div>
                      <div className="mono-chart-bars">
                        <div className="mono-bar-row">
                          <span className="bar-label">Customer Service Calls</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '92%' }} /></div>
                          <span className="bar-val">0.342</span>
                        </div>
                        <div className="mono-bar-row">
                          <span className="bar-label">Lifetime Value (LTV)</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '84%' }} /></div>
                          <span className="bar-val">0.289</span>
                        </div>
                        <div className="mono-bar-row">
                          <span className="bar-label">Cart Abandonment Rate</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '76%' }} /></div>
                          <span className="bar-val">0.241</span>
                        </div>
                        <div className="mono-bar-row">
                          <span className="bar-label">Account Age</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '48%' }} /></div>
                          <span className="bar-val">0.128</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === '02' && (
                    <div className="mono-diagram-box">
                      <div className="mono-diag-header">
                        <span>SMARTSAWIT REAL-TIME TELEMETRY & HARDWARE BUS</span>
                        <span>LATENCY &lt; 500MS // PROTOCOL: MQTT/HTTP</span>
                      </div>
                      <div className="mono-iot-grid">
                        <div className="iot-metric-tile">
                          <span className="tile-title">Soil Moisture</span>
                          <span className="tile-val">68.4%</span>
                          <span className="tile-status">OPTIMAL HYDRATION</span>
                        </div>
                        <div className="iot-metric-tile">
                          <span className="tile-title">Ambient Temp</span>
                          <span className="tile-val">29.2°C</span>
                          <span className="tile-status">DHT11 SENSOR</span>
                        </div>
                        <div className="iot-metric-tile">
                          <span className="tile-title">Relay Pump</span>
                          <span className="tile-val">ACTIVE</span>
                          <span className="tile-status">AI AUTO-PUMP 5V</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === '03' && (
                    <div className="mono-diagram-box">
                      <div className="mono-diag-header">
                        <span>STRUCTURAL EQUATION MODELING (SEM) PATH ANALYSIS</span>
                        <span>N = 213 (BEKASI CITY UNDERGRADUATES)</span>
                      </div>
                      <div className="mono-sem-visual">
                        <div className="sem-node">
                          <span className="node-lbl">AI LITERACY</span>
                          <span className="node-sub">Predictor Construct</span>
                        </div>
                        <div className="sem-arrows">
                          <div className="sem-path-line">
                            <span className="path-text">β = 0.918 (R² = 0.842)</span>
                            <div className="arrow-line" />
                          </div>
                          <div className="sem-path-line">
                            <span className="path-text">β = 0.919 (R² = 0.843)</span>
                            <div className="arrow-line" />
                          </div>
                        </div>
                        <div className="sem-outcomes">
                          <div className="sem-node outcome">
                            <span className="node-lbl">ACADEMIC INTEGRITY</span>
                            <span className="node-sub">R² = 0.842 (p &lt; 0.001)</span>
                          </div>
                          <div className="sem-node outcome">
                            <span className="node-lbl">DIGITAL TRUST</span>
                            <span className="node-sub">R² = 0.843 (p &lt; 0.001)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

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
                  className="footer-nav-btn" 
                  onClick={onClose}
                >
                  <ArrowLeft size={16} />
                  <span>BACK TO WORKS</span>
                </button>
              </div>

              <div className="footer-nav-center">
                <button 
                  type="button" 
                  className="footer-scroll-top-btn" 
                  onClick={scrollToTop}
                >
                  <ArrowUp size={16} />
                  <span>TOP</span>
                </button>
              </div>

              <div className="footer-nav-right">
                {nextProject && onSelectProject && (
                  <button 
                    type="button" 
                    className="footer-next-btn" 
                    onClick={() => onSelectProject(nextProject)}
                  >
                    <span>NEXT: {nextProject.title}</span>
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
