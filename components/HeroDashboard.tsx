import React from 'react';
import { UserProfile, Scholarship, User } from '../types';

// Components
import { Header } from './Header';
import { IntakeForm } from './IntakeForm';
import { SkeletonLoader } from './SkeletonLoader';
import { ScholarshipTable } from './ScholarshipTable';
import { StatsCounter } from './StatsCounter';
import { DNAMatcher } from './DNAMatcher';
import { Comparison } from './Comparison';
import { SpotlightCard } from './SpotlightCard';
import { HiddenVault } from './HiddenVault';
import { ReferralBanner } from './ReferralBanner';
import { PremiumVault } from './PremiumVault';
import { TrustedUniversities } from './TrustedUniversities';
import { ProfileEvaluator } from './ProfileEvaluator';
import { YoutubeVideoList } from './YoutubeVideoList';
import { Sidebar } from './Sidebar';
import { HowItWorks } from './HowItWorks';
import { EmailGenerator } from './EmailGenerator';
import { BentoGrid } from './BentoGrid';
import { GlobalMap } from './GlobalMap';
import { AlumniPlacements } from './AlumniPlacements';
import { Pricing } from './Pricing';
import { ResourceLibrary } from './ResourceLibrary';
import { Founders } from './Founders';
import { ScholarshipHolders } from './ScholarshipHolders';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { LeadForm } from './LeadForm';

interface HeroDashboardProps {
  onNavigate: (id: number) => void;
  user: User | null;
  profile: UserProfile | null;
  scholarships: Scholarship[] | null;
  isLoading: boolean;
  onSearch: (profile: UserProfile) => void;
  searchHistory: UserProfile[];
  onHistorySelect: (profile: UserProfile) => void;
}

export const HeroDashboard: React.FC<HeroDashboardProps> = ({
  onNavigate,
  profile,
  scholarships,
  isLoading,
  onSearch,
  searchHistory,
  onHistorySelect
}) => {
  return (
    <>
      <div id="top"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 flex-grow w-full mt-4">
        <main className="flex-1 min-w-0">
          <Header />
          <IntakeForm
            onSubmit={onSearch}
            isLoading={isLoading}
            history={searchHistory}
            onHistorySelect={onHistorySelect}
          />

          {isLoading && <SkeletonLoader />}

          {/* Show table if data exists OR if loading finished but no data (to show empty state inside table component) */}
          {!isLoading && scholarships && (
            <div className="mb-12">
              <ScholarshipTable 
                scholarships={scholarships} 
                profile={profile!} 
                onNavigate={onNavigate}
              />
            </div>
          )}

          <StatsCounter />
          <DNAMatcher />
          <Comparison />
          <SpotlightCard />
          <HiddenVault />
          <ReferralBanner />
          <PremiumVault />
          <TrustedUniversities />
          <div id="eligibility"><ProfileEvaluator /></div>
          <div id="videos"><YoutubeVideoList /></div>
        </main>
        <aside className="w-full lg:w-80 flex-shrink-0 h-fit">
          <div className="sticky top-28"><Sidebar /></div>
        </aside>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800"><HowItWorks /></div>
      <EmailGenerator />
      <BentoGrid />
      <GlobalMap />
      <AlumniPlacements />
      <div id="services"><Pricing /></div>
      <div id="resources"><ResourceLibrary /></div>
      <div id="founders"><Founders /></div>
      <div id="alumni"><ScholarshipHolders /></div>
      <div id="reviews"><Testimonials /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><LeadForm /></div>
    </>
  );
};