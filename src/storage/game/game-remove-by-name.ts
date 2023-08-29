import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_COLLECTION_KEY, PLAYER_COLLECTION_KEY } from '@storage/config';
import { gameGetAll } from './game-get-all';

export async function gameRemoveByName (game: string): Promise<void> {
  try {
    const games = await gameGetAll();
    const filtered = games.filter((name) => name !== game);
    const data = JSON.stringify(filtered);

    await AsyncStorage.setItem(GAME_COLLECTION_KEY, data);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION_KEY}-${game}`);

  } catch (error) {
    throw error;
  }
}
