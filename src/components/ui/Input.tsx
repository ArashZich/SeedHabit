import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';
import { getTextAlign } from '@/utils/rtl';
import { Theme } from '@/types/theme';
import '@/types';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'filled';
}

interface InputContainerProps {
  focused: boolean; 
  error?: boolean;
  variant: InputProps['variant'];
}

interface IconContainerProps {
  position: 'left' | 'right';
}

const Container = styled.View`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
`;

const Label = styled.Text`
  ${({ theme }: { theme: Theme }) => theme.typography.body2};
  color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
  text-align: ${() => getTextAlign()};
`;

const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, variant }: { 
    theme: Theme; 
    variant?: InputProps['variant'] 
  }) => {
    if (variant === 'filled') return theme.colors.surface;
    return theme.colors.background;
  }};
  border: ${({ theme, focused, error }: { 
    theme: Theme; 
    focused: boolean; 
    error?: boolean 
  }) => {
    if (error) return `2px solid ${theme.colors.error}`;
    if (focused) return `2px solid ${theme.colors.primary}`;
    return `1px solid ${theme.colors.border}`;
  }};
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.sm}px ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  min-height: 48px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  ${({ theme }: { theme: Theme }) => theme.typography.body1};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  text-align: ${() => getTextAlign()};
  padding: 0;
`;

const IconContainer = styled.View<IconContainerProps>`
  margin-right: ${({ theme, position }: { 
    theme: Theme; 
    position: 'left' | 'right' 
  }) => position === 'left' ? theme.spacing.sm : 0}px;
  margin-left: ${({ theme, position }: { 
    theme: Theme; 
    position: 'left' | 'right' 
  }) => position === 'right' ? theme.spacing.sm : 0}px;
`;

const ErrorText = styled.Text`
  ${({ theme }: { theme: Theme }) => theme.typography.caption};
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-top: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
  text-align: ${() => getTextAlign()};
`;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer 
        focused={focused} 
        error={!!error}
        variant={variant}
      >
        {leftIcon && (
          <IconContainer position="left">
            {leftIcon}
          </IconContainer>
        )}
        <StyledTextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholderTextColor={focused ? undefined : '#9E9E9E'}
          {...props}
        />
        {rightIcon && (
          <IconContainer position="right">
            {rightIcon}
          </IconContainer>
        )}
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};