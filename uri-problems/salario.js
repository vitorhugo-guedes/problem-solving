let lines = ['25', '100', '5.50'];

const [number, wHours, hWage] = lines;
const func = {number, wHours, hWage};
const totalWage = parseFloat(func.wHours) * parseFloat(func.hWage);

console.log(`NUMBER = ${func.number}\nSALARY = U$ ${totalWage.toFixed(2)}`);

