import React, { useState, useEffect } from 'react';
import { User } from '../types';

type NavbarProps = {
  onNavigate: (page: string) => void;
  user: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  isDark: boolean;
  toggleTheme: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, user, onOpenAuth, onLogout, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MENU_ITEMS = [
    { name: 'Eligibility', id: 'home#eligibility' },
    { name: 'Services', id: 'home#services' },
    { name: 'Alumni', id: 'home#alumni' },
    { name: 'Founders', id: 'home#founders' },
    { name: 'Resources', id: 'home#resources' },
    { name: 'Reviews', id: 'home#reviews' }
  ];

  return (
    <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <div onClick={() => onNavigate('home')} className="cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-indigo-200 shadow-lg">
            Z
          </div>
          <div className="hidden sm:block leading-tight">
            <span className={`block font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-white'}`}>
              Zynome<span className="text-indigo-600 dark:text-indigo-400">Scholar</span>
            </span>
          </div>
        </div>

        {/* Desktop Links & Controls */}
        <div className="hidden xl:flex items-center gap-5">
          {MENU_ITEMS.map((item) => (
            <button 
              key={item.name} 
              onClick={() => onNavigate(item.id)} 
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300'}`}
            >
              {item.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Auth Button */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-indigo-900 dark:text-indigo-300">Hi, {user.name.split(' ')[0]}</span>
              <button 
                onClick={onLogout}
                className="text-xs font-bold text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="text-sm font-bold text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
            >
              Log In
            </button>
          )}

          <button onClick={() => onNavigate('home#contact')} className="bg-slate-900 dark:bg-indigo-600 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-slate-800 dark:hover:bg-indigo-500 transition-all shadow-lg hover:-translate-y-0.5">
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-4">
           <button onClick={toggleTheme} className="text-xl">{isDark ? '🌙' : '☀️'}</button>
           <button className="text-slate-700 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl p-4 flex flex-col gap-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          {user && <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 pb-2 border-b border-slate-100 dark:border-slate-800">Hi, {user.name}</div>}
          
          {MENU_ITEMS.map((item) => (
            <button key={item.name} onClick={() => { onNavigate(item.id); setIsMobileMenuOpen(false); }} className="text-left font-medium text-slate-600 dark:text-slate-300 py-2 border-b border-slate-50 dark:border-slate-800 last:border-0">
              {item.name}
            </button>
          ))}

          {user ? (
            <button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} className="text-left font-bold text-red-500 py-2">Sign Out</button>
          ) : (
            <button onClick={() => { onOpenAuth(); setIsMobileMenuOpen(false); }} className="text-left font-bold text-indigo-600 dark:text-indigo-400 py-2">Log In / Sign Up</button>
          )}
          
           <button onClick={() => { onNavigate('home#contact'); setIsMobileMenuOpen(false); }} className="text-left font-bold text-slate-900 dark:text-white py-2">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};