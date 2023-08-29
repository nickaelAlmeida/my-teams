import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gameCreate } from '@storage/game/game-create';
import { Page } from '@components/page';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { AppError } from '@utils/app-error';
import { Content, Icon } from './styles';

export function AddGame () {

  const navigation = useNavigation();
  const [name, setName] = useState('');

  const handleAddGame = async () => {
    try {
      const newGame = name.trim();
      if (newGame.length === 0) return;
      await gameCreate(newGame);
      navigation.navigate('Players', { game: newGame });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Game', error.message);
      } else {
        Alert.alert('New Game', 'Something went wrong. Try again later.');
        console.error(error);
      }
    }
  };

  return (
    <Page>
      <Header showBackButton={true} />

      <Content>
        <Icon />
        <Highlight
          title="New Game"
          subTitle="Play with your Gang"
        />

        <Input
          placeholder="Game Name"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={setName}
          returnKeyType="done"
          onSubmitEditing={handleAddGame}
        />
      </Content>

      <Button
        label="Add"
        onPress={handleAddGame}
      />
    </Page>
  );
}
