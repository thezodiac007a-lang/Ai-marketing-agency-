
import React, { useState } from 'react';
import { Layout, Cog, ArrowUpRight } from 'lucide-react';

type Category = 'All' | 'Strategy' | 'Automation';

interface ServicesProps {
  onContactClick: () => void;
}

const services = [
  {
    category: 'Strategy',
    title: 'Marketing Infrastructure',
    highlight: 'Infrastructure',
    description: 'We build robust digital foundations using Next.js and Headless CMS. Speed, SEO, and conversion rate optimization (CRO) built-in.',
    icon: Layout
  },
  {
    category: 'Automation',
    title: 'AI Process Automation',
    highlight: 'Automation',
    description: 'Stop doing busy work. We automate your CRM data entry, lead scoring, and email outreach using Python and Vector Databases.',
    icon: Cog
  }
];

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div id="services" className="py-24 border-t border-gray-200">
      <h2 className="text-4xl md:text-5xl text-center mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
        How We Help You Win
      </h2>
      
      {/* Interactive Filters */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {(['All', 'Strategy', 'Automation'] as Category[]).map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-montserrat font-medium transition-all transform hover:-translate-y-1 ${
              filter === cat 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-500 hover:text-rose-600'
            }`}
          >
            {cat === 'All' ? 'All Solutions' : cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredServices.map((service, idx) => (
          <div key={idx} className="group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 transform hover:-translate-y-1">
            <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-500">
              <service.icon className="w-8 h-8 text-gray-900 group-hover:text-rose-600 transition-colors duration-500" />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
              {service.title.split(service.highlight)[0]}
              <span className="text-gray-400 group-hover:text-rose-300 transition-colors">{service.highlight}</span>
            </h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8 h-auto min-h-[5rem] font-montserrat font-medium">
              {service.description}
            </p>
            <button 
              onClick={onContactClick}
              className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-4 px-6 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-300 font-montserrat group/link"
            >
              Learn More
              <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
