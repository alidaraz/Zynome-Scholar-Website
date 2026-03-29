import React, { useState } from 'react';

export const EmailGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [university, setUniversity] = useState('');
  const [generated, setGenerated] = useState('');

  const generateEmail = () => {
    if (!name || !topic) return;
    const template = `Dear Prof. ${name},

I hope this email finds you well.

I recently read your research on "${topic}" at ${university || 'your university'}, and I was truly inspired by your findings. I am a prospective PhD/Master's student with a background in Molecular Biology.

I have attached my CV and would love the opportunity to discuss potentially joining your lab group.

Best regards,
[Your Name]`;
    setGenerated(template);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    alert("Email Copied! 📋");
  };

  return (
    <div className="py-20 bg-slate-900 text-white relative overflow-hidden" id="tools">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Free Tool</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">Magic Email Generator ✉️</h2>
          <p className="text-slate-400 mt-2">Don't know what to write to professors? Let AI draft it for you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Professor's Last Name</label>
              <input 
                type="text" 
                placeholder="e.g. Smith" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Research Topic</label>
              <input 
                type="text" 
                placeholder="e.g. CRISPR Gene Editing" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">University Name (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Oxford" 
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none mt-1"
              />
            </div>
            <button 
              onClick={generateEmail}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              Generate Email ⚡
            </button>
          </div>

          {/* Output Preview */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <label className="text-xs font-bold text-slate-500 uppercase mb-4 block">Preview</label>
            <textarea 
              readOnly
              value={generated || "Your generated email will appear here..."}
              className="w-full h-64 bg-transparent border-none outline-none text-slate-300 resize-none font-mono text-sm"
            />
            {generated && (
              <button 
                onClick={copyToClipboard}
                className="absolute bottom-4 right-4 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-200"
              >
                Copy Text 📋
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
