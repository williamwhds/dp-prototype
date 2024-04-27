import { Wizard } from './classes/Wizard.js';
import { Warrior } from './classes/Warrior.js';
import { Dwarf } from './classes/Dwarf.js';
import { Elf } from './classes/Elf.js';
/**
 * O projeto possui duas classes implementadas: Warrior (guerreiro) e Wizard (mago).
 * Baseando-se nelas, crie duas novas classes: Dwarf (anão) e Elf (elfo).
 * Em seguida, implemente o padrão Prototype para que seja possível criar
 * novos guerreiros, magos, anões e elfos rapidamente a partir de objetos já existentes.
 *
 * Teste a sua implementação adicionando ao código abaixo as novas classes que criou
 * e os objetos clonados.
 */
const heroes = [
    new Wizard('Gandalf'),
    new Warrior('Aragorn'),
    new Dwarf('Senshi'),
    new Elf('Marcille'),
];
heroes[0].addFriend(heroes[1]);
heroes[1].addFriend(heroes[0]);
heroes[2].addFriend(heroes[3]);
heroes[3].addFriend(heroes[2]);
// clonando
const cloneHeroes = [];
for (let f of heroes) {
    cloneHeroes.push(f.clone());
}
// imprime todos os heróis
(function () {
    for (let f of heroes)
        console.log(f.toObject());
})();
console.log('vvvv HERÓIS CLONADOS ABAIXO vvvv');
// imprime todos os heróis clonados
(function () {
    for (let f of cloneHeroes)
        console.log(f.toObject());
})();
