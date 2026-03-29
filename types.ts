export interface Scholarship {
  rank: number;
  name: string;
  university: string;
  country: string;
  deadline: string;
  daysRemaining: number | null; // For urgency calculation
  funding: string;
  applicationFee: string;
  englishRequirement: string;
  url: string;
  description: string;
  programs: string;
  benefits: string;
  // New fields for Versus Mode & Doc Checklist & Smart Table
  stipend?: string;
  minCgpa?: number;
  docs?: string[];
  winChance?: number;
  startDate?: string; // For "Opening Soon" logic
  field?: string;
  degree?: string;
}

export type EnglishStatus = 'IELTS_TOEFL' | 'EPC' | 'NONE';

export interface UserProfile {
  origin: string;
  target: string;
  targetUniversity?: string;
  level: string;
  field: string;
  maxFee?: string;
  englishStatus: EnglishStatus;
  englishScore?: string;
}

export interface SearchState {
  isLoading: boolean;
  error: string | null;
  results: Scholarship[] | null;
  rawResponse?: string;
}

export interface User {
  name: string;
  email: string;
  password?: string; // In real app, never store plain text
}