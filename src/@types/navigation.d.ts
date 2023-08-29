export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Games: undefined;
      AddGame: undefined;
      Players: { game: string; };
    }
  }
}
