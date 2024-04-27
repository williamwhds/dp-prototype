export class Warrior {
    constructor(_name) {
        this._name = _name;
        this._weapon = 'Sword';
        this._health = 100;
    }
    sufferDamage(value) {
        if (value > 0) {
            this._health = this._health - value;
            if (this._health < 0)
                this._health = 0;
        }
    }
    recover(value) {
        if (value > 0) {
            this._health = this._health + value;
            if (this._health > 100)
                this._health = 100;
        }
    }
    changeWeapon(weapon) {
        this._weapon = weapon;
    }
    get name() {
        return this._name;
    }
    toObject() {
        return {
            name: this._name,
            health: this._health,
            weapon: this._weapon,
        };
    }
    clone() {
        const clonedWarrior = new Warrior(this.name + '_copy');
        clonedWarrior._health = this._health;
        clonedWarrior._weapon = this._weapon;
        return clonedWarrior;
    }
}
