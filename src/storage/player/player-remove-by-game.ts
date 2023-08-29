import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION_KEY } from '@storage/config';
import { playersGetByGame } from './players-get-by-game';

export async function playerRemoveByGame (game: string, name: string): Promise<void> {
  try {
    const players = await playersGetByGame(game);
    const filtered = players.filter(({ name: playerName }) => playerName !== name);

    const data = JSON.stringify(filtered);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION_KEY}-${game}`, data);

  } catch (error) {
    throw error;
  }
}
