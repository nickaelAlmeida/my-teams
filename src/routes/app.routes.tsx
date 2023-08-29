import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Games } from '@pages/games';
import { AddGame } from '@pages/add-game';
import { Players } from '@pages/players';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
  return (
    <Navigator initialRouteName="Teams" screenOptions={{ headerShown: false }}>
      <Screen name="Games" component={Games} />
      <Screen name="AddGame" component={AddGame} />
      <Screen name="Players" component={Players} />
    </Navigator>
  );
}
