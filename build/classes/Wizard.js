export class Wizard {
    constructor(_name) {
        this._name = _name;
        this._spells = ['small fire ball', 'small ice spear'];
        this._health = 100;
        this._friends = [];
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
    // aprende uma nova magia
    learnNewSpell(spell) {
        this._spells.push(spell);
    }
    // retorna um objeto contendo os dados do mago
    toObject() {
        return {
            name: this._name,
            health: this._health,
            spells: this._spells,
            friends: this._friends.map((f) => f.name),
        };
    }
    // adiciona um amigo
    addFriend(friend) {
        this._friends.push(friend);
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
        const clone = new Wizard(this._name);
        Object.assign(clone, this);
        return clone;
    }
}
