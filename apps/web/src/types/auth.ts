export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  grade: '9' | '10' | '11' | '12';
  schoolName?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface CloudProgressPayload {
  userId: string;
  progress: Record<string, unknown>;
  bookmarks: unknown[];
  notes: Record<string, unknown[]>;
  streak: { current: number; best: number; lastDate: string | null };
  totalStudySec: number;
  weakMap: Record<string, number>;
  updatedAt: string;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  grade: '9' | '10' | '11' | '12';
  schoolName?: string;
  streak: number;
  masteredCount: number;
  totalStudySec: number;
  rank?: number;
}
