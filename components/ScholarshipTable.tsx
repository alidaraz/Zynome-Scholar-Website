import React, { useMemo } from 'react';
import { Scholarship, UserProfile } from '../types';

interface ScholarshipTableProps {
  scholarships: Scholarship[];
  profile: UserProfile;
  onNavigate: (id: number) => void;
}

export const ScholarshipTable: React.FC<ScholarshipTableProps> = ({ scholarships, profile, onNavigate }) => {

  // 🟢 SMART LOGIC: Process scholarships to add Status and formatted text
  const processedData = useMemo(() => {
    return scholarships.map(item => {
      const today = new Date();
      // Handle Start Date if present, otherwise default to past (Open)
      const start = item.startDate ? new Date(item.startDate) : new Date(today.getTime() - 86400000);
      
      // Handle Deadline (Parse string or calculate from daysRemaining)
      let end = new Date();
      if (item.deadline && !isNaN(Date.parse(item.deadline))) {
        end = new Date(item.deadline);
      } else if (item.daysRemaining !== null) {
        end.setDate(today.getDate() + item.daysRemaining);
      } else {
        end.setDate(today.getDate() + 30); // Default fallback
      }
      
      let status = "OPEN";
      let statusText = "Apply Now";
      let daysToOpen = 0;

      if (today > end) {
        status = "CLOSED";
        statusText = "Closed";
      } else if (today < start) {
        status = "SOON";
        // Calculate days remaining to open
        daysToOpen = Math.ceil((start.getTime() - today.getTime()) / (1000 * 3600 * 24));
        statusText = `Opens in ${daysToOpen}d`;
      } else if (item.daysRemaining !== null && item.daysRemaining <= 10) {
        status = "URGENT";
        statusText = `Closing in ${item.daysRemaining}d`;
      }

      return { ...item, status, statusText };
    });
  }, [scholarships]);

  // 🟢 CSV DOWNLOAD LOGIC
  const downloadCSV = () => {
    if (!processedData || processedData.length === 0) return;
    
    const headers = ["Rank", "Name", "University", "Country", "Deadline", "Status", "Funding", "Fee"];
    const rows = processedData.map(s => [
      s.rank, 
      `"${s.name}"`, 
      `"${s.university}"`, 
      s.country, 
      s.deadline, 
      s.statusText, 
      `"${s.funding}"`, 
      s.applicationFee
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "zynome_scholarships.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (scholarships.length === 0) {
     return (
       <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fade-in">
         <span className="text-4xl block mb-4">🔍</span>
         <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Results Found</h3>
         <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your filters to find more opportunities.</p>
       </div>
     )
  }

  return (
    <div className="py-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-8 animate-fade-in-up">
      {/* Header */}
      <div className="px-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Top Matched Scholarships</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Based on your profile: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{profile.field} in {profile.target}</span></p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={downloadCSV}
            className="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download CSV
          </button>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            {processedData.length} Results
          </span>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
              <th className="p-5 font-bold">Rank</th>
              <th className="p-5 font-bold">Scholarship / University</th>
              <th className="p-5 font-bold">Dates</th>
              <th className="p-5 font-bold">Requirement</th>
              <th className="p-5 font-bold">Fee</th>
              <th className="p-5 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-800">
            {processedData.map((item, index) => (
              <tr key={item.rank} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                
                {/* Rank */}
                <td className="p-5 text-slate-400 font-mono">
                  {String(item.rank).padStart(2, '0')}
                </td>

                {/* Name */}
                <td className="p-5 cursor-pointer" onClick={() => onNavigate(item.rank)}>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> 
                    {item.country} • {item.university}
                  </div>
                </td>

                {/* 🟢 DATES (Dynamic) */}
                <td className="p-5">
                   <div className="flex flex-col gap-1">
                     {/* Status Badge */}
                     <span className={`w-fit text-[10px] font-bold px-2 py-0.5 rounded border ${
                       item.status === 'OPEN' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' :
                       item.status === 'SOON' ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800' :
                       item.status === 'URGENT' ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/50' :
                       'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
                     }`}>
                       {item.status === 'OPEN' ? '● Open Now' : 
                        item.status === 'SOON' ? '○ Coming Soon' : 
                        item.status === 'URGENT' ? '⚠️ Closing Soon' :
                        'x Closed'}
                     </span>
                     <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                       Deadline: {item.deadline}
                     </span>
                   </div>
                </td>

                {/* English Req */}
                <td className="p-5">
                  <span className="text-slate-600 dark:text-slate-300">{item.englishRequirement}</span>
                  {item.englishRequirement.toLowerCase().includes('epc') && <span className="text-[10px] text-slate-400 block">(Check Consortium)</span>}
                </td>

                {/* Fee */}
                <td className="p-5 font-bold text-green-600 dark:text-green-400">
                  {item.applicationFee}
                </td>

                {/* Action Button */}
                <td className="p-5 text-right">
                  <button 
                    onClick={() => onNavigate(item.rank)}
                    disabled={item.status === 'CLOSED'}
                    className={`text-xs font-bold px-4 py-3 rounded-lg flex items-center gap-2 ml-auto transition-all ${
                      item.status === 'CLOSED' 
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-900 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50'
                    }`}
                  >
                    {item.status === 'SOON' ? `Notify Me (${item.statusText})` : "View Details ↗"}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};