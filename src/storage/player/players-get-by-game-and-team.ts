import { PlayerStorageDTO } from './player-storage-dto';
import { playersGetByGame } from './players-get-by-game';

export async function playersGetByGameAndTeam (game: string, team: string): Promise<PlayerStorageDTO[]> {
  try {
    const players = await playersGetByGame(game);
    return players.filter(({ team: playerTeam }) => playerTeam === team);
  } catch (error) {
    throw error;
  }
}
