/*npm install prompt-sync*/
const prompt = require('prompt-sync')();
var n1 = parseInt(prompt('entrez le premier nombre: '));
var n2 = parseInt(prompt('deuxieme nombre : '));
var som = (n1 + n2);
console.log("la somme de " +n1  +"et" +n2  + "est" + som );
