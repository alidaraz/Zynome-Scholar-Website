import React from 'react';

// 🛠️ MOCK DATA FOR ALUMNI
const HOLDERS = [
  {
    name: "Javeria S.",
    scholarship: "CSC Scholarship",
    university: "Northeast Normal University",
    contactLink: "https://wa.me/message/ID5GXUUKX36CM1",
    available: true
  },
  {
    name: "Rameez Hassan Pirzada",
    scholarship: "PhD Scholar",
    university: "Ajou University",
    contactLink: "https://wa.me/message/ID5GXUUKX36CM1",
    available: true
  },
  {
    name: "Maaz Butt",
    scholarship: "Translational Medicine",
    university: "Thammasat University",
    contactLink: "https://wa.me/message/ID5GXUUKX36CM1",
    available: true
  },
  {
    name: "Dua Shahid",
    scholarship: "Bioinformatics",
    university: "University of Saarlandes",
    contactLink: "https://wa.me/message/ID5GXUUKX36CM1",
    available: true
  },
  {
    name: "Mohsin Zafar",
    scholarship: "Italy Scholarship",
    university: "University of Fogia",
    contactLink: "https://wa.me/message/ID5GXUUKX36CM1",
    available: true
  }
];

export const ScholarshipHolders: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Connect with Mentors 🤝</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Book your Appointment with our Highly Qualified Zynome Scholar Track Building Professionals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOLDERS.map((holder, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl border border-indigo-200 dark:border-indigo-800">
                  {holder.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">{holder.name}</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{holder.university}</div>
                </div>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-6 uppercase tracking-wide">
                🏆 {holder.scholarship}
              </div>

              {holder.available ? (
                <a href={holder.contactLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                  Chat via WhatsApp
                </a>
              ) : (
                <button disabled className="block w-full text-center bg-slate-100 dark:bg-slate-700 text-slate-400 font-bold py-3 rounded-xl cursor-not-allowed">
                  Profiles Loading...
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};