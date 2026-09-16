import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { BrainCircuit, BarChart3, FlaskConical, ArrowUpRight, Sparkles, Activity, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    id: 'ml',
    number: '01',
    category: 'MACHINE LEARNING',
    title: 'Predictive Modeling & ML',
    subtitle: 'High-Accuracy Classification',
    badge: 'AUC 96.4%',
    accentColor: '#b8ffff',
    accentBg: 'rgba(184, 255, 255, 0.15)',
    cardClass: 'card-ml-tech',
    icon: BrainCircuit,
    description: 'Engineering robust binary classification models, Decision Trees, Random Forests, and XGBoost architectures with fine-tuned hyperparameters.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'FastAPI'],
    details: 'Specialized focus in predictive machine learning pipelines, handling imbalanced datasets, multi-class classification, and production-ready model deployment.'
  },
  {
    id: 'da',
    number: '02',
    category: 'DATA ANALYTICS',
    title: 'Analytics & Explainable AI',
    subtitle: 'SMOTE & SHAP Insights',
    badge: 'SMOTE 1:1',
    accentColor: '#e8fea7',
    accentBg: 'rgba(232, 254, 167, 0.18)',
    cardClass: 'card-da-tech',
    icon: BarChart3,
    description: 'Transforming complex datasets into actionable business intelligence through SMOTE oversampling, exploratory data analysis, and SHAP explainability.',
    stack: ['Pandas', 'NumPy', 'SMOTE', 'SHAP (XAI)', 'Seaborn', 'Streamlit'],
    details: 'End-to-end data processing pipelines, automated exploratory analysis, feature importance extraction, and intuitive visual telemetry dashboards.'
  },
  {
    id: 're',
    number: '03',
    category: 'RESEARCH & STATS',
    title: 'Empirical Research & SEM',
    subtitle: 'Multivariate Modeling',
    badge: 'R² = 0.89',
    accentColor: '#feafaf',
    accentBg: 'rgba(254, 175, 175, 0.18)',
    cardClass: 'card-re-tech',
    icon: FlaskConical,
    description: 'Conducting rigorous statistical modeling, Structural Equation Modeling (SEM), and empirical testing to evaluate human-AI trust and academic dynamics.',
    stack: ['IBM SPSS', 'SEM / PLS', 'Multivariate Stats', 'Hypothesis Testing', 'Survey Analytics'],
    details: 'Academic and applied empirical research employing multivariate regression, factor analysis, and path modeling to derive validated statistical insights.'
  }
];

export default function CoreExpertise({ onSelectExpertise }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered card lift
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="expertise" 
      className="expertise-section" 
      data-node-id="8:298" 
      data-name="Section-Subheadline"
    >
      <div className="expertise-header-wrap">
        <h2 
          ref={headlineRef}
          className="section-headline"
          data-node-id="8:308"
        >
          CORE EXPERTISE
        </h2>
        <p className="expertise-subheadline">
          Specialized domains in predictive modeling, explainable analytics, and statistical research.
        </p>
      </div>

      <div className="expertise-cards-grid" data-node-id="8:312" data-name="Wrapper">
        {expertiseData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id} 
              ref={(el) => (cardsRef.current[index] = el)}
              className="expertise-card-col" 
              data-node-id={item.nodeId}
            >
              <motion.div
                className={`expertise-tech-card ${item.cardClass}`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
                }}
                onClick={() => onSelectExpertise && onSelectExpertise(item)}
              >
                {/* Top Badge Row */}
                <div className="tech-card-top-row">
                  <div className="tech-card-category-tag" style={{ color: '#080808', backgroundColor: item.accentColor }}>
                    <span className="tech-cat-number">{item.number}</span>
                    <span className="tech-cat-name">{item.category}</span>
                  </div>

                  <div className="tech-card-badge">
                    <span className="pulse-dot" style={{ backgroundColor: '#080808' }} />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Interactive Visual Canvas Area */}
                <div className="tech-card-visual-area" style={{ background: item.accentBg }}>
                  {item.id === 'ml' && (
                    <div className="visual-canvas visual-ml">
                      <svg viewBox="0 0 280 140" className="tech-svg" fill="none">
                        {/* Neural / Decision Tree Paths */}
                        <path d="M 30,70 L 100,35 L 180,35 L 250,70" stroke="#080808" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                        <path d="M 30,70 L 100,105 L 180,105 L 250,70" stroke="#080808" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                        <path d="M 100,35 L 180,105" stroke="#080808" strokeWidth="1.5" opacity="0.3" />
                        <path d="M 100,105 L 180,35" stroke="#080808" strokeWidth="1.5" opacity="0.3" />
                        
                        {/* Nodes */}
                        <circle cx="30" cy="70" r="10" fill="#080808" />
                        <circle cx="30" cy="70" r="4" fill="#b8ffff" />

                        <circle cx="100" cy="35" r="8" fill="#080808" />
                        <circle cx="100" cy="35" r="3" fill="#b8ffff" />
                        
                        <circle cx="100" cy="105" r="8" fill="#080808" />
                        <circle cx="100" cy="105" r="3" fill="#b8ffff" />

                        <circle cx="180" cy="35" r="8" fill="#080808" />
                        <circle cx="180" cy="35" r="3" fill="#b8ffff" />

                        <circle cx="180" cy="105" r="8" fill="#080808" />
                        <circle cx="180" cy="105" r="3" fill="#b8ffff" />

                        <circle cx="250" cy="70" r="12" fill="#080808" />
                        <circle cx="250" cy="70" r="5" fill="#b8ffff" />

                        {/* Floating Metric */}
                        <rect x="95" y="60" width="90" height="22" rx="11" fill="#080808" />
                        <text x="140" y="75" textAnchor="middle" fill="#b8ffff" fontSize="10" fontWeight="600" fontFamily="sans-serif">XGBoost 96.4%</text>
                      </svg>
                    </div>
                  )}

                  {item.id === 'da' && (
                    <div className="visual-canvas visual-da">
                      <svg viewBox="0 0 280 140" className="tech-svg" fill="none">
                        {/* Bar Distribution Chart */}
                        <rect x="35" y="75" width="18" height="45" rx="3" fill="#080808" opacity="0.3" />
                        <rect x="65" y="45" width="18" height="75" rx="3" fill="#080808" opacity="0.4" />
                        <rect x="95" y="25" width="18" height="95" rx="3" fill="#080808" />
                        <rect x="125" y="50" width="18" height="70" rx="3" fill="#080808" opacity="0.6" />
                        <rect x="155" y="35" width="18" height="85" rx="3" fill="#080808" opacity="0.8" />
                        <rect x="185" y="65" width="18" height="55" rx="3" fill="#080808" opacity="0.5" />
                        <rect x="215" y="85" width="18" height="35" rx="3" fill="#080808" opacity="0.3" />

                        {/* Trend Curve */}
                        <path d="M 25,90 Q 95,15 155,30 T 245,65" stroke="#080808" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="95" cy="22" r="5" fill="#e8fea7" stroke="#080808" strokeWidth="2" />
                        <circle cx="155" cy="30" r="5" fill="#e8fea7" stroke="#080808" strokeWidth="2" />

                        {/* Floating Metric Pill */}
                        <rect x="170" y="10" width="95" height="22" rx="11" fill="#080808" />
                        <text x="217" y="25" textAnchor="middle" fill="#e8fea7" fontSize="10" fontWeight="600" fontFamily="sans-serif">SHAP Values</text>
                      </svg>
                    </div>
                  )}

                  {item.id === 're' && (
                    <div className="visual-canvas visual-re">
                      <svg viewBox="0 0 280 140" className="tech-svg" fill="none">
                        {/* SEM Path Diagram */}
                        <rect x="20" y="35" width="70" height="30" rx="6" fill="#080808" />
                        <text x="55" y="54" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="sans-serif">AI Literacy</text>

                        <rect x="20" y="85" width="70" height="30" rx="6" fill="#080808" />
                        <text x="55" y="104" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" fontFamily="sans-serif">Digital Trust</text>

                        {/* Latent Target Circle */}
                        <circle cx="215" cy="70" r="30" fill="#080808" />
                        <circle cx="215" cy="70" r="26" fill="#feafaf" stroke="#080808" strokeWidth="1.5" />
                        <text x="215" y="67" textAnchor="middle" fill="#080808" fontSize="9" fontWeight="700" fontFamily="sans-serif">Academic</text>
                        <text x="215" y="79" textAnchor="middle" fill="#080808" fontSize="9" fontWeight="700" fontFamily="sans-serif">Integrity</text>

                        {/* Vectors */}
                        <line x1="90" y1="50" x2="185" y2="65" stroke="#080808" strokeWidth="2" markerEnd="url(#arrow)" />
                        <line x1="90" y1="100" x2="185" y2="75" stroke="#080808" strokeWidth="2" />

                        {/* Correlation badge */}
                        <rect x="105" y="88" width="65" height="18" rx="9" fill="#080808" />
                        <text x="137" y="101" textAnchor="middle" fill="#feafaf" fontSize="9" fontWeight="600" fontFamily="sans-serif">p &lt; 0.001</text>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="tech-card-body">
                  <div className="tech-card-title-group">
                    <h3 className="tech-card-title">{item.title}</h3>
                    <p className="tech-card-desc">{item.description}</p>
                  </div>

                  {/* Stack Badges */}
                  <div className="tech-card-stack-row">
                    {item.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-stack-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Footer */}
                  <div className="tech-card-footer">
                    <span className="tech-card-action-text">Explore Area</span>
                    <div className="tech-card-action-btn" style={{ backgroundColor: item.accentColor }}>
                      <ArrowUpRight size={18} color="#080808" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
