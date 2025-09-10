// Database schema for SeedHabit SQLite database

export const DATABASE_NAME = 'seedhabit.db';
export const DATABASE_VERSION = 1;

// SQL statements for creating tables
export const CREATE_TABLES = {
  // Users table - stores user preferences and settings
  users: `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `,

  // User preferences table
  user_preferences: `
    CREATE TABLE IF NOT EXISTS user_preferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      theme TEXT NOT NULL DEFAULT 'light',
      language TEXT NOT NULL DEFAULT 'en',
      notifications_enabled INTEGER NOT NULL DEFAULT 1,
      reminder_time TEXT NOT NULL DEFAULT '09:00',
      motivational_messages INTEGER NOT NULL DEFAULT 1,
      weekly_review INTEGER NOT NULL DEFAULT 1,
      week_starts_on INTEGER NOT NULL DEFAULT 1,
      calendar_type TEXT NOT NULL DEFAULT 'gregorian',
      backup_enabled INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
  `,

  // Habits table - core habit definitions
  habits: `
    CREATE TABLE IF NOT EXISTS habits (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT NOT NULL CHECK (type IN ('boolean', 'duration', 'count')),
      goal INTEGER,
      frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly', 'custom')),
      custom_days TEXT,
      color TEXT NOT NULL,
      icon TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      is_active INTEGER NOT NULL DEFAULT 1,
      category TEXT,
      reminder_time TEXT,
      current_streak INTEGER NOT NULL DEFAULT 0,
      best_streak INTEGER NOT NULL DEFAULT 0,
      last_completed TEXT,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
  `,

  // Habit entries table - daily completion records
  habit_entries: `
    CREATE TABLE IF NOT EXISTS habit_entries (
      id TEXT PRIMARY KEY,
      habit_id TEXT NOT NULL,
      date TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0,
      value INTEGER,
      completed_at TEXT,
      notes TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      FOREIGN KEY (habit_id) REFERENCES habits (id) ON DELETE CASCADE,
      UNIQUE(habit_id, date)
    );
  `,

  // Achievements table - predefined achievements
  achievements: `
    CREATE TABLE IF NOT EXISTS achievements (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL CHECK (type IN ('streak', 'consistency', 'milestone', 'comeback')),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
      threshold_value INTEGER,
      threshold_days INTEGER,
      created_at TEXT NOT NULL
    );
  `,

  // User achievements table - unlocked achievements
  user_achievements: `
    CREATE TABLE IF NOT EXISTS user_achievements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      achievement_id TEXT NOT NULL,
      habit_id TEXT,
      unlocked_at TEXT NOT NULL,
      progress INTEGER DEFAULT 100,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
      FOREIGN KEY (achievement_id) REFERENCES achievements (id) ON DELETE CASCADE,
      FOREIGN KEY (habit_id) REFERENCES habits (id) ON DELETE SET NULL,
      UNIQUE(user_id, achievement_id, habit_id)
    );
  `,

  // Notifications table - scheduled notifications
  notifications: `
    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      habit_id TEXT NOT NULL,
      title TEXT NOT NULL,
      body TEXT NOT NULL,
      trigger_hour INTEGER NOT NULL,
      trigger_minute INTEGER NOT NULL,
      repeats INTEGER NOT NULL DEFAULT 1,
      weekday INTEGER,
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      FOREIGN KEY (habit_id) REFERENCES habits (id) ON DELETE CASCADE
    );
  `,

  // Backup metadata table - for sync tracking
  backup_metadata: `
    CREATE TABLE IF NOT EXISTS backup_metadata (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      last_backup_at TEXT,
      last_restore_at TEXT,
      backup_version TEXT,
      google_drive_file_id TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
  `
};

// Indexes for better query performance
export const CREATE_INDEXES = {
  // Habit entries by date for calendar queries
  habit_entries_date: `
    CREATE INDEX IF NOT EXISTS idx_habit_entries_date 
    ON habit_entries (date);
  `,
  
  // Habit entries by habit_id for habit-specific queries
  habit_entries_habit_id: `
    CREATE INDEX IF NOT EXISTS idx_habit_entries_habit_id 
    ON habit_entries (habit_id);
  `,
  
  // Habits by user_id
  habits_user_id: `
    CREATE INDEX IF NOT EXISTS idx_habits_user_id 
    ON habits (user_id);
  `,
  
  // Active habits only
  habits_active: `
    CREATE INDEX IF NOT EXISTS idx_habits_active 
    ON habits (is_active) WHERE is_active = 1;
  `,
  
  // User achievements by user_id
  user_achievements_user_id: `
    CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id 
    ON user_achievements (user_id);
  `,
  
  // Notifications by habit_id
  notifications_habit_id: `
    CREATE INDEX IF NOT EXISTS idx_notifications_habit_id 
    ON notifications (habit_id);
  `
};

// Default data to insert
export const DEFAULT_ACHIEVEMENTS = [
  {
    id: 'first_habit',
    type: 'milestone',
    title: 'First Seed Planted',
    description: 'Created your first habit',
    icon: 'seed',
    threshold_value: 1,
    threshold_days: null
  },
  {
    id: 'week_streak',
    type: 'streak',
    title: 'Week Strong',
    description: 'Completed a habit for 7 days in a row',
    icon: 'fire',
    threshold_value: null,
    threshold_days: 7
  },
  {
    id: 'month_streak',
    type: 'streak',
    title: 'Monthly Champion',
    description: 'Completed a habit for 30 days in a row',
    icon: 'trophy',
    threshold_value: null,
    threshold_days: 30
  },
  {
    id: 'comeback',
    type: 'comeback',
    title: 'Phoenix Rising',
    description: 'Restarted a habit after a break',
    icon: 'phoenix',
    threshold_value: null,
    threshold_days: null
  },
  {
    id: 'consistency_80',
    type: 'consistency',
    title: 'Steady Growth',
    description: 'Maintained 80% completion rate for a month',
    icon: 'chart-up',
    threshold_value: 80,
    threshold_days: 30
  }
];

// Migration scripts for future schema updates
export const MIGRATIONS = {
  // Version 1 to 2 (example for future use)
  v1_to_v2: [
    // Add new columns, modify existing ones, etc.
    `ALTER TABLE habits ADD COLUMN reminder_enabled INTEGER DEFAULT 1;`,
    `ALTER TABLE habits ADD COLUMN sort_order INTEGER DEFAULT 0;`
  ]
};