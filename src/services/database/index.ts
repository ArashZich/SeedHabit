// Central export for database services
export { databaseConnection } from './connection';
export * from './schema';

// Re-export database types
export type { DatabaseHabit, DatabaseEntry } from '../../types/database';