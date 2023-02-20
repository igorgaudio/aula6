const target = window.prompt("Digit um numero inteiro", "10");

const evens = [];
const odds = [];

for (let j = 1; j <= target; j++) {
  if (j % 2 === 0) {
    evens.push(j);
  } else {
    odds.push(j);
  }
}

console.log("Numeros pares:", evens);
console.log("Numeros ímpares:", odds);
