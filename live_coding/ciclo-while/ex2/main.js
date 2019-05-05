// creo l'array della lista della spesa
var listaSpesa = ["pane","latte","pesce","verdura","acqua"];

// dare modo all'utente di inserire l'elemento da verificare

var elemento = prompt("ti sei ricordato di inserire questo?");

// variabile per chekkare se elemenyo è stato trovato
var trovato = false;

// cilclare nell'array per verificare che l'elemento esista

var i = 0;

function tolow (frase) {
    var nufrase = frase.toLowerCase();
    return nufrase
}

console.log(tolow ("HelooowwwwW!"));


while (i<listaSpesa.length && !trovato){
    //console.log(listaSpesa[i]);
    if(tolow (listaSpesa[i]) === tolow (elemento)){
        //console.log("elemento ricordato!");
        trovato = true;
    }
    console.log(i);
    i++;
}

// stampare di conseguenza un messaggio

if(trovato){
    console.log("elemento ricordato");
} else {
    console.log("elemento dimenticato");
    var richiesta = prompt("vuoi inserire questo elemento?");
    if(richiesta == "si"){
        listaSpesa.push(elemento);
    }
    
    
    
}

console.log(listaSpesa);


/*
aggiungere funzione che fa:
var str = "Hello World!";
var res = str.toLowerCase();
dovrà riasseganre valore nuovo a var perchè stringa originale non è variata (essendo valore primitivo)
*/