import styled from 'styled-components/native';
import { getDirection } from '@/utils/rtl';
import { Theme } from '@/types/theme';
import '@/types';

interface ContainerProps {
  padding?: keyof Theme['spacing'];
  direction?: 'row' | 'column';
}

interface RowProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: keyof Theme['spacing'];
  wrap?: boolean;
}

interface ColumnProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: keyof Theme['spacing'];
  flex?: number;
}

export const Container = styled.View<ContainerProps>`
  padding: ${({ theme, padding }: { theme: Theme; padding?: keyof Theme['spacing'] }) => theme.spacing[padding || 'md']}px;
  flex-direction: ${({ direction }: { direction?: 'row' | 'column' }) => {
    if (direction === 'row') {
      return getDirection() === 'rtl' ? 'row-reverse' : 'row';
    }
    return 'column';
  }};
`;

export const Row = styled.View<RowProps>`
  flex-direction: ${() => getDirection() === 'rtl' ? 'row-reverse' : 'row'};
  justify-content: ${({ justify }: { justify?: RowProps['justify'] }) => justify || 'flex-start'};
  align-items: ${({ align }: { align?: RowProps['align'] }) => align || 'flex-start'};
  gap: ${({ theme, gap }: { theme: Theme; gap?: keyof Theme['spacing'] }) => gap ? theme.spacing[gap] : 0}px;
  flex-wrap: ${({ wrap }: { wrap?: boolean }) => wrap ? 'wrap' : 'nowrap'};
`;

export const Column = styled.View<ColumnProps>`
  flex-direction: column;
  justify-content: ${({ justify }: { justify?: ColumnProps['justify'] }) => justify || 'flex-start'};
  align-items: ${({ align }: { align?: ColumnProps['align'] }) => align || 'flex-start'};
  gap: ${({ theme, gap }: { theme: Theme; gap?: keyof Theme['spacing'] }) => gap ? theme.spacing[gap] : 0}px;
  flex: ${({ flex }: { flex?: number }) => flex || 0};
`;