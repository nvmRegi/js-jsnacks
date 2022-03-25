/*Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso. 
A questo punto fate giocare l'utente, fintanto che non vince la partita
contro il PC :)*/

let giocare = true;

while(giocare){
    let numPC = Math.floor(Math.random() * 10);
    console.log(numPC);

    let numUtente = parseInt(prompt("Inserisci un numero: "));
    console.log(numUtente);

    if(numUtente == numPC){
        alert("HAI VINTO!");
        giocare = false;
    } else{
        alert("HAI PERSO!");
        
        let risposta = prompt("Giocare ancora?(s/n)");
        if(risposta == "n"){
            break;
        }
    }
}

alert("Arrivederci!");
