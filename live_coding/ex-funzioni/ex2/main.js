// live coding
// pari o dispari




var scommessa = prompt("scegli tra pari o dispari" );

var numero = parseInt(prompt("scgeli un numero tra 1 e 5"));

var cpnum = Math.floor(Math.random()*5 ) +1;

console.log(scommessa,numero,cpnum);

var risultato = numero + cpnum;

//se risultato è dispari
if(risultato % 2) {
  if(scommessa === "pari"){
    console.log("il numero uscito è: " + risultato + " ,hai perso");
  } else {
    console.log("il numero uscito è: " + risultato + " ,hai vinto");
  }

// se invece risultato è pari
} else {
  if(scommessa === "pari"){
    console.log("il numero uscito è: " + risultato + " ,hai vinto");
  } else {
    console.log("il numero uscito è: " + risultato + " ,hai perso");
  }
}


/*

// con function

// prima si può giocare più volte (senza parametri)
// poi si può esternalizzare parametri (per es. introducendo player2)

// esternalizzo imput
var scommessa = prompt("scegli tra pari o dispari" );

var numero = parseInt(prompt("scgeli un numero tra 1 e 5"));

// var cpnum = Math.floor(Math.random()*5 ) +1;

var numutente2 = parseInt(prompt("scgeli un numero tra 1 e 5"));



function giocopod(pod,numutente,numpc){


  console.log(pod,numutente,numpc);

  var risultato = numutente + numpc;


  if(risultato % 2) {
    if(pod === "pari"){
      console.log("il numero uscito è: " + risultato + " ,hai perso");
    } else {
      console.log("il numero uscito è: " + risultato + " ,hai vinto");
    }

  } else {
    if(pod === "pari"){
      console.log("il numero uscito è: " + risultato + " ,hai vinto");
    } else {
      console.log("il numero uscito è: " + risultato + " ,hai perso");
    }
  }

}

giocopod(scommessa,numero,numutente2);

*/