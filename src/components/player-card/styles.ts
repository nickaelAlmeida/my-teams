import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`

  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

`;

export const Name = styled.Text`

  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin: 0 10px 0 16px;
`;
