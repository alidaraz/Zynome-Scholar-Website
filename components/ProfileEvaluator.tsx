import React, { useState } from 'react';

export const ProfileEvaluator: React.FC = () => {
  const [cgpa, setCgpa] = useState('');
  const [englishType, setEnglishType] = useState<'IELTS' | 'EPC' | 'NONE'>('IELTS');
  const [papers, setPapers] = useState('0');
  const [score, setScore] = useState<number | null>(null);

  const calculateChance = () => {
    let s = 0;
    // 1. CGPA Logic
    const gpa = parseFloat(cgpa);
    if (!isNaN(gpa)) {
        if (gpa >= 3.5) s += 40;
        else if (gpa >= 3.0) s += 30;
        else s += 15;
    }

    // 2. English Logic (EPC is weaker than IELTS, but still counts)
    if (englishType === 'IELTS') s += 30;
    else if (englishType === 'EPC') s += 15; 

    // 3. Research Logic
    if (parseInt(papers) > 0) s += 30;

    // Cap
    setScore(Math.min(s, 98));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden mb-16 border border-white/10 mt-12">
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-3">📊 Eligibility Calculator AI</h2>
        <p className="text-indigo-200 mb-8">Check your winning probability in 5 seconds.</p>

        {!score ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* CGPA Input */}
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <label className="text-xs text-indigo-300 font-bold uppercase block mb-2">CGPA (Out of 4.0)</label>
              <input 
                type="number" 
                placeholder="3.5" 
                value={cgpa} 
                onChange={(e) => setCgpa(e.target.value)}
                className="w-full bg-transparent text-2xl font-bold text-center outline-none border-b border-indigo-400 focus:border-white transition-colors placeholder-indigo-400/50 text-white"
              />
            </div>

            {/* English Type */}
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 text-left">
              <label className="text-xs text-indigo-300 font-bold uppercase block mb-2">English Proof</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="eng" checked={englishType === 'IELTS'} onChange={() => setEnglishType('IELTS')} className="accent-yellow-400"/>
                  <span className="text-sm font-medium">IELTS / TOEFL</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="eng" checked={englishType === 'EPC'} onChange={() => setEnglishType('EPC')} className="accent-yellow-400"/>
                  <span className="text-sm font-medium">English Prof. Cert (EPC)</span>
                </label>
              </div>
            </div>

            {/* Papers */}
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <label className="text-xs text-indigo-300 font-bold uppercase block mb-2">Research Papers</label>
              <select 
                value={papers}
                onChange={(e) => setPapers(e.target.value)}
                className="w-full bg-transparent text-xl font-bold text-center outline-none border-b border-indigo-400 focus:border-white text-white [&>option]:text-slate-900"
              >
                <option value="0">None</option>
                <option value="1">1 Paper</option>
                <option value="2">2+ Papers</option>
              </select>
            </div>

            {/* Button */}
            <button 
              onClick={calculateChance}
              className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-extrabold text-lg rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center py-4 md:py-0"
            >
              Check Now ⚡
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="text-7xl font-black text-yellow-400 mb-2 drop-shadow-lg">{score}%</div>
            <p className="text-xl font-medium mb-6">Estimated Success Chance</p>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 max-w-lg mx-auto backdrop-blur-sm mb-6">
                {score > 80 ? (
                  <p className="text-lg">🌟 <strong>Excellent Profile!</strong> You have a high chance of winning full funding. <br/> Let us help you select the <em>perfect</em> university.</p>
                ) : score > 60 ? (
                  <p className="text-lg">👍 <strong>Good Profile.</strong> But competition is tough. <br/> A <strong>Professional SOP Review</strong> can boost this score to 90%+.</p>
                ) : (
                  <p className="text-lg">⚠️ <strong>Needs Improvement.</strong> Don't worry. <br/> Book a <strong>Consultation</strong> to build a strategy that works.</p>
                )}
            </div>
            <button onClick={() => setScore(null)} className="text-sm text-indigo-300 underline hover:text-white">Calculate Again</button>
          </div>
        )}
      </div>
    </div>
  );
};