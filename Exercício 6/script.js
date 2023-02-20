const target = window.prompt("Digit um numero inteiro", "10");

console.log(`Tabuada de ${target}`);
for (let j = 1; j <= 10; j++) {
  const resultado = target * j;
  console.log(`${target} x ${j} = ${resultado}`);
}
