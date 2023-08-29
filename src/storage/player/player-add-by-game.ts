import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION_KEY } from '@storage/config';
import { PlayerStorageDTO } from './player-storage-dto';
import { playersGetByGame } from './players-get-by-game';
import { AppError } from '@utils/app-error';

export async function playerAddByGame (game: string, player: PlayerStorageDTO): Promise<void> {
  try {
    const players = await playersGetByGame(game);
    const playerAlreadyExists = players.find(({ name }) => name === player.name);

    if (playerAlreadyExists) {
      throw new AppError('Player already exists');
    }

    const data = JSON.stringify([...players, player]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION_KEY}-${game}`, data);

  } catch (error) {
    throw (error);
  }
}
