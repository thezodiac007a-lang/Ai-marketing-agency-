
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
      <nav className="glass-nav border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300">
        <a href="#" className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors">
          <span className="text-2xl tracking-tight font-serif italic font-medium">ZODIAC.</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-montserrat font-medium text-gray-500">
          <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-rose-600 transition-colors">Agency</a>
        </div>

        <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

        <button 
          onClick={onContactClick}
          className="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium"
        >
          Book Strategy
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
