import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyle, Container, Label } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonTypeStyle;
  label: string;
}

export function Button ({ type = 'Primary', label, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Label>{label}</Label>
    </Container>
  );
}
