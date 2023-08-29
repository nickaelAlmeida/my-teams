import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`

  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 90px;

  padding: 24px;
  margin-bottom: 12px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
