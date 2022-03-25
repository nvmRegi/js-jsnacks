/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let num1 = parseInt(prompt("Inserisci il primo numero: "));

let num2 = parseInt(prompt("Inserisci il secondo numero: "));

console.log(num1);
console.log(num2);

if(num1 > num2){
    alert("Il numero maggiore è " + num1);
} else if(num1 < num2){
    alert("Il numero maggiore è " + num2);
} else if(num1 == num2){
    alert("I due numeri sono uguali.");
} else{
    alert("Errore.");
}