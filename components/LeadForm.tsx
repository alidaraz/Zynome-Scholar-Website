import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const LeadForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus('sending');

    // ✅ Uses your existing keys
    emailjs.sendForm('service_hmavfrh', 'template_oqjsdmr', form.current, 'OG2E1O11uSQ3sQLce')
      .then(() => { 
        setStatus('success'); 
        form.current?.reset(); 
        // Reset success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      }, 
      (error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300" id="signup">
      <div className="max-w-4xl mx-auto px-4 bg-indigo-50 dark:bg-slate-800 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-lg">
        
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Start Your Journey Today 🚀</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Fill out this form to get a <strong>Free Profile Assessment</strong> from our team.</p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex gap-2"><span>✓</span> Weekly Scholarship Alerts</li>
              <li className="flex gap-2"><span>✓</span> Visa Guideline PDF (Free)</li>
              <li className="flex gap-2"><span>✓</span> Direct WhatsApp Access</li>
            </ul>
          </div>

          {/* Right Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            
            {/* 1. Full Name - Visual Update: White Bg, Black Text */}
            <div>
              <input 
                type="text" 
                name="user_name" 
                placeholder="Full Name" 
                required 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all shadow-sm font-medium" 
              />
            </div>

            {/* 2. Email Address - Visual Update: White Bg, Black Text */}
            <div>
              <input 
                type="email" 
                name="user_email" 
                placeholder="Email Address" 
                required 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all shadow-sm font-medium" 
              />
            </div>

            {/* 3. WhatsApp Number - Visual Update: White Bg, Black Text */}
            <div>
              <input 
                type="tel" 
                name="user_phone" 
                placeholder="WhatsApp Number" 
                required 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all shadow-sm font-medium" 
              />
            </div>
            
            {/* 4. What They Need (Service) */}
            <div>
              <select 
                name="interest" 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none cursor-pointer shadow-sm font-medium appearance-none"
              >
                <option value="Scholarship Hunting">I need Scholarship Hunting</option>
                <option value="SOP Writing">I need SOP/Essay Help</option>
                <option value="Done-For-You">I need 'Done-For-You' Service</option>
                <option value="Visa Prep">I need Visa Interview Prep</option>
              </select>
            </div>

            <button 
              disabled={status !== 'idle'} 
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] 
                ${status === 'success' ? 'bg-green-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Request Sent! ✅' : 'Get Free Assessment'}
            </button>
            
            {/* Error Fallback to WhatsApp */}
            {status === 'error' && (
              <div className="text-center mt-2">
                <p className="text-red-500 text-sm mb-1">Connection failed.</p>
                <a 
                  href="https://wa.me/message/ID5GXUUKX36CM1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-bold underline text-sm hover:text-indigo-800"
                >
                  Click here to Chat on WhatsApp instead
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};