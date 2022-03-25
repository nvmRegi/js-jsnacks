/*Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto. */


let lista = [10, 5, 6, 9, 15, 30, 8, 44, 57, 3];

let calcolo = sommaNumeri(lista);
alert(calcolo);

function sommaNumeri(sommaArray){
    let somma = 0;
    for(let i = 0; i < sommaArray.length; i++){
        somma = somma + sommaArray[i];
        console.log(somma);
    }
    console.log(somma);
    return somma;
}

