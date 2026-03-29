import React from 'react';

const TESTIMONIALS = [
  { name: "Sarah Khan", country: "Pakistan", text: "Got fully funded for my PhD in Italy! Zynome's matching was spot on." },
  { name: "Ahmed Y.", country: "Nigeria", text: "The SOP review service changed my life. I had no idea my draft was so weak." },
  { name: "Li Wei", country: "China", text: "Found a hidden gem university in Germany with no tuition fee. Thanks Zynome!" },
  { name: "Maria G.", country: "Brazil", text: "Ali Daraz's videos are pure gold. The platform makes it even easier." },
  { name: "Rajesh K.", country: "India", text: "Finally a tool that filters by English requirements correctly." },
  { name: "Fatima Z.", country: "Morocco", text: "I was about to give up, then found a grant here I didn't know existed." }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-indigo-900 py-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-indigo-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-indigo-900 to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-scroll">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <div key={i} className="flex-shrink-0 w-80 mx-4 bg-indigo-800/50 p-6 rounded-xl border border-indigo-700/50 backdrop-blur-sm">
             <div className="flex items-center gap-2 mb-3">
               <span className="text-yellow-400">★★★★★</span>
               <span className="text-indigo-300 text-xs font-bold uppercase">{t.country}</span>
             </div>
             <p className="text-white text-sm leading-relaxed italic opacity-90">"{t.text}"</p>
             <div className="mt-4 text-indigo-200 font-bold text-sm">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};