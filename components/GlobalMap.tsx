import React from 'react';

const LOCATIONS = [
  { top: '30%', left: '20%', label: 'USA', count: '12 Students' },
  { top: '22%', left: '24%', label: 'Canada', count: '9 Students' }, // Added
  { top: '25%', left: '48%', label: 'UK', count: '8 Students' },
  { top: '28%', left: '50%', label: 'Germany', count: '45 Students' },
  { top: '30%', left: '49%', label: 'France', count: '14 Students' }, // Added
  { top: '32%', left: '54%', label: 'Italy', count: '82 Students' }, // Big hub
  { top: '31%', left: '56%', label: 'Hungary', count: '28 Students' }, // Added
  { top: '35%', left: '80%', label: 'China', count: '15 Students' },
  { top: '36%', left: '85%', label: 'South Korea', count: '7 Students' }, // Added
  { top: '34%', left: '88%', label: 'Japan', count: '5 Students' }, // Added
  { top: '75%', left: '85%', label: 'Australia', count: '11 Students' }, // Added
];

export const GlobalMap: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Zynome Scholars are Everywhere 🌍</h2>
        <p className="text-indigo-200 mb-12">From Rome to Beijing, our students are making their mark.</p>

        {/* Map Container */}
        <div className="relative w-full h-[300px] md:h-[500px] bg-slate-800/50 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
          
          {/* Map Image */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            alt="World Map" 
            className="w-full h-full object-cover opacity-30 invert"
          />

          {/* Pulsing Dots */}
          {LOCATIONS.map((loc, index) => (
            <div 
              key={index}
              className="absolute group cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="relative">
                {/* The Dot */}
                <div className="w-2 md:w-3 h-2 md:h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                {/* The Pulse Ring */}
                <div className="absolute top-0 left-0 w-2 md:w-3 h-2 md:h-3 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                
                {/* Tooltip (Visible on Hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                  {loc.label}: {loc.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Current Scholars
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div> Upcoming Targets
          </div>
        </div>
      </div>
    </div>
  );
};