import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollTop;
      const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (scrollTotal / heightWin) * 100;
      setWidth(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-[0_0_10px_#6366f1]"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
