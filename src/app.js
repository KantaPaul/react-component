// import './utility.js'
// import single item
// import { square } from './utility.js';
// mport multipile item
import anyName, {square, add} from './utility.js';

import old, {isAdoult, isDrink} from './person.js';

console.log('App js is running!');


console.log('Square: ' +square(4));

console.log('Add: ' +add(100, 23))

console.log('Sub: ' +anyName(100, 81))

console.log('Adoult: ' +isAdoult(18))

console.log('Drink: ' +isDrink(20))

console.log('Old: ' +old(65))