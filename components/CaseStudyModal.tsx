
import React from 'react';
import { X, ArrowRight, Target, Lightbulb, Zap } from 'lucide-react';
import { CaseStudy } from '../App';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-overlay"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-y-auto animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="sticky top-6 float-right mr-6 p-3 rounded-full bg-white/80 backdrop-blur border border-gray-100 hover:bg-rose-50 hover:text-rose-600 transition-all text-gray-400 z-50 shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-xs font-montserrat font-bold tracking-widest uppercase">
              {project.category}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 font-montserrat font-medium text-sm">
              {project.service}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-gray-900 mb-8 leading-tight">
            {project.title}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <div className="flex items-center gap-2 text-rose-500 mb-4">
                  <Target className="w-5 h-5" />
                  <h3 className="text-lg font-montserrat font-bold uppercase tracking-wider">The Problem</h3>
                </div>
                <p className="text-xl text-gray-600 font-montserrat leading-relaxed">
                  {project.problem}
                </p>
                <p className="mt-4 text-gray-500 font-montserrat font-medium">
                  {project.fullStory}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-2 text-rose-500 mb-4">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-lg font-montserrat font-bold uppercase tracking-wider">Our Solution</h3>
                </div>
                <p className="text-xl text-gray-900 font-montserrat font-semibold leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center gap-2 text-gray-900 mb-6">
                  <Zap className="w-5 h-5" />
                  <h3 className="text-sm font-montserrat font-bold uppercase tracking-wider">Key Metrics</h3>
                </div>
                <div className="space-y-8">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-montserrat font-bold text-rose-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full bg-gray-900 text-white py-5 rounded-3xl font-montserrat font-bold hover:bg-rose-600 transition-all shadow-xl hover:shadow-rose-600/30 flex items-center justify-center gap-3 group"
              >
                Close Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
