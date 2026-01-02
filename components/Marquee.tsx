
import React from 'react';
import { BarChart, Search, Facebook, Activity, Zap, ShoppingBag } from 'lucide-react';

const partners = [
  { name: 'Analytics', icon: BarChart, color: 'hover:text-gray-900' },
  { name: 'Google Ads', icon: Search, color: 'hover:text-blue-500' },
  { name: 'Meta', icon: Facebook, color: 'hover:text-blue-600' },
  { name: 'HubSpot', icon: Activity, color: 'hover:text-orange-500' },
  { name: 'OpenAI', icon: Zap, color: 'hover:text-gray-900' },
  { name: 'Shopify', icon: ShoppingBag, color: 'hover:text-green-500' },
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full py-12 mt-8 overflow-hidden marquee-mask relative group">
      <div className="flex w-[200%] animate-infinite-scroll group-hover:[animation-play-state:paused]">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center justify-around w-1/2 gap-16 px-8">
            {partners.map((partner) => (
              <div key={partner.name} className={`flex items-center gap-3 text-gray-400 ${partner.color} transition-colors duration-300`}>
                <partner.icon className="w-8 h-8" strokeWidth={1.5} />
                <span className="text-lg font-montserrat font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
