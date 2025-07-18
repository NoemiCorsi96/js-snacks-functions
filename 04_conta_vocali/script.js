/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numeroVocali(stringa) {
    //let stringa = '';
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    let contatore = 0;
    for (let i = 0; i < stringa.length; i++){
         for (let index = 0; index < vocali.length; index ++){
            
            if (stringa[i] == vocali[index]) {
                contatore = contatore + 1;
            } 
        }
    }
    return contatore
}

// Invoca la funzione qui e stampa il risultato in console
const contaVocali= console.log(numeroVocali(word));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)