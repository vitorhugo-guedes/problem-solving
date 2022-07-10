let lines = ['5.0','6.0','7.0'];

let notas = lines.map(Number);
const peso = [2,3,5]
const resultado = media(notas, peso).toFixed(1)

function media(notas, pesos) {
    const [notaA, notaB, notaC] = notas;
    const [pesoA, pesoB, pesoC] = pesos;
    const pesoTotal = pesoA + pesoB + pesoC;

    return (notaA * pesoA + notaB * pesoB + notaC * pesoC) / pesoTotal;
}

console.log(`MEDIA = ${resultado}`);