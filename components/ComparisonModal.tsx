import React from 'react';
import { Scholarship } from '../types';

type ComparisonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  items: Scholarship[]; 
};

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Scholarship Showdown ⚔️</h3>
            <p className="text-slate-400 text-xs">Comparing {items.length} opportunities side-by-side</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">✕</button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 overflow-y-auto max-h-[70vh]">
          {items.map((item, index) => (
            <div key={index} className="p-6 space-y-6">
              
              {/* Name & Country */}
              <div className="text-center">
                <span className="text-4xl mb-2 block">{item.country === 'Italy' ? '🇮🇹' : item.country === 'Germany' ? '🇩🇪' : '🌍'}</span>
                <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase">{item.university}</p>
              </div>

              {/* Stats Comparison */}
              <div className="space-y-4 text-sm">
                
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">💰 Stipend Value</span>
                  <span className="font-bold text-green-600">{item.stipend || 'Unknown'}</span>
                </div>
                
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">🗣️ English Req</span>
                  <span className={`font-bold ${item.englishRequirement.includes('No') || item.englishRequirement.includes('EPC') ? 'text-green-600' : 'text-orange-500'}`}>{item.englishRequirement}</span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">🎓 Min CGPA</span>
                  <span className="font-bold text-slate-900">{item.minCgpa || 'N/A'} / 4.0</span>
                </div>

                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">🏆 Win Probability</span>
                  <div className="text-right">
                    <span className={`font-black ${(item.winChance || 50) > 70 ? 'text-green-500' : 'text-yellow-500'}`}>{item.winChance || 50}%</span>
                  </div>
                </div>

                {/* The "Verdict" (AI Analysis) */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">AI Verdict</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {(item.winChance || 50) > 80 
                      ? "Top Pick! High funding and low competition. Focus on your SOP." 
                      : "Competitive. Ensure you have strong recommendation letters."}
                  </p>
                </div>

              </div>

              <a href="https://wa.me/message/ID5GXUUKX36CM1" target="_blank" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 rounded-xl transition-colors">
                Apply to This One
              </a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};