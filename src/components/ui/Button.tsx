import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { getFlexDirection } from "@/utils/rtl";
import { Theme } from "@/types/theme";
import "@/types";

// Define button variants for better type safety
const buttonVariants = {
  primary: "primary",
  secondary: "secondary",
  ghost: "ghost",
  danger: "danger",
} as const;

const buttonSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

interface ButtonProps extends TouchableOpacityProps {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
}

interface StyledButtonProps {
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
  fullWidth?: boolean;
  disabled?: boolean;
}

interface ButtonTextProps {
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
  disabled?: boolean;
}

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ theme, disabled, variant }: { 
    theme: Theme; 
    disabled?: boolean; 
    variant?: keyof typeof buttonVariants 
  }) => {
    if (disabled) return theme.colors.textTertiary;

    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return "transparent";
      case "ghost":
        return "transparent";
      case "danger":
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  }};

  border: ${({ theme, variant }: { 
    theme: Theme; 
    variant?: keyof typeof buttonVariants 
  }) => {
    if (variant === "secondary") {
      return `2px solid ${theme.colors.primary}`;
    }
    if (variant === "ghost") {
      return `1px solid ${theme.colors.border}`;
    }
    return "none";
  }};

  padding: ${({ theme, size }: { 
    theme: Theme; 
    size?: keyof typeof buttonSizes 
  }) => {
    switch (size) {
      case "sm":
        return `${theme.spacing.sm}px ${theme.spacing.md}px`;
      case "lg":
        return `${theme.spacing.lg}px ${theme.spacing.xl}px`;
      default:
        return `${theme.spacing.md}px ${theme.spacing.lg}px`;
    }
  }};

  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  flex-direction: ${() => getFlexDirection()};
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }: { fullWidth?: boolean }) => (fullWidth ? "100%" : "auto")};
  min-height: ${({ size }: { size?: keyof typeof buttonSizes }) => {
    switch (size) {
      case "sm":
        return "36px";
      case "lg":
        return "56px";
      default:
        return "48px";
    }
  }};

  ${({ theme }: { theme: Theme }) => theme.shadows.sm};

  opacity: ${({ disabled }: { disabled?: boolean }) => (disabled ? 0.6 : 1)};
`;

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ theme, disabled, variant }: { 
    theme: Theme; 
    disabled?: boolean; 
    variant?: keyof typeof buttonVariants 
  }) => {
    if (disabled) return theme.colors.textInverse;

    switch (variant) {
      case "primary":
        return theme.colors.textInverse;
      case "secondary":
        return theme.colors.primary;
      case "ghost":
        return theme.colors.text;
      case "danger":
        return theme.colors.textInverse;
      default:
        return theme.colors.textInverse;
    }
  }};

  ${({ theme }: { theme: Theme }) => theme.typography.button};

  font-size: ${({ size }: { size?: keyof typeof buttonSizes }) => {
    switch (size) {
      case "sm":
        return "14px";
      case "lg":
        return "18px";
      default:
        return "16px";
    }
  }};

  margin-left: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

const IconContainer = styled.View`
  margin-right: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  disabled,
  ...props
}) => (
  <StyledButton
    variant={variant}
    size={size}
    disabled={disabled || loading}
    activeOpacity={0.8}
    {...props}
  >
    {icon && !loading && <IconContainer>{icon}</IconContainer>}
    <ButtonText variant={variant} size={size} disabled={disabled || loading}>
      {loading ? "Loading..." : children}
    </ButtonText>
  </StyledButton>
);
