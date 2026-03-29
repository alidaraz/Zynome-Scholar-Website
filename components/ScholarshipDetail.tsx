import React from 'react';
import { Scholarship } from '../types';
import { ApplicationStatusCard } from './ApplicationStatusCard';

// Mock Data as fallback (from prompt)
const DB: Record<number, any> = {
  1: { name: "DSU Scholarship", country: "Italy", amount: "€7,200", deadline: "2026-09-30", desc: "The DSU Regional scholarship provides free accommodation, meals, and a cash stipend." },
  2: { name: "Merit Scholarship", country: "Italy", amount: "€8,000", deadline: "2026-05-30", desc: "Merit-based funding for students with high CGPA (Top 10% of class)." },
};

type Props = {
  id: number;
  data?: Scholarship; // Allow passing real data
  onBack: () => void;
};

export const ScholarshipDetail: React.FC<Props> = ({ id, data: propData, onBack }) => {
  // Use passed data if available, otherwise fallback to DB mock
  const mock = DB[id] || DB[1];
  
  const displayData = {
    name: propData?.name || mock.name,
    country: propData?.country || mock.country,
    amount: propData?.stipend || propData?.funding || mock.amount,
    deadline: propData?.deadline || mock.deadline,
    desc: propData?.description || mock.desc,
    university: propData?.university || "Various Universities",
    docs: propData?.docs || ['Passport', 'Transcript', 'CV Europass', 'Motivation Letter'],
    winChance: propData?.winChance || 94,
    url: propData?.url || "#",
    startDate: propData?.startDate || "2025-01-01" // Default fallback date
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in-up">
      
      {/* BACK BUTTON (Triggers the switch back to Home) */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-8 transition-colors"
      >
        <span>←</span> Back to Search
      </button>

      {/* HEADER */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 blur-[100px] opacity-30"></div>
        <span className="bg-indigo-500/20 text-indigo-200 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/30 uppercase tracking-wider">
          {displayData.country}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-2">{displayData.name}</h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-slate-300 font-mono mt-4">
          <span>💰 {displayData.amount}</span>
          <span>📅 Deadline: {displayData.deadline}</span>
          <span>🏛️ {displayData.university}</span>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Main Info */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">About this Opportunity</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {displayData.desc || "This is a prestigious opportunity for international students. It covers tuition fees and provides a monthly stipend to cover living expenses. Selection is based on academic merit and financial need."}
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
             <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Checklist</h3>
             <ul className="space-y-3">
               {displayData.docs && displayData.docs.length > 0 ? displayData.docs.map((item: string, idx: number) => (
                 <li key={idx} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                   <span className="text-green-500 font-bold">✓</span> {item}
                 </li>
               )) : (
                 <li className="text-slate-500 text-sm">Document list loading...</li>
               )}
             </ul>
          </section>
        </div>

        {/* Sidebar Action Box with Smart ApplicationStatusCard */}
        <div className="space-y-6">
          <div className="sticky top-28">
             <ApplicationStatusCard 
                winChance={displayData.winChance}
                startDate={displayData.startDate}
                deadline={displayData.deadline}
                link={displayData.url}
             />
          </div>
        </div>

      </div>
    </div>
  );
};