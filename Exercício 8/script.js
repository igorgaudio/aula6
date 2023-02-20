const inputs = prompt(`Digite 5 idades:`, `10, 15, 20, 25, 30`);
const value = inputs.split(`,`);
console.log(value);

let total = 0;
for (let i = 0; i < value.length; i++) {
  total += parseFloat(value[i]);
}
console.log(total);
const media = total / value.length;
console.log("Média", media);
