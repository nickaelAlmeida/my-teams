import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_COLLECTION_KEY } from '@storage/config';

export async function gameGetAll (): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(GAME_COLLECTION_KEY);
    const games: string[] = data ? JSON.parse(data) : [];
    return games;
  } catch (error) {
    throw error;
  }
}
