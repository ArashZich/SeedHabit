export interface User {
  id: string;
  name?: string;
  email?: string;
  preferences: UserPreferences;
  createdAt: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'fa';
  notifications: {
    enabled: boolean;
    reminderTime: string; // HH:mm format
    motivationalMessages: boolean;
    weeklyReview: boolean;
  };
  weekStartsOn: 0 | 1; // 0 = Sunday, 1 = Monday
  calendarType: 'gregorian' | 'persian';
  backupEnabled: boolean;
}