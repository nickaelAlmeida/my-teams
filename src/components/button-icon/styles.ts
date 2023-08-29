import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export type ButtonIconTypeStyle = 'Primary' | 'Secondary';

export const Container = styled(TouchableOpacity)<{ type: ButtonIconTypeStyle; }>`

  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
`;

export const Icon = styled(MaterialIcons).attrs<{ type: ButtonIconTypeStyle; }>(({ theme, type }) => ({
  size: 24,
  color: type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
