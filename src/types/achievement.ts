export interface Achievement {
  id: string;
  type: 'streak' | 'consistency' | 'milestone' | 'comeback';
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  progress?: number; // 0-100
}