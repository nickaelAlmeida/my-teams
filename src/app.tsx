/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/loading';
import { Routes } from './routes';
import { standard } from './themes';

export function App () {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={standard}>
      <StatusBar style="light" translucent={true} />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
