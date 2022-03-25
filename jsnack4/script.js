/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

let invitati = ["marco", "giuseppe", "simona", "emma"];

let utente = prompt("Inserisci il tuo nome: ");
console.log(utente);


// JSNACK CON DOWHILE
/*
let i = 0;
let bool = true;

do{
    if(utente == invitati[i]){
        alert("Puoi partecipare alla festa.");
         
        bool = false;
    } else{
        i++;
    }
} while(bool && i < invitati.length);

if(bool){
    alert("Non sei invitato alla festa.");
}*/

// JSNACK CON FOR
let bool = true;

for(let i = 0; i < invitati.length && bool; i++){
    console.log(invitati[i]);

    if(utente == invitati[i]){
        alert("Puoi partecipare alla festa.");
        bool = false;
    }
}

if(bool){
    alert("Non sei invitato alla festa.");
}
