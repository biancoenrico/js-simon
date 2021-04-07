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
var seconds = 10;


var timer = setInterval(function(){
    document.getElementById('countdown').innerHTML = seconds;

    

    if(seconds == 0){

        for(var j = 0; j < 5; j++){
            document.getElementsByClassName('void-input')[j].className = "input";
        }
        for( j = 0; j < 5; j++){
            document.getElementsByClassName('content')[j].className = 'void';
        }
        for( j = 0; j < 5; j++){
            document.getElementsByClassName('numero')[j].className = 'void';
        }

    }else{
        seconds--
    }
    
}, 1000);



console.log(arrayNumeri);
// do l'esito del gioco

// funzioni
// 
function generaNumeri(max) {
    return Math.floor(Math.random() * max) + 1;
}