import React from 'react';

export const BentoGrid: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Engineered for Success
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We replaced the "Consultant" with "Code". The result is faster, cheaper, and more accurate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Box 1: Large Left - AI Brain */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/30 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Matching Engine</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Unlike agents who know 5-10 universities, our AI scans 15,000+ programs in milliseconds. It reads the "Hidden Requirements" (like EPC acceptance) that humans miss.
              </p>
              {/* Mock UI Element */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 opacity-80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="text-xs font-mono text-green-400">Match Found: University of Bologna</div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full w-3/4 mb-2"></div>
                <div className="h-2 bg-slate-700 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Box 2: Top Right - Speed */}
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10 text-9xl font-black text-white leading-none -mb-4 -mr-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Instant Analysis</h3>
            <p className="text-slate-400 text-sm">
              Don't wait weeks for a reply. Get a full profile assessment in <span className="text-white font-bold">45 seconds</span>.
            </p>
          </div>

          {/* Box 3: Bottom Right - Guarantee */}
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-green-500/50 transition-colors flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center text-xl">🛡️</div>
              <h3 className="text-xl font-bold">Zero Bias</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Agents push you to low-rank colleges for commission. We work for <span className="text-white font-bold">YOU</span>, targeting only top-tier funded seats.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
