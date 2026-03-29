import React, { useState } from 'react';

const HIDDEN_GEMS = [
  { name: "University of Camerino 🇮🇹", reason: "Accepts 2.3 CGPA. 100% Tuition Waiver.", status: "Easy Win" },
  { name: "University of Miskolc 🇭🇺", reason: "Only 40 Applicants last year. Full Stipend.", status: "Very Low Comp" },
  { name: "Silesian University 🇵🇱", reason: "No IELTS Required. Monthly Allowance €400.", status: "Hidden Gem" }
];

export const HiddenVault: React.FC = () => {
  // Always locked now, as the button redirects to consultation
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    // Direct to Book Consultant section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300" id="vault">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-2xl">🔒</div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">The 'Hidden Gem' Vault</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Low competition universities that agents won't tell you about.</p>
          </div>
        </div>

        {/* The Vault Container */}
        <div className="relative border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl bg-slate-50 dark:bg-slate-800 min-h-[300px]">
          
          {/* 🟢 BLUR OVERLAY (The Lock) */}
          {!isUnlocked && (
            <div className="absolute inset-0 z-20 backdrop-blur-md bg-white/60 dark:bg-slate-900/80 flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 bg-slate-900 dark:bg-slate-800 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl animate-bounce dark:border dark:border-slate-700">🗝️</div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">This Content is Locked</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                These 3 universities have an <strong>85% Acceptance Rate</strong>. To prevent overcrowding, access is restricted.
              </p>
              <button 
                id="unlock-btn"
                onClick={handleUnlock}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span>🚀</span> Reveal for FREE
              </button>
              <p className="text-xs text-slate-400 mt-4">Click to instantly unlock</p>
            </div>
          )}

          {/* 🟢 ACTUAL CONTENT (Blurred at first) */}
          <div className={`p-8 grid gap-6 ${!isUnlocked ? 'filter blur-sm select-none' : ''}`}>
             {HIDDEN_GEMS.map((gem, index) => (
               <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-2xl border border-slate-100 dark:border-slate-600 shadow-sm flex items-center justify-between">
                 <div>
                   <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                     {gem.name} 
                     {isUnlocked && <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">{gem.status}</span>}
                   </h4>
                   <p className="text-slate-500 dark:text-slate-300 text-sm mt-1">{gem.reason}</p>
                 </div>
                 {isUnlocked ? (
                   <a href="https://wa.me/message/ID5GXUUKX36CM1" target="_blank" className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-700">
                     Apply
                   </a>
                 ) : (
                   <div className="w-20 h-8 bg-slate-200 dark:bg-slate-600 rounded-lg animate-pulse"></div>
                 )}
               </div>
             ))}
          </div>

        </div>
      </div>
    </div>
  );
};