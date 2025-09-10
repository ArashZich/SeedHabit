// import original module declarations
import 'styled-components/native';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      background: string;
      surface: string;
      card: string;
      text: string;
      textSecondary: string;
      textTertiary: string;
      textInverse: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      border: string;
      divider: string;
      seed: string;
      sprout: string;
      sapling: string;
      tree: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    typography: {
      h1: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      h2: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      h3: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      h4: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      body1: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      body2: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      caption: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
      button: {
        fontSize: number;
        fontWeight: string;
        lineHeight: number;
      };
    };
    borderRadius: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      full: number;
    };
    shadows: {
      sm: {
        shadowColor: string;
        shadowOffset: { width: number; height: number };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
      md: {
        shadowColor: string;
        shadowOffset: { width: number; height: number };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
      lg: {
        shadowColor: string;
        shadowOffset: { width: number; height: number };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
    };
    dimensions: {
      width: number;
      height: number;
      isSmallScreen: boolean;
    };
  }
}