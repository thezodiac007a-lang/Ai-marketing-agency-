
import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="py-16 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
        Ready to Dominate Your Market?
      </h2>
      <p className="text-gray-500 text-lg mb-8 font-montserrat font-medium">
        Whether you need a complete rebrand or an automated sales engine, let's discuss your roadmap.
      </p>
      <a href="mailto:hello@zodiac.com" className="group inline-flex items-center gap-2 text-gray-900 hover:text-rose-600 font-semibold text-xl transition-colors relative">
        <span className="relative z-10">hello@zodiac.com</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        <Mail className="w-5 h-5 group-hover:animate-bounce text-rose-600" />
      </a>
    </div>
  );
};

export default Contact;
