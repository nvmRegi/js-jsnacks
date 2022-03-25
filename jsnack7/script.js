/*Creare una funzione che stampa il cubo dei primi N numeri, dove N è un
numero indicato dall’utente.
Una volta creata la funzione chiedere all'utente di inserire N con un
prompt e richiamate la funzione per dare la risposta all'utente. */

let N = parseInt(prompt("Inserire un numero: "));

console.log(numCubo(N));

//-----------FUNZIONE-----------
function numCubo(numUtente){

    let listaN = new Array(numUtente);
    let num;

    for(let i = 0; i < numUtente; i++){
        num = (i + 1)**3;
        listaN[i] = num;
        console.log(listaN[i]);
    }
}