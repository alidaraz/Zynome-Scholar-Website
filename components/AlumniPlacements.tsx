import React from 'react';

const COMPANIES = [
  "Pfizer", "Roche", "Novartis", "Thermo Fisher", 
  "Harvard Med", "Max Planck", "EMBL", "CERN"
];

export const AlumniPlacements: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
          Our Scholars Now Work & Research At
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {COMPANIES.map((company, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default select-none"
              style={{ fontFamily: 'serif' }} // Serif font makes them look like "Logos"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};