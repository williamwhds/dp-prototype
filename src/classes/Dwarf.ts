import { IHero } from './IHero.js';

type WeaponType = 'Axe' | 'Hammer';

export class Dwarf implements IHero {
  // arma
  private _weapon: WeaponType;

  // vida
  private _health: number;

  // amigos
  private _friends: Array<IHero>;

  // aço
  private _steel: number;

  constructor(private _name: string) {
    this._weapon = 'Axe';
    this._health = 175; // Anões têm mais vida
    this._friends = [];
    this._steel = 15;
  }

  // forja arma (exclusivo de Anão)
  public forgeHammer(): WeaponType | null {
    var cost = 5;
    if (this._steel < cost) {
      return null;
    }
    this._steel -= 5;
    return 'Hammer';
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

  // muda de arma
  public changeWeapon(weapon: WeaponType) {
    this._weapon = weapon;
  }

  // adiciona um amigo
  public addFriend(friend: IHero) {
    this._friends.push(friend);
  }

  // retorna um objeto contendo os dados do guerreiro
  public toObject() {
    return {
      name: this._name,
      health: this._health,
      weapon: this._weapon,
      steel: this._steel,
      friends: this._friends.map((f) => f.name),
    };
  }

  // getters e setters
  public get name() {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  // clone
  public clone(): Dwarf {
    const clone = new Dwarf(this._name);
    Object.assign(clone, this);
    return clone;
  }
}
