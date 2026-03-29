import React from 'react';

// Using text that looks like logos (Serif fonts) for a premium feel
const UNIS = [
  { name: "Oxford", country: "UK", style: "font-serif" },
  { name: "Stanford", country: "USA", style: "font-sans" },
  { name: "ETH Zurich", country: "Switzerland", style: "font-mono" },
  { name: "Toronto", country: "Canada", style: "font-serif" },
  { name: "Melbourne", country: "Australia", style: "font-sans" },
  { name: "Munich", country: "Germany", style: "font-mono" },
  { name: "Sorbonne", country: "France", style: "font-serif" },
  { name: "Tokyo", country: "Japan", style: "font-sans" }
];

export const TrustedUniversities: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 mb-8 transition-colors duration-300">
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Our Students Have Been Accepted At</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
        {UNIS.map((uni, index) => (
          <div key={index} className="flex flex-col items-center justify-center h-24 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-indigo-100 dark:hover:border-indigo-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 cursor-default group">
            {/* Simulated Logo Text */}
            <span className={`text-2xl font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 ${uni.style}`}>
              {uni.name}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase mt-1 font-bold">{uni.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};