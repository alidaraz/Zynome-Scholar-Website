import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden p-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex gap-4 mb-8 border-b border-slate-100 pb-4">
        <div className="h-8 bg-slate-200 rounded-lg w-1/3"></div>
        <div className="h-8 bg-slate-200 rounded-lg w-1/4"></div>
        <div className="h-8 bg-slate-200 rounded-lg w-1/4"></div>
      </div>

      {/* Rows Skeleton (Repeat 5 times) */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4 mb-6">
          <div className="w-12 h-12 bg-slate-200 rounded-full shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-3 bg-slate-100 rounded w-1/2"></div>
          </div>
          <div className="h-8 bg-slate-200 rounded w-24"></div>
        </div>
      ))}
    </div>
  );
};
