import { ButtonIcon } from '@components/button-icon';
import { Container, Icon, Name } from './styles';

interface PlayerCardProps {
  name: string;
  onPress: () => void;
}

export function PlayerCard ({ name, onPress }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon
        icon="close"
        type="Secondary"
        onPress={onPress}
      />
    </Container>
  );
}
