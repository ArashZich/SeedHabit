// Theme types
export interface Theme {
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
    h1: TextStyle;
    h2: TextStyle;
    h3: TextStyle;
    h4: TextStyle;
    body1: TextStyle;
    body2: TextStyle;
    caption: TextStyle;
    button: TextStyle;
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
    sm: ShadowStyle;
    md: ShadowStyle;
    lg: ShadowStyle;
  };
  dimensions: {
    width: number;
    height: number;
    isSmallScreen: boolean;
  };
}

interface TextStyle {
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
}

interface ShadowStyle {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}