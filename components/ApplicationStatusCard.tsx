import React from 'react';

type Props = {
  winChance: number;      // e.g., 75
  startDate: string;      // e.g., "2026-05-01"
  deadline: string;       // e.g., "2026-09-30"
  link: string;           // Application Link
};

export const ApplicationStatusCard: React.FC<Props> = ({ winChance, startDate, deadline, link }) => {
  // 🟢 1. LOGIC ENGINE (Calculates the Text)
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(deadline);

  let statusText = "";
  let buttonText = "Start Application 🚀";
  let isDisabled = false;
  let statusColor = "text-slate-400"; // Default grey like your image

  if (today > end) {
    // CASE: CLOSED
    statusText = "🔴 Applications are currently closed.";
    buttonText = "Closed";
    isDisabled = true;
    statusColor = "text-red-400";
  } else if (today < start) {
    // CASE: COMING SOON
    const daysLeft = Math.ceil((start.getTime() - today.getTime()) / (1000 * 3600 * 24));
    statusText = `⏳ Portal opens in ${daysLeft} days.`;
    buttonText = "Notify Me 🔔";
    isDisabled = true; 
    statusColor = "text-slate-400"; // Kept grey to match your clean look
  } else {
    // CASE: OPEN
    const daysLeft = Math.ceil((end.getTime() - today.getTime()) / (1000 * 3600 * 24));
    statusText = `🟢 Official Portal is Open (${daysLeft} days left)`;
    buttonText = "Start Application 🚀";
    isDisabled = false;
    statusColor = "text-green-400";
  }

  // Win Chance Color (Green for high, Yellow for med, Red for low)
  const winColor = winChance >= 70 ? "text-green-500" : winChance >= 40 ? "text-yellow-500" : "text-red-500";

  return (
    // 🟢 2. DESIGN (Exact match to your screenshot: Dark Blue Card)
    <div className="w-full max-w-sm bg-[#111827] rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col items-center text-center">
      
      {/* Top Text */}
      <div className="mb-6">
        <h3 className="text-slate-400 text-sm font-medium mb-1 tracking-wide">Win Probability</h3>
        <div className={`text-6xl font-bold ${winColor} tracking-tight`}>
          {winChance}%
        </div>
      </div>

      {/* Button (Purple Gradient style) */}
      <a
        href={isDisabled ? "#" : link}
        target={isDisabled ? "_self" : "_blank"}
        rel="noreferrer"
        className={`w-full py-4 rounded-xl font-bold text-lg text-white mb-4 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg ${
           isDisabled 
             ? "bg-slate-700 cursor-not-allowed opacity-50" 
             : "bg-[#6366f1] hover:bg-[#4f46e5] shadow-indigo-500/30" // Exact Indigo/Purple from image
        }`}
      >
        {buttonText}
      </a>

      {/* 🟢 3. DYNAMIC TEXT (Replaces the static text) */}
      <p className={`text-sm font-medium ${statusColor} animate-fade-in`}>
        {statusText}
      </p>

    </div>
  );
};