import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-2">The Smart Choice</p>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Why Students Switch to Zynome</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th className="p-6 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/3">Feature</th>
                <th className="p-6 text-lg font-extrabold text-indigo-700 dark:text-indigo-400 w-1/3 bg-indigo-50/50 dark:bg-indigo-900/20">Zynome Scholar</th>
                <th className="p-6 text-lg font-bold text-slate-400 dark:text-slate-500 w-1/3">Typical Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-6 font-medium text-slate-700 dark:text-slate-300">Database Size</td>
                <td className="p-6 font-bold text-slate-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10">15,000+ (Global)</td>
                <td className="p-6 text-slate-500 dark:text-slate-500">~50 (Local Partners)</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-700 dark:text-slate-300">Cost</td>
                <td className="p-6 font-bold text-green-600 dark:text-green-400 bg-indigo-50/30 dark:bg-indigo-900/10">$0 - $199 (Flat)</td>
                <td className="p-6 text-red-500 dark:text-red-400">$1,000 - $3,000+</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-700 dark:text-slate-300">Transparency</td>
                <td className="p-6 font-bold text-slate-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10">100% Student Focused</td>
                <td className="p-6 text-slate-500 dark:text-slate-500">Hidden Commissions</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-700 dark:text-slate-300">Technology</td>
                <td className="p-6 font-bold text-slate-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10">AI Neural Matching</td>
                <td className="p-6 text-slate-500 dark:text-slate-500">Manual Paperwork</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-slate-700 dark:text-slate-300">Speed</td>
                <td className="p-6 font-bold text-slate-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10">Instant Results</td>
                <td className="p-6 text-slate-500 dark:text-slate-500">3-4 Weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};