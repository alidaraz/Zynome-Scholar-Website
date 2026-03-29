import React, { useState, useEffect } from 'react';

// 🧠 THE IMAGE BRAIN
// This function picks an image based on the scholarship title.
const getSmartImage = (title: string) => {
  const lowerTitle = title.toLowerCase();

  // 1. COUNTRY MATCHING (High-Quality Unsplash IDs)
  if (lowerTitle.includes('italy') || lowerTitle.includes('pisa') || lowerTitle.includes('milan')) {
    return "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"; // Pisa/Italy
  }
  if (lowerTitle.includes('uk') || lowerTitle.includes('england') || lowerTitle.includes('london') || lowerTitle.includes('chevening')) {
    return "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"; // London
  }
  if (lowerTitle.includes('germany') || lowerTitle.includes('daad') || lowerTitle.includes('munich') || lowerTitle.includes('bonn')) {
    return "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"; // Germany
  }
  if (lowerTitle.includes('usa') || lowerTitle.includes('america') || lowerTitle.includes('harvard')) {
    return "https://images.unsplash.com/photo-1541339907198-e021fc9d13f1?auto=format&fit=crop&w=800&q=80"; // USA Campus
  }
  if (lowerTitle.includes('hungary') || lowerTitle.includes('budapest')) {
     return "https://images.unsplash.com/photo-1565426873118-a1dfa01946e6?auto=format&fit=crop&w=800&q=80"; // Budapest
  }
  if (lowerTitle.includes('turkey') || lowerTitle.includes('istanbul')) {
      return "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80"; // Istanbul
  }
  
  // 2. FIELD MATCHING
  if (lowerTitle.includes('medical') || lowerTitle.includes('bio') || lowerTitle.includes('health')) {
    return "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"; // Lab/Science
  }
  if (lowerTitle.includes('tech') || lowerTitle.includes('engineering') || lowerTitle.includes('cs')) {
    return "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"; // Coding/Tech
  }

  // 3. DEFAULT (If nothing matches, show a nice library)
  return "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80";
};

const SCHOLARSHIPS_ROTATION = [
  {
    title: "DSU Scholarship 2026 🇮🇹", 
    university: "University of Pisa, Italy",
    desc: "The easiest 'Fully Funded' option for students with CGPA 2.5+.",
    stipend: "€7,200 / Year",
    fee: "100% Waived",
    ielts: "Optional (EPC Accepted)"
  },
  {
    title: "DAAD EPOs 2026 🇩🇪", 
    university: "University of Bonn, Germany",
    desc: "Top-tier research grant for Development-Related Postgraduate Courses.",
    stipend: "€850 / Month",
    fee: "No Tuition Fee",
    ielts: "Required (6.0+)"
  },
  {
    title: "Stipendium Hungaricum 🇭🇺", 
    university: "Hungary (Various)",
    desc: "Full coverage including accommodation, medical insurance, and stipend.",
    stipend: "HUF 43,700 / Month",
    fee: "100% Waived",
    ielts: "Not Required (EPC OK)"
  }
];

export const SpotlightCard: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // 🧠 AUTO-UPDATER LOGIC
    // Determines the current 12-hour block based on system time
    const now = Date.now();
    const cycleDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    const cycleCount = Math.floor(now / cycleDuration);
    
    // Set scholarship index based on the cycle
    setIndex(cycleCount % SCHOLARSHIPS_ROTATION.length);

    // Calculate time remaining until the next update
    const nextCycleStart = (cycleCount + 1) * cycleDuration;
    const diff = nextCycleStart - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    setTimeLeft(`${hours}h ${minutes}m`);

  }, []);

  const scholarship = SCHOLARSHIPS_ROTATION[index];
  const imageSrc = getSmartImage(scholarship.title);

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-1 shadow-2xl transform hover:scale-[1.01] transition-transform">
          <div className="bg-white dark:bg-slate-800 rounded-[22px] overflow-hidden grid md:grid-cols-2">
            
            {/* Left: Auto-Image */}
            <div className="relative h-64 md:h-auto bg-slate-100 dark:bg-slate-700 group">
              <img 
                src={imageSrc}
                alt={scholarship.university}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>

              <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded uppercase tracking-wider shadow-md z-10">
                🔥 Hot Pick of the Week
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{scholarship.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{scholarship.desc}</p>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Stipend:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{scholarship.stipend}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Tuition:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{scholarship.fee}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 dark:border-slate-700 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">IELTS:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{scholarship.ielts}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => window.open('https://wa.me/message/ID5GXUUKX36CM1', '_blank')}
                  className="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Details
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 🕒 AUTO-UPDATE TIMER */}
        <div className="mt-4 flex justify-center">
            <div className="border border-dashed border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Next deal drops in: {timeLeft || "Calculating..."}
            </div>
        </div>
      </div>
    </div>
  );
};