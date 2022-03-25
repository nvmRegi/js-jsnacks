/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let parola1 = prompt("Inserisci la prima parola: ");

let parola2 = prompt("Inserisci la seconda parola: ");

let lung1 = parola1.length;

let lung2 = parola2.length;

if (lung1 > lung2){
    alert("La parola " + parola2 + " è la più corta.");
    alert("La parola " + parola1 + " è la più lunga.");
} else if(lung1 < lung2){
    alert("La parola " + parola1 + " è la più corta.");
    alert("La parola " + parola2 + " è la più lunga.");
} else if(lung1 == lung2){
    alert("Le due parole hanno la stessa lunghezza.");
} else{
    alert("Errore.");
}