/*Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola
la somma di tutte le cifre che compongono il numero e ritorni il risultato.
Usa questa funzione per stampare poi a video il risultato ottenuto.
 */

let numUtente;

do{
    numUtente = parseInt(prompt("Inserisci un numero di 4 cifre: "));
} while(numUtente < 999 || numUtente > 10000);

let somma = sommaCifre(numUtente);
alert("La somma delle cifre del numero che hai inserito è " + somma);




//--------FUNZIONE--------
function sommaCifre(input){

    //migliaia
    let migliaia = parseInt(input / 1000);
    console.log(migliaia)

    //centinaia
    let centinaia = parseInt((input - (migliaia * 1000)) / 100);
    console.log(centinaia);

    //decine
    let decine = parseInt(((input - (migliaia * 1000) - (centinaia * 100)) / 10));
    console.log(decine);

    //unità

    let unita = parseInt(((input - (migliaia * 1000) -  (centinaia * 100) - (decine * 10))) / 1);
    console.log(unita);

    let risultato = migliaia + centinaia + decine + unita;

    return risultato;
}