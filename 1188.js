const input = require('fs').readFileSync('./dados/stdin', 'utf8');
lista = input.split('\n');
novaLista = [];

lista.map((item, index) => {
    if (index != 0) {
        novaLista.push(parseFloat(item));
    }
});

media = novaLista.reduce((acc, value) => acc + value) / novaLista.length;
soma = novaLista.reduce((acc, value) => acc + value);

console.log(media);
