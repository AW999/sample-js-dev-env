import './index.css';
import numalral from 'numeral';

/* eslint-disable no-console */

const coffeeValue = numalral(5).format('$0,0.00');
console.log(`I love ${coffeeValue} latte!`);
