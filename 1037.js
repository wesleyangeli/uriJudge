const input = require('fs').readFileSync('./dados/stdin', 'utf8');
valor = parseFloat(input);
intervalos = [
    { min: 0.0, max: 25.0, msg: 'Intervalo [0,25]' },
    { min: 25.00001, max: 50.0, msg: 'Intervalo (25,50]' },
    { min: 50.00001, max: 75.0, msg: 'Intervalo (50,75]' },
    { min: 75.00001, max: 100.0, msg: 'Intervalo (75,100]' },
];

valor > 100 || valor < 0
    ? console.log('Fora de intervalo')
    : intervalos.map(({ min, max, msg }) => {
          if (valor >= min && valor <= max) {
              console.log(msg);
          }
      });
