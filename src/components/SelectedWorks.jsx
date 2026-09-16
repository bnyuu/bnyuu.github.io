import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

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
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="work-item"
              data-node-id={project.nodeId || `14:44${index}`}
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
              <div className="work-title-row" data-node-id={project.titleNodeId || `14:45${index}`}>
                <div className="work-title-text">
                  <span className="work-number">{project.number}</span>
                  <span>{project.title}</span>
                </div>
                <div className="work-arrow">
                  <ArrowUpRight size={32} />
                </div>
              </div>

              <div className="work-tag work-tag-mono" data-node-id={project.tagNodeId || `14:46${index}`}>
                <span>{project.tag || project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
