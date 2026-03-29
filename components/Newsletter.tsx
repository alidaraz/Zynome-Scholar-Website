import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Newsletter: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // ✅ YOUR KEYS ARE NOW INTEGRATED
    emailjs.sendForm(
      'service_hmavfrh',   // Your Service ID
      'template_oqjsdmr',  // Your Template ID
      form.current,
      'OG2E1O11uSQ3sQLce'  // Your Public Key
    )
    .then(() => {
      setStatus('success');
      form.current?.reset();
    }, (error) => {
      console.error(error);
      setStatus('error');
    });
  };

  return (
    <div className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Join the Inner Circle 📩</h2>
        <p className="text-indigo-200 mb-10 text-lg">Get weekly scholarship alerts, hidden grants, and visa tips directly in your inbox.</p>
        
        <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            name="user_email" // Make sure your EmailJS template uses {{user_email}}
            placeholder="Enter your email address" 
            required
            className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-indigo-500/50 text-slate-900 font-medium shadow-xl"
          />
          <button 
            type="submit" 
            disabled={status === 'sending' || status === 'success'}
            className={`font-bold py-4 px-10 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2
              ${status === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:scale-105'
              }`}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Subscribed! ✅' : 'Sign Up'}
          </button>
        </form>
        
        {status === 'error' && <p className="text-red-400 mt-4 font-bold">Connection failed. Please check your internet.</p>}
        <p className="text-slate-500 text-sm mt-6">We respect your privacy. No spam, ever.</p>
      </div>
    </div>
  );
};