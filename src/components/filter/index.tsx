import { TouchableOpacityProps } from 'react-native';
import { Container, Label } from './styles';

interface FilterProps extends TouchableOpacityProps {
  label: string;
  isActive?: boolean;
}

export function Filter ({ label, isActive = false, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Label>{label}</Label>
    </Container>
  );
}
