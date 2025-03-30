export interface UserStats {
  points: number;
  feedbackCount: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  gender?: string;
  avatar_url?: string;
  bio?: string;
  updated_at?: string;
  stats: UserStats;
}
