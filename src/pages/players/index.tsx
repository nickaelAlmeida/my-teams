import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Keyboard, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { playerAddByGame } from '@storage/player/player-add-by-game';
import { PlayerStorageDTO } from '@storage/player/player-storage-dto';
import { playersGetByGameAndTeam } from '@storage/player/players-get-by-game-and-team';
import { playerRemoveByGame } from '@storage/player/player-remove-by-game';
import { gameRemoveByName } from '@storage/game/game-remove-by-name';
import { Page } from '@components/page';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Button } from '@components/button';
import { Input } from '@components/input';
import { ButtonIcon } from '@components/button-icon';
import { Filter } from '@components/filter';
import { PlayerCard } from '@components/player-card';
import { ListEmpty } from '@components/list-empty';
import { Loading } from '@components/loading';
import { AppError } from '@utils/app-error';
import { Form, HeaderList, NumberOfPlayers } from './styles';

export function Players () {

  const navigation = useNavigation();
  const route = useRoute();
  const { game } = route.params as { game: string };

  const inputRef = useRef<TextInput>(null);
  const teams: string[] = ['Team A', 'Team B'];

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [team, setTeam] = useState<string>('Team A');

  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const handleAddPlayer = async () => {
    try {
      const newPlayer = name.trim();
      if (newPlayer.length === 0) return;
      await playerAddByGame(game, { name: newPlayer, team });
      await fetchPlayersByTeam();

      inputRef.current?.blur();
      Keyboard.dismiss();
      setName('');

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Player', error.message);
      } else {
        Alert.alert('New Player', 'Something went wrong. Try again later.');
        console.error(error);
      }
    }
  };

  const handleRemovePlayer = async (name: string) => {
    try {
      await playerRemoveByGame(game, name);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remove Player', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const handleRemoveGameConfirm = async () => {
    try {
      await gameRemoveByName(game);
      navigation.navigate('Games');
    } catch (error) {
      Alert.alert('Remove Player', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const handleRemoveGame = async () => {
    Alert.alert(
      'Remove Game',
      `Are you sure you want to remove ${game}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: handleRemoveGameConfirm }
      ]
    );
  };

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGameAndTeam(game, team);
      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert('Players', 'Something went wrong. Try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Page>
      <Header showBackButton={true} />
      <Highlight title={game} subTitle="Add the members of your Game." />

      <Form>
        <Input
          inputRef={inputRef}
          placeholder="Member Name"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
          returnKeyType="done"
          onSubmitEditing={handleAddPlayer}
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              label={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? <Loading /> :
        <FlatList
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard name={item.name} onPress={() => handleRemovePlayer(item.name)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="No players found." />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={players.length === 0 && { flex: 1 }}
        />
      }

      <Button
        type="Secondary"
        label="Remove Game"
        onPress={handleRemoveGame}
      />
    </Page>
  );
}
