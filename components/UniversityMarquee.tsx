import React from 'react';

const UNIVERSITIES = [
  "University of Oxford", "Stanford University", "ETH Zurich", 
  "University of Toronto", "National University of Singapore", 
  "University of Melbourne", "Technical University of Munich",
  "Sorbonne University", "University of Tokyo", "Cambridge",
  "Harvard University", "MIT", "Imperial College London"
];

export const UniversityMarquee: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-10 overflow-hidden mb-8 transition-colors duration-300">
      <p className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
        Opportunities from Top Institutions
      </p>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll whitespace-nowrap flex gap-16 px-8 items-center">
          {/* We repeat the list twice for seamless looping */}
          {[...UNIVERSITIES, ...UNIVERSITIES].map((uni, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default select-none"
            >
              {uni}
            </span>
          ))}
        </div>
        
        {/* Fades */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10"></div>
      </div>
    </div>
  );
};