
import React from 'react';
import { Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="py-24 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
          The ZODIAC Difference
        </h2>
        <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
          <p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
            We are <span className="text-gray-900 font-bold">ZODIAC</span>, a new breed of marketing agency. We don't just run ads; we engineer <span className="text-gray-900 border-b-2 border-rose-200 hover:border-rose-500 transition-colors font-montserrat font-medium">Growth Ecosystems</span>.
          </p>
          <p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
            By bridging the gap between creative storytelling and hard data analytics, we unlock potential that traditional agencies miss. We specialize in <span className="text-rose-600 font-semibold">AI Integration</span> and performance infrastructure.
          </p>
        </div>
        <button className="group mt-12 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-base hover:border-rose-600 hover:text-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-sm hover:shadow-lg hover:shadow-rose-500/20">
          Meet the Team
          <Users className="w-4 h-4 group-hover:scale-125 transition-transform" />
        </button>
      </div>

      <div className="relative h-[600px] flex items-center justify-center group/polaroid">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

        {/* Photo 1 */}
        <div className="absolute top-10 left-10 w-72 bg-white p-4 pb-12 shadow-xl rotate-[-6deg] z-10 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
          <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale group-hover/polaroid:grayscale-0 transition-all duration-500">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" 
              className="w-full h-full object-cover mix-blend-multiply group-hover/polaroid:mix-blend-normal transition-all" 
              alt="Strategy Session" 
            />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
        </div>

        {/* Photo 2 */}
        <div className="absolute top-24 right-4 w-72 bg-white p-4 pb-12 shadow-xl rotate-[6deg] z-20 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
          <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale group-hover/polaroid:grayscale-0 transition-all duration-500">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" 
              className="w-full h-full object-cover mix-blend-multiply group-hover/polaroid:mix-blend-normal transition-all" 
              alt="Team" 
            />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
