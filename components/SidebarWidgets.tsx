import React from 'react';

const BOOSTERS = [
  {
    title: "Essay & SOP Review",
    subtitle: "Turn rejection into acceptance",
    icon: "✍️",
    link: "https://wa.me/message/ID5GXUUKX36CM1"
  },
  {
    title: "Visa Mock Interview",
    subtitle: "Prepare for tricky questions",
    icon: "🛂",
    link: "https://wa.me/message/ID5GXUUKX36CM1"
  },
  {
    title: "Application Audit",
    subtitle: "Check for errors before applying",
    icon: "✅",
    link: "https://wa.me/message/ID5GXUUKX36CM1"
  }
];

export const SidebarWidgets: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl shadow-xl p-6 text-white mb-6 border border-white/5">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <span className="text-xl">🚀</span>
        <h3 className="font-bold text-lg">Application Boosters</h3>
      </div>

      <div className="space-y-4">
        {BOOSTERS.map((item, index) => (
          <a 
            key={index} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-indigo-400/50 group"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm text-white group-hover:text-indigo-200">{item.title}</h4>
              <p className="text-xs text-slate-400">{item.subtitle}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <p className="text-xs text-indigo-300 mb-2">Need a custom plan?</p>
        <a href="https://wa.me/message/ID5GXUUKX36CM1" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-indigo-900 font-bold py-2 rounded-lg text-sm hover:bg-indigo-50 transition-colors shadow-lg">
          Chat with Ali Daraz
        </a>
      </div>
    </div>
  );
};