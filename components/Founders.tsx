import React from 'react';

export const Founders: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">The Visionaries</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-xl">Architects of the future of education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Founder 1: Ali Daraz */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 p-1.5 shadow-2xl mb-8 group-hover:scale-105 transition-transform duration-500">
               <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-6xl font-bold text-indigo-700 dark:text-indigo-400">
                 AD
               </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Ali Daraz</h3>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase mb-8">Founder & CEO</div>
            
            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <svg className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 text-indigo-500 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0544 14.0552 15.308 14.5633 14.3732C15.0664 13.4474 15.9328 12.8094 17.5 12V10C14.7716 10 12.0019 12.0125 12.0019 15.9077L12 21H14.017ZM8.00195 21L8.00195 18C8.00195 16.0544 8.04017 15.308 8.54823 14.3732C9.05136 13.4474 9.91775 12.8094 11.485 12V10C8.75654 10 5.98691 12.0125 5.98691 15.9077L5.985 21H8.00195Z" /></svg>
              <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed pt-2 text-lg">
                "I solved a big problem of the world. Talent is universal, but opportunity is not. With Zynome Scholar, we have bridged the gap between brilliant minds and the funding they deserve. We haven't just built a website; we have unlocked human potential at scale."
              </p>
            </div>
          </div>

          {/* Founder 2: Sohail Khan */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1.5 shadow-2xl mb-8 group-hover:scale-105 transition-transform duration-500">
               <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-6xl font-bold text-purple-700 dark:text-purple-400">
                 SK
               </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Sohail Khan</h3>
            <div className="text-purple-600 dark:text-purple-400 font-bold tracking-widest text-sm uppercase mb-8">Co-Founder & CTO</div>
            
            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
               <svg className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 text-purple-500 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0544 14.0552 15.308 14.5633 14.3732C15.0664 13.4474 15.9328 12.8094 17.5 12V10C14.7716 10 12.0019 12.0125 12.0019 15.9077L12 21H14.017ZM8.00195 21L8.00195 18C8.00195 16.0544 8.04017 15.308 8.54823 14.3732C9.05136 13.4474 9.91775 12.8094 11.485 12V10C8.75654 10 5.98691 12.0125 5.98691 15.9077L5.985 21H8.00195Z" /></svg>
               <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed pt-2 text-lg">
                "We are building the infrastructure of hope. By automating the complex scholarship process, we empower students to focus on what matters—their research and their dreams. Zynome is the future of academic mobility."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};