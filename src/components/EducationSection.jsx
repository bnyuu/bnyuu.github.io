import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, BookOpen, Brain, Sparkles, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const academicPillars = [
  {
    icon: Brain,
    title: 'Data Science & Machine Learning',
    description: 'Specialized in predictive modeling, statistical learning algorithms, deep neural architectures, and model explainability (SHAP).',
    tag: 'Technical Core',
    tagClass: 'tag-ml'
  },
  {
    icon: Sparkles,
    title: 'Business Information Systems',
    description: 'Integrating algorithmic data workflows with strategic business architectures, database modeling, and enterprise intelligence.',
    tag: 'Strategic Application',
    tagClass: 'tag-ai'
  },
  {
    icon: BookOpen,
    title: 'Quantitative Research & Analytics',
    description: 'Empirical statistical methodology, hypothesis testing, Structural Equation Modeling (SEM), and ethical AI adoption studies.',
    tag: 'Academic Rigor',
    tagClass: 'tag-re'
  }
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const mainCardRef = useRef(null);
  const pillarCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
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

      // Main Degree Card entrance
      gsap.fromTo(
        mainCardRef.current,
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Pillars stagger entrance
      gsap.fromTo(
        pillarCardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
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
      id="education" 
      className="education-section"
      data-node-id="16:500" 
      data-name="Education-Section"
    >
      <div className="education-inner-container">
        {/* Section Header */}
        <div ref={headlineRef} className="education-header">
          <div className="education-badge">
            <GraduationCap size={16} />
            <span>ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className="education-headline">
            ACADEMIC FOUNDATION
          </h2>
          <p className="education-subtitle">
            Bridging theoretical computer science with enterprise data strategy to solve high-impact technological challenges.
          </p>
        </div>

        {/* Primary Degree Showcase Card */}
        <div ref={mainCardRef} className="education-main-card">
          <div className="education-card-ambient" />
          
          <div className="main-card-header">
            <div className="degree-title-block">
              <span className="degree-level">UNDERGRADUATE DEGREE</span>
              <h3 className="degree-name">Bachelor of Business Information Technology</h3>
              <p className="degree-focus">
                Specialization in <strong>Data Science & Applied Machine Learning</strong>
              </p>
            </div>

            <div className="degree-status-badge">
              <span className="status-dot" />
              <span>Active Student</span>
            </div>
          </div>

          <p className="degree-summary">
            Synthesizing rigorous computation, statistics, and business technology. Focused on building production-grade predictive pipelines, generative AI solutions, and empirical research frameworks.
          </p>

          <div className="degree-tags-row">
            <span className="education-tag">
              <Award size={14} /> Machine Learning Focus
            </span>
            <span className="education-tag">Predictive Analytics</span>
            <span className="education-tag">Quantitative Research (SEM)</span>
            <span className="education-tag">Business Intelligence</span>
          </div>
        </div>

        {/* Academic Pillars Grid */}
        <div className="academic-pillars-grid">
          {academicPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                ref={(el) => (pillarCardsRef.current[index] = el)}
                className="pillar-card"
              >
                <div className="pillar-card-top">
                  <div className={`pillar-icon-box ${pillar.tagClass}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`pillar-tag ${pillar.tagClass}`}>{pillar.tag}</span>
                </div>
                
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
