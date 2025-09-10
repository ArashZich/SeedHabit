// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Habits: undefined;
  Analytics: undefined;
  Settings: undefined;
  Profile: undefined;
  HabitDetail: { habitId: string };
  AddHabit: undefined;
  EditHabit: { habitId: string };
  Onboarding: undefined;
};