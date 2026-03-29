import React, { useState } from 'react';

export const Pricing: React.FC = () => {
  const [enableInstallments, setEnableInstallments] = useState(true);

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-cyan-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-200 dark:border-green-800">
            Student-First Pricing
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            Premium Help.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            We localized our prices to be affordable for every student globally.
          </p>

          {/* 🟢 THE AFFORDABILITY TOGGLE */}
          <div 
            className="mt-8 inline-flex items-center gap-3 bg-white dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:shadow-md transition-all select-none"
            onClick={() => setEnableInstallments(!enableInstallments)}
          >
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 pl-2">Enable Installments</span>
            <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${enableInstallments ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out mt-1 ml-1 ${enableInstallments ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            {enableInstallments && (
              <span className="text-xs text-green-700 dark:text-green-400 font-bold bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full mr-1">
                Student Friendly
              </span>
            )}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {/* 1. FREE TIER */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Explorer</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">For DIY Research.</p>
            <div className="my-6">
              <span className="text-3xl font-black text-slate-900 dark:text-white">$0</span>
            </div>
            <button 
              onClick={handleConsultation}
              className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              Start Free
            </button>
            <ul className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="text-green-500">✓</span> 15,000+ Database</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Basic Eligibility Check</li>
            </ul>
          </div>

          {/* 2. TOOLKIT ($4.99) */}
          <div className="bg-slate-900 dark:bg-slate-800 p-6 rounded-3xl border-2 border-indigo-500 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white">Pro Toolkit</h3>
            <p className="text-xs text-indigo-200 mt-1">Unfair Advantage.</p>
            <div className="my-6">
              <span className="text-4xl font-black text-white">$4.99</span>
              <span className="text-slate-400 text-xs">/mo</span>
            </div>
            <p className="text-[10px] text-indigo-300 mb-4 text-center bg-indigo-900/50 py-1 rounded">
              Less than a Burger 🍔
            </p>
            <button 
              onClick={handleConsultation}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/50 transition-all"
            >
              Get Superpowers ⚡
            </button>
            <ul className="mt-6 space-y-3 text-xs text-slate-300">
              <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>SOP X-Ray</strong> (Unlimited)</li>
              <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Hidden Vault</strong> Access</li>
              <li className="flex gap-2"><span className="text-indigo-400">✓</span> <strong>Scholar Sniper</strong> Alerts</li>
            </ul>
          </div>

          {/* 🟢 3. EXPERT REVIEW (Made Affordable) */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[9px] font-bold px-2 py-1 rounded-bl-lg">
              SAVE 80% vs AGENTS
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">SOP Polish</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Human Expert Review.</p>
            
            <div className="my-6">
              <span className="text-3xl font-black text-slate-900 dark:text-white">$25</span>
              <span className="text-slate-400 text-xs">/one-time</span>
            </div>

            {/* Group Discount Micro-Feature */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-2 rounded-lg mb-4 text-center">
              <p className="text-[10px] text-green-700 dark:text-green-400 font-bold leading-tight">
                👯 Bring a friend? <br/>
                Pay only <span className="underline">$15 each</span>.
              </p>
            </div>

            <button 
              onClick={handleConsultation}
              className="w-full py-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold hover:bg-green-200 dark:hover:bg-green-900/50 transition-all"
            >
              Book Review
            </button>
            <ul className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Real Human</strong> PhD Scholar</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> Grammar & Scientific Tone</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> 48-Hour Delivery</li>
            </ul>
          </div>

          {/* 🟢 4. VIP SERVICE (Made Affordable via Installments) */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">VIP Service</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Done-For-You Application.</p>
            
            <div className="my-6">
              {enableInstallments ? (
                // Installment View
                <div className="animate-fade-in">
                  <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">$49</span>
                  <span className="text-slate-400 text-xs"> x 4 months</span>
                  <p className="text-[10px] text-slate-400 mt-1">Zero Interest. Start today.</p>
                </div>
              ) : (
                // Full Price View
                <div className="animate-fade-in">
                   <span className="text-slate-300 dark:text-slate-500 line-through text-sm">$1,000</span>
                   <br />
                   <span className="text-3xl font-black text-slate-900 dark:text-white">$199</span>
                   <span className="text-slate-400 text-xs">/flat</span>
                </div>
              )}
            </div>

            <button 
              onClick={handleConsultation}
              className="w-full py-3 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white font-bold hover:bg-slate-800 dark:hover:bg-indigo-500 transition-all shadow-lg hover:shadow-slate-300 dark:hover:shadow-indigo-500/50"
            >
              {enableInstallments ? "Start for $49" : "Apply For Me"}
            </button>
            
            <ul className="mt-6 space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="text-green-500">✓</span> 3 University Applications</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> We Fill Forms & Upload Docs</li>
              <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Guaranteed Submission</strong></li>
            </ul>
          </div>

        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
            <span>🛡️</span> <strong>Zynome Promise:</strong> If we miss a deadline, you get a 100% refund.
          </p>
        </div>

      </div>
    </div>
  );
};