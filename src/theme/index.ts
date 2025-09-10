import { Dimensions } from 'react-native';
import { lightColors, darkColors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { borderRadius } from './borderRadius';
import { shadows } from './shadows';

// Import theme type declarations - moved to root
// Types are declared in styled.d.ts at root level

const { width, height } = Dimensions.get('window');

import { DefaultTheme } from 'styled-components/native';

const theme: DefaultTheme = {
  colors: lightColors,
  spacing,
  typography,
  borderRadius,
  shadows,
  dimensions: {
    width,
    height,
    isSmallScreen: width < 375,
  },
};

export const lightTheme = theme;

export const darkTheme: DefaultTheme = {
  ...theme,
  colors: darkColors,
};

// Export default theme
export default theme;

export type Theme = DefaultTheme;

// Re-export everything for convenience
export * from './colors';
export * from './spacing';
export * from './typography';
export * from './borderRadius';
export * from './shadows';