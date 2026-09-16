import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
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
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className={`modal-header-tag ${project.tagClass || 'tag-ml'}`}>
            {project.category || 'Featured Work'}
          </div>

          <h3 className="modal-title">
            {project.title}
          </h3>

          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-section-p">{project.summary}</p>
          </div>

          {project.details && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Implementation & Methodology</h4>
              <p className="modal-section-p">{project.details}</p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Tech Stack & Frameworks</h4>
              <div className="modal-pills">
                {project.stack.map((item, i) => (
                  <span key={i} className="modal-pill">
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
