import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)<{ isActive: boolean; }>`

  align-items: center;
  justify-content: center;

  width: 70px;
  height: 38px;
  margin-right: 12px;

  border-width: 1px;
  border-style: solid;
  border-radius: 4px;

  ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_700};
  `}
`;

export const Label = styled.Text`

  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
