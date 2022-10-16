const prompt = require("prompt-sync")({signit: true});

let d1 = parseInt(prompt("entre le premier nombre: "));
let d2 = parseInt(prompt("le diviseur: "));
let div = d1/d2 ;
console.log(div);