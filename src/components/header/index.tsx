import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon } from './styles';
import logo from '@assets/logo.png';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header ({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.navigate('Games')}>
          <BackIcon size={24} color="#fff" />
        </BackButton>
      )}

      <Logo source={logo} />
    </Container>
  );
}
