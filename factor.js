const prompt = require('prompt-sync')();
n = Number(prompt("Entrez un nombre :"));

let fact = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log(fact(n));