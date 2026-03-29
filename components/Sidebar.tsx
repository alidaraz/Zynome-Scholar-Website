import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SidebarWidgets } from './SidebarWidgets';

// 🟢 NEW WIDGET: RECENT WINNERS (Social Proof)
const RECENT_WINNERS = [
  { name: "Sarah M.", country: "🇬🇧", award: "Chevening", status: "Fully Funded" },
  { name: "Ahmed K.", country: "🇮🇹", award: "DSU Pisa", status: "Tuition + Cash" },
  { name: "Fatima R.", country: "🇭🇺", award: "Stipendium", status: "Full Ride" },
  { name: "John D.", country: "🇩🇪", award: "DAAD EPO", status: "Monthly Stipend" },
];

const WinnersWidget = () => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
      <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1 rounded-md">🏆</span>
      Just Accepted
    </h3>
    <div className="space-y-4">
      {RECENT_WINNERS.map((winner, i) => (
        <div key={i} className="flex items-center gap-3 border-b border-slate-50 dark:border-slate-800 last:border-0 pb-3 last:pb-0">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500 dark:text-slate-400">
            {winner.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              {winner.name} {winner.country}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 font-medium">{winner.award}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 🟢 NEW WIDGET: PARENTING & COUNSELING
const CounselingWidget = () => (
  <div className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-2xl shadow-lg p-6 text-white border border-purple-800 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform duration-500">👨‍👩‍👧‍👦</div>
    
    <div className="relative z-10">
      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 leading-tight">
        <span className="bg-purple-500 text-white p-1 rounded">🧠</span> Student & Parenting Counseling
      </h3>
      <p className="text-xs text-purple-200 leading-relaxed mb-4">
        Confused about career choices? Get expert guidance for students and parents on study abroad safety and future scope.
      </p>
      
      <a 
        href="https://wa.me/message/ID5GXUUKX36CM1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-white text-purple-900 text-center text-xs font-bold py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
      >
        Chat with Sohail Khan 💬
      </a>
    </div>
  </div>
);

// 🟢 NEW WIDGET: DAILY PRO TIP (Engagement)
const ProTipWidget = () => (
  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 -mt-2 -mr-2 text-6xl opacity-20 rotate-12">💡</div>
    <h3 className="font-bold text-lg mb-2 relative z-10">Daily Pro Tip #42</h3>
    <p className="text-sm font-medium leading-relaxed opacity-90 relative z-10">
      "Never use ChatGPT to write your *entire* SOP. Admissions officers use AI detectors. Use AI for brainstorming, but write the story yourself!"
    </p>
    <button className="mt-4 bg-white text-orange-600 text-xs font-bold px-3 py-2 rounded-lg shadow-sm hover:bg-orange-50 transition-colors">
      Read More Tips
    </button>
  </div>
);

// 🟢 MODIFIED WIDGET: UPCOMING EVENTS (With Modal & Registration)
const EventsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const EVENTS = [
    { title: "AI for Bio-Research", date: "Jan 16", time: "9:00 PM", link: "https://docs.google.com/forms" },
    { title: "Winning SOP Strategy", date: "Jan 24", time: "10:00 AM", link: "https://docs.google.com/forms" },
    { title: "Global Science Fair", date: "Feb 01", time: "All Day", link: "https://docs.google.com/forms" },
    { title: "Italy Visa Webinar", date: "Feb 10", time: "6:00 PM", link: "https://docs.google.com/forms" },
    { title: "German Student Meetup", date: "Feb 15", time: "2:00 PM", link: "https://docs.google.com/forms" },
    { title: "Fullbright Q&A", date: "Feb 20", time: "8:00 PM", link: "https://docs.google.com/forms" }
  ];

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-1 rounded-md">📅</span>
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {EVENTS.slice(0, 3).map((event, index) => (
            <div key={index} onClick={() => setIsOpen(true)} className="group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors -mx-2">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">{event.date} • {event.time}</div>
              <h4 className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{event.title}</h4>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setIsOpen(true)} 
          className="w-full mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 py-2 rounded-lg transition-colors"
        >
          View All Events →
        </button>
      </div>

      {/* REGISTRATION MODAL - PORTAL IMPLEMENTATION */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" style={{position: 'fixed'}}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">📅 Event Calendar</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-slate-500 hover:text-red-500 shadow-sm transition-colors border border-slate-200 dark:border-slate-700"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
               <div className="space-y-4">
                  {EVENTS.map((event, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3 last:border-0">
                          <div>
                              <div className="font-bold text-slate-800 dark:text-white">{event.title}</div>
                              <div className="text-xs text-slate-500">{event.date} • {event.time}</div>
                          </div>
                          <button className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                              Register
                          </button>
                      </div>
                  ))}
               </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700">
                 <p className="text-center text-xs text-slate-500 dark:text-slate-400 mb-2">Want reminders for all events?</p>
                 <div className="flex gap-2">
                     <input 
                       type="email" 
                       placeholder="Enter email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:text-white"
                     />
                     <button className="bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-indigo-700">Subscribe</button>
                 </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export const Sidebar: React.FC = () => {
    return (
        <div className="space-y-6">
            <SidebarWidgets />
            <WinnersWidget />
            <EventsWidget />
            <CounselingWidget />
            <ProTipWidget />
        </div>
    );
};