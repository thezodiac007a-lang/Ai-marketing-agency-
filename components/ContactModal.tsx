
import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mbdlodrz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Close modal after a delay so they see the success message
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-overlay"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-500 font-montserrat">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-2">Book a Strategy Session</h2>
                <p className="text-gray-500 font-montserrat font-medium">Tell us about your brand and growth goals.</p>
              </div>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 font-montserrat text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Name</label>
                    <input 
                      required
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none font-montserrat"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
                    <input 
                      required
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none font-montserrat"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Website URL</label>
                  <input 
                    id="website"
                    name="website"
                    type="url" 
                    placeholder="https://company.com"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none font-montserrat"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                  <textarea 
                    required
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none font-montserrat resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-2xl font-montserrat font-bold hover:bg-rose-600 shadow-xl shadow-gray-900/10 hover:shadow-rose-600/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
