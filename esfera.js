var lines = ['3']

const radius = parseFloat(lines);
const pi = 3.14159;

const calcVolume = (radius, pi) => (4.0/3) * pi * Math.pow(radius, 3);
const resultado = calcVolume(radius, pi).toFixed(3);

console.log(`VOLUME = ${resultado}`);

