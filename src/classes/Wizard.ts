import { IHero } from './IHero.js';

export class Wizard implements IHero {
  // magias
  private _spells: Array<string>;

  // pontos de vida
  private _health: number;

  // amigos
  private _friends: Array<IHero>;

  constructor(private _name: string) {
    this._spells = ['small fire ball', 'small ice spear'];
    this._health = 100;
    this._friends = [];
  }

  // ao sofrer dano, os pontos de vida diminuem
  public sufferDamage(value: number) {
    if (value > 0) {
      this._health = this._health - value;
      if (this._health < 0) this._health = 0;
    }
  }

  // ao usar um item de cura, os pontos de vida aumentam
  public recover(value: number) {
    if (value > 0) {
      this._health = this._health + value;
      if (this._health > 100) this._health = 100;
    }
  }

  // aprende uma nova magia
  public learnNewSpell(spell: string) {
    this._spells.push(spell);
  }

  // retorna um objeto contendo os dados do mago
  public toObject() {
    return {
      name: this._name,
      health: this._health,
      spells: this._spells,
      friends: this._friends.map((f) => f.name),
    };
  }

  // adiciona um amigo
  public addFriend(friend: IHero) {
    this._friends.push(friend);
  }

  // getters e setters
  public get name() {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  // clone
  public clone(): Wizard {
    const clone = new Wizard(this._name);
    Object.assign(clone, this);
    return clone;
  }
}
