const input = require('fs').readFileSync('./dados/stdin', 'utf8');
valor = input.split(' ');
menu = [0, 4, 4.5, 5, 2, 1.5];
resultado = menu[valor[0]] * valor[1];
console.log(`Total: R$ ${resultado.toFixed(2)}`);
