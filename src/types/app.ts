import { Habit, HabitEntry } from './habit';
import { User } from './user';
import { Achievement } from './achievement';

export interface AppState {
  habits: Habit[];
  entries: HabitEntry[];
  user: User;
  achievements: Achievement[];
  isLoading: boolean;
  error?: string;
}