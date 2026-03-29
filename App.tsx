import React, { useState, useEffect } from 'react';

// Imports
import { Navbar } from './components/Navbar';
import { HeroDashboard } from './components/HeroDashboard';
import { ScholarshipDetail } from './components/ScholarshipDetail';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AIChatbot } from './components/AIChatbot';
import { LegalDocs } from './components/LegalDocs';
import { OpportunityTicker } from './components/OpportunityTicker'; 
import { ScrollProgress } from './components/ScrollProgress';
import { LiveNotifications } from './components/LiveNotifications';

import { UserProfile, Scholarship, User } from './types';
import { searchScholarships } from './services/geminiService';

// Define valid views
type ViewState = 'HOME' | 'DETAIL' | 'PRIVACY' | 'TERMS' | 'REFUND';

const App: React.FC = () => {
  // 🟢 NAVIGATION STATE (The Brain)
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<number | null>(null);

  // Search State (Lifted Up)
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [scholarships, setScholarships] = useState<Scholarship[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 🟢 AUTH STATE
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<UserProfile[]>([]);

  // 🟢 THEME STATE
  const [isDark, setIsDark] = useState(false);

  // Initialize App
  useEffect(() => {
    // 1. Check Theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // 2. Check Auth
    const storedUser = localStorage.getItem('zynome_current_user');
    if (storedUser) {
      const u = JSON.parse(storedUser);
      setUser(u);
      loadHistory(u.email);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const loadHistory = (email: string) => {
    const history = localStorage.getItem(`zynome_history_${email}`);
    if (history) {
      setSearchHistory(JSON.parse(history));
    } else {
      setSearchHistory([]);
    }
  };

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('zynome_current_user', JSON.stringify(u));
    loadHistory(u.email);
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('zynome_current_user');
    setSearchHistory([]);
  };

  // 🟢 NAVIGATION LOGIC
  const handleNavigation = (destination: string) => {
    if (destination.includes('home')) {
      setCurrentView('HOME');
      setSelectedScholarshipId(null);
      
      if (destination.includes('#')) {
        const sectionId = destination.split('#')[1];
        // Wait for render
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo(0, 0);
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Map other strings to ViewState if needed, or handle legal pages
      if (destination === 'privacy') setCurrentView('PRIVACY');
      else if (destination === 'terms') setCurrentView('TERMS');
      else if (destination === 'refund') setCurrentView('REFUND');
      else setCurrentView('HOME');
      
      window.scrollTo(0, 0);
    }
  };

  const handleOpenDetail = (id: number) => {
    setSelectedScholarshipId(id);
    setCurrentView('DETAIL');
    window.scrollTo(0, 0); // Instant jump to top
  };

  const handleGoHome = () => {
    setCurrentView('HOME');
    setSelectedScholarshipId(null);
  };

  const handleSearch = async (userProfile: UserProfile) => {
    setIsLoading(true); 
    setProfile(userProfile);
    setScholarships(null);

    // Save to History if logged in
    if (user) {
      const newHistory = [userProfile, ...searchHistory].slice(0, 10); // Keep last 10
      setSearchHistory(newHistory);
      localStorage.setItem(`zynome_history_${user.email}`, JSON.stringify(newHistory));
    }

    try { 
      const results = await searchScholarships(userProfile); 
      setScholarships(results); 
    } 
    catch (err) { console.error("Error"); } 
    finally { setIsLoading(false); }
  };

  // Render logic based on view state
  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return (
          <HeroDashboard 
            onNavigate={handleOpenDetail}
            user={user}
            profile={profile}
            scholarships={scholarships}
            isLoading={isLoading}
            onSearch={handleSearch}
            searchHistory={searchHistory}
            onHistorySelect={handleSearch}
          />
        );
      case 'DETAIL':
        return selectedScholarshipId ? (
           <ScholarshipDetail 
             id={selectedScholarshipId} 
             data={scholarships?.find(s => s.rank === selectedScholarshipId)}
             onBack={handleGoHome} 
           />
        ) : <HeroDashboard onNavigate={handleOpenDetail} user={user} profile={profile} scholarships={scholarships} isLoading={isLoading} onSearch={handleSearch} searchHistory={searchHistory} onHistorySelect={handleSearch} />;
      case 'PRIVACY':
        return <LegalDocs type="privacy" />;
      case 'TERMS':
        return <LegalDocs type="terms" />;
      case 'REFUND':
        return <LegalDocs type="refund" />;
      default:
        return (
          <HeroDashboard 
            onNavigate={handleOpenDetail}
            user={user}
            profile={profile}
            scholarships={scholarships}
            isLoading={isLoading}
            onSearch={handleSearch}
            searchHistory={searchHistory}
            onHistorySelect={handleSearch}
          />
        );
    }
  };

  return (
    <div className="min-h-screen font-inter text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 flex flex-col pt-36 transition-colors duration-300"> 
      
      <ScrollProgress />
      <OpportunityTicker />
      <LiveNotifications />
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        onLogin={handleLogin}
      />

      {/* 🟢 NAVBAR WITH AUTH & THEME PROPS */}
      <Navbar 
        onNavigate={handleNavigation} 
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        onLogout={handleLogout}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      {/* 🟢 TRAFFIC CONTROLLER */}
      {renderContent()}

      <Footer onNavigate={handleNavigation} />
      <FloatingWhatsApp />
      <AIChatbot />
    </div>
  );
};

export default App;