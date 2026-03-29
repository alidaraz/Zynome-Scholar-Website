import React, { useState } from 'react';

export const UrgencyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-indigo-600 text-white text-xs md:text-sm font-medium py-3 px-4 text-center relative z-[60] shadow-md animate-fade-in-down">
      <span className="animate-pulse font-bold text-yellow-300">⚠️ Deadline Alert:</span> 
      <span className="mx-2 opacity-95">The Hungarian Government Scholarship closes in 48 hours!</span>
      <a href="#services" className="underline hover:text-indigo-200 font-bold ml-1">
        Get Essay Help Now
      </a>
      
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-300 hover:text-white transition-colors p-1"
        aria-label="Close alert"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  );
};