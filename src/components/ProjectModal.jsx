import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, BarChart3, Layers, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content modal-monochrome"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="modal-header-block">
            <div className="modal-meta-row">
              <span className="modal-mono-badge">{project.number || 'PROJECT'}</span>
              <span className={`work-tag ${project.tagClass}`}>{project.tag || project.category}</span>
            </div>

            <h3 className="modal-title">
              {project.title}
            </h3>

            <p className="modal-summary-text">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-metrics-grid">
              {project.metrics.map((metric, i) => (
                <div key={i} className="modal-metric-card">
                  <span className="metric-card-val">{metric.value}</span>
                  <span className="metric-card-lbl">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Visual Blueprint / Image Slot Showcase */}
          <div className="modal-visual-slot">
            <div className="visual-slot-header">
              <div className="slot-title">
                <ImageIcon size={16} />
                <span>PROJECT VISUAL & ARCHITECTURE DEMONSTRATION</span>
              </div>
              <span className="slot-badge">INTERACTIVE PREVIEW</span>
            </div>

            <div className="visual-slot-body">
              {project.id === '01' && (
                <div className="mono-diagram-box">
                  <div className="mono-diag-header">
                    <span>ROC CURVE & FEATURE IMPORTANCE MATRIX (SHAP)</span>
                    <span>AUC = 0.923</span>
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
                    <span>LATENCY &lt; 500MS</span>
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
                    <span>N = 213 (BEKASI)</span>
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

          {/* Key Highlights / Methodology */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Layers size={16} />
                Key Highlights & Methodology
              </h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((point, i) => (
                  <li key={i} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hardware Bill of Materials (BOM) for SmartSawit */}
          {project.hardwareBOM && (
            <div className="modal-section">
              <div className="bom-header-row">
                <h4 className="modal-section-title">
                  <Cpu size={16} />
                  Hardware & Component Breakdown (BOM)
                </h4>
                <span className="bom-total-badge">Total Budget: {project.hardwareBOM.budget}</span>
              </div>

              <div className="hardware-bom-table-wrap">
                <table className="hardware-bom-table">
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
                        <td className="bom-index">{String(idx + 1).padStart(2, '0')}</td>
                        <td className="bom-name">{item.name}</td>
                        <td className="bom-cost">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tech Stack & Frameworks */}
          {project.stack && project.stack.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <BarChart3 size={16} />
                Technologies & Tools
              </h4>
              <div className="modal-pills">
                {project.stack.map((item, i) => (
                  <span key={i} className="modal-mono-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
