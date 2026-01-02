
import React from 'react';
import { TrendingUp, Mic, Award } from 'lucide-react';
import { CaseStudy } from '../App';

const cases: CaseStudy[] = [
  {
    title: 'TechFlow – 300% ARR Growth',
    category: 'SaaS',
    service: 'Growth & Strategy',
    description: 'Implemented a full-funnel marketing strategy and automated lead nurturing system. We reduced CAC by 40% while tripling annual recurring revenue.',
    fullStory: 'TechFlow was struggling with high customer acquisition costs and a fragmented sales funnel. Our team performed a deep audit and rebuilt their infrastructure from the ground up.',
    problem: 'High churn rates and inefficient ad spend were bleeding the marketing budget without clear attribution.',
    solution: 'We deployed a custom-built attribution engine and automated the lead qualification process using AI, allowing the sales team to focus on high-intent prospects.',
    stats: [
      { label: 'Revenue Growth', value: '+300%' },
      { label: 'Acquisition Cost', value: '-40%' }
    ],
    icon: TrendingUp,
    top: 'top-24'
  },
  {
    title: 'LuxeRetail – 24/7 Automation',
    category: 'E-Commerce',
    service: 'AI Support Agents',
    description: 'Deployed intelligent AI voice and chat agents to automate customer service. Reduced response time to seconds.',
    fullStory: 'With a global customer base, LuxeRetail couldn’t keep up with support tickets in different time zones. They needed a scalable solution that didn’t compromise on brand voice.',
    problem: 'Customer service was bottlenecked by human operating hours, leading to abandoned carts and poor reviews.',
    solution: 'We trained a specialized LLM on LuxeRetail’s brand documentation and integrated it into their Shopify store, providing instant, personalized support 24/7.',
    stats: [
      { label: 'Wait Time', value: 'Zero' },
      { label: 'Availability', value: '24/7' }
    ],
    icon: Mic,
    top: 'top-28'
  },
  {
    title: 'Global Finance Identity',
    category: 'FinTech',
    service: 'Brand Rebrand',
    description: 'Complete brand overhaul and digital presence restructuring. Established a data-backed brand voice.',
    fullStory: 'In the competitive world of FinTech, trust is everything. Global Finance had an outdated look that didn’t reflect their technological edge.',
    problem: 'Brand perception was lagging behind their actual product capabilities, making it hard to attract Series B funding.',
    solution: 'A complete visual and verbal identity reset. We focused on "Transparent Security" as the core pillar, resulting in a 2.5x increase in trust scores among target demographics.',
    stats: [
      { label: 'Visual Identity', value: 'Modern' },
      { label: 'Trust Score', value: 'High' }
    ],
    icon: Award,
    top: 'top-32'
  }
];

interface CaseStudiesProps {
  onCaseClick: (project: CaseStudy) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onCaseClick }) => {
  return (
    <div id="work" className="py-24">
      <div className="flex flex-col items-center mb-16">
        <span className="text-rose-500 font-montserrat font-bold text-sm tracking-widest uppercase mb-4">Our Portfolio</span>
        <h2 className="text-4xl md:text-5xl text-center tracking-tight text-gray-900 font-montserrat font-semibold">
          Client Success Stories
        </h2>
      </div>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto relative">
        {cases.map((project, idx) => (
          <div 
            key={idx} 
            onClick={() => onCaseClick(project)}
            className={`group sticky ${project.top} bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2`}
          >
            <div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
              <span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-3 py-1 rounded-full transition-colors">
                {project.category}
              </span>
              <span className="font-montserrat font-medium flex items-center gap-1 group-hover:text-rose-600 transition-colors">
                {project.service}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-6 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-8 font-montserrat font-medium leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-12 text-gray-700">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="group-hover:translate-x-2 transition-transform duration-300">
                      <div className="text-lg font-montserrat font-semibold text-rose-500">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-full group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm w-fit">
                <project.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-gray-400 font-montserrat font-medium text-sm">Click any case study to see the full strategy.</p>
      </div>
    </div>
  );
};

export default CaseStudies;
