const lines = ['5.0', '7.1'];

let notaA = Number(lines[0]);
let notaB = Number(lines[1]);
const aPeso = 3.5;
const bPeso = 7.5;
const pesoTotal = aPeso + bPeso;

const mediaPonderada = (x, y) => (x * aPeso + y * bPeso) / pesoTotal
const result = mediaPonderada(notaA, notaB);

console.log(`MEDIA = ${result.toFixed(5)}`);