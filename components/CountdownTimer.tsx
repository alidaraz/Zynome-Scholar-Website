import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

  // Set target date (e.g., Italy Intake - Sept 2026)
  useEffect(() => {
    // Assuming a deadline for demonstration
    const target = new Date('2026-04-30').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setTimeLeft({ days, hours });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white py-3 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Next Major Deadline: <span className="text-yellow-400 font-bold">Italy DSU Intake</span>
        </div>
        <div className="font-mono bg-slate-800 px-3 py-1 rounded text-cyan-400">
          ⏳ {timeLeft.days} Days : {timeLeft.hours} Hours Left
        </div>
      </div>
    </div>
  );
};
