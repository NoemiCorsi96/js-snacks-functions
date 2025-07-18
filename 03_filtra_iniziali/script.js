/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = 'A';

// Dichiara la funzione qui.
function array_lettera(array, lettera_iniziale) {
    const Array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == lettera_iniziale) {
            Array.push(array[i]);
        }
    }
    return Array;
    
}


// Invoca la funzione qui e stampa il risultato in console
const array_iniziale_lettera = array_lettera(names, lettera);
console.log(array_iniziale_lettera);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]