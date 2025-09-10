// Chart data types
export interface ChartDataPoint {
  x: string | number;
  y: number;
  label?: string;
}

export interface HeatmapData {
  date: string;
  count: number;
}

export interface StreakData {
  current: number;
  best: number;
  history: Array<{
    start: string;
    end: string;
    length: number;
  }>;
}