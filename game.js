const prompt = require('prompt-sync')();

const game= () =>{
    const random = Math.floor(Math.random() * 100 + 1)
    console.log(random);
}
let nbr =prompt("Entrez un nombre compris entre 1 et 100 : ");
console.log(nbr);
while(nbr !== random ){
    if(nbr < random ){
        console.log("nferieur")
    }
    else{
        console.log("superieur au trie")
    }
    nbr = ("Entrez le nombre");
    console.log("Le nobre" + nbr);

}
console.log("Gagner");
console.log("voice" + random );
game();