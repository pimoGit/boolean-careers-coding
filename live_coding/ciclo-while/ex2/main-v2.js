var lista = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];


//VARIANT EX
var trovato = false;

var newThing = prompt("cosa vuoi aggiungere alla lista?")

var j = 0;
var arrayitem;
while( j < lista.length && !trovato){
    arrayitem = lista[j];

    if(arrayitem === newThing){
        trovato = true;
    }

    j++;

}

if (trovato){
    console.log("articolo già presente in lista");  
} else {
    lista.push(newThing);
    console.log("articolo inserito nella lista");
    
}
//VARIANT EX end


for (var i = 0; i < lista.length; i++)
{
    var elemento_lista = lista[i];

    //ora prendo il contenuto dell'ul perchè voglio aggiungere e non sostituire
    var contenuto_precedente = document.getElementById('lista').innerHTML;

    document.getElementById('lista').innerHTML = contenuto_precedente + '<li>' + elemento_lista + '</li>';
    
}

//traducibile anche con il while