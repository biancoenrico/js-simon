// Descrizione: Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
// da indovinare sono stati individuati.


// genero 5 numeri casuali
var arrayNumeri = [];

while(arrayNumeri.length < 5) {

    var numeroGenerato = generaNumeri(50);

    if (arrayNumeri.includes(numeroGenerato) == false) {

        arrayNumeri.push(numeroGenerato);
    }
}
// inserisco i numeri nell'html
var numero;

for(var i = 0; i < 5; i++){
    numero = document.getElementsByClassName('numero')[i].innerHTML += ('<span class ="content">' + arrayNumeri[i] + '</span>');
}

// avvio timer di 30 secondi
var seconds = 5;


var timer = setInterval(function(){

    document.getElementById('countdown').innerHTML = seconds;

    if(seconds == 0){

        
        console.log('blocco tutto');
        
        clearInterval(timer);

        var numero = document.getElementsByClassName('numero');
        var content = document.getElementsByClassName('content');
        var input = document.getElementsByClassName('void-input');        

        var j = 0;

        for(j = 0; j < 5; j++){

            numero[0].className = 'void';

            input[0].className = "input";
        }
                
    }else{
        seconds--
    }
    
}, 1000);

var arrayNumeriUtente = []
var bottone = document.getElementById('btn');
var messaggio = 'hai vinto';

bottone.addEventListener('click',function (){

    for(i = 0; i < 5; i++){

        var elements = document.getElementsByTagName("input")[i].value;
        arrayNumeriUtente.push(parseInt(elements));

        if(arrayNumeriUtente[i]!==arrayNumeri[i]){
            messaggio = 'hai perso'
        }
    }
    alert(messaggio)
 
})





// funzioni
// 
function generaNumeri(max) {
    return parseInt(Math.floor(Math.random() * max) + 1); 
}