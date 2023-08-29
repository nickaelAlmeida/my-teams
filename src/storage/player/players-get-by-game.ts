import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION_KEY } from '@storage/config';
import { PlayerStorageDTO } from './player-storage-dto';

export async function playersGetByGame (game: string): Promise<PlayerStorageDTO[]> {
  try {
    const data = await AsyncStorage.getItem(`${PLAYER_COLLECTION_KEY}-${game}`);
    const players: PlayerStorageDTO[] = data ? JSON.parse(data) : [];
    return players;
  } catch (error) {
    throw error;
  }
}
