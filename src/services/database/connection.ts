import * as SQLite from 'expo-sqlite';
import { 
  DATABASE_NAME, 
  DATABASE_VERSION, 
  CREATE_TABLES, 
  CREATE_INDEXES,
  DEFAULT_ACHIEVEMENTS 
} from './schema';

class DatabaseConnection {
  private db: SQLite.SQLiteDatabase | null = null;
  private isInitialized = false;

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Open database connection
      this.db = await SQLite.openDatabaseAsync(DATABASE_NAME);
      
      // Enable foreign keys
      await this.db.execAsync('PRAGMA foreign_keys = ON');
      
      // Create tables
      await this.createTables();
      
      // Create indexes
      await this.createIndexes();
      
      // Insert default data
      await this.insertDefaultData();
      
      this.isInitialized = true;
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) throw new Error('Database not connected');

    const tableCreationOrder = [
      'users',
      'user_preferences', 
      'habits',
      'habit_entries',
      'achievements',
      'user_achievements',
      'notifications',
      'backup_metadata'
    ];

    for (const tableName of tableCreationOrder) {
      await this.db.execAsync(CREATE_TABLES[tableName as keyof typeof CREATE_TABLES]);
    }
  }

  private async createIndexes(): Promise<void> {
    if (!this.db) throw new Error('Database not connected');

    for (const indexSql of Object.values(CREATE_INDEXES)) {
      await this.db.execAsync(indexSql);
    }
  }

  private async insertDefaultData(): Promise<void> {
    if (!this.db) throw new Error('Database not connected');

    // Check if achievements already exist
    const result = await this.db.getFirstAsync('SELECT COUNT(*) as count FROM achievements');
    if (result && (result as any).count > 0) return;

    // Insert default achievements
    for (const achievement of DEFAULT_ACHIEVEMENTS) {
      await this.db.runAsync(
        `INSERT INTO achievements (id, type, title, description, icon, threshold_value, threshold_days, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          achievement.id,
          achievement.type,
          achievement.title,
          achievement.description,
          achievement.icon,
          achievement.threshold_value,
          achievement.threshold_days,
          new Date().toISOString()
        ]
      );
    }
  }

  async getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (!this.isInitialized) {
      await this.initialize();
    }
    
    if (!this.db) {
      throw new Error('Database connection failed');
    }
    
    return this.db;
  }

  async closeConnection(): Promise<void> {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
      this.isInitialized = false;
    }
  }

  // Health check method
  async healthCheck(): Promise<boolean> {
    try {
      if (!this.db) return false;
      
      await this.db.getFirstAsync('SELECT 1');
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }

  // Get database info
  async getDatabaseInfo(): Promise<{
    version: number;
    tableCount: number;
    userCount: number;
    habitCount: number;
  }> {
    if (!this.db) throw new Error('Database not connected');

    const tables = await this.db.getAllAsync(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
    );
    
    const users = await this.db.getFirstAsync('SELECT COUNT(*) as count FROM users') as any;
    const habits = await this.db.getFirstAsync('SELECT COUNT(*) as count FROM habits') as any;

    return {
      version: DATABASE_VERSION,
      tableCount: tables.length,
      userCount: users.count,
      habitCount: habits.count
    };
  }
}

// Singleton instance
export const databaseConnection = new DatabaseConnection();