(function() {
    var random_num = Math.floor(Math.random()*10) + 1;
    var input_num = prompt("Guess the number between 1 and 10");
    if (input_num < 1 || input_num > 10) {
        alert('the input number is not between 1 and 10');

    } else if (random_num == input_num) {
        alert('Good Work');
    } else {
        alert('Not matched, the random number is: ' + random_num);
    }

})();


const guessNumber = (max) => {

    // generating random number 
    const random = Math.floor(Math.random() * max) + 1
    //console.log(random);
    // take the input from yhe user
    let userNumber = parseInt(prompt('Guess a number from 1 to 100'));
    // take the input until the the guess is correct
    while(userNumber !== random) {
        if (userNumber < random) {
            alert('Your number is to low')
        } else if(userNumber > random) {
            alert('Your number is to high')
        } 
        userNumber = parseInt(prompt('Guess a number from 1 to 100'));
    };
   
    // check if answer correct
    if(userNumber === random) {
        alert('You guess the correct number');
    }
};
guessNumber(100);

n = Number(prompt("Entrez un nombre :"));

let fact = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log(fact(n));


const newGame = () => {
    let random = Math.floor(Math.random() * 100) + 1;
    let number = Number(prompt("Entrez un chiffre entre 1 et 100 :"));
    if (number >= 0 && number < 100) {
      if (number !== random) {
        alert(number + " Vs " + random + " = tu perds");
        if (number < random) {
          alert("T'es en dessous");
        } 
        else {
          alert("T'es ou dessus");
        }
        let encore = prompt("Pour rejouer tape E");
        if (encore === "E") {
          newGame();
        } 
        else {
          alert("Bey Bey");
        }
      } 
      else {
        alert("Tu gagnes !!!");
      }
    } 
    else {
      alert("J'ai dit un chiffre entre 1 et 100 !");
      newGame();
    }
  };
  newGame();

  function factorielle(n) {
    var facto = 1;
    while (n > 0) {
      facto *= n;
      --n;
    }
    return facto;
  }
  function exemple03() {
    var n = new Number(
      document.getElementById("n_facto").value
    );
    var facto = factorielle(n);
    document.getElementById("resultat_ex03").value = facto;
  }


  function factorielle2(n) {
    return n == 0? 1 : n * factorielle2(n-1);
  }
  function exemple04() {
    var n = new Number(
      document.getElementById("n_facto2").value
    );
    var facto = factorielle2(n);
    document.getElementById("resultat_ex04").value = facto;
  }

  function diviser(num, denom) {
    if (denom == 0) {
      throw "oups!";
    }
    return num / denom;
  }
  function exemple02() {
    var numerateur = new Number(
      document.getElementById("numerateur").value
    );
    var denominateur = new Number(
      document.getElementById("denominateur").value
    );
    var quotient;
    var resultat;
    try {
      quotient = diviser(numerateur, denominateur);
      resultat = quotient;
    } catch (e) {
      resultat = e;
    } finally {
      document.getElementById("resultat_ex02").value = resultat;
    }
  }