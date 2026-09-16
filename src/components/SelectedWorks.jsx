import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    number: '01 -',
    title: 'E-Commerce Customer Churn Prediction',
    category: 'Machine Learning',
    tagClass: 'tag-ml',
    nodeId: '14:444',
    titleNodeId: '14:445',
    tagNodeId: '14:448',
    summary: 'Predictive modeling platform designed to identify high-risk customer turnover before it occurs.',
    details: 'Developed binary classification models utilizing Random Forest, Logistic Regression, and XGBoost with SMOTE oversampling. Implemented SHAP (SHapley Additive exPlanations) for transparent model explainability and actionable business retention insights.',
    stack: ['Python', 'Scikit-learn', 'SMOTE', 'SHAP', 'Pandas', 'Streamlit']
  },
  {
    id: '02',
    number: '02 -',
    title: 'SmartSawit AI & IoT Dashboard',
    category: 'Artificial Intelligence & IoT',
    tagClass: 'tag-ai',
    nodeId: '14:450',
    titleNodeId: '14:451',
    tagNodeId: '14:454',
    summary: 'Real-time telemetry and computer vision monitoring system for precision agriculture.',
    details: 'Integrated environmental IoT sensors with deep learning vision models for early disease detection, soil moisture prediction, and yield forecasting across palm plantation quadrants.',
    stack: ['PyTorch', 'IoT Telemetry', 'FastAPI', 'React', 'Time-Series Forecasting']
  },
  {
    id: '03',
    number: '03 -',
    title: 'The Impact of AI Literacy on Academic Integrity and Digital Trust',
    category: 'Research',
    tagClass: 'tag-re',
    nodeId: '14:456',
    titleNodeId: '14:457',
    tagNodeId: '14:460',
    summary: 'Empirical statistical research investigating generative AI adoption and cognitive trust dynamics.',
    details: 'Conducted multivariate regression analysis and Structural Equation Modeling (SEM) using IBM SPSS and Python to evaluate ethical AI utilization among higher-education institutions.',
    stack: ['IBM SPSS', 'Python', 'Statistical Modeling', 'SEM', 'Survey Analytics']
  }
];

export default function SelectedWorks({ onSelectProject }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Staggered list items reveal
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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
      id="works" 
      className="works-section" 
      data-node-id="14:441" 
      data-name="Section-Subheadline"
    >
      <div className="works-inner-container">
        <h2 
          ref={headlineRef}
          className="works-headline"
          data-node-id="14:442"
        >
          SELECTED WORKS
        </h2>

        <div className="works-list" data-node-id="14:443" data-name="Projects-ListView">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="work-item"
              data-node-id={project.nodeId}
              data-name={`Project-${index + 1}`}
              onClick={() => onSelectProject && onSelectProject(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject && onSelectProject(project);
                }
              }}
            >
              <div className="work-title-row" data-node-id={project.titleNodeId}>
                <div className="work-title-text">
                  <span className="work-number">{project.number}</span>
                  <span>{project.title}</span>
                </div>
                <div className="work-arrow">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              <div className={`work-tag ${project.tagClass}`} data-node-id={project.tagNodeId}>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
