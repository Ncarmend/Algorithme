const prompt = require('prompt-sync')();
var h= parseInt(prompt("entrer l'heure: "));
h==console.log( h * 3600);
var min = parseInt(prompt("entrez les minutes: "));
min==console.log( min * 60);
var sec = parseInt(prompt("seconde: "));
sec= console.log( sec);
/*re1 = (sec * 3600);
res1 = (min * 60);
tps = 0;
while(tps = 0){
    res = (res1 + res2 + sec);
    $resultat= res;
    console.log(res);
}*/
var res =(h + min + sec );
console.log(res);