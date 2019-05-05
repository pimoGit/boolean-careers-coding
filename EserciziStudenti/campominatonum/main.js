// funzione  numeri casuali con range variabile 1-...

function getRandomNumber(max){
  return Math.floor((Math.random()*max)+1);
}
//console.log(getRandomNumber(100));

function campominatonum(){
  //  lista 16 numeri casuali con range da 1 a 100
  var lista=[];
  // tot numeri inseriti in lista per uscire dal ciclo
  var numins = 0;
  // variabile di appoggio valore restituito da funzione
  var numero;


  while(numins < 16){
    numero = getRandomNumber(100);
    if(lista.includes(numero) == false){
      // se numero non è duplicato inserisco e aggiorno variabile di conteggio
      lista.push(numero);
      numins ++; // variabile di conteggio rimpiazzabile da array.length
    }
  }
  console.log(lista);



  var utente_num; //num utente
  var trovato = false;
  var score = 0;

  // TODO: aggiungere array di numeri già inseriti dall'utente per fare check, 
  // non può ri-inserire lo stesso 2 volte

  //primo ciclo per ciclare finchè gioco è attivo
  var i=0;
  while(i < 84 && !trovato){

    utente_num = parseInt(prompt('inserisci un numero da 1 a 100')); 

    //ciclo annidato per ciclare su lista e nel caso valorizzare trovato
    // per scopo didattico (sostituibile con array.includes nell'if)
    var j=0;
    while(j<lista.length && !trovato ) {
      if(utente_num === lista[j]){
        trovato = true;
      }
      j++
    }

    if(!trovato){
      score++;
      console.log("mina schivata - numero passi "+ score)
    } else {
      console.log("boom! hai messo un piede su una mina ma hai totalizzato " + score + " passi");   
    }
    i++;
  }
  
}

campominatonum();

