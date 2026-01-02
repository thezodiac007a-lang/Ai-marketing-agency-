
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 text-gray-400 text-sm font-montserrat font-medium border-t border-gray-100">
      © {new Date().getFullYear()} ZODIAC Solutions. Crafted with <span className="text-rose-500">♥</span> for ambitious brands.
    </footer>
  );
};

export default Footer;
