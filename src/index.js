import './index.css';
import numalral from 'numeral';

const coffeeValue = numalral(5).format('$0,0.00');
console.log(`I love ${coffeeValue} latte!`);
