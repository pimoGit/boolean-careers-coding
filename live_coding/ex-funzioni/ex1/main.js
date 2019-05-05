// live coding
// palindrome

 var parola = prompt("inserisci la parola da verificare");

 var parola_rev = parola.split('').reverse().join('');

 if (parola === parola_rev) {
   console.log("parola palindroma");
 } else {
   console.log("parola non palindroma");
 }


// function checkpali(){
//   var parola = prompt("inserisci la parola da verificare");
//   var parola_rev = parola.split('').reverse().join('');
//   if (parola === parola_rev) {
//     console.log("parola palindroma");
//   } else {
//     console.log("parola non palindroma");
//   }
// }


// checkpali();

//posso usare più volte senza dover riscrivere il codice
