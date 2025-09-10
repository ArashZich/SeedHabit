export const lightColors = {
  // Primary Colors - سبز طبیعی برای رشد
  primary: '#4CAF50',
  primaryLight: '#81C784',
  primaryDark: '#388E3C',
  
  // Background Colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  card: '#FFFFFF',
  
  // Text Colors
  text: '#212121',
  textSecondary: '#757575',
  textTertiary: '#9E9E9E',
  textInverse: '#FFFFFF',
  
  // Status Colors
  success: '#4CAF50',
  warning: '#FF9800', 
  error: '#F44336',
  info: '#2196F3',
  
  // Border & Divider
  border: '#E0E0E0',
  divider: '#EEEEEE',
  
  // Habit Growth Colors - برای مراحل رشد
  seed: '#8BC34A',      // بذر
  sprout: '#CDDC39',    // جوانه
  sapling: '#4CAF50',   // نهال
  tree: '#2E7D32',      // درخت
};

export const darkColors = {
  ...lightColors,
  // Override for dark theme
  background: '#121212',
  surface: '#1E1E1E',
  card: '#2D2D2D',
  text: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textTertiary: '#8A8A8A',
  border: '#333333',
  divider: '#2D2D2D',
};