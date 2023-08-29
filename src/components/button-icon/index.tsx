import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconTypeStyle, Container, Icon } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyle;
}

export function ButtonIcon ({ icon, type = 'Primary', ...rest }: ButtonIconProps) {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
