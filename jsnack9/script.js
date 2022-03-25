/*Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei prompt. */

let numUtente = new Array(10);

for(let i = 0; i < numUtente.length; i++){
    numUtente[i] = parseInt(prompt("Inserire il " + (i + 1) + "° numero: "));
    console.log(numUtente[i]);
}

let media = mediaAritmetica(numUtente);
console.log("La media dei numeri inseriti è " + media);
alert("La media dei numeri inseriti è " + media);

//--------FUNZIONE-------
function mediaAritmetica(arrayDa10){
    let somma = sommaNumeri(arrayDa10);
    let mean = somma / arrayDa10.length;
    return mean;
}

function sommaNumeri(arrayDa10){
    let somma = 0;
    for(let i = 0; i < arrayDa10.length; i++){
        somma = somma + arrayDa10[i];
        console.log(somma);
    }
    console.log(somma);
    return somma;
}