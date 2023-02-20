const inputs = prompt(
  `Digite 10 idades separadas por virgula:`,
  `10, 15, 20, 25, 30, 35, 15, 12, 19, 11`
);
const value = inputs.split(`,`);
console.log(value);

let total = 0;
for (let i = 0; i < value.length; i++) {
  const age = parseInt(value[i]);
  if (age >= 18) {
    total++;
  }
}
console.log(total);
console.log("Maiores de idade", total);
