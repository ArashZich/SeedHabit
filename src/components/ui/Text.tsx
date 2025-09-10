import styled from 'styled-components/native';
import { getTextAlign } from '@/utils/rtl';
import { Theme } from '@/types/theme';
import '@/types';

interface TextProps {
  variant?: keyof Theme['typography'];
  color?: keyof Theme['colors'] | string;
  align?: 'left' | 'center' | 'right' | 'auto';
  weight?: '300' | '400' | '500' | '600' | '700';
}

export const Text = styled.Text<TextProps>`
  ${({ theme, variant, weight }: { 
    theme: Theme; 
    variant?: keyof Theme['typography']; 
    weight?: '300' | '400' | '500' | '600' | '700' 
  }) => {
    const typography = theme.typography[variant || 'body1'];
    return `
      font-size: ${typography.fontSize}px;
      font-weight: ${weight || typography.fontWeight};
      line-height: ${typography.lineHeight}px;
    `;
  }};
  
  color: ${({ theme, color }: { 
    theme: Theme; 
    color?: keyof Theme['colors'] | string 
  }) => {
    if (color) {
      // Check if it's a theme color key
      if (theme.colors[color as keyof typeof theme.colors]) {
        return theme.colors[color as keyof typeof theme.colors];
      }
      // Otherwise treat as a direct color value
      return color;
    }
    return theme.colors.text;
  }};
  
  text-align: ${({ align }: { align?: 'left' | 'center' | 'right' | 'auto' }) => {
    if (align === 'auto') {
      return getTextAlign();
    }
    if (align) {
      return align;
    }
    return getTextAlign();
  }};
`;