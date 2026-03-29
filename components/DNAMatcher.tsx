import React, { useState, useEffect } from 'react';

export const DNAMatcher: React.FC = () => {
  const [scanning, setScanning] = useState(true);

  // Fake scanning effect
  useEffect(() => {
    const timer = setInterval(() => {
      setScanning(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-16 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 dark:opacity-10" 
        style={{ backgroundImage: 'radial-gradient(#e0e7ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="p-8 md:p-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: The Sales Pitch */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-widest uppercase font-bold">Global Database Connected</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Match Your DNA.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
            The world is too big to search manually. Our "Zynome Engine" scans 195 countries against your academic profile. It finds the <strong>0.1% of scholarships</strong> where you are mathematically guaranteed to win.
          </p>
          <button onClick={() => document.getElementById('signup')?.scrollIntoView({behavior: 'smooth'})} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all transform hover:scale-105 shadow-xl">
            Run Zynome Scan 🧬
          </button>
        </div>

        {/* Right: The Visualizer (Kept dark for screen effect) */}
        <div className="relative bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
            <div className="text-xs font-mono text-slate-500">TARGET_ID: USER_882</div>
            <div className="text-xs font-mono text-green-500 flex items-center gap-2">
              ● SYSTEM ONLINE
            </div>
          </div>

          {/* Matches */}
          <div className="space-y-4">
            {[
              { country: "Italy", match: 98, color: "bg-green-500" },
              { country: "Hungary", match: 92, color: "bg-green-500" },
              { country: "China", match: 85, color: "bg-yellow-400" },
              { country: "USA", match: 45, color: "bg-red-500" },
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex justify-between text-sm font-bold mb-1">
                  <span className="text-slate-300">{item.country} Compatibility</span>
                  <span className={scanning ? 'opacity-100 text-white' : 'opacity-80 text-white'}>{item.match}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000 ease-out relative`} 
                    style={{ width: `${item.match}%` }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating 'Scan' Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_20px_#06b6d4] animate-[scan_3s_linear_infinite] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};