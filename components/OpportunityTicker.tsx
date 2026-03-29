import React from 'react';

const TRENDS = [
  { name: "🇮🇹 DSU Italy", status: "🔥 High Demand", change: "+15% Apps" },
  { name: "🇭🇺 Stipendium", status: "🟢 Low Competition", change: "94% Win Rate" },
  { name: "🇩🇪 DAAD EPO", status: "⚠️ Closing Soon", change: "2 Days Left" },
  { name: "🇬🇧 Chevening", status: "🔒 Closed", change: "Next: Aug 2026" },
  { name: "🇨🇳 CSC China", status: "🟢 High Stipend", change: "Apps Open" },
  { name: "🇺🇸 Fulbright", status: "🔴 Very Hard", change: "Top 1% Only" },
];

export const OpportunityTicker: React.FC = () => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 overflow-hidden h-10 select-none fixed top-0 w-full z-[70] flex items-center">
      <div className="flex animate-scroll-left whitespace-nowrap gap-12 px-4">
        {/* Repeat list twice for seamless infinite scroll */}
        {[...TRENDS, ...TRENDS, ...TRENDS].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-xs md:text-sm font-mono">
            <span className="font-bold text-white">{item.name}</span>
            <span className={`px-2 py-0.5 rounded ${
              item.status.includes('High') ? 'bg-red-500/20 text-red-400' :
              item.status.includes('Low') || item.status.includes('Easy') ? 'bg-green-500/20 text-green-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {item.status}
            </span>
            <span className="text-slate-500">{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};