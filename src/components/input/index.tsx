import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>;
}

export function Input ({ inputRef, ...rest }: InputProps) {
  return (
    <Container ref={inputRef} {...rest} />
  );
}
