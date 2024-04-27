export interface IHero {
  name: string;
  toObject(): Object;
  addFriend(friend: IHero): void;
  clone(): IHero;
}
