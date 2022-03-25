/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
 */

let lista = [];

let num;
for(let chiedo = 0; chiedo < 7; chiedo++){
    num = parseInt(prompt("Inserisci un numero: "));
    console.log(num);
    if(num%2 == 1){
        lista.push(num);
        console.log("Hai inserito un nuovo numero: " + num);
    }
}

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}