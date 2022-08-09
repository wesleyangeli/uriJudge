const input = require('fs').readFileSync('stdin', 'utf8');
let tempo = parseInt(input);
const horas = parseInt(tempo / 60 / 60);
const minutos = parseInt((tempo / 60) % 60);
const segundos = parseInt(tempo % 60);
console.log(`${horas}:${minutos}:${segundos}`);
