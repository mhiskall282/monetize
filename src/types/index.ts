export interface Model {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ModelCategory;
  rating: number;
  downloads: number;
  author: string;
  createdAt: string;
  imageUrl: string;
  license: LicenseType;
  tags: string[];
  performance: ModelPerformance;
}

export interface ModelPerformance {
  accuracy: number;
  latency: number;
  resourceUsage: number;
}

export type ModelCategory = 
  | 'Computer Vision' 
  | 'Natural Language Processing'
  | 'Robotics'
  | 'Generative AI'
  | 'Reinforcement Learning';

export type LicenseType = 
  | 'Commercial'
  | 'Academic'
  | 'Personal'
  | 'Enterprise';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  models: Model[];
  earnings: number;
  joinedAt: string;
  stats: UserStats;
}

export interface UserStats {
  totalDownloads: number;
  monthlyEarnings: MonthlyEarning[];
  modelPerformance: ModelStats[];
}

export interface MonthlyEarning {
  month: string;
  amount: number;
}

export interface ModelStats {
  modelId: string;
  downloads: number;
  revenue: number;
  rating: number;
}