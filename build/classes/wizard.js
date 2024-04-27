export class Wizard {
    constructor(_name) {
        this._name = _name;
        this._spells = ['small fire ball', 'small ice spear'];
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
    learnNewSpell(spell) {
        this._spells.push(spell);
    }
    get name() {
        return this._name;
    }
}
