var input = require("fs").readFileSync("./input", "utf-8");
var lines = input.split(" ");

const [distance, fuel] = lines.map((number) => parseFloat(number));
const result = (distance / fuel).toFixed(3);
console.log(result, "km/l");
