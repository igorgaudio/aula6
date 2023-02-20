function isPrime(n) {
  let divisores = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisores++;
    }
  }
  return divisores === 2;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
