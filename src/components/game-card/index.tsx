import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

interface GameCardProps extends TouchableOpacityProps {
  title: string;
}

export function GameCard ({ title, ...rest }: GameCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
