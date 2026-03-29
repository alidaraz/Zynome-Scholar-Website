import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "🚀 Ali from Lahore just booked an SOP Review",
  "🎓 Sarah just applied to Oxford University",
  "🔥 5 Students are viewing the 'Done-For-You' Plan",
  "✅ Hassan just downloaded the Visa Checklist",
  "🇮🇹 Ayesha received an offer from Italy!",
  "👨‍🔬 3 new Biology Scholarships added just now"
];

export const LiveNotifications: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const triggerNotification = () => {
      const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(randomMsg);
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    };

    // Show first one after 3 seconds
    const initialTimer = setTimeout(triggerNotification, 3000);
    
    // Then show one every 20 seconds
    const interval = setInterval(triggerNotification, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible || !message) return null;

  return (
    <div className="fixed bottom-24 left-6 z-40 animate-slide-in-left pointer-events-none">
      <div className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 max-w-xs pointer-events-auto">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-xs font-bold leading-tight">{message}</p>
        <button onClick={() => setVisible(false)} className="text-slate-500 hover:text-white ml-2">×</button>
      </div>
    </div>
  );
};