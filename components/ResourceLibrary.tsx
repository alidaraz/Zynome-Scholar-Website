import React from 'react';

const RESOURCES = [
  {
    icon: "📄",
    title: "Winning SOP Template",
    desc: "The exact structure that won a DAAD Scholarship.",
    btn: "Download PDF"
  },
  {
    icon: "✅",
    title: "Italy Visa Checklist",
    desc: "Don't miss a single document for your appointment.",
    btn: "Get Checklist"
  },
  {
    icon: "📧",
    title: "Professor Email Scripts",
    desc: "Copy-paste templates to get acceptance letters.",
    btn: "Copy Scripts"
  }
];

export const ResourceLibrary: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Free Student Resources 🎁</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Steal our internal tools. No charge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{item.desc}</p>
              <button 
                onClick={() => window.open('https://wa.me/message/ID5GXUUKX36CM1', '_blank')}
                className="w-full py-3 rounded-lg border-2 border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-colors"
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};