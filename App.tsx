
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
// Import missing components
import CaseStudies from './components/CaseStudies';
import CaseStudyModal from './components/CaseStudyModal';

// Define and export the CaseStudy interface used by CaseStudies and CaseStudyModal
export interface CaseStudy {
  title: string;
  category: string;
  service: string;
  description: string;
  fullStory: string;
  problem: string;
  solution: string;
  stats: { label: string; value: string }[];
  icon: React.ElementType;
  top: string;
}

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // State for tracking the selected case study for the detail modal
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={toggleContactModal} />
      <main className="max-w-7xl mx-auto pt-32 px-6 pb-20">
        <Hero onContactClick={toggleContactModal} />
        <Marquee />
        <About />
        <Services onContactClick={toggleContactModal} />
        {/* Added CaseStudies section */}
        <CaseStudies onCaseClick={setSelectedCase} />
        <Contact />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={toggleContactModal} />
      {/* Added CaseStudyModal to display project details */}
      <CaseStudyModal project={selectedCase} onClose={() => setSelectedCase(null)} />
    </div>
  );
};

export default App;
