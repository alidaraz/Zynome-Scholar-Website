import React, { useState } from 'react';

// 🧠 TOOL 1: SOP X-RAY LOGIC
const WEAK_WORDS = ["passionate", "hardworking", "believe", "think", "love", "good"];
const POWER_WORDS = ["analyzed", "optimized", "spearheaded", "engineered", "synthesized", "quantified"];

const XRayTool = () => {
  const [text, setText] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const renderHighlightedText = () => {
    return text.split(/\s+/).map((word, index) => {
      const lower = word.toLowerCase().replace(/[.,]/g, '');
      if (WEAK_WORDS.includes(lower)) return <span key={index} className="bg-red-200 text-red-800 px-1 font-bold border-b-2 border-red-400">{word} </span>;
      if (POWER_WORDS.includes(lower)) return <span key={index} className="bg-green-200 text-green-800 px-1 font-bold border-b-2 border-green-400">{word} </span>;
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-white">🧬 SOP X-Ray Vision</h3>
        <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded">AI Active</span>
      </div>
      {!analyzed ? (
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your SOP paragraph here to see what Admissions Officers see..."
          className="w-full h-48 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-300 focus:border-cyan-500 outline-none font-mono text-sm"
        />
      ) : (
        <div className="w-full h-48 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-300 overflow-y-auto font-mono text-sm">
          {renderHighlightedText()}
        </div>
      )}
      <button 
        onClick={() => setAnalyzed(!analyzed)}
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_#0891b2]"
      >
        {analyzed ? "Reset Scan" : "Run AI Scan ⚡"}
      </button>
    </div>
  );
};

// 🎯 TOOL 2: SCHOLAR SNIPER LOGIC
const SniperTool = () => {
  const [active, setActive] = useState(false);
  
  return (
    <div className="space-y-4 animate-fade-in">
       <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-white">🎯 Scholar Sniper Mode</h3>
        <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">Live Feed</span>
      </div>
      
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 relative overflow-hidden">
        {/* Radar Animation */}
        {active && (
          <div className="absolute top-0 right-0 p-4">
             <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          </div>
        )}
        
        <p className="text-sm text-slate-400 mb-4">
          Our bot monitors 15,000 university portals every second. Enter your WhatsApp to get an instant alert the <strong>exact moment</strong> a scholarship opens.
        </p>
        
        <div className="flex gap-2">
          <input 
            type="tel" 
            placeholder="+92 300..." 
            className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white outline-none focus:border-red-500"
          />
        </div>
      </div>

      <button 
        onClick={() => setActive(true)}
        disabled={active}
        className={`w-full font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${active ? 'bg-green-600 text-white cursor-default' : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_#dc2626]'}`}
      >
        {active ? (
          <><span>📡</span> Sniper Active: Scanning...</>
        ) : (
          <><span>🔭</span> Activate Sniper Mode</>
        )}
      </button>
      
      {active && (
        <div className="text-xs text-center text-green-400 font-mono mt-2 animate-pulse">
          ● Connected to Global Mainframe (Latency: 24ms)
        </div>
      )}
    </div>
  );
};

// 🔒 THE VAULT CONTAINER
export const PremiumVault: React.FC = () => {
  // Always locked now, as the button redirects to consultation
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<'xray' | 'sniper'>('xray');

  const handleUnlock = () => {
    // Direct to Book Consultant section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-slate-900 text-white" id="premium-tools">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
           <span className="bg-yellow-500/20 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-yellow-500/30">Premium Features</span>
           <h2 className="text-3xl md:text-5xl font-extrabold mt-4">Zynome <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Blackbox</span></h2>
           <p className="text-slate-400 mt-2">Advanced tools for serious applicants only.</p>
        </div>

        {/* VAULT BOX */}
        <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
          
          {/* 🔒 LOCKED OVERLAY */}
          {!isUnlocked && (
            <div className="absolute inset-0 z-30 backdrop-blur-xl bg-slate-900/80 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl shadow-yellow-500/10">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-2">Classified Tools Locked</h3>
              <p className="text-slate-400 mb-8 max-w-md text-sm">
                This vault contains <strong>SOP X-Ray Vision</strong> and <strong>Scholar Sniper Mode</strong>. These tools provide an unfair advantage.
              </p>
              
              <button 
                id="vault-btn"
                onClick={handleUnlock}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-3"
              >
                <span>🔓</span> Unlock Premium Access
              </button>
              <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">Restricted to Zynome Members</p>
            </div>
          )}

          {/* 🔓 UNLOCKED CONTENT */}
          <div className={`p-6 md:p-10 ${!isUnlocked ? 'filter blur-lg opacity-20 pointer-events-none' : ''}`}>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-slate-700 pb-1">
              <button 
                onClick={() => setActiveTab('xray')}
                className={`pb-3 px-2 text-sm font-bold transition-colors border-b-2 ${activeTab === 'xray' ? 'text-cyan-400 border-cyan-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
              >
                🧬 SOP X-Ray
              </button>
              <button 
                onClick={() => setActiveTab('sniper')}
                className={`pb-3 px-2 text-sm font-bold transition-colors border-b-2 ${activeTab === 'sniper' ? 'text-red-400 border-red-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
              >
                🎯 Sniper Mode
              </button>
            </div>

            {/* Render Active Tool */}
            <div className="min-h-[300px]">
              {activeTab === 'xray' ? <XRayTool /> : <SniperTool />}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};