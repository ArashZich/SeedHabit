import styled from "styled-components/native";
import "@/types";
import { Theme } from "@/types/theme";

interface CardProps {
  padding?: keyof Theme["spacing"];
  shadow?: keyof Theme["shadows"];
  borderRadius?: keyof Theme["borderRadius"];
  pressable?: boolean;
}

export const Card = styled.View<CardProps>`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.card};
  padding: ${({
    theme,
    padding,
  }: {
    theme: Theme;
    padding?: keyof Theme["spacing"];
  }) => theme.spacing[padding || "md"]}px;
  border-radius: ${({
    theme,
    borderRadius,
  }: {
    theme: Theme;
    borderRadius?: keyof Theme["borderRadius"];
  }) => theme.borderRadius[borderRadius || "md"]}px;
  ${({ theme, shadow }: { theme: Theme; shadow?: keyof Theme["shadows"] }) =>
    shadow ? theme.shadows[shadow] : theme.shadows.sm};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.border};
`;

export const PressableCard = styled.TouchableOpacity<CardProps>`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.card};
  padding: ${({
    theme,
    padding,
  }: {
    theme: Theme;
    padding?: keyof Theme["spacing"];
  }) => theme.spacing[padding || "md"]}px;
  border-radius: ${({
    theme,
    borderRadius,
  }: {
    theme: Theme;
    borderRadius?: keyof Theme["borderRadius"];
  }) => theme.borderRadius[borderRadius || "md"]}px;
  ${({ theme, shadow }: { theme: Theme; shadow?: keyof Theme["shadows"] }) =>
    shadow ? theme.shadows[shadow] : theme.shadows.sm};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.border};
`;
