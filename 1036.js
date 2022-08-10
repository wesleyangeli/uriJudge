const input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ');

let delta = b * b - 4 * a * c;
if (a == 0.0 || delta <= 0 || c == 0 || b == 0) {
    console.log('Impossivel calcular');
} else {
    const r1 = (-b + Math.sqrt(delta)) / (2 * a);
    const r2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}
