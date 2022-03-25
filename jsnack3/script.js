/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/ 

let lista = new Array(10);

let somma = 0;

for(let i = 0; i < lista.length; i++){
    lista[i] = parseInt(prompt("Inserire il " + (i + 1) + "° numero: "));

    console.log(lista[i]);

    somma = somma + lista[i];
}

alert("La somma dei numeri che hai inserito è " + somma);


