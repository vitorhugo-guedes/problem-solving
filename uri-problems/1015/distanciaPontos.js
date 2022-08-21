// Distancia entre dois pontos
var input = require("fs").readFileSync("./input", "utf8");
var lines = input.split("\n");

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

const calcDistance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4);
};

console.log(calcDistance(x1, x2, y1, y2));
