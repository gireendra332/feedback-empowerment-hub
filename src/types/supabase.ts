export interface UserStats {
  id: string;
  points: number;
  feedback_count: number;
}

export interface Feedback {
  id: string;
  user_id: string;
  product_id: string;
  design_rating: number;
  price_rating: number;
  performance_rating: number;
  comment?: string;
  video_url?: string;
  created_at: string;
}

export interface Profile {
  id: string;
  name: string;
  avatar_url?: string;
}
