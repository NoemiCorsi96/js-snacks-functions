/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function restituisco_iniziali(array) {
    const iniziali = [];
    for (let i = 0; i < array.length; i++) {
        iniziali.push(array[i][0]); 
    }
    return iniziali;
}
//il doppio indice mi fa ciclare sia sulla posizione delle stringhe che sulla posizione delle lettere nella stringa
//In questo caso ciclo sulle stringhe, mentre tengo fermo [0] per indicare la prima lettera di ogni stringa
// Invoca la funzione qui e stampa il risultato in console

const array_iniziali = restituisco_iniziali(names);
console.log(array_iniziali);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]