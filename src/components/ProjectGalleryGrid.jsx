import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  X, 
  Layers, 
  Cpu, 
  BarChart2, 
  Activity, 
  GitBranch, 
  Sliders, 
  CheckCircle,
  Eye
} from 'lucide-react';

export default function ProjectGalleryGrid({ gallery = [], projectTitle = '' }) {
  const [activeItem, setActiveItem] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  const renderVisual = (item, isLightbox = false) => {
    if (item?.imageSrc) {
      return (
        <div className={`gallery-photo-container ${isLightbox ? 'lightbox-photo-container' : ''}`}>
          <img 
            src={item.imageSrc} 
            alt={item.title} 
            className={`gallery-activity-img ${isLightbox ? 'lightbox-activity-img' : ''}`}
            loading="lazy" 
          />
        </div>
      );
    }

    switch (item?.type) {
      // --- Project 1: Machine Learning ---
      case 'roc-curve':
        return (
          <svg className="gallery-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="180" rx="8" fill="#080808" />
            <path d="M 40 140 L 290 140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M 40 140 L 40 30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="40" y1="140" x2="290" y2="30" stroke="rgba(255,255,255,0.25)" strokeDasharray="4 4" strokeWidth="1" />
            <path 
              d="M 40 140 Q 55 45 130 38 T 290 30" 
              fill="rgba(255,255,255,0.06)" 
              stroke="#ffffff" 
              strokeWidth="2.5" 
            />
            <circle cx="130" cy="38" r="4" fill="#ffffff" />
            <text x="50" y="46" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="600">AUC = 0.923 (Random Forest)</text>
            <text x="240" y="155" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">FPR (1 - Spec)</text>
            <text x="20" y="25" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">TPR</text>
          </svg>
        );

      case 'shap-summary':
        return (
          <div className="gallery-card-bars">
            <div className="g-bar-item">
              <span className="g-bar-name">Customer Service Calls</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '92%' }} /></div>
              <span className="g-bar-val">+0.342</span>
            </div>
            <div className="g-bar-item">
              <span className="g-bar-name">Lifetime Value (LTV)</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '82%' }} /></div>
              <span className="g-bar-val">-0.289</span>
            </div>
            <div className="g-bar-item">
              <span className="g-bar-name">Cart Abandonment Rate</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '74%' }} /></div>
              <span className="g-bar-val">+0.241</span>
            </div>
            <div className="g-bar-item">
              <span className="g-bar-name">Account Tenure</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '46%' }} /></div>
              <span className="g-bar-val">-0.128</span>
            </div>
          </div>
        );

      case 'smote-dist':
        return (
          <svg className="gallery-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="180" rx="8" fill="#080808" />
            <text x="20" y="26" fill="rgba(255,255,255,0.6)" fontSize="9.5" fontFamily="monospace">TRAINING FOLD CLASS REBALANCING</text>
            {/* Majority class dots */}
            <circle cx="60" cy="80" r="3.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="85" cy="110" r="3.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="110" cy="70" r="3.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="75" cy="130" r="3.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="130" cy="120" r="3.5" fill="rgba(255,255,255,0.3)" />
            <circle cx="95" cy="50" r="3.5" fill="rgba(255,255,255,0.3)" />
            {/* Minority class original */}
            <circle cx="210" cy="75" r="4.5" fill="#ffffff" />
            <circle cx="260" cy="125" r="4.5" fill="#ffffff" />
            <circle cx="230" cy="140" r="4.5" fill="#ffffff" />
            {/* SMOTE synthetic interpolations */}
            <line x1="210" y1="75" x2="260" y2="125" stroke="rgba(255,255,255,0.3)" strokeDasharray="2 2" />
            <circle cx="235" cy="100" r="4" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="260" y1="125" x2="230" y2="140" stroke="rgba(255,255,255,0.3)" strokeDasharray="2 2" />
            <circle cx="245" cy="132" r="4" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <text x="20" y="160" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="monospace">● Real Minority  ○ Synthetic (SMOTE)</text>
          </svg>
        );

      case 'conf-matrix':
        return (
          <div className="matrix-preview-grid">
            <div className="matrix-cell tp">
              <span className="matrix-val">39,420</span>
              <span className="matrix-sub">TRUE NEGATIVE (98.5%)</span>
            </div>
            <div className="matrix-cell fp">
              <span className="matrix-val">1,580</span>
              <span className="matrix-sub">FALSE POSITIVE</span>
            </div>
            <div className="matrix-cell fn">
              <span className="matrix-val">1,210</span>
              <span className="matrix-sub">FALSE NEGATIVE</span>
            </div>
            <div className="matrix-cell tn">
              <span className="matrix-val">7,790</span>
              <span className="matrix-sub">TRUE POSITIVE (86.5%)</span>
            </div>
          </div>
        );

      // --- Project 2: SmartSawit IoT & AI ---
      case 'iot-circuit':
        return (
          <svg className="gallery-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="180" rx="8" fill="#080808" />
            {/* ESP32 Core */}
            <rect x="120" y="50" width="80" height="80" rx="6" fill="#141414" stroke="#ffffff" strokeWidth="1.2" />
            <text x="136" y="85" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="700">ESP32</text>
            <text x="130" y="98" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">MCU BUS</text>
            {/* DHT11 */}
            <rect x="20" y="30" width="60" height="40" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
            <text x="32" y="54" fill="#ffffff" fontSize="8.5" fontFamily="monospace">DHT11</text>
            <path d="M 80 50 L 120 70" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            {/* Soil Hygrometer */}
            <rect x="20" y="110" width="60" height="40" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
            <text x="26" y="134" fill="#ffffff" fontSize="8.5" fontFamily="monospace">SOIL SENS</text>
            <path d="M 80 130 L 120 110" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            {/* Relay 5V */}
            <rect x="240" y="70" width="60" height="40" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
            <text x="248" y="94" fill="#ffffff" fontSize="8.5" fontFamily="monospace">RELAY 5V</text>
            <path d="M 200 90 L 240 90" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        );

      case 'iot-dashboard':
        return (
          <div className="gallery-iot-dash">
            <div className="dash-row top">
              <span className="dash-title">LIVE TELEMETRY FEED</span>
              <span className="dash-live-badge"><span className="dash-dot" /> STREAMING</span>
            </div>
            <div className="dash-gauges-row">
              <div className="gauge-box">
                <span className="gauge-lbl">SOIL MOISTURE</span>
                <span className="gauge-val">68.4%</span>
                <div className="gauge-bar"><div className="gauge-fill" style={{ width: '68%' }} /></div>
              </div>
              <div className="gauge-box">
                <span className="gauge-lbl">TEMPERATURE</span>
                <span className="gauge-val">29.2°C</span>
                <div className="gauge-bar"><div className="gauge-fill" style={{ width: '58%' }} /></div>
              </div>
              <div className="gauge-box">
                <span className="gauge-lbl">5V PUMP</span>
                <span className="gauge-val on">AUTO ON</span>
                <span className="gauge-sub">AI SCHEDULED</span>
              </div>
            </div>
          </div>
        );

      case 'iot-logic':
        return (
          <svg className="gallery-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="180" rx="8" fill="#080808" />
            {/* Step 1 */}
            <rect x="20" y="70" width="70" height="40" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
            <text x="28" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace">Telemetry</text>
            <text x="28" y="100" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">Sensor Ingest</text>
            <path d="M 90 90 L 120 90" stroke="rgba(255,255,255,0.5)" strokeWidth="1" markerEnd="url(#arrow)" />
            {/* Decision Diamond */}
            <polygon points="155,60 190,90 155,120 120,90" fill="#141414" stroke="#ffffff" strokeWidth="1.2" />
            <text x="134" y="88" fill="#ffffff" fontSize="7.5" fontFamily="monospace">Moisture</text>
            <text x="138" y="98" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">&lt; 60%?</text>
            {/* Yes Branch */}
            <path d="M 190 90 L 225 90" stroke="#ffffff" strokeWidth="1.2" />
            <rect x="225" y="70" width="80" height="40" rx="4" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeWidth="1" />
            <text x="233" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace">Trigger Pump</text>
            <text x="233" y="100" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">5V Relay (30s)</text>
          </svg>
        );

      case 'iot-prototype':
        return (
          <div className="gallery-prototype-schematic">
            <div className="proto-box">
              <span className="proto-header">EXPERIMENTAL CONTAINER (6x BIBIT SAWIT)</span>
              <div className="proto-grid-plants">
                <div className="plant-cell">🌱 Bibit 1<span className="sens-tag">S1</span></div>
                <div className="plant-cell">🌱 Bibit 2<span className="sens-tag">S2</span></div>
                <div className="plant-cell">🌱 Bibit 3<span className="sens-tag">S3</span></div>
                <div className="plant-cell">🌱 Bibit 4</div>
                <div className="plant-cell">🌱 Bibit 5</div>
                <div className="plant-cell">🌱 Bibit 6</div>
              </div>
              <div className="proto-tubing-bar">
                <span>4mm Drip Tubing // 8mm Main Line // 5V Submersible Pump</span>
              </div>
            </div>
          </div>
        );

      // --- Project 3: Academic Research ---
      case 'sem-model':
        return (
          <div className="sem-mini-diagram">
            <div className="sem-mini-node main">
              <span className="s-name">AI LITERACY</span>
              <span className="s-sub">Independent (X)</span>
            </div>
            <div className="sem-mini-arrows">
              <div className="s-arrow-row">
                <span className="s-path-val">β = 0.918 (p &lt; .001)</span>
                <div className="s-line" />
              </div>
              <div className="s-arrow-row">
                <span className="s-path-val">β = 0.919 (p &lt; .001)</span>
                <div className="s-line" />
              </div>
            </div>
            <div className="sem-mini-targets">
              <div className="sem-mini-node target">
                <span className="s-name">ACADEMIC INTEGRITY</span>
                <span className="s-sub">R² = 0.842</span>
              </div>
              <div className="sem-mini-node target">
                <span className="s-name">DIGITAL TRUST</span>
                <span className="s-sub">R² = 0.843</span>
              </div>
            </div>
          </div>
        );

      case 'spss-variance':
        return (
          <div className="gallery-card-bars">
            <div className="g-bar-item">
              <span className="g-bar-name">Academic Integrity (R²)</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '84.2%' }} /></div>
              <span className="g-bar-val">0.842</span>
            </div>
            <div className="g-bar-item">
              <span className="g-bar-name">Digital Trust (R²)</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '84.3%' }} /></div>
              <span className="g-bar-val">0.843</span>
            </div>
            <div className="g-bar-item">
              <span className="g-bar-name">Combined Variance (F-stat)</span>
              <div className="g-bar-track"><div className="g-bar-fill" style={{ width: '91.5%' }} /></div>
              <span className="g-bar-val">p &lt; 0.001</span>
            </div>
          </div>
        );

      case 'sample-demographics':
        return (
          <div className="sample-demo-card">
            <div className="demo-header">N = 213 RESPONDENTS (BEKASI CITY)</div>
            <div className="demo-stat-row">
              <div className="demo-tile">
                <span className="demo-val">213</span>
                <span className="demo-lbl">Undergraduates</span>
              </div>
              <div className="demo-tile">
                <span className="demo-val">100%</span>
                <span className="demo-lbl">Valid Surveys</span>
              </div>
              <div className="demo-tile">
                <span className="demo-val">SDG 4</span>
                <span className="demo-lbl">Global Quality Ed.</span>
              </div>
            </div>
          </div>
        );

      case 'research-framework':
      default:
        return (
          <svg className="gallery-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="180" rx="8" fill="#080808" />
            <rect x="20" y="30" width="80" height="120" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
            <text x="30" y="55" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="600">AI LITERACY</text>
            <text x="30" y="75" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="monospace">• Cognitive</text>
            <text x="30" y="95" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="monospace">• Technical</text>
            <text x="30" y="115" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="monospace">• Ethical</text>
            
            <path d="M 100 90 L 190 60" stroke="#ffffff" strokeWidth="1" />
            <path d="M 100 90 L 190 120" stroke="#ffffff" strokeWidth="1" />

            <rect x="190" y="35" width="110" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
            <text x="200" y="58" fill="#ffffff" fontSize="8.5" fontFamily="monospace" fontWeight="600">ACADEMIC INTEGRITY</text>
            <text x="200" y="72" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">R² = 0.842</text>

            <rect x="190" y="95" width="110" height="50" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
            <text x="200" y="118" fill="#ffffff" fontSize="8.5" fontFamily="monospace" fontWeight="600">DIGITAL TRUST</text>
            <text x="200" y="132" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">R² = 0.843</text>
          </svg>
        );
    }
  };

  return (
    <div className="project-gallery-section">
      <div className="gallery-header-row">
        <div className="gallery-title-wrap">
          <Layers size={16} />
          <span>PROJECT MEDIA & ARCHITECTURE SHOWCASE</span>
        </div>
        <span className="gallery-count-badge">{gallery.length} SHOWCASE ARTIFACTS</span>
      </div>

      <div className="project-gallery-grid">
        {gallery.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            className="gallery-card"
            onClick={() => setActiveItem(item)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
          >
            {/* Top Tag & Zoom icon */}
            <div className="gallery-card-top">
              <span className="gallery-card-tag">{item.tag || `ARTIFACT 0${idx + 1}`}</span>
              <div className="gallery-zoom-btn">
                <Maximize2 size={13} />
              </div>
            </div>

            {/* Visual Screen / Canvas */}
            <div className="gallery-card-visual">
              {renderVisual(item, false)}
            </div>

            {/* Card Description */}
            <div className="gallery-card-bottom">
              <h4 className="gallery-item-title">{item.title}</h4>
              <p className="gallery-item-caption">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            className="gallery-lightbox-overlay"
            onClick={() => setActiveItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="gallery-lightbox-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="lightbox-topbar">
                <div className="lightbox-meta">
                  <span className="lightbox-badge">{activeItem.tag}</span>
                  <span className="lightbox-title">{activeItem.title}</span>
                </div>
                <button 
                  type="button" 
                  className="lightbox-close-btn"
                  onClick={() => setActiveItem(null)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="lightbox-body">
                <div className="lightbox-visual-wrap">
                  {renderVisual(activeItem, true)}
                </div>
                <p className="lightbox-caption">{activeItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
