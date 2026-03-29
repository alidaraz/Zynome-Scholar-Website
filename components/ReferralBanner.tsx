import React from 'react';

export const ReferralBanner: React.FC = () => {
  const shareLink = `https://wa.me/?text=Hey!%20I%20found%20this%20amazing%20tool%20to%20find%20fully%20funded%20scholarships.%20Check%20it%20out:%20https://zynomescholar.com`;

  return (
    <div className="max-w-6xl mx-auto px-4 my-16">
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl p-1 shadow-2xl animate-fade-in-up">
        <div className="bg-white dark:bg-slate-800 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden transition-colors duration-300">
          
          {/* Confetti Background Effect (CSS only) */}
          <div className="absolute top-0 right-0 opacity-10 text-9xl select-none pointer-events-none">🎁</div>

          <div className="flex-1">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Invite a Friend, Get 50% OFF! 💸</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Know someone struggling with scholarships? Share Zynome with them. If they sign up for any service, you <strong>both get a discount</strong>.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a 
              href={shareLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-green-200"
            >
              Share on WhatsApp 📢
            </a>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3 font-medium">Click to generate invite link</p>
          </div>

        </div>
      </div>
    </div>
  );
};