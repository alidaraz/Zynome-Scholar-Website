import React, { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API Network Delay for Realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    const usersStr = localStorage.getItem('zynome_users');
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    if (isSignUp) {
      if (users.find(u => u.email === formData.email)) {
        setError('User already exists. Please log in.');
        setIsLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters.');
        setIsLoading(false);
        return;
      }
      const newUser = { name: formData.name, email: formData.email, password: formData.password };
      users.push(newUser);
      localStorage.setItem('zynome_users', JSON.stringify(users));
      onLogin(newUser);
    } else {
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      if (user) {
        onLogin(user);
      } else {
        setError('Invalid email or password.');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-[420px] rounded-3xl shadow-2xl overflow-hidden relative animate-fade-in-up border border-slate-200 dark:border-slate-700">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Tab Switcher - Standard App Style */}
        <div className="flex border-b border-slate-100 dark:border-slate-800">
          <button 
            onClick={() => { setIsSignUp(false); setError(''); }}
            className={`flex-1 py-5 text-sm font-bold transition-all relative ${!isSignUp ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
          >
            Log In
            {!isSignUp && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => { setIsSignUp(true); setError(''); }}
            className={`flex-1 py-5 text-sm font-bold transition-all relative ${isSignUp ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
          >
            Sign Up
            {isSignUp && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-t-full"></div>}
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {isSignUp ? "Join the community of scholars." : "Enter your credentials to access your account."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="relative group">
                <span className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">👤</span>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  required 
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400 text-sm font-medium"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
            )}

            <div className="relative group">
              <span className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">✉️</span>
              <input 
                type="email" 
                placeholder="Email Address"
                required 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400 text-sm font-medium"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="relative group">
              <span className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">🔒</span>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                required 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-11 pr-12 py-3.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400 text-sm font-medium"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold p-3 rounded-xl flex items-center gap-2 animate-pulse">
                <span>⚠️</span> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 flex items-center justify-center gap-2 transform active:scale-[0.98] ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>{isSignUp ? "Create Account" : "Sign In"}</>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-700"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-3 text-slate-400 font-bold tracking-wider">Or continue with</span></div>
          </div>

          <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold py-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-3 group">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 group-hover:scale-110 transition-transform" alt="Google" />
            <span>Google</span>
          </button>

        </div>
      </div>
    </div>
  );
};