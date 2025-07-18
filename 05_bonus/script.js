/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let oraCorrente = new Date();
let Ore = oraCorrente.getHours() + ':';
let Minuti = oraCorrente.getMinutes();
console.log(Ore + Minuti);
console.log(Number(Ore[0]+Ore[1]));




// Dichiara la funzione qui.
function hello_time(nome) {
    let ore = Number(Ore[0] + Ore[1]); 
    let minuti = Number(Minuti[0] + Minuti[1]);
    if ((ore < 13 && minuti <= 59) | (ore == 13 && minuti == 00)) {
        return 'Buongiorno' + ' ' + nome;  
    } else if ((13 < ore < 17 && minuti <= 59) | (ore == 17 && minuti == 00)) {
        return 'Buon pomeriggio' + ' ' + nome;
        
    } else {
        return 'Buonasera'+' '+ nome
    }
    
}


// Invoca la funzione qui e stampa il risultato in console

const saluta = console.log(hello_time(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

//Riscrivo con Arrow function 
const saluta_user = nome => {
    let ore = Number(Ore[0] + Ore[1]); 
    let minuti = Number(Minuti[0] + Minuti[1]);
    if ((ore < 13 && minuti <= 59) | (ore == 13 && minuti == 00)) {
        return 'Buongiorno' + ' ' + nome;  
    } else if ((13 < ore < 17 && minuti <= 59) | (ore == 17 && minuti == 00)) {
        return 'Buon pomeriggio' + ' ' + nome;
        
    } else {
        return 'Buonasera'+' '+ nome
    }
    
}

console.log(saluta_user(name));
