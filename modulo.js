const prompt = require('prompt-sync')();
/*const { syncBuiltinESMExports } = require("module");

var readline = require('readline');
  
var rl = readline.createInterface(
    process.stdin, process.stdout);

const prompte = require("prompt-sync")({signit: true});*/
let modl1 = parseInt(prompte("entrez un nombre :  "));
let modl2 = parseInt(prompt("deuxieme : "));
modulo = (modl1 % modl2);
    console.log( modl1 + "modulo" + modl2 + "et" + modulo );
