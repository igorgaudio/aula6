const inputs = prompt(`um numero inteiro`, `10`);

let result = "";

for (let i = 1; i <= inputs; i++) {
  for (let j = 1; j <= inputs; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
