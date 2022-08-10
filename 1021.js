const input = require('fs').readFileSync('./dados/stdin', 'utf8');
var valor = parseFloat(input);
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

separaNotasMoedas('NOTAS', 'nota', notas);
separaNotasMoedas('MOEDAS', 'moeda', moedas);

function separaNotasMoedas(texto, tipo, dinheiro) {
    console.log(`${texto}:`);
    dinheiro.map((nota) => {
        let qtdNotas = parseInt(valor / nota);
        console.log(`${qtdNotas} ${tipo}(s) de R$ ${nota.toFixed(2)}`);
        valor = (valor % nota) + 0.00001;
    });
}
