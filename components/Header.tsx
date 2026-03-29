import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Precision Matching for Global Funding.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-12 text-center lg:text-left animate-fade-in-up relative">
      {/* Background Glow Effect - Enhanced for Silicon Valley Vibe */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none opacity-50 dark:opacity-20"></div>

      <div className="relative inline-block">
        {/* Silicon Valley Style Badge */}
        <div className="inline-flex items-center gap-3 bg-white/70 dark:bg-slate-800/60 border border-indigo-100 dark:border-indigo-500/30 rounded-full px-5 py-2 mb-8 shadow-lg shadow-indigo-500/5 backdrop-blur-xl transition-all hover:scale-105 cursor-default">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          </div>
          <p className="text-[11px] font-extrabold text-slate-600 dark:text-slate-300 tracking-widest uppercase">
            Powered by <span className="text-indigo-600 dark:text-indigo-400">Zynome Scientific</span> <span className="mx-1 text-slate-300">|</span> Life Sciences Enterprises
          </p>
        </div>

        <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
          <span className="text-slate-900 dark:text-white">Zynome</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">Scholar</span>
        </h1>
      </div>
      
      {/* Typing Effect Container */}
      <div className="h-14 flex justify-center lg:justify-start items-center">
        <div className="text-xl lg:text-3xl text-slate-600 dark:text-slate-300 font-medium font-mono border-l-4 border-indigo-500 pl-6">
           {text}<span className="animate-pulse font-bold text-indigo-600 dark:text-indigo-400">_</span>
        </div>
      </div>
    </header>
  );
};