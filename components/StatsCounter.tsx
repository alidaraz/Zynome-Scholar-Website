import React, { useEffect, useState } from 'react';

const STATS = [
  { label: "Scholarships Indexed", value: 15000, suffix: "+" },
  { label: "Students Helped", value: 1200, suffix: "+" },
  { label: "Success Rate", value: 94, suffix: "%" },
  { label: "Countries Covered", value: 45, suffix: "+" },
];

export const StatsCounter: React.FC = () => {
  const [counted, setCounted] = useState(false);

  // Simple trigger to start animation on load
  useEffect(() => {
    setTimeout(() => setCounted(true), 500);
  }, []);

  return (
    <div className="py-10 border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-12 animate-fade-in-up transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className={`text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1 transition-all duration-1000 ${counted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {counted ? stat.value.toLocaleString() : 0}{stat.suffix}
            </div>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};