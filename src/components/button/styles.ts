import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyle = 'Primary' | 'Secondary';

export const Container = styled(TouchableOpacity)<{ type: ButtonTypeStyle; }>`

  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: 56px;
  max-height: 56px;
  margin-top: 20px;

  border-radius: 6px;
  background-color: ${({ theme, type }) => type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Label = styled.Text`

  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
