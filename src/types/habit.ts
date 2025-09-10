export interface Habit {
  id: string;
  title: string;
  description?: string;
  type: 'boolean' | 'duration' | 'count';
  goal?: number; // for duration (minutes) or count habits
  frequency: 'daily' | 'weekly' | 'monthly' | 'custom';
  customDays?: number[]; // 0-6 for custom weekly schedule
  color: string;
  icon: string;
  createdAt: string;
  isActive: boolean;
  category?: string;
  reminderTime?: string;
  streak: {
    current: number;
    best: number;
    lastCompleted?: string;
  };
}

export interface HabitEntry {
  id: string;
  habitId: string;
  date: string; // ISO date string (YYYY-MM-DD)
  completed: boolean;
  value?: number; // for duration or count habits
  completedAt?: string; // ISO timestamp
  notes?: string;
}

export interface HabitStats {
  habitId: string;
  totalEntries: number;
  completedEntries: number;
  completionRate: number;
  currentStreak: number;
  bestStreak: number;
  averageValue?: number; // for duration/count habits
  weeklyAverage: number;
  monthlyAverage: number;
  lastCompleted?: string;
  trend: 'improving' | 'declining' | 'stable';
}

// Growth stages for habit visualization
export type HabitGrowthStage = 'seed' | 'sprout' | 'sapling' | 'tree';

export interface HabitGrowth {
  stage: HabitGrowthStage;
  progress: number; // 0-100 within current stage
  daysInStage: number;
  totalDays: number;
}