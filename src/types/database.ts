// Database types
export interface DatabaseHabit {
  id: string;
  title: string;
  description?: string;
  type: string;
  goal?: number;
  frequency: string;
  custom_days?: string; // JSON string
  color: string;
  icon: string;
  created_at: string;
  is_active: number; // SQLite boolean (0/1)
  category?: string;
  reminder_time?: string;
  current_streak: number;
  best_streak: number;
  last_completed?: string;
}

export interface DatabaseEntry {
  id: string;
  habit_id: string;
  date: string;
  completed: number; // SQLite boolean (0/1)
  value?: number;
  completed_at?: string;
  notes?: string;
}