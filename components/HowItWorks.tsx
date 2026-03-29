import React from 'react';

const STEPS = [
  {
    icon: "🔍",
    title: "1. Match",
    desc: "Enter your profile. Our AI scans 15,000+ global scholarships to find your perfect fit in seconds."
  },
  {
    icon: "📝",
    title: "2. Prepare",
    desc: "Use our 'SOP Review' service to polish your essays and use 'Mock Interview' to prep for visas."
  },
  {
    icon: "✈️",
    title: "3. Fly",
    desc: "Accept your offer letter, pack your bags, and join our Alumni Network in Europe or USA."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-16">Your Journey in 3 Steps 🗺️</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-100 dark:bg-slate-800 -z-10"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative group cursor-default">
              <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-800 border-4 border-indigo-50 dark:border-indigo-900/30 rounded-full flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 group-hover:border-indigo-100 dark:group-hover:border-indigo-800 transition-all duration-300 mb-8 z-10 relative">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed px-4 text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};