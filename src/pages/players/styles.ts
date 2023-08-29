import styled, { css } from 'styled-components/native';

export const Form = styled.View`

  width: 100%;

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderList = styled.View`

  flex-direction: row;
  align-items: center;

  width: 100%;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
