
import React from 'react';
import { ArrowRight, TrendingUp, Cpu } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <div className="bg-white rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-sm border border-gray-100 relative overflow-hidden group transition-shadow duration-700">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-montserrat font-semibold mb-8 shadow-sm hover:border-rose-200 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            ACCEPTING NEW CLIENTS
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
            Scaling <span className="italic text-gray-400">Revenue</span> <br />
            through <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Intelligent</span> <br />
            Marketing.
          </h1>

          {/* Description */}
          <p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
            We blend creative strategy with <span className="text-gray-900 font-semibold">AI Automation</span> to drive predictable growth. The modern agency for ambitious brands.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
            <button 
              onClick={onContactClick}
              className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full text-base hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/20 transition-all duration-300 flex items-center gap-3 font-montserrat font-medium group/btn"
            >
              Get an Audit
              <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/30 transition-colors">
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full animate-slide-in delay-300">
          <div className="absolute top-10 right-10 w-full h-full bg-gray-100 rounded-[2rem] -rotate-3 z-0"></div>
          <div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 z-10 group/image">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
              alt="Team Strategy" 
              className="w-full h-full object-cover grayscale group-hover/image:grayscale-0 transition-all duration-700 group-hover/image:scale-105"
            />
            
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-gray-100/50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold font-montserrat tracking-wide text-gray-400 uppercase">Average Results</span>
                <TrendingUp className="w-4 h-4 text-rose-500" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 font-montserrat">+240% ROI Increase</p>
                  <p className="text-xs text-gray-500 font-montserrat">Across client portfolios Q1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
