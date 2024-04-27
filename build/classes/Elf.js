export class Elf {
    constructor(_name) {
        this._name = _name;
        this._weapon = 'Bow';
        this._health = 75; // Elfos são mais frágeis
        this._friends = [];
        this._arrows = 15;
    }
    // ao sofrer dano, os pontos de vida diminuem
    sufferDamage(value) {
        if (value > 0) {
            this._health = this._health - value;
            if (this._health < 0)
                this._health = 0;
        }
    }
    // ao usar um item de cura, os pontos de vida aumentam
    recover(value) {
        if (value > 0) {
            this._health = this._health + value;
            if (this._health > 100)
                this._health = 100;
        }
    }
    // muda de arma
    changeWeapon(weapon) {
        this._weapon = weapon;
    }
    // adiciona um amigo
    addFriend(friend) {
        this._friends.push(friend);
    }
    // retorna um objeto contendo os dados do guerreiro
    toObject() {
        return {
            name: this._name,
            health: this._health,
            weapon: this._weapon,
            arrows: this._arrows,
            friends: this._friends.map((f) => f.name),
        };
    }
    // getters e setters
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // clone
    clone() {
        const clone = new Elf(this._name);
        Object.assign(clone, this);
        return clone;
    }
}
