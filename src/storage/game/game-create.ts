import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_COLLECTION_KEY } from '@storage/config';
import { gameGetAll } from './game-get-all';
import { AppError } from '@utils/app-error';

export async function gameCreate (name: string): Promise<void> {
  try {
    const games = await gameGetAll();

    if (games.includes(name)) {
      throw new AppError('Game already exists');
    }

    const data = JSON.stringify([...games, name]);
    await AsyncStorage.setItem(GAME_COLLECTION_KEY, data);

  } catch (error) {
    throw error;
  }
}
