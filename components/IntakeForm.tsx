import React, { useState } from 'react';
import { UserProfile } from '../types';

interface IntakeFormProps {
  onSubmit: (profile: UserProfile) => void;
  isLoading: boolean;
  history: UserProfile[];
  onHistorySelect: (profile: UserProfile) => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({ onSubmit, isLoading, history, onHistorySelect }) => {
  const [profile, setProfile] = useState<UserProfile>({
    origin: '',
    target: '',
    targetUniversity: '',
    level: 'Masters Scholarship',
    field: '',
    maxFee: 'No Preference',
    englishStatus: 'EPC',
    englishScore: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.origin && profile.target && profile.level && profile.field) {
      onSubmit(profile);
    }
  };

  const inputClasses = "w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500";
  const labelClasses = "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden mb-8 animate-fade-in-up transition-colors duration-300">
      <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          Find Your Scholarship
        </h2>
        
        {/* Recent History Dropdown / Chips */}
        {history.length > 0 && (
          <div className="hidden md:flex gap-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 self-center uppercase mr-1">Recent:</span>
            {history.slice(0, 2).map((h, i) => (
               <button 
                 key={i} 
                 onClick={() => { setProfile(h); onHistorySelect(h); }}
                 className="text-xs bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
               >
                 {h.field} in {h.target}
               </button>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Origin */}
        <div className="space-y-1">
          <label htmlFor="origin" className={labelClasses}>Citizenship Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={profile.origin}
            onChange={handleChange}
            placeholder="e.g., Pakistan, India, Nigeria"
            className={inputClasses}
            required
          />
        </div>

        {/* Target */}
        <div className="space-y-1">
          <label htmlFor="target" className={labelClasses}>Target Destination</label>
          <input
            type="text"
            id="target"
            name="target"
            value={profile.target}
            onChange={handleChange}
            placeholder="City, Country, or Region"
            className={inputClasses}
            required
          />
        </div>

        {/* Target University */}
        <div className="space-y-1">
          <label htmlFor="targetUniversity" className={labelClasses}>Target University</label>
          <input
            type="text"
            id="targetUniversity"
            name="targetUniversity"
            value={profile.targetUniversity}
            onChange={handleChange}
            placeholder="Optional: e.g. Oxford, Harvard"
            className={inputClasses}
          />
        </div>

        {/* Level / Opportunity Type */}
        <div className="space-y-1">
          <label htmlFor="level" className={labelClasses}>Opportunity Type</label>
          <select
            id="level"
            name="level"
            value={profile.level}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="Masters Scholarship">Masters Scholarship</option>
            <option value="PhD Position">PhD Position</option>
            <option value="Research Internship">Research Internship</option>
            <option value="Undergraduate Grant">Undergraduate Grant</option>
            <option value="Post-Doc Fellowship">Post-Doc Fellowship</option>
          </select>
        </div>

        {/* Field */}
        <div className="space-y-1">
          <label htmlFor="field" className={labelClasses}>Academic Field</label>
          <input
            type="text"
            id="field"
            name="field"
            value={profile.field}
            onChange={handleChange}
            placeholder="e.g. Biology, Data Science"
            className={inputClasses}
            required
          />
        </div>

        {/* Max Fee */}
        <div className="space-y-1">
          <label htmlFor="maxFee" className={labelClasses}>Max Application Fee</label>
          <select
            id="maxFee"
            name="maxFee"
            value={profile.maxFee}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="No Preference">No Preference</option>
            <option value="Free">Free (No Fee)</option>
            <option value="Under $50">Under $50</option>
            <option value="Under $100">Under $100</option>
          </select>
        </div>

        {/* English Status - Keeping this to ensure matching logic works, formatted as a full width or integrated row */}
        <div className="md:col-span-2 lg:col-span-3 pt-2 border-t border-slate-100 dark:border-slate-700 mt-2">
            <label className={`${labelClasses} block mb-2`}>Credential Verification (English)</label>
            <div className="flex flex-wrap gap-4 items-center">
                 <label className="inline-flex items-center">
                    <input type="radio" name="englishStatus" value="IELTS_TOEFL" checked={profile.englishStatus === 'IELTS_TOEFL'} onChange={handleChange} className="text-indigo-600 focus:ring-indigo-500 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"/>
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">IELTS / TOEFL</span>
                 </label>
                 {profile.englishStatus === 'IELTS_TOEFL' && (
                     <input type="text" name="englishScore" value={profile.englishScore} onChange={handleChange} placeholder="Score" className="w-20 text-sm px-2 py-1 border rounded bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600" />
                 )}

                 <label className="inline-flex items-center">
                    <input type="radio" name="englishStatus" value="EPC" checked={profile.englishStatus === 'EPC'} onChange={handleChange} className="text-indigo-600 focus:ring-indigo-500 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"/>
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">English Proficiency Cert (EPC)</span>
                 </label>
                 
                 <label className="inline-flex items-center">
                    <input type="radio" name="englishStatus" value="NONE" checked={profile.englishStatus === 'NONE'} onChange={handleChange} className="text-indigo-600 focus:ring-indigo-500 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"/>
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">No Credentials</span>
                 </label>
            </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3 mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`
              w-full text-white font-bold py-3.5 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2
              ${isLoading 
                ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl'
              }
            `}
          >
             {isLoading ? (
                 <>
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   SEARCHING GLOBAL DATABASES...
                 </>
             ) : (
                 <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    SEARCH SCHOLARSHIPS
                 </>
             )}
          </button>
        </div>

      </form>
    </div>
  );
};