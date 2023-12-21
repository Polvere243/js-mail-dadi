// dichiaro due costanti: una per il valore minimo e una per il valore massimo dei dadi
const max = 6;
const min = 1;
// faccio generare due numeri casuali da 1 a 6
let userDie = Math.floor(Math.random() * (max + 1 - min)) + min;
let computerDie = Math.floor(Math.random() * (max + 1 - min)) + min;

console.log(userDie, computerDie);
// collaziono i due risultati

// preparo un messaggio per comunicare il risultato

let youWin = "<p>"; 
let youLose = "<p>";

if(userDie > computerDie){
    youWin += "Daje, hai vinto, seeeeeeeeeee!";
} else {
    youLose += "Fra', riprova, ché hai perso:*(";
}

youWin += "</p>";

youLose += "</p>";

element.innerHTML = youWin;
element.innerHTML = youLose;