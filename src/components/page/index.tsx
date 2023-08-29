import { ReactNode } from 'react';
import { Container } from './styles';

export function Page ({ children }: { children: ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
