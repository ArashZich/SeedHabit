import { Habit, HabitEntry } from './habit';
import { User } from './user';

// API types for backup
export interface BackupData {
  version: string;
  exportedAt: string;
  habits: Habit[];
  entries: HabitEntry[];
  user: User;
}