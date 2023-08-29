import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { gameGetAll } from '@storage/game/game-get-all';
import { Page } from '@components/page';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GameCard } from '@components/game-card';
import { ListEmpty } from '@components/list-empty';
import { Button } from '@components/button';
import { Loading } from '@components/loading';

export function Games () {

  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleOpenGame = (game: string) => {
    navigation.navigate('Players', { game });
  };

  const fetchGames = async () => {
    try {
      setIsLoading(true);
      const gamesStored = await gameGetAll();
      setGames(gamesStored);
    } catch (error) {
      Alert.alert('Games', 'Something went wrong. Try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(useCallback(() => {
    fetchGames();
  }, []));

  return (
    <Page>
      <Header />
      <Highlight title="Games" subTitle="Play with your Gang" />

      {isLoading ? <Loading /> :
        <FlatList
          showsVerticalScrollIndicator={false}
          data={games}
          keyExtractor={item => item}
          contentContainerStyle={games.length === 0 && { flex: 1 }}
          renderItem={({ item }) => (
            <GameCard
              title={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="What do you think about registering your first game?" />
          )}
        />
      }

      <Button
        label="Register new Game"
        onPress={() => navigation.navigate('AddGame')}
      />
    </Page>
  );
}
