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

    var numero = document.getElementsByClassName('numero')
    var content = document.getElementsByClassName('content')
    var input = document.getElementsByClassName('void-input')

    if(seconds == 0){
        var j = 0
        // while(j < 5){
        //     console.log(j);
        //     numero[j].className = 'void';
        //     console.log(j);
        //     content[j].className = 'void';
        //     input[j].className = "input";
        //     j++
        //     if(!j == 4){
        //         clearInterval(timer);
        //     }
        // }

    }else{
        seconds--
    }
    
}, 1000);
console.log('CIAO');


console.log(arrayNumeri);
// do l'esito del gioco

// funzioni
// 
function generaNumeri(max) {
    return Math.floor(Math.random() * max) + 1;
}