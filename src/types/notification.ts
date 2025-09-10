// Notification types
export interface NotificationConfig {
  habitId: string;
  title: string;
  body: string;
  trigger: {
    hour: number;
    minute: number;
    repeats: boolean;
    weekday?: number; // 1-7, for weekly habits
  };
}