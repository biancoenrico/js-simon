// Descrizione: Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
// da indovinare sono stati individuati.


// genero 5 numeri casuali
var arrayNumeri = []

while(arrayNumeri.length < 5) {

    var numeroGenerato = generaNumeri(50);

    if (arrayNumeri.includes(numeroGenerato) == false) {

        arrayNumeri.push(numeroGenerato);
    }
}
// inserisco i numeri nell'html
var numero

for(var i = 0; i < 5; i++){
    numero = document.getElementsByClassName('numero')[i].innerHTML = ('<span class ="content">' + arrayNumeri[i] + '</span>')
}

// avvio timer di 30 secondi

// chiedo all'utente di inserire i numeri

// do l'esito del gioco

// funzioni
// 
function generaNumeri(max) {
    return Math.floor(Math.random() * max) + 1;
}