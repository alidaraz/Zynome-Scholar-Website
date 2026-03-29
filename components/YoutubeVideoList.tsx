import React from 'react';

// 🎥 YOUR VIDEO DATA (Text Only)
const VIDEO_DATABASE = [
  {
    title: "How to Win the DAAD Scholarship? 🇩🇪",
    subtitle: "Step-by-step Guide",
    date: "2 days ago",
    time: "12:45",
    link: "https://youtube.com/@alidarazz" 
  },
  {
    title: "Italy Student Visa Process 2026 🇮🇹",
    subtitle: "Complete Walkthrough",
    date: "1 week ago",
    time: "08:30",
    link: "https://youtube.com/@alidarazz"
  },
  {
    title: "Writing a Winning SOP ✍️",
    subtitle: "Essay Tips & Tricks",
    date: "2 weeks ago",
    time: "15:20",
    link: "https://youtube.com/@alidarazz"
  },
  {
    title: "Top 5 Fully Funded Scholarships",
    subtitle: "Europe & Asia Edition",
    date: "3 weeks ago",
    time: "10:05",
    link: "https://youtube.com/@alidarazz"
  }
];

export const YoutubeVideoList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-6 animate-fade-in-up mt-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </span>
        <h3 className="font-bold text-slate-800 dark:text-white">Study Abroad Masterclass</h3>
      </div>

      {/* Text-Only List (Clean Style) */}
      <div className="space-y-4">
        {VIDEO_DATABASE.map((video, index) => (
          <React.Fragment key={index}>
            <div 
              className="group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors -mx-2"
              onClick={() => window.open(video.link, '_blank')}
            >
              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">
                {video.date} • {video.time}
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {video.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{video.subtitle}</p>
            </div>
            
            {/* Divider Line */}
            {index !== VIDEO_DATABASE.length - 1 && (
              <div className="border-t border-slate-100 dark:border-slate-800 my-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer Button */}
      <button 
        onClick={() => window.open('https://youtube.com/@alidarazz', '_blank')}
        className="w-full mt-6 text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/10 py-3 rounded-lg border border-transparent hover:border-red-100 dark:hover:border-red-900/20 transition-all"
      >
        View All Videos →
      </button>
    </div>
  );
};